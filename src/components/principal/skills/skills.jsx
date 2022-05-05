import { Flex, ScaleFade, SimpleGrid } from '@chakra-ui/react'
import ColorMode from 'functions/colorMode'
import React, { useRef } from 'react'
import {
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
        { rootMargin: '-150px' },
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
                <SimpleGrid columns={{ xl: 3 }} spacing={5} w="full" h="100%">
                    <SkillCard
                        title="Html/Css"
                        icon={
                            <SiHtml5
                                color={`${ColorMode('#7928CA', '#FF0080')}`}
                                size="100px"
                            />
                        }
                        value="8"
                    />
                    <SkillCard
                        title="JavaScript"
                        icon={
                            <SiJavascript
                                color={`${ColorMode('#7928CA', '#FF0080')}`}
                                size="100px"
                            />
                        }
                        value="7"
                    />
                    <SkillCard
                        title="React"
                        icon={
                            <SiReact
                                color={`${ColorMode('#7928CA', '#FF0080')}`}
                                size="100px"
                            />
                        }
                        value="7"
                    />
                    <SkillCard
                        title="Next Js"
                        icon={
                            <SiNextDotJs
                                color={`${ColorMode('#7928CA', '#FF0080')}`}
                                size="100px"
                            />
                        }
                        value="7"
                    />
                    <SkillCard
                        title="Ruby"
                        icon={
                            <SiRuby
                                color={`${ColorMode('#7928CA', '#FF0080')}`}
                                size="100px"
                            />
                        }
                        value="5"
                    />
                    <SkillCard
                        title="Node Js"
                        icon={
                            <SiNodeDotJs
                                color={`${ColorMode('#7928CA', '#FF0080')}`}
                                size="100px"
                            />
                        }
                        value="5"
                    />
                </SimpleGrid>
            </Flex>
        </ScaleFade>
    )
}
