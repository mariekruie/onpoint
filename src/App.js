import React, {useState, useEffect, useRef} from 'react';
import {TouchEventContextProvider} from './context';
import {One, Two, Three} from './sections';
import house from './assets/global/house.png';
import project from './assets/global/project.png';
import logo from './assets/global/logo.png';

import './app.scss';

export default function App() {
  const [marginOne, setMarginOne] = useState('');
  const [marginTwo, setMarginTwo] = useState('');
  const [isTwoIntersecting, setIsTwoIntersecting] = useState(false);
  const two = useRef();


useEffect( () => {
  const observer = new IntersectionObserver( entries => {
    setIsTwoIntersecting(entries[0].isIntersecting)
  }, {threshold:1});
  observer.observe(two.current);
}, [])

  function handleClick () {
    setMarginTwo('');
    setMarginOne('');
  };

  return (
    <TouchEventContextProvider>
      <div className='app'>
        <div className='app__header'>
          <img src={house} onClick={handleClick} alt='icon_house'/>
          <img src={project} alt='project'/>
        </div>

        <div className='container'>
            <One setMarginOne={setMarginOne} margin={marginOne}/>
            <Two ref={two} setMarginOne={setMarginOne} setMarginTwo={setMarginTwo} margin={marginTwo} showAnimation={isTwoIntersecting}/>
            <Three setMarginTwo={setMarginTwo}/>
        </div>

        <img className='app__logo' src={logo} alt='logo'/>
      </div>
    </TouchEventContextProvider>
  );
};
