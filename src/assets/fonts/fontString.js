import montserrat from './montserrat';

export const fontString = `
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${montserrat.regular.woff2}') format('woff2');
    }

    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('${montserrat.medium.woff2}') format('woff2');
    }

    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('${montserrat.bold.woff2}') format('woff2');
    }
`;
