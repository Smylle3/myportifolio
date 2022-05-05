import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from 'App'
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import themes from 'theme/theme'
import { Fonts } from 'theme/theme.fonts'

ReactDOM.render(
    <StrictMode>
        <ColorModeScript />
        <ChakraProvider theme={themes}>
            <Fonts />
            <App />
        </ChakraProvider>
    </StrictMode>,
    document.getElementById('root')
)
