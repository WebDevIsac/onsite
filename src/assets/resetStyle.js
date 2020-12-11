export const resetStyle = `
	*, html, body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Montserrat';
		line-height: 1em;
	}

	button {
		padding: 0;
        border: none;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
        outline: none;
        -webkit-tap-highlight-color: transparent;

        &:active, &:focus {
            outline: 0;
        }
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: 500;
	}

	p, span {
		font-size: 14px;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
`;
