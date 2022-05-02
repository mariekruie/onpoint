import React, {useState} from 'react';

import Popup from '../../components/popup/Popup';
import bottle from '../../assets/three/bottle.png';
import icon1 from '../../assets/three/icon1.png';
import icon2 from '../../assets/three/icon2.png';
import btn from '../../assets/three/btn.png';
import bubble1 from '../../assets/three/bubble_1.png';
import bubble2 from '../../assets/three/bubble_2.png';
import bubble3 from '../../assets/three/bubble_3.png';
import bubble4 from '../../assets/three/bubble_4.png';
import bubble5 from '../../assets/three/bubble_5.png';
import bubble6 from '../../assets/three/bubble_6.png';
import bubble7 from '../../assets/three/bubble_7.png';
import bubble8 from '../../assets/three/bubble_8.png';

import './three.scss';

export default function Three({setMarginTwo}) {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
  
    function handleTouchStart(e) {
      setTouchStart(e.targetTouches[0].clientX);
    };
  
    function handleTouchMove(e) {
      setTouchEnd(e.targetTouches[0].clientX);
    };
  
    function handleTouchEnd() {
      if (touchStart - touchEnd < -150 ) {
        setMarginTwo('');
        setShowPopup(false);
      };
    };

    const handlePopup = () => {
      setShowPopup(true);
    };

  return (
    <div className='three' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <div className='wrapper'>
        <div className='three__heading'>
            <div className='three__heading-msg'>Ключевое сообщение</div>
            <div className='three__heading-title'>BREND<span>XY</span></div>
        </div>

        <div className='three__content'>
            <div className='three__content-card1'>Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies
            <img src={icon2} alt='icon'/>
            </div>
            <div className='three__content-card2'>A arcu <br/> cursus vitae
            <img src={icon1} alt='icon'/>
            </div>
            <img src={btn} alt='btn' onClick={handlePopup}/>
        </div>
      </div>

      <img src={bottle} className='three__bottle' alt='bottle'></img>
      <img className='three__bubble1' src={bubble1} alt='bubble'/>
      <img className='three__bubble2' src={bubble2} alt='bubble'/>
      <img className='three__bubble3' src={bubble3} alt='bubble'/>
      <img className='three__bubble4' src={bubble4} alt='bubble'/>
      <img className='three__bubble5' src={bubble5} alt='bubble'/>
      <img className='three__bubble6' src={bubble6} alt='bubble'/>
      <img className='three__bubble7' src={bubble7} alt='bubble'/>
      <img className='three__bubble8' src={bubble8} alt='bubble'/>

  {showPopup && <Popup setShowPopup={setShowPopup}/>}
    </div>
  );
};