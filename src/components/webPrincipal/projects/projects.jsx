import { Box, Heading, ScaleFade } from '@chakra-ui/react'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import TimeLine from 'components/principal/timeLine/timeLine'

export default function Projects() {
    const { ref, inView } = useInView({
        threshold: 0.1,
    })

    return (
        <ScaleFade initialScale={0.5} in={inView}>
            <Box ref={ref}>
                <Heading fontWeight={300} fontSize={40} mb={10} cursor="default">
                    Outros projetos
                </Heading>
                <TimeLine />
            </Box>
        </ScaleFade>
    )
}
