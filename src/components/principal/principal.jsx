import { Flex, Heading, ScaleFade } from '@chakra-ui/react'
import ColorMode from 'functions/colorMode'
import React, { useRef } from 'react'
import { useInViewport } from 'react-in-viewport'
import MyAccordion from './myAccordion/myAccordion'
import { Element } from 'react-scroll'
import pokecoin from '../../assets/07.png'
import pomodoro from '../../assets/pomo.png'
import TimeLine from './timeLine/timeLine'
import { SiReact, SiFirebase } from 'react-icons/si'
import Skills from './skills/skills'
import AboutMe from './aboutMe/aboutMe'
import Experience from './experience/experience'

export default function Principal(props) {
    const ref = useRef(null)
    const { inViewport } = useInViewport(
        ref,
        { rootMargin: '-100px' },
        { disconnectOnLeave: false },
        {}
    )

    return (
        <>
            <Element name="destaque" className="element">
                <Flex
                    w="100%"
                    justify="center"
                    direction="column"
                    bg={ColorMode('gray.900', 'white')}
                    color={ColorMode('white', 'black')}
                    padding={5}
                    ref={ref}
                >
                    <Heading fontWeight={400} fontSize={40} mb={10}>
                        Destaque
                    </Heading>
                    <ScaleFade initialScale={0.5} in={inViewport}>
                        <MyAccordion
                            title="PokéCoin"
                            image={pokecoin}
                            date="Abril / 2022"
                            abreviation="Oficialmente meu primeiro projeto, PokeCoin é uma plataforma de negociação de pokémons. Desenvolvido com ReactJs e bando de dados com Firebase realizei esse projeto para adquirir conhecimentos no desenvolvimento frontend. O período de desenvolvimento foi dado por volta de um mês."
                            rep="https://github.com/Smylle3/poke_coin"
                            site="https://poke-coin.vercel.app/"
                            framework="React Js"
                            styles="Chakra Ui"
                            backend="Firebase"
                            frameIcon={SiReact}
                            frameBack={SiFirebase}
                        />
                    </ScaleFade>
                    <ScaleFade initialScale={0.5} in={inViewport}>
                        <MyAccordion
                            title="My Pomodoro"
                            image={pomodoro}
                            date="Abril / 2022"
                            abreviation="Aplicação realizada como desafio de criar cronômetro pomodoro para gerenciar tempo de trabalho e descanso. Feito com ReactJs e ChakraUI para estilização."
                            rep="https://github.com/Smylle3/mypomodore"
                            site="https://mypomodore.vercel.app/"
                            framework="React Js"
                            styles="Chakra Ui"
                            frameIcon={SiReact}
                        />
                    </ScaleFade>
                </Flex>
            </Element>
            <Element name="about" className="element">
                <Flex direction="column" padding={5}>
                    <Heading
                        fontWeight={400}
                        fontSize={40}
                        mb={10}
                        textAlign="center"
                        bg={ColorMode('white', 'black')}
                        color={ColorMode('black', 'white')}
                    >
                        Sobre o dev
                    </Heading>
                    <AboutMe />
                    <Flex
                        bg={ColorMode('white', 'black')}
                        borderRadius="full"
                        h={1}
                        mt={5}
                    />
                </Flex>
            </Element>
            <Element name="projetos" className="element">
                <Flex direction="column" padding={5}>
                    <Heading
                        fontWeight={400}
                        fontSize={40}
                        mb={10}
                        alignSelf="flex-end"
                        bg={ColorMode('white', 'black')}
                        color={ColorMode('black', 'white')}
                    >
                        Projetos
                    </Heading>
                    <TimeLine />
                    <Flex
                        bg={ColorMode('white', 'black')}
                        borderRadius="full"
                        h={1}
                        mt={5}
                    />
                </Flex>
            </Element>
            <Element name="skills" className="element">
                <Flex direction="column" p={5}>
                    <Heading
                        fontWeight={400}
                        fontSize={40}
                        mb={10}
                        bg={ColorMode('white', 'black')}
                        color={ColorMode('black', 'white')}
                    >
                        Habilidades / Conhecimentos
                    </Heading>
                    <Skills />
                    <Flex
                        bg={ColorMode('white', 'black')}
                        borderRadius="full"
                        h={1}
                        mt={5}
                    />
                </Flex>
            </Element>
            <Element name="exp" className="element">
                <Flex direction="column" p={5}>
                    <Heading
                        fontWeight={400}
                        fontSize={40}
                        mb={10}
                        bg={ColorMode('black', 'white')}
                        color={ColorMode('white', 'black')}
                    >
                        Experiência
                    </Heading>
                    <Experience />
                    <Flex
                        bg={ColorMode('white', 'black')}
                        borderRadius="full"
                        h={1}
                        mt={5}
                    />
                </Flex>
            </Element>
            <Element name="exp" className="element">
                <Flex direction="column" p={5}>
                <Heading
                        fontWeight={400}
                        fontSize={40}
                        mb={10}
                        bg={ColorMode('white', 'black')}
                        color={ColorMode('black', 'white')}
                        w='fit-content'
                    >
                        Interesses
                    </Heading>
                    
                    <Flex
                        bg={ColorMode('white', 'black')}
                        borderRadius="full"
                        h={1}
                        mt={5}
                    />
                </Flex>
            </Element>
        </>
    )
}
