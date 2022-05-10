import { Box, Heading, ScaleFade } from '@chakra-ui/react'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import Experience from 'components/principal/experience/experience'

export default function ExperienceWeb() {
    const { ref, inView } = useInView({
        threshold: 0.1,
    })

    return (
        <ScaleFade initialScale={0.5} in={inView}>
            <Box ref={ref}>
                <Heading fontWeight={300} fontSize={40} cursor="default">
                    Experiência
                </Heading>
                <Experience />
            </Box>
        </ScaleFade>
    )
}
