export async function subscribeEmail(email: string, source: string, readProgress?: number) {
  const response = await fetch('/api/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      source,
      path: window.location.pathname,
      readProgress: typeof readProgress === 'number' ? Number(readProgress.toFixed(2)) : null,
    }),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload?.error || 'Subscription failed.');
  }

  return payload;
}
