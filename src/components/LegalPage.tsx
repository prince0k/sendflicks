interface LegalPageProps {
  title: string;
  updatedOn: string;
  sections: Array<{ heading: string; body: string }>;
}

export function LegalPage({ title, updatedOn, sections }: LegalPageProps) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-serif mb-4">{title}</h1>
      <p className="text-zinc-500 text-sm mb-10">Last updated: {updatedOn}</p>
      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-2xl mb-3">{section.heading}</h2>
            <p className="text-zinc-300 leading-8">{section.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}

export const privacySections = [
  {
    heading: 'Information We Collect',
    body:
      'When you subscribe, we collect your email address and basic activity context such as the page where you subscribed and approximate read progress. We do not collect sensitive personal information through this form.',
  },
  {
    heading: 'How We Use Information',
    body:
      'We use your email only to send recipe newsletters, updates, and occasional product announcements. We do not sell your personal information to third parties.',
  },
  {
    heading: 'Data Storage',
    body:
      'Subscriber data is stored in a local server file for operational use. Access is limited to site administrators and used only for newsletter operations and basic analytics.',
  },
  {
    heading: 'Your Rights',
    body:
      'You can unsubscribe at any time from newsletter emails. You may also request deletion of your stored email address by contacting the site owner through the contact page.',
  },
];

export const termsSections = [
  {
    heading: 'Acceptance of Terms',
    body:
      'By using this website, you agree to these Terms and Conditions and all applicable laws. If you do not agree, you should not use the website.',
  },
  {
    heading: 'Content Use',
    body:
      'Recipes and editorial content are provided for personal, non-commercial use. You may not republish or redistribute substantial content without written permission.',
  },
  {
    heading: 'User Submissions',
    body:
      'When you submit your email for subscription, you confirm that the address belongs to you and that you consent to receiving communications from Send Flicks.',
  },
  {
    heading: 'Liability Limitations',
    body:
      'The website is provided as-is without warranties. Send Flicks is not liable for losses arising from use of the website, recipe outcomes, or temporary service interruptions.',
  },
];
