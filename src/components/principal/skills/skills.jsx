import { Flex, ScaleFade, SimpleGrid } from '@chakra-ui/react'
import ColorMode from 'functions/colorMode'
import React, { useRef } from 'react'
import {
    SiCss3,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiNextDotJs,
    SiNodeDotJs,
    SiReact,
    SiRuby,
} from 'react-icons/si'
import { useInViewport } from 'react-in-viewport'
import SkillCard from './skillCard'

export default function Skills() {
    const ref = useRef(null)
    const { inViewport } = useInViewport(
        ref,
        { rootMargin: '0px' },
        { disconnectOnLeave: false },
        {}
    )

    return (
        <ScaleFade initialScale={0.5} in={inViewport}>
            <Flex
                borderRadius={10}
                backdropFilter="auto"
                backdropBlur="5px"
                border="1px solid"
                p={5}
                ref={ref}
            >
                <SimpleGrid columns={{ xl: 4, md: 2 }} spacing={5} w="full" h="100%">
                    <SkillCard
                        title="Html5"
                        icon={
                            <SiHtml5
                                color={`${ColorMode('black', 'white')}`}
                                size="100px"
                            />
                        }
                    />
                    <SkillCard
                        title="Css3"
                        icon={
                            <SiCss3
                                color={`${ColorMode('black', 'white')}`}
                                size="100px"
                            />
                        }
                    />
                    <SkillCard
                        title="JavaScript"
                        icon={
                            <SiJavascript
                                color={`${ColorMode('black', 'white')}`}
                                size="100px"
                            />
                        }
                    />
                    <SkillCard
                        title="React"
                        icon={
                            <SiReact
                                color={`${ColorMode('black', 'white')}`}
                                size="100px"
                            />
                        }
                    />
                    <SkillCard
                        title="Next Js"
                        icon={
                            <SiNextDotJs
                                color={`${ColorMode('black', 'white')}`}
                                size="100px"
                            />
                        }
                    />
                    <SkillCard
                        title="Ruby"
                        icon={
                            <SiRuby
                                color={`${ColorMode('black', 'white')}`}
                                size="100px"
                            />
                        }
                    />
                    <SkillCard
                        title="Node Js"
                        icon={
                            <SiNodeDotJs
                                color={`${ColorMode('black', 'white')}`}
                                size="100px"
                            />
                        }
                    />
                    <SkillCard
                        title="Git"
                        icon={
                            <SiGit
                                color={`${ColorMode('black', 'white')}`}
                                size="100px"
                            />
                        }
                    />
                </SimpleGrid>
            </Flex>
        </ScaleFade>
    )
}
