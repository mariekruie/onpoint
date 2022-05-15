import React from 'react';
import { useTouchEventContext } from '../../context';
import sperm1 from '../../assets/two/sperm_1.png';
import sperm2 from '../../assets/two/sperm_2.png';
import sperm3 from '../../assets/two/sperm_3.png';
import sperm4 from '../../assets/two/sperm_4.png';
import sperm5 from '../../assets/two/sperm_5.png';

import './two.scss';

export default function Two({margin, setMarginOne, setMarginTwo}) {

  const {touchStart, touchEnd, handleTouchStart, handleTouchMove} = useTouchEventContext();

  function handleTouchEnd() {
    if ((touchStart - touchEnd) > 150 && touchEnd !== 0) {
      setMarginTwo('margin-left');
    };
    if ((touchStart - touchEnd) < -150 && touchEnd !== 0) {
      setMarginOne('');
    };
  };

  return (
    <div className={`two ${margin}`} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <div className='wrapper'>
        <div className='two__title'>текст <br/> сообщения</div>

        <div className='two__text'>
          <div className='two__text-container'>
            <p>
              <b>Lorem, ipsum dolor sit amet,</b> consectetur adipisicing elit. Dolor assumenda nobis vel hic earum debitis reiciendis temporibus quod, sunt facilis perferendis, maiores, corporis nostrum nulla mollitia eius atque neque minima at cumque quae repellat non? Suscipit dolor, soluta odit doloremque tenetur cupiditate ducimus modi recusandae corporis officia fugit alias, praesentium deleniti corrupti dolore animi, officiis expedita porro ratione velit qui. Voluptates aperiam itaque placeat totam, ullam sunt numquam error assumenda maxime, autem quia eaque dignissimos veniam? Vitae consectetur fugit quisquam tempora placeat? Esse quae molestiae tenetur corporis cum quod, provident sequi iste placeat consequatur saepe amet dolorum? Recusandae, vel eius. Lorem ipsum dolor sit amet ucimus modi recusandae corporis officia fugit alias, praesentium deleniti corrupti dolore animi, officiis expedita porro ratione velit qui. V Esse quae molestiae tenetur corporis cum quod, provident sequi iste placeat consequatur saepe amet dolorum? Recusandae, vel eius. 
            </p>
            <br/>
            <p>
              Lorem ipsum dolor sit amet ucimus modi recusandae corporis officia fugit alias, praesentium deleniti corrupti dolore animi, officiis expedita porro ratione velit qui. Voluptates aperiam itaque placeat totam, ullam sunt numquam error assumenda maxime, autem quia eaque dignissimos veniam? Vita   e conseceius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quo sit voluptatum ab dicta culpa perferendis, maiores, corporis nostrum nulla mollitia eius atque neque minima at cumque quae repellat non? Suscipit dolor, soluta odit doloremque tenetur cupiditate ducimus dignissimos veniam? Vita   e conseceius. Lorem ipsum dolor sit amet consectetur atenetur cupiditate ducimus modi recusandae corporis officia fugit alias, praesentium deleniti corrupti dolore animi, officiis expedita porro ratione velit qui. Voluptates aperiam itaque placeat totam, ullam sunt numquam error assumenda maxime, autem quia eaque dignissimos veniam? Vitae consectetur fugit quisquam tempora placeat? Esse quae molestiae tenetur corporis cum quod, provident sequi iste placeat consequatur saepe amet dolorum? Recusandae, vel eius. Lorem ipsum dolor sit amet ucimus modi recusandae corporis officia fugit alias, praesentium deleniti corrupti dolore animi, officiis expedita porro ratione velit qui. Voluptates aperiam itaque placeat totam, ullam sunt numquam error assumenda maxime, autem quia eaque dignissimos veniam? Vita   e conseceius. Lorem ipsum dolor  neque minima at cumque quae repellat non? Suscipit dolor, soluta odit doloremque tenetur cupiditate ducimus modi recusandae corporis officia fugit alias, praesentium deleniti corrupti dolore animi, officiis expedita porro ratione velit qui. Voluptates aperiam itaque placeat totam, ullam sunt numquam error assumenda maxime, autem quia eaque dignissimos veniam? Vitae consectetur fugit quisquam tempora placeat? Esse quae molestiae tenetur corporis cum quod, provident sequi iste placeat consequatur saepe amet dolorum? Recusandae, vel eius. Lorem ipsum dolor sit amet ucimus modi recusandae corporis officia fugit alias, praesentium deleniti da maxime, autem quia eaque dignissimos veniam? Vita   e conseceius. Lorem ipsum dolor sit amet conam quo sit voluptatum ab dicta culpa quia magni. Earum, fugit iure.
            </p>
          </div>  
        </div>
      </div>
        <img className='two__sperm1' src={sperm1} alt='sperm_1'/>
        <img className='two__sperm2' src={sperm2} alt='sperm_2'/>
        <img className='two__sperm3' src={sperm3} alt='sperm_3'/>
        <img className='two__sperm4' src={sperm4} alt='sperm_4'/>
        <img className='two__sperm5' src={sperm5} alt='sperm_5'/>
    </div>
  );
};