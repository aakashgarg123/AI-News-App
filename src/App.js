import React, { useState, useEffect } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';

const alanKey = '0ad732bac54395683bcd635b5b85bdfa2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([])

    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                    
                   setNewsArticles(articles)
                }
            }
        })
    }, [])
    return(
        <div>
            <div className={classes.logoContainer}>
                <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} />
            </div>
            <NewsCards articles={newsArticles} />
        </div>
    )
}
//37:04
export default App;