import montserrat from './montserrat';

export const fontString = `
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${montserrat.regular.ttf}') format('truetype');
    }

    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('${montserrat.medium.ttf}') format('truetype');
    }

    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('${montserrat.bold.ttf}') format('truetype');
    }
`;
