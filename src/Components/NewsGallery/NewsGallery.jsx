import { useEffect, useState } from 'react';
import Style from './NewsGallery.module.scss';

import { doFetch } from '../../Helpers/doFetch';

const NewsGallery = () => {
    const [news, setNews] = useState([]);

    const fetchData = async () => {
        const newsUrl = 'https://api.mediehuset.net/mediesuset/news';
        const fetchedData = await doFetch(newsUrl);
        setNews(fetchedData.items);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className={Style.newsGallery}>
            <header className={Style.newsGalleryHeader}>
                <h2>Nyheder</h2>
            </header>
            <article className={Style.galleryWrapper}>
                {news && news.map((item, index) => {
                    return (
                        <figure key={index} className={Style.news}>
                            <img className={Style.newsImage} src={item.image} alt="" />
                            <figcaption className={Style.newsText}>
                                <h3>{item.title} </h3>
                                <p>{item.teaser}</p>
                            </figcaption>
                            <button className={Style.newsButton}>Læs mere</button>
                        </figure>
                    )
                })}
            </article>
        </section>
    )
}

export default NewsGallery;