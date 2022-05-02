import React, {useState} from 'react';

import btn from '../../assets/one/btn.png';
import spermBig from '../../assets/one/sperm_big.png';
import spermSmall from '../../assets/one/sperm_small.png';
import bakti1 from '../../assets/one/bakti_1.png';
import bakti2 from '../../assets/one/bakti_2.png';
import bakti3 from '../../assets/one/bakti_3.png';
import bakti4 from '../../assets/one/bakti_4.png';
import bakti5 from '../../assets/one/bakti_5.png';
import bakti6 from '../../assets/one/bakti_6.png';
import bakti7 from '../../assets/one/bakti_7.png';

import './one.scss';


export default function One({margin, setMarginOne}) {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  };

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  function handleTouchEnd() {
      if (touchStart - touchEnd > 150) {
        setMarginOne('margin-left');
      };
  };

  function handleClick () {
    setMarginOne('margin-left');
  };

  return (
    <div className={`one ${margin}`} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <div className='wrapper'>
        <div className='one__hello'>привет,</div>
        <div className='one__title'>это <span>не</span> коммерческое задание</div>
      </div>
        <img className='one__btn'onClick={handleClick} src={btn} alt='button'/>
        <img className='one__sperm-big' src={spermBig} alt='sperm-big'/>
        <img className='one__sperm-small' src={spermSmall} alt='sperm-small'/>
        <img className='one__bakti1' src={bakti1} alt='bakti1'/>
        <img className='one__bakti2' src={bakti2} alt='bakti2'/>
        <img className='one__bakti3' src={bakti3} alt='bakti3'/>
        <img className='one__bakti4' src={bakti4} alt='bakti4'/>
        <img className='one__bakti5' src={bakti5} alt='bakti5'/>
        <img className='one__bakti6' src={bakti6} alt='bakti6'/>
        <img className='one__bakti7' src={bakti7} alt='bakti7'/>
    </div>
  );
};
