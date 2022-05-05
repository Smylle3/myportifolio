import { Flex, Heading, ScaleFade } from '@chakra-ui/react'
import ColorMode from 'functions/colorMode'
import React, { useRef } from 'react'
import { useInViewport } from 'react-in-viewport'
import MyAccordion from './myAccordion/myAccordion'
import {
    Link,
    Button,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
} from 'react-scroll'
import pokecoin from '../../assets/07.png'
import pomodoro from '../../assets/pomo.png'

export default function Principal() {
    const ref = useRef(null)
    const { inViewport } = useInViewport(
        ref,
        { rootMargin: '-100px' },
        { disconnectOnLeave: false },
        {}
    )

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
                        abreviation="Oficialmente meu primeiro projeto, PokeCoin é uma plataforma de negociação de pokémons. Desenvolvido com ReactJs e bando de dados com Firebase realizei esse projeto para adquirir conhecimentos no desenvolvimento frontend. O período de desenvolvimento foi dado por volta de um mês, abril/2022."
                        rep="https://github.com/Smylle3/poke_coin"
                        site="https://poke-coin.vercel.app/"
                    />
                </ScaleFade>
                <ScaleFade initialScale={0.5} in={inViewport}>
                    <MyAccordion
                        title="My Pomodoro"
                        image={pomodoro}
                        abreviation="Texto"
                        rep=""
                        site=""
                    />
                </ScaleFade>
            </Flex>
            <Flex h="100vh">
                <Heading fontWeight={400} fontSize={40} marginBottom={10}>
                    <Element name="projetos" className="element">
                        Projetos
                    </Element>
                </Heading>
            </Flex>
            <Flex h="100vh">
                <Heading fontWeight={400} fontSize={40} marginBottom={10}>
                    <Element name="skills" className="element">
                        Habilidades
                    </Element>
                </Heading>
            </Flex>
        </>
    )
}
