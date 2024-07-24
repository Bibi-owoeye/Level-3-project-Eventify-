import { useState } from 'react';
import Edit from '../components/Edit';
import Banner from '../components/Banner';
import Ticketing from '../components/Tickets';
import Review from '../components/Review';
import './Eventedit.css';
import Nav2 from './Nav2';
import Footer from './Footer';

const Eventedit = () => {
  const [changeMode, setChangeMode] = useState('edit');

  return (
    <>

    <div className="eventedit-container">
      <h1 className='mb-24 text-[60px] z-0'>Create an Event</h1>

      <section className="progress-section">
        <div className="progress-bar">
          {['edit', 'banner', 'ticketing', 'review'].map(mode => (
            <div key={mode} className="progress-step" onClick={() => setChangeMode(mode)}>
              <div className={`progress-line ${changeMode === mode ? 'active' : ''}`}></div>
              <div className={`progress-circle ${changeMode === mode ? 'active' : ''}`}></div>
              <div className="progress-label">{mode.charAt(0).toUpperCase() + mode.slice(1)}</div>
            </div>
          ))}
        </div>
      </section>

      {changeMode === 'edit' && <Edit />}
      {changeMode === 'banner' && <Banner />}
      {changeMode === 'ticketing' && <Ticketing />}
      {changeMode === 'review' && <Review />}
    </div>
    <Footer/>
    </>
  );
};

export default Eventedit;
