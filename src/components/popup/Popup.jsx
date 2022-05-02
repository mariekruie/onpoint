import React, {useState} from 'react';
import closeBtn from '../../assets/popup/close.png';
import './popup.scss';

export default function Popup({setShowPopup}) {

    const [currentPage, setCurrentPage] = useState(1);

    const handleClose = () => {
        setShowPopup(false);
    };

    const handlePrevClick = () => {
        setCurrentPage(1);
    };
    const handleNextClick = () => {
        setCurrentPage(2);
    };
    
  return (
    <div className='popup'>
        <div className='popup__wrapper'>
            <img src={closeBtn} onClick={handleClose} alt='close-btn'/>
            <div className='popup__heading'>
                <div className='popup__heading-subtitle'>Преимущества</div>
                <div className='popup__heading-title'>BREND<span>XY</span></div>
            </div>
            <div className='popup__content'>
                {currentPage === 1 && 
                    <div className='popup__content-first'>
                        <div>01</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div>02</div>
                        <p>Faucibus pulvinar elementum integer enim</p>
                        <div>03</div>
                        <p>Faucibus pulvinar elementum integer enim</p>
                    </div>
                }
                {currentPage === 2 && 
                    <div className='popup__content-second'>
                        <div>04</div>
                        <p>Mi bibendum neque egestas congue quisque egestas diam</p>
                        <div>05</div>
                        <p>Venenatis lectus magna fringilla urna</p>
                        <div>06</div>
                        <p>Venenatis lectus magna fringilla urna</p>
                    </div>
                }   
                <div className='popup__content-pagination'>
                    <button className='popup__content-btn1' type='button' onClick={handlePrevClick}>   
                    </button>
                    <span className={`${currentPage ===1 ? "active" : ""}`}></span>
                    <span className={`${currentPage ===2 ? "active" : ""}`}></span>
                    <button className='popup__content-btn2' type='button' onClick={handleNextClick}>     
                    </button>
                </div>
                
            </div>
        </div>
    </div>
  );
};
