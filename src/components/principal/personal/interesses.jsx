import { Flex, ScaleFade, SimpleGrid } from '@chakra-ui/react'
import ColorMode from 'functions/colorMode'
import React, { useRef } from 'react'
import { BiCodeAlt, BiGame, BiMusic } from 'react-icons/bi'
import { BsCamera } from 'react-icons/bs'
import { FaLanguage } from 'react-icons/fa'
import { GiBrain } from 'react-icons/gi'
import { RiMovieFill, RiPlaneFill } from 'react-icons/ri'
import { useInViewport } from 'react-in-viewport'
import SkillCard from '../skills/skillCard'

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
                        title="Viagens"
                        icon={
                            <RiPlaneFill
                                color={`${ColorMode('black', 'white')}`}
                                size="100px"
                            />
                        }
                    />
                    <SkillCard
                        title="Músicas"
                        icon={
                            <BiMusic
                                color={`${ColorMode('black', 'white')}`}
                                size="100px"
                            />
                        }
                    />
                    <SkillCard
                        title="Jogos"
                        icon={
                            <BiGame
                                color={`${ColorMode('black', 'white')}`}
                                size="100px"
                            />
                        }
                    />
                    <SkillCard
                        title="Filmes"
                        icon={
                            <RiMovieFill
                                color={`${ColorMode('black', 'white')}`}
                                size="100px"
                            />
                        }
                    />
                    <SkillCard
                        title="Fotografia"
                        icon={
                            <BsCamera
                                color={`${ColorMode('black', 'white')}`}
                                size="100px"
                            />
                        }
                    />
                    <SkillCard
                        title="Idiomas"
                        icon={
                            <FaLanguage
                                color={`${ColorMode('black', 'white')}`}
                                size="100px"
                            />
                        }
                    />
                    <SkillCard
                        title="Lógica"
                        icon={
                            <GiBrain
                                color={`${ColorMode('black', 'white')}`}
                                size="100px"
                            />
                        }
                    />
                    <SkillCard
                        title="Web Dev"
                        icon={
                            <BiCodeAlt
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
