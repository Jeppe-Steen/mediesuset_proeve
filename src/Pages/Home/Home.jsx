import Style from './Home.module.scss';
import { doFetch } from '../../Helpers/doFetch';

import HeroSlider from '../../Components/HeroSlider/HeroSlider';
import NewsGallery from '../../Components/NewsGallery/NewsGallery';

import { useEffect, useState } from 'react';

const Home = () => {

    return (
        <main className={Style.mainContainer}>
            <HeroSlider />
            <NewsGallery />
        </main> 
    )
}

export default Home;