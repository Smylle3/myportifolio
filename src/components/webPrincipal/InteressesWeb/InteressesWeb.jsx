import { Box, Heading, ScaleFade } from '@chakra-ui/react'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import Skills from 'components/principal/skills/skills'
import Interesses from 'components/principal/personal/interesses'

export default function InteressesWeb() {
    const { ref, inView } = useInView({
        threshold: 0.1,
    })

    return (
        <ScaleFade initialScale={0.5} in={inView}>
            <Box ref={ref}>
                <Heading fontWeight={300} fontSize={40} mb={10} cursor="default">
                    Interesses
                </Heading>
                <Interesses />
            </Box>
        </ScaleFade>
    )
}
