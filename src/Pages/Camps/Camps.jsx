import { useParams } from 'react-router-dom';
import HeroSlider from '../../Components/HeroSlider/HeroSlider';

const Camps = () => {
    const { Camp } = useParams();
    return (
        <main>
            <HeroSlider />
        </main>
    )
}

export default Camps;