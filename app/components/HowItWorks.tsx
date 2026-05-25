'use client';

const PlayIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>;

export default function HowItWorks() {
  return (
    <>
      <section id="how" className="section-container how-section">
        <div className="max-w-7xl">
          <div className="how-header">
            <h2>How It Works</h2>
            <p>From your phone to millions of people.<br/>Our AI + media network does the heavy lifting.</p>
          </div>

          <div className="how-timeline">
            {[
              { num: 1, title: 'You Upload', desc: 'Download our app from the Play Store and instantly share videos, photos, or information about any incident', ctitle: 'Citizen Upload', cdesc: 'Secure, anonymous & easy', img: '/1img.png', icon: '📤' },
              { num: 2, title: 'AI Processes', desc: 'Our AI analyzes the content, generates summary, tags, category & urgency.', ctitle: 'AI Analysis & Summary', cdesc: 'Extracted key insights & auto caption', img: '2img.png', icon: '🤖' },
              { num: 3, title: 'We Verify', desc: 'Our team verifies authenticity and removes misleading or fake content.', ctitle: 'Human Verification', cdesc: 'Verified by experts & moderators', img: '3img.png', icon: '🛡️' },
              { num: 4, title: 'We Amplify', desc: 'We post on official media pages and social platforms for maximum reach.', ctitle: 'Media Amplification', cdesc: 'Cross platform distribution to millions', img: '6img.png', icon: '🚀' },
              { num: 5, title: 'Public Impact', desc: 'Your incident becomes a public issue. People react, authorities respond.', ctitle: 'Public Attention', cdesc: 'Real views. Real impact. Real change.', img: '4img.png', icon: '📈' }
            ].map((step) => (
              <div className="how-step" key={step.num}>
                <div className="step-left">
                  <div className="step-circle">{step.num}</div>
                </div>
                <div className="step-mid">
                  <div className="step-icon-box" style={{fontSize: '1.8rem'}}>{step.icon}</div>
                  <div>
                    <h3><span className="num-badge">{step.num}</span> {step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
                <div className="step-right">
                  <div className="step-img">
                    <img src={step.img} alt={step.ctitle}/>
                    {step.num === 1 && <div className="dash-play"><div><PlayIcon/></div></div>}
                  </div>
                  <div className="step-card-text">
                    <h4>{step.ctitle}</h4>
                    <p>{step.cdesc}</p>
                  </div>
                  <div className="step-card-arrow">&gt;</div>
                </div>
              </div>
            ))}
          </div>

          <div className="how-banner">
            Your incident deserves more than 200 views.<br/>
            <strong>We make sure it reaches millions.</strong>
          </div>
        </div>
      </section>

      <style jsx>{`
        .section-container {
          padding: 6rem 5%;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
        }

        .max-w-7xl {
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .how-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .how-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
        }

        .how-header p {
          color: #94a3b8;
          font-size: 1.1rem;
          max-width: 600px;
        }

        .how-timeline {
          position: relative;
          margin-top: 4rem;
        }

        .how-timeline::before {
          content: '';
          position: absolute;
          left: 24px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, transparent, rgba(56, 189, 248, 0.3), transparent);
        }

        @media (max-width: 768px) {
          .how-timeline::before {
            display: none;
          }
        }

        .how-step {
          display: grid;
          grid-template-columns: 50px 1fr 1.5fr;
          gap: 2rem;
          margin-bottom: 2rem;
          align-items: stretch;
          position: relative;
        }

        @media (max-width: 768px) {
          .how-step {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .how-step .step-left {
            display: none;
          }
        }

        .step-left {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .step-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #082f49;
          border: 2px solid #38bdf8;
          color: #38bdf8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.9rem;
          z-index: 2;
          margin-top: 1rem;
        }

        .step-mid {
          background: rgba(2, 6, 17, 0.5);
          padding: 1rem 0;
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .step-icon-box {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(56, 189, 248, 0.05);
          border: 1px solid rgba(56, 189, 248, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #38bdf8;
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.1);
          flex-shrink: 0;
        }

        .step-mid h3 {
          font-size: 1.2rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          margin-top: 0.2rem;
        }

        .num-badge {
          background: #082f49;
          color: #38bdf8;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          display: none;
        }

        @media (max-width: 768px) {
          .num-badge {
            display: inline-flex;
          }
        }

        .step-mid p {
          font-size: 0.9rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        .step-right {
          background: #0b1324;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .step-right:hover {
          border-color: rgba(56, 189, 248, 0.4);
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.1);
        }

        .step-img {
          width: 120px;
          height: 75px;
          border-radius: 8px;
          background: #1e293b;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
        }

        .step-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
        }

        .dash-play {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dash-play div {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-card-text {
          flex: 1;
        }

        .step-card-text h4 {
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }

        .step-card-text p {
          font-size: 0.75rem;
          color: #94a3b8;
        }

        .step-card-arrow {
          font-size: 1.5rem;
          color: #38bdf8;
        }

        .how-banner {
          margin-top: 3rem;
          background: #0b1324;
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 0 30px rgba(56, 189, 248, 0.05);
          font-size: 1.1rem;
          color: #94a3b8;
        }
      `}</style>
    </>
  );
}
