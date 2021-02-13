import React from 'react';
import {Helmet} from 'react-helmet';

import Header from '../../components/Header/index';
import RenderPoints from '../../RenderPoint';
import '../../App.css';


export default function Home ()
{
    return(
        <>
            <div>
                <Helmet>
                    <title> HOME || MAP</title>
                </Helmet>
                <Header />
                <div>
                    <div>
                    <RenderPoints />
                    </div>
                </div>
            </div>
        </>
    );
}

