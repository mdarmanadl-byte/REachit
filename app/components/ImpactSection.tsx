'use client';

export default function Impact() {
  return (
    <>
      <section id="impact" className="section-container" style={{background: '#020611'}}>
        <div className="max-w-7xl">
          <div className="how-header" style={{alignItems: 'center', margin: '0 auto 4rem', textAlign: 'center'}}>
            <h2>Real Impact. Real Change.</h2>
            <p>Every view creates awareness. Every share drives action.</p>
          </div>

          <div className="stats-grid">
            <div className="stat-box"><h3>18.7M+</h3><p>People Reached</p><span>Across Platforms</span></div>
            <div className="stat-box"><h3>4,200+</h3><p>Incidents Amplified</p><span>Till Now</span></div>
            <div className="stat-box"><h3>320+</h3><p>Issues Investigated</p><span>By Authorities</span></div>
            <div className="stat-box"><h3>25+</h3><p>Official Media</p><span>Partners</span></div>
          </div>

          <div className="impact-action">
            <h3>Impact in Action</h3>
            <div className="action-cards">
              <div className="action-card">
                <div className="action-card-top">
                  <div className="ac-icon">🛣️</div>
                  <div><h4>Road repaired after viral video</h4><div className="ac-reach text-cyan">2.3M Reach</div></div>
                </div>
                <div className="action-card-img"><img src="https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTI0NDIyYWEwLTQ5MGItMTFmMS1iM2QwLWI3YzFiZWUzMDg5MS5qcGc=" /></div>
              </div>
              <div className="action-card">
                <div className="action-card-top">
                  <div className="ac-icon">⚖️</div>
                  <div><h4>Corrupt official suspended</h4><div className="ac-reach text-cyan">1.8M Reach</div></div>
                </div>
                <div className="action-card-img"><img src="https://media.andhrajyothy.com/media/2026/20260209/1_7e757979d0_V_jpg--625x351-4g.webp" /></div>
              </div>
              <div className="action-card">
                <div className="action-card-top">
                  <div className="ac-icon">🎓</div>
                  <div><h4>Students got justice after paper leak</h4><div className="ac-reach text-cyan">950K Reach</div></div>
                </div>
                <div className="action-card-img"><img src="https://staticprintenglish.theprint.in/wp-content/uploads/2024/06/NEET-justice-696x392.jpg?compress=true&quality=80&w=800&dpr=1.5" /></div>
              </div>
            </div>
          </div>

          <div className="categories-box">
            <h3>Top Categories We Amplify</h3>
            <div className="cat-icons">
              {[
                { n: 'Corruption', i: '💸' }, { n: 'Harassment', i: '🛡️' }, { n: 'Accidents', i: '⚠️' },
                { n: 'Civic Issues', i: '🏗️' }, { n: 'Education', i: '📚' }, { n: 'Scams', i: '🕵️' },
                { n: 'Police Brutality', i: '🚨' }, { n: 'Environment', i: '🌲' }
              ].map(cat => (
                <div className="cat-icon" key={cat.n}>
                  <div className="cat-circle" style={{fontSize: '1.5rem'}}>{cat.i}</div>
                  <span>{cat.n}</span>
                </div>
              ))}
            </div>
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

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 3rem;
          margin-bottom: 4rem;
          text-align: center;
        }

        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .stat-box h3 {
          font-size: 3.5rem;
          font-weight: 800;
          color: #38bdf8;
          line-height: 1;
          margin-bottom: 0.5rem;
          letter-spacing: -1px;
        }

        .stat-box p {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.2rem;
        }

        .stat-box span {
          font-size: 0.8rem;
          color: #64748b;
        }

        .impact-action {
          background: #020611;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .impact-action > h3 {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 2rem;
        }

        .action-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 1024px) {
          .action-cards {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .action-card {
          background: #0b1324;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .action-card-top {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .ac-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: #38bdf8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .action-card-top h4 {
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .ac-reach {
          font-size: 0.85rem;
          color: #94a3b8;
        }

        .text-cyan {
          color: #38bdf8;
        }

        .action-card-img {
          width: 100%;
          height: 160px;
          border-radius: 8px;
          background: #1e293b;
          overflow: hidden;
        }

        .action-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.8;
        }

        .categories-box {
          background: #020611;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
        }

        .categories-box h3 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 2rem;
        }

        .cat-icons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2.5rem;
        }

        .cat-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
          cursor: pointer;
        }

        .cat-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(56, 189, 248, 0.05);
          border: 1px solid rgba(56, 189, 248, 0.2);
          color: #38bdf8;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .cat-icon:hover .cat-circle {
          background: rgba(56, 189, 248, 0.15);
          transform: scale(1.05);
        }

        .cat-icon span {
          font-size: 0.8rem;
          color: #94a3b8;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}
