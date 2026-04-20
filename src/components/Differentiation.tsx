import '../styles/Differentiation.css';

const Differentiation = () => {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: 'Structured Protection Planning',
      description: 'We focus on building complete financial protection systems, not just selling policies.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      ),
      title: 'Risk-First Approach',
      description: 'Our process starts with understanding your risks before recommending coverage.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
      ),
      title: 'Multiple Insurer Options',
      description: 'We compare policies across providers to find the best coverage for your needs.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Long-Term Advisory Support',
      description: 'Your protection plan evolves with your career, family, and financial goals.'
    }
  ];

  return (
    <section className="differentiation">
      <div className="container">
        <div className="differentiation-header">
          <span className="section-label">DIFFERENTIATION</span>
          <h2 className="section-title">Why Choose Astria Insurance Solutions</h2>
          <p className="section-description">
            We go beyond traditional insurance brokerage to deliver comprehensive protection strategies tailored to your life.
          </p>
        </div>

        <div className="differentiation-grid">
          {features.map((feature, index) => (
            <div className="differentiation-card" key={index}>
              <div className="differentiation-icon">
                {feature.icon}
              </div>
              <h3 className="differentiation-title">{feature.title}</h3>
              <p className="differentiation-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiation;