export const resetStyle = `
	*, html, body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Titillium Web';
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
		font-weight: 600;
		letter-spacing: 2px;
	}

	h2 {
		font-variant: all-small-caps;
		font-size: 32px;
	}

	p, li, span {
		font-size: 14px;
		line-height: 1.5em;

		@media screen and (min-width: 1024px) {
			font-size: 16px;
		}
	}

	a {
		text-decoration: none;
		color: inherit;
	}
`;
