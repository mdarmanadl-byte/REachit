'use client';

export default function About() {
  return (
    <>
      <section id="about" className="section-container" style={{background: '#0B1324'}}>
        <div className="max-w-7xl">
          <div className="about-top">
            <div>
              <h2 className="section-title">About ReachIt</h2>
              <p className="section-subtitle">We are building India's largest citizen-powered incident amplification network.</p>
              
              <div className="mission-box">
                <h3>Our Mission</h3>
                <p>To make sure no important incident is ignored because of low reach. To give power back to citizens and create a more accountable society.</p>
              </div>
            </div>
            <div className="about-img">
              <img src="/cinamatic_crowd.jpg" alt="Cinematic Crowd" />
            </div>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="ac-icon">🛡️</div>
              <h4>Truth First</h4>
              <p>We prioritize authenticity and public interest.</p>
            </div>
            <div className="value-card">
              <div className="ac-icon">👥</div>
              <h4>People Powered</h4>
              <p>Built by citizens, for citizens.</p>
            </div>
            <div className="value-card">
              <div className="ac-icon">📈</div>
              <h4>Impact Driven</h4>
              <p>More visibility leads to real world change.</p>
            </div>
          </div>

          <div className="team-box">
            <h3>Our Team</h3>
            <p>A group of builders, journalists, designers and AI enthusiasts working towards a more transparent India.</p>
            <div className="avatars">
              {[1,2,3,4,5,6].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Team Member" />
              ))}
              <div className="add-btn">+</div>
            </div>
          </div>

          <div className="about-footer">
            <h3>Together, we can make every voice count.<br/><span>Every story matters.</span></h3>
            <button className="btn-primary" style={{padding: '0.8rem 1.5rem', background: '#2563eb'}}>Join the Movement &rarr;</button>
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

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
        }

        .section-subtitle {
          color: #94a3b8;
          font-size: 1.1rem;
          max-width: 600px;
        }

        .about-top {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 1024px) {
          .about-top {
            grid-template-columns: 1fr 1fr;
          }
        }

        .mission-box {
          background: #020611;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 2rem;
          margin-top: 2rem;
        }

        .mission-box h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #38bdf8;
          margin-bottom: 1rem;
        }

        .mission-box p {
          font-size: 1rem;
          color: #94a3b8;
          line-height: 1.6;
        }

        .about-img {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          height: 100%;
          min-height: 300px;
        }

        .about-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.8;
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          .values-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .value-card {
          background: #020611;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 2rem;
          text-align: left;
        }

        .ac-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: #38bdf8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .value-card h4 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .value-card p {
          font-size: 0.85rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        .team-box {
          background: #020611;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .team-box h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #38bdf8;
          margin-bottom: 0.5rem;
        }

        .team-box p {
          font-size: 0.9rem;
          color: #94a3b8;
          margin-bottom: 2rem;
          max-width: 500px;
        }

        .avatars {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .avatars img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #0b1324;
        }

        .avatars .add-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px dashed #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: #94a3b8;
          cursor: pointer;
        }

        .about-footer {
          background: #020611;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .about-footer h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #94a3b8;
          line-height: 1.4;
        }

        .about-footer h3 span {
          color: #fff;
        }

        .btn-primary {
          background: #0ea5e9;
          color: #fff;
          border-radius: 6px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .btn-primary:hover {
          background: #0284c7;
        }
      `}</style>
    </>
  );
}
