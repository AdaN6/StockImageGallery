import React, { useRef } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export default function Alessandra() {
    const ref = useRef();
  return (
    <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={ref} // to use toggle method like ref.curret.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
>
    <FrontSide style={{ backgroundColor: '#f5f5f5' }} >
        <h2>Alessandra</h2>
    <h3>Fullstack Developer For Hire</h3>
    <i>Galactic Travel Agent</i>
    <br/>
    <h4>Click Me</h4>

    </FrontSide>
    <BackSide style={{ backgroundColor: '#f5f5f5' }}>
      <a href='https://github.com/a-maffei'>
      <img  className="gitlogo" src='https://pngimg.com/uploads/github/github_PNG15.png'></img>
      github.com/a-maffei
      </a>
    </BackSide>
</Flippy>
  )
}
