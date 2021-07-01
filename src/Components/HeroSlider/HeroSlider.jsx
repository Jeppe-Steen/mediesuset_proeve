import { useEffect, useState } from 'react';
import { doFetch } from '../../Helpers/doFetch';
import Style from './HeroSlider.module.scss';

const HeroSlider = (props) => {

    const imageSrc = 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
    return (
        <figure className={Style.heroSlider}>
            <img className={Style.heroImage} src={imageSrc} alt="" />
            <figcaption className={Style.heroText}>
                <h1></h1>
            </figcaption>
            <span className={Style.chooserSpan}></span>
        </figure>
    )
}

export default HeroSlider;