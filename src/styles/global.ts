import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        border: 0,
        outline: 0,
        boxSizing: 'border-box'
    },

    'body': {
        backgroundColor: 'rgba(211, 211, 211, .5)',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    'input': {
        border: '2px solid #BB86FC',
        padding: '1rem',
        borderRadius: '10px'
    },

    'label': {
        fontSize: '20px',
        color: '#fff'
    },

})


