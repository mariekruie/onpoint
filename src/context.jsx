import { createContext, useState, useContext } from 'react';


// custom hook for using the touch event context

const touchEventContext = createContext();

export function useTouchEventContext(){
    return useContext(touchEventContext);
}

// context Provider

export function TouchEventContextProvider({children}){
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
 
    function handleTouchStart(e) {
        setTouchStart(e.targetTouches[0].clientX);
        setTouchEnd(0);
    };
    
    function handleTouchMove(e) {
        setTouchEnd(e.targetTouches[0].clientX);
    };
  
    return(
        <touchEventContext.Provider value={{touchStart, touchEnd, handleTouchStart, handleTouchMove}}>
            {children}
        </touchEventContext.Provider>
    )
}