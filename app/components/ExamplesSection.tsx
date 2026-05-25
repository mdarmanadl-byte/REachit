'use client';

const PlayIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>;

export default function Examples() {
  return (
    <>
      <section id="example" className="section-container" style={{background: '#0B1324'}}>
        <div className="max-w-7xl">
          <div className="examples-header">
            <h2 className="section-title">Real Stories. Real People.<br/>Real Reach.</h2>
            <p className="section-subtitle">Some of the incidents amplified through PulseMedia network.</p>
          </div>

          <div className="filter-tabs">
            <div className="filter-tab active">All</div>
            <div className="filter-tab">Corruption</div>
            <div className="filter-tab">Accidents</div>
            <div className="filter-tab">Harassment</div>
            <div className="filter-tab">Education</div>
            <div className="filter-tab">Others</div>
          </div>

          <div className="examples-grid">
            {[
              { t: 'Hospital negligence caught on camera', r: '2.6M Reach', time: '3 days ago', img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=400&q=80' },
              { t: 'Illegal construction exposed', r: '1.9M Reach', time: '5 days ago', img: 'https://courtkutchehry-s3.s3.ap-south-1.amazonaws.com/blogs/SC-UNAUTHORIZED-CONSTRUCTIONS.jpeg', badge: 'TRENDING', bclass: 'badge-trending' },
              { t: 'Flood situation ground report', r: '1.7M Reach', time: '1 day ago', img: 'https://cf-images.assettype.com/downtoearth%2F2025-09-07%2Fl1ae8xra%2FMandeep-1.jpg?w=1024&auto=format%2Ccompress&fit=max', badge: 'LIVE', bclass: 'badge-live' },
              { t: 'Teacher misconduct video goes viral', r: '980K Reach', time: '4 days ago', img: 'https://etimg.etb2bimg.com/photo/114124413.cms', badge: 'VERIFIED', bclass: 'badge-verified' },
              { t: 'Bribe demand audio leak', r: '1.4M Reach', time: '6 days ago', img: 'https://cf-images.assettype.com/saamtv%2F2026-05-20%2Fpiqvrfrr%2FGRAM-SEVAK-CAUGHT-TAKING-%E2%82%B915000-BRIBE-IN-PUNE-ACB-TRAP?w=1024&auto=format%2Ccompress&fit=max', badge: 'VERIFIED', bclass: 'badge-verified' },
              { t: 'Garbage crisis in locality', r: '870K Reach', time: '6 days ago', img: 'https://static.toiimg.com/thumb/msid-112874609,imgsize-2400915,width-400,height-225,resizemode-72/112874609.jpg', badge: 'TRENDING', bclass: 'badge-trending' }
            ].map((ex, i) => (
              <div className="ex-card" key={i}>
                <div className="ex-img-box">
                  <img src={ex.img} alt={ex.t} />
                  <div className="ex-play"><div><PlayIcon/></div></div>
                  {ex.badge && <div className={`ex-badge ${ex.bclass}`}>● {ex.badge}</div>}
                </div>
                <div className="ex-info">
                  <h4>{ex.t}</h4>
                  <div className="ex-meta"><span className="text-green">{ex.r}</span> <span>• {ex.time}</span></div>
                </div>
              </div>
            ))}
          </div>

          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <button className="btn-outline">View More Incidents &rarr;</button>
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

        .examples-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .filter-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 3rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 1rem;
        }

        .filter-tab {
          padding: 0.4rem 1rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #94a3b8;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s;
        }

        .filter-tab.active {
          background: #0ea5e9;
          color: #fff;
        }

        .filter-tab:hover:not(.active) {
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
        }

        .examples-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          .examples-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .examples-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .ex-card {
          background: #0b1324;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.3s;
        }

        .ex-card:hover {
          transform: translateY(-4px);
        }

        .ex-img-box {
          position: relative;
          width: 100%;
          height: 180px;
          background: #1e293b;
        }

        .ex-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.8;
        }

        .ex-play {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ex-play div {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ex-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .badge-verified {
          background: rgba(14, 165, 233, 0.9);
          color: #fff;
        }

        .badge-trending {
          background: rgba(139, 92, 246, 0.9);
          color: #fff;
        }

        .badge-live {
          background: rgba(239, 68, 68, 0.9);
          color: #fff;
        }

        .ex-info {
          padding: 1.5rem;
        }

        .ex-info h4 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
          line-height: 1.3;
        }

        .ex-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.85rem;
          color: #94a3b8;
        }

        .text-green {
          color: #22c55e;
        }

        .btn-outline {
          background: transparent;
          color: #fff;
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </>
  );
}
