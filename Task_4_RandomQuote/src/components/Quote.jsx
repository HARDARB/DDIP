import React, { useState, useEffect } from 'react';
import css from './Quote.module.css';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";



const url = 'https://api.quotable.io/random';

const Quote = () => {
    const [quotes, setQuote] = useState("");

    const fetchQuote = async () => {
        const response = await fetch(url);
        const quote = await response.json()
            .then((data) => setQuote(data));
    };


    const handleClick = async () => {
        const quotes = await fetchQuote();
    };

    useEffect(() => {
        fetchQuote()
    }, [])

    return (
        <div className={css.Quotes}>
      
            <div className={css.description}>
            <h1>Quote of the day</h1>
                <div className={css.text}>
                    <p className={css.qoute_content}>{quotes.content}</p>
                    <p className={css.author}>~{quotes.author}</p>
                </div>
                <hr />

                <div className={css.text_btn}>
                    <div className={css.media}>
                        <a
                            href={'https://twitter.com/home={quotes.content}'}
                            target="_blank"
                            ><FaXTwitter /> 
                        </a>
                        <a
                            href={'https://twitter.com/home={quotes.content}'}
                            target="_blank"
                            ><FaFacebookSquare /> 
                        </a>
                        <a
                            href={'https://twitter.com/home={quotes.content}'}
                            target="_blank"
                            ><FaInstagramSquare /> 
                        </a>

                    </div>
                    <div className={css.btn}><button onClick={handleClick}>Get a Quote</button></div>
                </div>

            </div>

        </div>
    );
};




export default Quote