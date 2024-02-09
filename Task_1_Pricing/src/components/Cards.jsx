import React, { useState } from 'react';
import css from './Cards.module.css';
import { GiCheckMark } from "react-icons/gi";




const Cards = () => {

    const [state, setSatate] = useState("monthly");
    const [Price, setPrice1] = useState(19);
    const [Price2, setPrice2] = useState(54);
    const [Price3, setPrice3] = useState(89);
    const [color, setColor] = useState(css.Cards_cover);

    var a = Price + 100
    var b = Price2 + 120
    var c = Price3 + 130

    const updateText = () => {
        setSatate((curr) => (curr === "monthly" ? "yearly" : "monthly"))
        setPrice1((curr) => (curr === 19 ? a : 19))
        setPrice2((curr) => (curr === 54 ? b : 54))
        setPrice3((curr) => (curr === 89 ? c : 89))
        setColor((curr) => (curr === css.Cards_cover ? css.Cards_cover2 : css.Cards_cover))

    }


 
  return (
    <div className={css.Cards}>
    <div className={css.top}>
        
            <div className={css.Heading_text}>
            <h1>Our Payment Plan & Pricing</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.Lorem ipsum dolor sit ame,consectetur </p>

        </div>

        
        <div className={css.button}>
              <input  id="mobile" onClick={ updateText} type="checkbox" class="checkbox" />
            </div>
    </div>
     <div className={css.cards_body}>

            <div className={color}>
                <h1>${Price} <span className={css.month_year}>/ {state}</span></h1>
                <h2>Beginner</h2>
              
                <ul>
                    <li><GiCheckMark className={css.icons}/> Multi-step Zaps</li>
                    <li><GiCheckMark className={css.icons}/> 3 Premium Apps</li>
                    <li><GiCheckMark className={css.icons} /> 2 Users team</li>
                </ul>
                <a href="#" className={css.btn}>Choose plan</a>
            </div>

            <div className={color}>
                <h1>${Price2} <span className={css.month_year}>/ {state}</span></h1>
                <h2>Intermediate</h2>
                <ul>
                    <li><GiCheckMark className={css.icons}/> Multi-step Zap</li>
                    <li><GiCheckMark className={css.icons}/> Unlimited Premium Apps</li>
                    <li><GiCheckMark className={css.icons}/> Unlimited Users Team</li>
                    <li><GiCheckMark className={css.icons}/> Advanced Admin</li>
                    <li><GiCheckMark className={css.icons}/> Custom Data Retention</li>
                </ul>
                <a href="#" className={css.btn}>Choose plan</a>
            </div>

            <div className={color}>
                <h1>${Price3} <span className={css.month_year}>/ {state}</span></h1>
                <h2>Professional</h2>
                <ul>
                    <li><GiCheckMark className={css.icons}/> Multi-step Zaps</li>
                    <li><GiCheckMark className={css.icons}/> Unlimited Premium </li>
                    <li><GiCheckMark className={css.icons}/> 50 Users team</li>
                </ul>
                <a href="#" className={css.btn}>Choose plan</a>
            </div>
            
    
       
     </div>
    <div className={css.svg_backgroung}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1442" height="212" viewBox="0 0 1442 212" fill="none">
          <path d="M0 212C237.249 52.0198 857.797 -171.952 1442 212H0Z" fill="#D9D9D9" fill-opacity="0.57"/>
        </svg>
        </div>
    </div>
  )
}

export default Cards