import React from 'react';
import loadingImg from '../../../assets/images/tenor.gif';

let Preloader = (props) => {
    // eslint-disable-next-line
    return (
        <div>
            <img src={loadingImg} alt={"Loading..."} />
        </div>
    )
}

export default Preloader;
