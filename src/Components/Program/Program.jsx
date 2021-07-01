import { useEffect, useState } from 'react';
import { doFetch } from '../../Helpers/doFetch';
import Style from './Program.module.scss';

const Program = (props) => {
    const title = props.title;
    const [fetchedData, setFetchedData] = useState([]);
    const [filteredData, setFilteredData] = useState();

    //declare time of days
    const timeWednesday = '2020-07-08';
    const timeThursday = '2020-07-09';
    const timeFriday = '2020-07-10';
    const timeSaturday = '2020-07-11';

    const filterOptions = [
        {name: 'Onsdag', method: () => {
            setFilteredData(fetchedData.filter(elements => elements.local_time.includes(timeWednesday)));
        }},
        {name: 'Torsdag', method: () => {
            setFilteredData(fetchedData.filter(elements => elements.local_time.includes(timeThursday)));
        }},
        {name: 'Fredag', method: () => {
            setFilteredData(fetchedData.filter(elements => elements.local_time.includes(timeFriday)));
        }},
        {name: 'Lørdag', method: () => {
            setFilteredData(fetchedData.filter(elements => elements.local_time.includes(timeSaturday)));
        }},
    ];

    const getData = async () => {
        const url = 'https://api.mediehuset.net/mediesuset/events';
        const response = await doFetch(url);
        setFetchedData(response.items);
        setFilteredData(response.items.filter(elements => elements.local_time.includes(timeWednesday)));
    }

    useEffect(() => {
        getData();
    }, [])

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
                        <figure className={Style.filteredData} key={index}>
                            <img src={item.image} alt={item.title} />
                            <figcaption>
                                <h3>{item.title}</h3>
                                <p>{item.local_time}</p>
                            </figcaption>
                        </figure>
                    )
                })}
            </article>
        </section>
    )
}

export default Program;