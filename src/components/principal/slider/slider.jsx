import { Box, Heading } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useInViewport } from 'react-in-viewport'

export default function MySlider(props) {
    const ref = useRef(null)
    const { inViewport } = useInViewport(
        ref,
        { rootMargin: '0px' },
        { disconnectOnLeave: false },
        {}
    )
    console.log(inViewport)
    switch (props.pages) {
        case 1:
            return (
                <Box bg="blue.900" h="200%" w="85%" ref={ref}>
                    <Heading>Página 1</Heading>
                </Box>
            )
        case 2:
            return (
                <Box bg="teal.500" h="200%" w="85%" ref={ref}>
                    <Heading>Página 2</Heading>
                </Box>
            )
        default:
            break
    }
}
