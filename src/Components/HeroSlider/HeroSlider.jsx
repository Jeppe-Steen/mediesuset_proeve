import { useEffect, useState } from 'react';
import { doFetch } from '../../Helpers/doFetch';
import Style from './HeroSlider.module.scss';

const HeroSlider = (props) => {

    return (
        <figure className={Style.heroSlider}>
            <img className={Style.heroImage} src='https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt="" />
            <figcaption className={Style.heroText}>
                <h1></h1>
            </figcaption>
            <span className={Style.chooserSpan}></span>
        </figure>
    )
}

export default HeroSlider;