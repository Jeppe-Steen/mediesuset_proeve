import { useEffect, useState } from 'react';
import Style from './MyProgram.module.scss';

import {doFetch, doFetchKey} from '../../Helpers/doFetch'

const MyProgram = (props) => {
    const title = props.title;
    const [userProgram, setUserProgram] = useState();

    const fetchData = async () => {
        const user_id = JSON.parse(sessionStorage.getItem('token')).user_id;
        const access_token = JSON.parse(sessionStorage.getItem('token')).access_token;

        const url = `https://api.mediehuset.net/mediesuset/programme/${user_id}`;

        const response = await doFetchKey(url, 'GET', '', access_token);
        console.log(response.items)
        setUserProgram(response.items)
    }
     useEffect(() => {
        fetchData();
    }, [])

    return (
        <section className={Style.myProgramSection}>
            <header className={Style.myProgramHeader}>
                <h2>{title}</h2>
            </header>
            <article className={Style.myProgramWrapper}>
                {userProgram && userProgram.map((item, index) => {
                    return (
                        <p key={index}>{item.event_title}</p>
                    )
                })}
            </article>
        </section>
    )
}

export default MyProgram;