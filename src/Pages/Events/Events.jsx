import { useParams } from 'react-router-dom';
import HeroSlider from '../../Components/HeroSlider/HeroSlider';
import LineUp from '../../Components/LineUp/LineUp';
import Program from '../../Components/Program/Program';
import MyProgram from '../../Components/MyProgram/MyProgram';

import { checkUppercase } from "../../Helpers/functions";
import { useEffect, useState } from 'react';

const Events = (props) => {
    const { Event } = useParams();

    const loggedIn = props.loggedIn;

    const [title, setTitle] = useState();

    let currentPage;

    switch(Event) {
        default:
            break;
        case 'LineUp':
            currentPage = <LineUp title={title} loggedIn={loggedIn}/>;
            break;
        case 'Program':
            currentPage = <Program title={title} loggedIn={loggedIn}/>;
            break;
        case 'MyProgram':
            currentPage = <MyProgram title={title}/>;
            break;
    }
    
    useEffect(() => {
        const pageTitle = checkUppercase(Event)
        setTitle(pageTitle);
    }, [Event])

    return (
        <main>
            <HeroSlider />
            {currentPage}
        </main>
    )
}

export default Events;