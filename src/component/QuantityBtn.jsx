

import React , {useEffect , useCallback}from 'react'
import { useDispatch } from 'react-redux';

function QuantityBtn({children}) {

  const dispatch =  useDispatch();

  function decrease(){
      dispatch({type : "decrease"})
  }

  // function increase(){
  //   dispatch({type : "increase"})
  // }

  const increase = useCallback((type) => {
    dispatch({type});
  },[dispatch])
  

  // increase counter after first render
  useEffect(() => {
    increase("increase");
  }, [increase]);

  // component init
  // run useEffect => increase number to 1++
  // re-render 

  return (
    <div>
        <button onClick={decrease}>decrease</button>
        {children}
        <button onClick={()=>increase("increase")}>increase</button>
    </div>
  )
}

export default QuantityBtn;
