import Style from './LineUp.module.scss';
import { doFetch, doFetchKey } from '../../Helpers/doFetch';
import { useEffect, useState } from 'react';

const LineUp = (props) => {
    const loggedIn = props.loggedIn;
    const title = props.title;
    const [fetchedData, setFetchedData] = useState([]);
    const [filteredData, setFilteredData] = useState();

    const [choosenEvent, setChoosenEvent] = useState();

    const filterOptions = [
        {name: 'A-Å', method: () => {
            setFilteredData(fetchedData.sort((a, b) => a.title.localeCompare(b.title)));
        }},
        {name: 'Rød Scene', method: () => {
            setFilteredData(fetchedData.filter(elements => elements.stage_name.includes('Rød scene')));
        }},
        {name: 'Blå Scene', method: () => {
            setFilteredData(fetchedData.filter(elements => elements.stage_name.includes('Blå scene')));
        }},
        {name: 'Grøn Scene', method: () => {
            setFilteredData(fetchedData.filter(elements => elements.stage_name.includes('Grøn scene')));
        }},
        {name: 'Lilla Scene', method: () => {
            setFilteredData(fetchedData.filter(elements => elements.stage_name.includes('Lilla scene')));
        }},
    ];

    const getData = async () => {
        const url = 'https://api.mediehuset.net/mediesuset/events';
        const response = await doFetch(url);
        setFetchedData(response.items);
        setFilteredData(response.items.sort((a, b) => a.title.localeCompare(b.title)))
    }

    useEffect(() => {
        getData();
    }, [])

    const handleLike = (event_id) => {
        const url = 'https://api.mediehuset.net/mediesuset/programme';
        const method = 'POST';

        const user_id = JSON.parse(sessionStorage.getItem('token')).user_id;
        const key = JSON.parse(sessionStorage.getItem('token')).access_token;

        const formData = new FormData();
            formData.append('user_id', user_id);
            formData.append('event_id', event_id);

        doFetchKey(url, method, formData, key);
        setChoosenEvent('');
    }

    useEffect(() => {
        console.log(choosenEvent)
    }, [choosenEvent])

    return (
        <section className={Style.filterSection}>
            <header className={Style.filterHeader}>
                <h2>{title}</h2>
            </header>
            <div className={Style.filterOptions}>
                {filterOptions && filterOptions.map((item, index) => {
                    return (
                        <p key={index} onClick={item.method}>{item.name}</p>
                    )
                })}
            </div>
            <article className={Style.filterWrapper}>
                {filteredData && filteredData.map((item, index) => {
                    return (
                        <figure className={Style.filteredData} key={index} onClick={(e) => {setChoosenEvent(item)}}>
                            <img src={item.image} alt={item.title} />
                            <figcaption>
                                <h3>{item.title}</h3>
                                <p>{item.local_time}</p>
                            </figcaption>
                        </figure>
                    )
                })}
            </article>

            {choosenEvent ? <article className={Style.eventModal}>
                <header className={Style.eventModalHeader}>
                    <h3>{choosenEvent.stage_name}</h3>
                </header>
                <figure className={Style.eventModalInformation}>
                    <img className={Style.eventModalImage} src={choosenEvent.image} alt={choosenEvent.title} />
                    <figcaption className={Style.eventModalCaption}>
                        <h4 className={Style.eventModalTitle}>{choosenEvent.title}</h4>
                        {loggedIn ? <button className={Style.eventModalLikeButton} onClick={(e) => {handleLike(choosenEvent.id)}}>Like Here</button> : null}
                        <button className={Style.eventModalLikeButton} onClick={(e) => {setChoosenEvent('')}}>Close Here</button>
                    </figcaption>
                </figure>
            </article> : null}
        </section>
    )
}

export default LineUp;