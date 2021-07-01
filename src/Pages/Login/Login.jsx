import { useEffect, useState } from 'react';
import HeroSlider from '../../Components/HeroSlider/HeroSlider';
import { doFetch } from '../../Helpers/doFetch';

import Style from './Login.module.scss';

const Login = (props) => {
    const loggedIn = props.loggedIn;
    const setLoggedIn = props.setLoggedIn;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const fetchData = async (data,) => {
        const thisUrl = 'https://api.mediehuset.net/token';
        const method = 'POST';

        const fetchedData = await doFetch(thisUrl, method, data);
        console.log(fetchedData);

        sessionStorage.setItem(
            'token', 
            JSON.stringify(
                {
                    access_token: fetchedData.access_token, 
                    user_id: fetchedData.user_id,
                    message: fetchedData.message,
                }
            )
        );

        if(!fetchedData.message) {
            setLoggedIn(true);
        }
    }

    const checkForm = () => {
        let inputs = [...document.querySelectorAll('[data-type="required"]')];

        let hasError = false;

        for(let element of inputs) {
            if(!element.value) {
                console.log('error')
                hasError = true;
                element.placeholder = 'udfyld feltet';
                element.style.borderColor = 'Red';
                return;
            } else {
                element.style.borderColor = 'unset';

                switch(element.type) {
                    default:
                        break;
                    case 'email':
                        console.log('email er udfyldt');
                        break;
                    case 'password':
                        console.log('password er udfyldt');
                        break;
                }
            }
        }

        if(!hasError) {
            let formData = new FormData();
                formData.append('username', email);
                formData.append('password', password);

            fetchData(formData);
        }
    }

    useEffect(() => {
        if(loggedIn === false) {
            sessionStorage.clear();
        }
    },[loggedIn])

    return (
        <main>
            <HeroSlider />
            <section className={Style.loginSection}>
                <header className={Style.loginHeader}>
                    <h2>Login</h2>
                </header>
                <form className={Style.loginForm}>
                    <h3>Intast login oplysninger:</h3>
                    <div className={Style.loginInput}>
                        <label></label>
                        <input data-type="required" class={Style.input} placeholder="Indtast din email" type="email" onKeyUp={(e) => {setEmail(e.currentTarget.value)}} />
                    </div>
                    <div className={Style.loginInput}>
                        <label></label>
                        <input data-type="required" className={Style.input} placeholder="Indtast adgangskode" type="password" onKeyUp={(e) => {setPassword(e.currentTarget.value)}} />
                    </div>
                    <button className={Style.loginBottom} type="button" onClick={checkForm}>Login</button>
                </form>
            </section>
        </main>
    )
}

export default Login;