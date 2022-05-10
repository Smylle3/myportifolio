import { extendTheme } from '@chakra-ui/react'
import { MyButton as Button } from './buttonStyles'

const themes = extendTheme({
    components: {
        Button,
    },
    breakpoints: {
        sm: '300px',
        md: '480px',
        lg: '620px',
        xl: '768px',
        xxl: '1000px',
        xxxl: '1280px',
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
