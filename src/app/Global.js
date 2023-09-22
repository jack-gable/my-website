"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
	    --color-background: hsl(240, 8%, 9%);
	    --color-text: hsl(210, 25%, 88%);
	    --color-white: hsl(60, 100%, 100%);
        --color-offWhite: hsl(45, 29%, 97%);
	    --color-gray-50: hsl(210, 19%, 10%);
        --color-gray-100: hsl(210, 15%, 20%);
        --color-gray-200: hsl(210, 15%, 25%);
        --color-gray-300: hsl(210, 10%, 40%);
        --color-gray-400: hsl(210, 9%, 45%);
        --color-gray-500: hsl(210, 8%, 50%);
        --color-gray-600: hsl(210, 12%, 55%);
        --color-gray-700: hsl(210, 14%, 66%);
        --color-gray-800: hsl(210, 20%, 77%);
        --color-gray-900: hsl(210, 25%, 88%);
        --color-gray-1000: hsl(210, 25%, 96%);
	    --color-primary: hsl(224, 100%, 63%);
	    --color-secondary: hsl(224, 100%, 70%);
	    --color-success: hsl(128, 100%, 36%);
	    --color-warning: hsl(54, 100%, 50%);
	    --color-error: hsl(0, 100%, 60%);
    }
    /*
    1. Use a more-intuitive box-sizing model.
    */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    /*
    2. Remove default margin
    */
    * {
        margin: 0;
    }
    /*
    3. Allow percentage-based heights in the application
    */
    html,
    body,
    #root,
    #__next {
        height: 100%;
    }
    /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
    */
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        background: var(--color-background);
        color: var(--color-text);
    }
    /*
    6. Improve media defaults
    */
    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }
    /*
    7. Remove built-in form typography styles
    */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }
    /*
    8. Avoid text overflows
    */
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }
    /*
    9. Create a root stacking context
    */
    #root,
    #__next {
        isolation: isolate;
    }
`;

export default GlobalStyles;
