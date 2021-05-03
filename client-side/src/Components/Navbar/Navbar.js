import React, {useState} from 'react';
import About from '../About/About';
import { Heading } from '../Heading/Heading';
import Quote from '../Quote/Quote';
import './styles.css'

const Navbar = () => {
    const [lang, setLang] = useState(0)

    const onClickHandler = () => {
        setLang((c) => !c)
        console.log(lang)
    } 
    
    return (
        <div>
            <div>
                <label className="switch">
                    <input type="checkbox" onClick={onClickHandler}/>
                    <div className="slider"></div>
                </label>
            </div>
            <Heading lang = {lang}/>
            <About lang = {lang}/>
            <Quote lang = {lang}/>
        </div>
    );
}

export default Navbar;
