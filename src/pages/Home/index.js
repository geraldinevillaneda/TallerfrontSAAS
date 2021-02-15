import React from 'react';
import {Helmet} from 'react-helmet';

import RenderPoints from '../../RenderPoint';
import '../../styles/App.css';


export default function Home ()
{
    return(
        <>
            <div>
                <Helmet>
                    <title> HOME || MAP</title>
                </Helmet>
                <div>
                    <div>
                    <RenderPoints />
                    </div>
                </div>
            </div>
        </>
    );
}

