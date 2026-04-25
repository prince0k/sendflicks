import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'data');
const SUBSCRIBERS_FILE = path.join(DATA_DIR, 'subscribers.json');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

const app = express();
const PORT = Number(process.env.PORT || 8787);

app.use(express.json());

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function ensureSubscribersFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(SUBSCRIBERS_FILE);
  } catch {
    await fs.writeFile(SUBSCRIBERS_FILE, '[]\n', 'utf8');
  }
}

async function readSubscribers() {
  await ensureSubscribersFile();
  const raw = await fs.readFile(SUBSCRIBERS_FILE, 'utf8');
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeSubscribers(subscribers) {
  await fs.writeFile(SUBSCRIBERS_FILE, `${JSON.stringify(subscribers, null, 2)}\n`, 'utf8');
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'sendflicks-api' });
});

app.post('/api/subscribe', async (req, res) => {
  try {
    const { email, source = 'unknown', path: pagePath = '/', readProgress = null } = req.body ?? {};

    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return res.status(400).json({ ok: false, error: 'Please provide a valid email address.' });
    }

    const cleanedEmail = email.trim().toLowerCase();
    const subscribers = await readSubscribers();
    const existing = subscribers.find((entry) => entry.email === cleanedEmail);

    if (existing) {
      return res.status(200).json({ ok: true, status: 'already_subscribed' });
    }

    subscribers.push({
      email: cleanedEmail,
      source,
      pagePath,
      readProgress,
      subscribedAt: new Date().toISOString(),
    });
    await writeSubscribers(subscribers);

    return res.status(201).json({ ok: true, status: 'subscribed' });
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ ok: false, error: 'Failed to save subscription.' });
  }
});

app.use(express.static(DIST_DIR));
app.get('*', async (_req, res, next) => {
  try {
    await fs.access(path.join(DIST_DIR, 'index.html'));
    return res.sendFile(path.join(DIST_DIR, 'index.html'));
  } catch {
    return next();
  }
});

app.listen(PORT, () => {
  console.log(`SendFlicks API listening on http://localhost:${PORT}`);
});
