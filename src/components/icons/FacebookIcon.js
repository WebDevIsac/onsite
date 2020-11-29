import React from 'react';
import SVG from './SVG';

const FacebookIcon = props => {
    return (
        <SVG viewBox="0 0 256 256" {...props}>
            <path
                d="M241.87 0H14.13A14.13 14.13 0 000 14.13v227.74A14.13 14.13 0 0014.13 256h122.62v-99H103.5v-38.75h33.25v-28.5c0-33.065 20.195-51.07 49.7-51.07 14.125 0 26.27 1.05 29.8 1.5v34.555H195.9c-16.05 0-19.16 7.625-19.16 18.82v24.695h38.37l-5 38.75h-33.37v99h65.12A14.13 14.13 0 00256 241.87V14.13A14.13 14.13 0 00241.87 0z"
                fill="#000"
            />
            <path
                d="M176.75 256v-99h33.375l5-38.75H176.75V93.57c0-11.195 3.1-18.82 19.16-18.82h20.34V40.185c-3.54-.47-15.685-1.5-29.8-1.5-29.5 0-49.7 18-49.7 51.07v28.5H103.5V157h33.25v99z"
                fill="#fff"
            />
        </SVG>
    );
};

export default FacebookIcon;
