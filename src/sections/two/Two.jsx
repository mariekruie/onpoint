import React, {useState, useRef, useMemo, useEffect} from 'react';

import sperm1 from '../../assets/two/sperm_1.png';
import sperm2 from '../../assets/two/sperm_2.png';
import sperm3 from '../../assets/two/sperm_3.png';
import sperm4 from '../../assets/two/sperm_4.png';
import sperm5 from '../../assets/two/sperm_5.png';

import './two.scss';

export default function Two({margin, setMarginOne, setMarginTwo}) {
  const two = useRef(null);
  const [isVisible, setIsVisible] = useState(false)
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const cbObserver = entires => {
    const [entry] = entires;
    setIsVisible(entry.isIntersecting);
  };
  
  const options = useMemo(()=>{
    return  { root: null,
              rootMargin: '0px',
              treshold: 0.7 }
  }, []);

  useEffect(()=>{
    const observer = new IntersectionObserver(cbObserver, options);
    const currentTarget = two.current;
    if(currentTarget) observer.observe(currentTarget);

    return () => {
      if(currentTarget) observer.unobserve(currentTarget);
    };
  }, [two, options]);
  
  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  };

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  function handleTouchEnd() {
      if (touchStart - touchEnd > 150) {
        setMarginTwo('margin-left');
      };
      if (touchStart - touchEnd < -150) {
        setMarginOne('');
      };
  };


  return (
    <div className={`two ${margin}`} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} ref={two}>
      <div className='wrapper'>
        <div className='two__title'>текст <br/> сообщения</div>

        <div className='two__text'>
          <p>
            <b>Lorem, ipsum dolor sit amet,</b> consectetur adipisicing elit. Dolor assumenda nobis vel hic earum debitis reiciendis temporibus quod, sunt facilis perferendis, maiores, corporis nostrum nulla mollitia eius atque neque minima at cumque quae repellat non? Suscipit dolor, soluta odit doloremque tenetur cupiditate ducimus modi recusandae corporis officia fugit alias, praesentium deleniti corrupti dolore animi, officiis expedita porro ratione velit qui. Voluptates aperiam itaque placeat totam, ullam sunt numquam error assumenda maxime, autem quia eaque dignissimos veniam? Vitae consectetur fugit quisquam tempora placeat? Esse quae molestiae tenetur corporis cum quod, provident sequi iste placeat consequatur saepe amet dolorum? Recusandae, vel eius. Lorem ipsum dolor sit amet ucimus modi recusandae corporis officia fugit alias, praesentium deleniti corrupti dolore animi, officiis expedita porro ratione velit qui. V Esse quae molestiae tenetur corporis cum quod, provident sequi iste placeat consequatur saepe amet dolorum? Recusandae, vel eius. Lorem ipsum dolor sit amet ucimus modi recusandae corporis officia fugit alias, praesentium deleniti corrupti dolore animi, officiis expedita porro ratione velit qui. Voluptates aperiam itaque placeat totam, ullam sunt numquam error assumenda maxime, autem quia eaque dignissimos veniam? Vita   e conseceius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quo sit voluptatum ab dicta culpa perferendis, maiores, corporis nostrum nulla mollitia eius atque neque minima at cumque quae repellat non? Suscipit dolor, soluta odit doloremque tenetur cupiditate ducimus dignissimos veniam? Vita   e conseceius. Lorem ipsum dolor sit amet consectetur atenetur cupiditate ducimus modi recusandae corporis officia fugit alias, praesentium deleniti corrupti dolore animi, officiis expedita porro ratione velit qui. Voluptates aperiam itaque placeat totam, ullam sunt numquam error assumenda maxime, autem quia eaque dignissimos veniam? Vitae consectetur fugit quisquam tempora placeat? Esse quae molestiae tenetur corporis cum quod, provident sequi iste placeat consequatur saepe amet dolorum? Recusandae, vel eius. Lorem ipsum dolor sit amet ucimus modi recusandae corporis officia fugit alias, praesentium deleniti corrupti dolore animi, officiis expedita porro ratione velit qui. Voluptates aperiam itaque placeat totam, ullam sunt numquam error assumenda maxime, autem quia eaque dignissimos veniam? Vita   e conseceius. Lorem ipsum dolor  neque minima at cumque quae repellat non? Suscipit dolor, soluta odit doloremque tenetur cupiditate ducimus modi recusandae corporis officia fugit alias, praesentium deleniti corrupti dolore animi, officiis expedita porro ratione velit qui. Voluptates aperiam itaque placeat totam, ullam sunt numquam error assumenda maxime, autem quia eaque dignissimos veniam? Vitae consectetur fugit quisquam tempora placeat? Esse quae molestiae tenetur corporis cum quod, provident sequi iste placeat consequatur saepe amet dolorum? Recusandae, vel eius. Lorem ipsum dolor sit amet ucimus modi recusandae corporis officia fugit alias, praesentium deleniti da maxime, autem quia eaque dignissimos veniam? Vita   e conseceius. Lorem ipsum dolor sit amet conam quo sit voluptatum ab dicta culpa quia magni. Earum, fugit iure.
          </p>
            
        </div>
      </div>
        <img className='two__sperm1' style={ isVisible ? { animation:'sperm1 2s ease-in infinite'} : {}} src={sperm1} alt='sperm_1'/>
        <img className='two__sperm2' src={sperm2} alt='sperm_2'/>
        <img className='two__sperm3' src={sperm3} alt='sperm_3'/>
        <img className='two__sperm4' src={sperm4} alt='sperm_4'/>
        <img className='two__sperm5' src={sperm5} alt='sperm_5'/>
    </div>
  );
};