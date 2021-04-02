import titillium from './titillium-web';
console.log(titillium);

export const fontString = `
    @font-face {
        font-family: 'Titillium Web';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('${titillium.light.woff2}') format('woff2'), url('${titillium.light.woff}') format('woff');
    }

    @font-face {
        font-family: 'Titillium Web';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${titillium.normal.woff2}') format('woff2'), url('${titillium.normal.woff}') format('woff');
    }

    @font-face {
        font-family: 'Titillium Web';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('${titillium.semi.woff2}') format('woff2'), url('${titillium.semi.woff}') format('woff');
    }

    @font-face {
        font-family: 'Titillium Web';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('${titillium.bold.woff2}') format('woff2'), url('${titillium.bold.woff}') format('woff');
    }
`;
