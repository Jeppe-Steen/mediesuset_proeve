import { useEffect, useState } from 'react';
import { doFetch } from '../../Helpers/doFetch';
import Style from './Program.module.scss';

const Program = (props) => {
    const title = props.title;
    const [fetchedData, setFetchedData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    //declare time of days
    const timeWednesday = '2020-07-08';
    const timeThursday = '2020-07-09';
    const timeFriday = '2020-07-10';
    const timeSaturday = '2020-07-11';

    const stages = [
        {name: 'Rød scene', color: 'Red'},
        {name: 'Blå scene', color: 'Blue'},
        {name: 'Grøn scene', color: 'Green'},
        {name: 'Lilla scene', color: 'Purple'},
    ]

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

    const handleSortAndFilter = (scene) => {
        const data = filteredData.filter(elements => elements.stage_name.includes(scene));
        return data;
    }

    const getData = async () => {
        const url = 'https://api.mediehuset.net/mediesuset/events';
        const response = await doFetch(url);
        setFetchedData(response.items);
        setFilteredData(response.items.filter(elements => elements.local_time.includes(timeWednesday)));
    }

    useEffect(() => {
        getData();

        let redHeader = document.querySelector('#Red');
            redHeader.style.backgroundColor = 'red';
        let blueHeader = document.querySelector('#Blue');
            blueHeader.style.backgroundColor = 'blue';
        let greenHeader = document.querySelector('#Green');
            greenHeader.style.backgroundColor = 'green';
        let purpleHeader = document.querySelector('#Purple');
            purpleHeader.style.backgroundColor = 'purple';
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
                {stages && stages.map((item, index) => {
                    return (
                        <ul className={Style.filterList} key={index}>
                            <li id={item.color} className={Style.listHeader}>{item.name}</li>
                            {handleSortAndFilter(item.name).map((item, index) => {
                                return (
                                    <li className={Style.listItem} key={index}>{item.title}</li>
                                )
                            })}
                        </ul>
                    )
                })}
            </article>
        </section>
    )
}

export default Program;