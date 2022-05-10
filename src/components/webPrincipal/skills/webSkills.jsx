import { Box, Heading, ScaleFade } from '@chakra-ui/react'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import Skills from 'components/principal/skills/skills'

export default function SkillsWeb() {
    const { ref, inView } = useInView({
        threshold: 0.1,
    })

    return (
        <ScaleFade initialScale={0.5} in={inView}>
            <Box ref={ref}>
            <Heading fontWeight={300} fontSize={40} mb={10} cursor="default">
                    Habilidades e conhecimentos
                </Heading>
                <Skills />
            </Box>
        </ScaleFade>
    )
}
