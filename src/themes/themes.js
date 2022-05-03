import { extendTheme } from '@chakra-ui/react'
import { MyButton as Button } from './buttonStyles'

const theme = extendTheme({
    components: {
        Button
    },
    colors: {
        grayBG: '#1A202C',
        grayColor: '#E2E8F0'
    },
    fonts: {
        body: 'system-ui, sans-serif',
        heading: 'Georgia, serif',
        mono: 'Menlo, monospace'
    },
    styles: {
        global: () => ({
            body: {
                bg: 'grayBG',
                color: 'grayColor'
            }
        })
    },
    breakpoints: {
        sm: '380px',
        md: '480px',
        lg: '720px',
        dk: '1000px',
    }
})

export default theme
