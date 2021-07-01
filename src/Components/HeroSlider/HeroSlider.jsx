import Style from './HeroSlider.module.scss';

const HeroSlider = (props) => {

    return (
        <figure className={Style.heroSlider}>
            <img src="" alt="" />
            <figcaption className={Style.heroText}>
                <h1>herotext</h1>
            </figcaption>
            <span className={Style.chooserSpan}></span>
        </figure>
    )
}

export default HeroSlider;