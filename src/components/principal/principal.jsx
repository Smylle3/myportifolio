import { Flex, Heading, ScaleFade, useColorMode } from '@chakra-ui/react'
import ColorMode from 'functions/colorMode'
import React, { useRef } from 'react'
import { useInViewport } from 'react-in-viewport'
import MyAccordion from './myAccordion/myAccordion'
import { Element } from 'react-scroll'
import pokecoin from '../../assets/07.png'
import pomodoro from '../../assets/pomo.png'
import TimeLine from './timeLine/timeLine'
import {
    SiReact,
    SiFirebase,
} from 'react-icons/si'
import Skills from './skills/skills'

export default function Principal() {
    const ref = useRef(null)
    const { inViewport } = useInViewport(
        ref,
        { rootMargin: '-100px' },
        { disconnectOnLeave: false },
        {}
    )
    const {colorMode} = useColorMode()

    return (
        <>
            <Flex
                w="100%"
                justify="center"
                direction="column"
                bg={ColorMode('gray.900', 'white')}
                color={ColorMode('white', 'black')}
                padding={5}
                ref={ref}
            >
                <Heading fontWeight={400} fontSize={40} marginBottom={10}>
                    <Element name="destaque" className="element">
                        Destaque
                    </Element>
                </Heading>
                <ScaleFade initialScale={0.5} in={inViewport}>
                    <MyAccordion
                        title="PokéCoin"
                        image={pokecoin}
                        date='Abril / 2022'
                        abreviation="Oficialmente meu primeiro projeto, PokeCoin é uma plataforma de negociação de pokémons. Desenvolvido com ReactJs e bando de dados com Firebase realizei esse projeto para adquirir conhecimentos no desenvolvimento frontend. O período de desenvolvimento foi dado por volta de um mês."
                        rep="https://github.com/Smylle3/poke_coin"
                        site="https://poke-coin.vercel.app/"
                        framework='React Js'
                        styles='Chakra Ui'
                        backend='Firebase'
                        frameIcon={SiReact}
                        frameBack={SiFirebase}
                    />
                </ScaleFade>
                <ScaleFade initialScale={0.5} in={inViewport}>
                    <MyAccordion
                        title="My Pomodoro"
                        image={pomodoro}
                        date='Abril / 2022'
                        abreviation="Aplicação realizada como desafio de criar cronômetro pomodoro para gerenciar tempo de trabalho e descanso. Feito com ReactJs e ChakraUI para estilização."
                        rep="https://github.com/Smylle3/mypomodore"
                        site="https://mypomodore.vercel.app/"
                        framework='React Js'
                        styles='Chakra Ui'
                        frameIcon={SiReact}
                    />
                </ScaleFade>
            </Flex>
            <Flex direction="column" padding={5}>
                <Heading
                    fontWeight={400}
                    fontSize={40}
                    marginBottom={10}
                    alignSelf="flex-end"
                    bg={ColorMode('white', 'black')}
                    color={ColorMode('black', 'white')}
                >
                    <Element name="projetos" className="element">
                        Projetos
                    </Element>
                </Heading>
                <TimeLine />
                <Flex bg="white" borderRadius="full" h={1} mt={5} />
            </Flex>
            <Flex direction="column" p={5} >
                <Heading
                    fontWeight={800}
                    fontSize={40}
                    mb={10}
                    bgGradient={`linear(to-l, ${ColorMode('#FF0080','#7928CA')}, ${ColorMode('#7928CA', '#FF0080')})`}
                    bgClip={colorMode === 'dark' ? 'text' : 'unset'}
                    color={colorMode === 'dark' ? null : 'white'}
                >
                    <Element name="skills" className="element">
                        Habilidades
                    </Element>
                </Heading>
                <Skills/>
            </Flex>
        </>
    )
}
