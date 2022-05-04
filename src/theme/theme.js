import { extendTheme } from '@chakra-ui/react'

const themes = extendTheme({
    breakpoints: {
        sm: '300px',
        md: '480px',
        lg: '620px',
        xl: '800px',
        xxl: '1000px',
    },
    fonts: {
        body: 'Open Sans',
        heading: 'Source Code Pro',
        mono: 'Menlo, monospace',
    },
    styles: {
        global: props => ({
            'html, body': {
                color: props.colorMode === 'dark' ? 'white' : 'gray.600',
                
            },
        }),
    },
})

export default themes
