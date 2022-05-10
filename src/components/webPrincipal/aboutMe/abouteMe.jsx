import { Box, Heading, ScaleFade } from '@chakra-ui/react'
import AboutMe from 'components/principal/aboutMe/aboutMe'
import React from 'react'
import { useInView } from 'react-intersection-observer'

export default function AbouteMe() {
    const { ref, inView } = useInView({
        threshold: 0.2,
    })

    return (
        <ScaleFade initialScale={0.5} in={inView}>
            <Box ref={ref}>
                <Heading fontWeight={300} fontSize={40} mb={10} cursor="default">
                    Sobre o Dev
                </Heading>
                <AboutMe />
            </Box>
        </ScaleFade>
    )
}
