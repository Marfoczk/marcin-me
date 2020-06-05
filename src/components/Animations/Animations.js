import React from 'react';
import {first, second, line} from './Animations.module.scss'

const Animations = () => (
    <>
   <div className={first} id="first"></div>
   <div className={second} id="second"></div>
   <span className={line} id="line"></span>
    </>
)

export default Animations