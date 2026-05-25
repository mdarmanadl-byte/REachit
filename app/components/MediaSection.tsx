'use client';

const MapIcon = () => <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2L2 22l10-4 10 4L12 2z"/></svg>;

export default function ForMedia() {
  return (
    <>
      <section id="media" className="section-container" style={{background: '#020611'}}>
        <div className="max-w-7xl">
          <div className="media-split">
            <div>
              <h2 className="section-title">For Media & Journalists</h2>
              <p className="section-subtitle mb-8">We help newsrooms discover real stories faster. Verified. Organized. Actionable.</p>
              
              <div className="media-features">
                {[
                  { t: 'Early Access to Incidents', d: 'Get real-time access to verified grassroots stories before they go viral.', i: '⚡' },
                  { t: 'AI Summaries & Context', d: 'Save time with AI generated summaries, key points & background.', i: '🧠' },
                  { t: 'Verified & Authentic', d: 'Every incident is verified by our team & AI detection.', i: '🛡️' },
                  { t: 'Media-Ready Content', d: 'High quality videos, captions, and visuals ready for broadcast.', i: '📺' },
                  { t: 'Direct Collaboration', d: 'Work with our team for deeper investigation & follow-up.', i: '🤝' }
                ].map((mf, i) => (
                  <div className="media-feat-box" key={i}>
                    <div className="ac-icon" style={{width: 48, height: 48}}>{mf.i}</div>
                    <div><h4>{mf.t}</h4><p>{mf.d}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dash-preview">
              <div className="dp-header"><span>Media Dashboard Preview</span> <span style={{color: '#94a3b8'}}>⨯</span></div>
              <div className="dp-body">
                <div className="dp-list">
                  <div style={{fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem'}}>Live Incidents</div>
                  {[
  {
    t: 'Chennai flood footage',
    r: '1.2M',
    image: 'https://img.youtube.com/vi/8YamDPCyTeM/maxresdefault.jpg'
  },
  {
    t: 'Neet paper leak',
    r: '2.1M',
    image: 'https://img-cdn.publive.online/fit-in/1280x960/filters:format(webp)/theprobe/media/media_files/2026/05/20/neet-paper-leak-2026-2026-05-20-16-26-17.jpg'
  },
  {
    t: 'Delhi traffic violation',
    r: '890K',
    image: 'https://www.spinny.com/blog/wp-content/uploads/2025/01/Delhi-Traffic-Police-enforcing-traffic-rules.webp'
  },
  {
    t: 'Factory fire in Surat',
    r: '1.5M',
    image: 'https://images.indianexpress.com/2026/03/Firefighting-operations-underway-atthe-site-on-Wednesday.-ExprEss.jpg?w=1600'
  }
].map((dli, i) => (
  <div className="dp-list-item" key={i}>
    <img src={dli.image} alt={dli.t} />

    <div style={{ flex: 1 }}>
      <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>
        {dli.t}
      </div>

      <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>
        2 mins ago
      </div>
    </div>

    <div
      className="text-cyan"
      style={{ fontSize: '0.8rem', fontWeight: 600 }}
    >
      {dli.r}
    </div>
  </div>
))}
                </div>
                <div className="dp-map">
                  <img src="/indiamap.jpg" 
                  style={{
    width: "250px",
    height: "260px",
    objectFit: "cover",
    
    objectPosition: "right"
  }}
                  />

                </div>
              </div>
              <div className="dp-footer">
                <h5>Reach Analytics</h5>
                <h2>7.6M <span className="text-green" style={{fontSize: '1rem'}}>+42%</span></h2>
                <div style={{height: 60, display: 'flex', alignItems: 'flex-end', gap: '4px', marginTop: '1rem'}}>
                  {[40, 60, 45, 80, 50, 90, 70, 100, 85, 95].map((h, i) => (
                     <div key={i} style={{flex: 1, background: '#38bdf8', height: `${h}%`, borderRadius: '4px 4px 0 0', opacity: 0.8}}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="media-partner-strip">
            <h3>Partner with us to amplify truth.</h3>
            <button className="btn-primary" style={{padding: '0.8rem 1.5rem'}}>Become a Media Partner &rarr;</button>
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

        .mb-8 {
          margin-bottom: 2rem;
        }

        .media-split {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 3rem;
        }

        @media (min-width: 1024px) {
          .media-split {
            grid-template-columns: 1fr 1fr;
          }
        }

        .media-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
        }

        .media-feat-box {
          background: #020611;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 1.2rem;
          display: flex;
          gap: 1rem;
          align-items: center;
          transition: background 0.3s;
        }

        .media-feat-box:hover {
          background: rgba(56, 189, 248, 0.05);
          border-color: rgba(56, 189, 248, 0.2);
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

        .media-feat-box h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }

        .media-feat-box p {
          font-size: 0.8rem;
          color: #94a3b8;
        }

        .dash-preview {
          background: #020611;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1.5rem;
        }

        .dp-header {
          display: flex;
          justify-content: space-between;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .dp-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .dp-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .dp-list-item {
          display: flex;
          gap: 0.8rem;
          align-items: center;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.8rem;
          border-radius: 8px;
        }

        .dp-list-item img {
          width: 40px;
          height: 40px;
          border-radius: 6px;
          object-fit: cover;
        }

        .dp-map {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 200px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .dp-map svg {
          width: 80%;
          height: 80%;
          opacity: 0.6;
          fill: #1e293b;
          stroke: #38bdf8;
          stroke-width: 1px;
        }

        .dp-footer {
          background: rgba(255, 255, 255, 0.02);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .dp-footer h5 {
          font-size: 0.85rem;
          color: #94a3b8;
          margin-bottom: 0.5rem;
        }

        .dp-footer h2 {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .text-cyan {
          color: #38bdf8;
        }

        .text-green {
          color: #22c55e;
        }

        .media-partner-strip {
          background: #020611;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .media-partner-strip h3 {
          font-size: 1.2rem;
          font-weight: 700;
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
