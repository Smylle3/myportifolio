import {
    Flex,
    Heading,
    HStack,
    Link,
    ScaleFade,
    SimpleGrid,
    Tag,
    TagLeftIcon,
    Text,
} from '@chakra-ui/react'
import ColorMode from 'functions/colorMode'
import React from 'react'
import ButtonRef from './buttonRef'
import {
    SiJavascript,
    SiReact,
    SiAndroid,
    SiIos,
    SiNextDotJs,
    SiHtml5,
    SiSpring,
} from 'react-icons/si'
import { useInView } from 'react-intersection-observer'
import { AiOutlineAntDesign } from 'react-icons/ai'

export default function TimeLine() {
    const { ref, inView } = useInView({
        threshold: 0,
    })

    return (
        <ScaleFade initialScale={0.5} in={inView}>
            <Flex
                color={ColorMode('white', 'black')}
                h="100%"
                ref={ref}
                p={3}
                cursor="default"
            >
                <SimpleGrid columns={{ xl: 2, xxxl: 3 }} spacing={5} w="full" h="100%">
                    <ScaleFade in whileHover={{ scale: 1.1 }}>
                        <Flex
                            bg={ColorMode('white', 'gray.900')}
                            color={ColorMode('black', 'white')}
                            direction="column"
                            align="center"
                            p={3}
                            h="100%"
                            boxShadow={`0px 0px 3px 0px  ${ColorMode('black', 'white')}`}
                            borderRadius={3}
                        >
                            <HStack>
                                <Tag color="white" bg="blue.400">
                                    <TagLeftIcon boxSize="12px" as={SiReact} /> React Js
                                </Tag>
                                <Tag color="white" bg="gray.500">
                                    <TagLeftIcon boxSize="12px" as={AiOutlineAntDesign} />{' '}
                                    Ant Design
                                </Tag>
                            </HStack>
                            <Heading fontWeight={300} fontSize={35} margin={1}>
                                YourTasks
                            </Heading>
                            <Text textAlign="justify" mb={5}>
                                Junho / 2022
                            </Text>
                            <Text mb={5} textAlign="justify">
                                Aplica????o simples feita para organizar as tarefas do
                                usu??rio, criar listas de afazeres e afins, ainda em
                                desenvolvimento para implementa????o de um cronometro
                                pomodoro.
                            </Text>
                            <ButtonRef
                                rep="https://github.com/Smylle3/yourtasks"
                                site="https://yourtasks.vercel.app/"
                            />
                        </Flex>
                    </ScaleFade>

                    <ScaleFade in whileHover={{ scale: 1.1 }}>
                        <Flex
                            bg={ColorMode('white', 'gray.900')}
                            color={ColorMode('black', 'white')}
                            direction="column"
                            align="center"
                            p={3}
                            h="100%"
                            boxShadow={`0px 0px 3px 0px  ${ColorMode('black', 'white')}`}
                            borderRadius={3}
                        >
                            <HStack>
                                <Tag color="white" bg="blue.400">
                                    <TagLeftIcon boxSize="12px" as={SiReact} /> React Js
                                </Tag>
                                <Tag color="white" bg="green.300">
                                    <TagLeftIcon boxSize="12px" /> Chakra UI
                                </Tag>
                            </HStack>
                            <Heading fontWeight={300} fontSize={35} margin={1}>
                                Pomodore
                            </Heading>
                            <Text textAlign="justify" mb={5}>
                                Abril / 2022
                            </Text>
                            <Text mb={5} textAlign="justify">
                                Aplica????o realizada como desafio de criar um cron??metro
                                pomodoro para gerenciar tempo e descanso. Feito com
                                ReactJs e ChakraUI para estiliza????o.
                            </Text>
                            <ButtonRef
                                rep="https://github.com/Smylle3/myportifolio"
                                site="https://smylleportifolio.vercel.app/"
                            />
                        </Flex>
                    </ScaleFade>

                    <ScaleFade in whileHover={{ scale: 1.1 }}>
                        <Flex
                            bg={ColorMode('white', 'gray.900')}
                            color={ColorMode('black', 'white')}
                            direction="column"
                            align="center"
                            p={3}
                            h="100%"
                            boxShadow={`0px 0px 3px 0px  ${ColorMode('black', 'white')}`}
                            borderRadius={3}
                        >
                            <HStack>
                                <Tag color="white" bg="blue.400">
                                    <TagLeftIcon boxSize="12px" as={SiReact} /> React Js
                                </Tag>
                                <Tag color="white" bg="green.300">
                                    <TagLeftIcon boxSize="12px" /> Chakra UI
                                </Tag>
                            </HStack>
                            <Heading fontWeight={300} fontSize={35} margin={1}>
                                MyPortifolio
                            </Heading>
                            <Text textAlign="justify" mb={5}>
                                Maio / 2022
                            </Text>
                            <Text mb={5} textAlign="justify">
                                Meu website com o intuito de manter registrado e
                                atualizados meus projetos e aprendizados bem como servir
                                de apresenta????o e curriculo.
                            </Text>
                            <ButtonRef
                                rep="https://github.com/Smylle3/myportifolio"
                                site="https://smylleportifolio.vercel.app/"
                            />
                        </Flex>
                    </ScaleFade>

                    <ScaleFade in whileHover={{ scale: 1.1 }}>
                        <Flex
                            bg={ColorMode('white', 'gray.900')}
                            color={ColorMode('black', 'white')}
                            direction="column"
                            align="center"
                            p={3}
                            h="100%"
                            boxShadow={`0px 0px 3px 0px  ${ColorMode('black', 'white')}`}
                            borderRadius={3}
                        >
                            <HStack>
                                <Tag color="white" bg="orange">
                                    <TagLeftIcon boxSize="12px" as={SiJavascript} />{' '}
                                    JavaScript
                                </Tag>
                            </HStack>
                            <Heading fontWeight={300} fontSize={35} margin={1}>
                                MyCalc
                            </Heading>
                            <Text textAlign="justify" mb={5}>
                                Abril / 2022
                            </Text>
                            <Text mb={5} textAlign="justify">
                                Calculadora com as opera????es simples desenvolvida em
                                javaScript, html e design em css, para fins de
                                aprendizado.
                            </Text>
                            <ButtonRef
                                rep="https://github.com/Smylle3/MyCalc"
                                site="https://my-calc-theta.vercel.app/"
                            />
                        </Flex>
                    </ScaleFade>

                    <ScaleFade whileHover={{ scale: 1.1 }} in>
                        <Flex
                            bg={ColorMode('white', 'gray.900')}
                            color={ColorMode('black', 'white')}
                            direction="column"
                            align="center"
                            p={3}
                            h="100%"
                            boxShadow={`0px 0px 3px 0px  ${ColorMode('black', 'white')}`}
                            borderRadius={3}
                        >
                            <HStack>
                                <Tag color="white" bg="blue.400">
                                    <TagLeftIcon boxSize="12px" as={SiReact} /> React
                                    Native
                                </Tag>
                                <Tag color="white" bg="green.500">
                                    <TagLeftIcon boxSize="12px" as={SiAndroid} /> Android
                                </Tag>
                                <Tag color="white" bg="gray.600">
                                    <TagLeftIcon boxSize="12px" as={SiIos} /> IOS
                                </Tag>
                            </HStack>
                            <Heading fontWeight={300} fontSize={35} margin={1}>
                                Locale
                            </Heading>
                            <Text textAlign="justify" mb={5}>
                                Mar??o / 2022 - Em produ????o
                            </Text>
                            <Text mb={5} textAlign="justify">
                                Aplicativo m??vel para entrega de encomendas com sistema de
                                rotas. Est?? sendo desenvolvido em React Native.
                            </Text>
                            <ButtonRef rep="https://github.com/Smylle3/Frontend-Locale" />
                        </Flex>
                    </ScaleFade>

                    <ScaleFade whileHover={{ scale: 1.1 }} in>
                        <Flex
                            bg={ColorMode('white', 'gray.900')}
                            color={ColorMode('black', 'white')}
                            boxShadow={`0px 0px 3px 0px  ${ColorMode('black', 'white')}`}
                            direction="column"
                            align="center"
                            p={3}
                            h="100%"
                            borderRadius={3}
                        >
                            <HStack>
                                <Tag color="white" bg="blue.400">
                                    <TagLeftIcon boxSize="12px" as={SiReact} /> React
                                    Native
                                </Tag>
                                <Tag color="white" bg="green.500">
                                    <TagLeftIcon boxSize="12px" as={SiAndroid} /> Android
                                </Tag>
                                <Tag color="white" bg="gray.600">
                                    <TagLeftIcon boxSize="12px" as={SiIos} /> IOS
                                </Tag>
                            </HStack>
                            <Heading fontWeight={300} fontSize={35} margin={1}>
                                Imc Calc
                            </Heading>
                            <Text textAlign="justify" mb={5}>
                                Fevereiro / 2022
                            </Text>
                            <Text mb={5} textAlign="justify">
                                Aplicativo m??vel que calcula o ??ndice de massa corp??rea de
                                uma pessoa. ?? minha primeira aplica????o desenvolvida em
                                React Native.
                            </Text>
                            <ButtonRef rep="https://github.com/Smylle3/imcCalc" />
                        </Flex>
                    </ScaleFade>

                    <ScaleFade whileHover={{ scale: 1.1 }} in>
                        <Flex
                            bg={ColorMode('white', 'gray.900')}
                            color={ColorMode('black', 'white')}
                            boxShadow={`0px 0px 3px 0px  ${ColorMode('black', 'white')}`}
                            direction="column"
                            align="center"
                            p={3}
                            h="100%"
                            borderRadius={3}
                        >
                            <HStack>
                                <Tag color="white" bg="black">
                                    <TagLeftIcon boxSize="12px" as={SiNextDotJs} /> Next
                                    Js
                                </Tag>
                                <Tag color="white" bg="orange">
                                    <TagLeftIcon boxSize="12px" as={SiJavascript} />{' '}
                                    JavaScript
                                </Tag>
                                <Tag color="white" bg="orange.600">
                                    <TagLeftIcon boxSize="12px" as={SiHtml5} /> HTML
                                </Tag>
                            </HStack>
                            <Heading fontWeight={300} fontSize={35} margin={1}>
                                MyChat
                            </Heading>
                            <Text textAlign="justify" mb={5}>
                                Janeiro / 2022 - Em produ????o
                            </Text>
                            <Text mb={5} textAlign="justify">
                                A proposta do projeto ?? que seja uma plataforma de
                                conversas online semelhante ao Discord e ao WhatsApp. Est??
                                sendo desenvolvido com NextJs.
                            </Text>
                            <ButtonRef rep="https://github.com/Smylle3/myChat" />
                        </Flex>
                    </ScaleFade>

                    <ScaleFade whileHover={{ scale: 1.1 }} in>
                        <Flex
                            bg={ColorMode('white', 'gray.900')}
                            color={ColorMode('black', 'white')}
                            direction="column"
                            align="center"
                            p={3}
                            h="100%"
                            boxShadow={`0px 0px 3px 0px  ${ColorMode('black', 'white')}`}
                            borderRadius={3}
                        >
                            <HStack>
                                <Tag color="white" bg="blue.400">
                                    <TagLeftIcon boxSize="12px" as={SiReact} /> React Js
                                </Tag>
                                <Tag color="white" bg="green.500">
                                    <TagLeftIcon boxSize="12px" as={SiSpring} /> Spring
                                    Boot
                                </Tag>
                            </HStack>
                            <Heading fontWeight={300} fontSize={35} margin={1}>
                                DSMovie
                            </Heading>
                            <Text textAlign="justify" mb={5}>
                                Janeiro / 2022
                            </Text>
                            <Text mb={5} textAlign="justify">
                                Vers??o antiga de uma aplica????o para avaliar filmes,
                                desenvolvida a partir de um curso disponibilizado pela{' '}
                                <Link
                                    href="https://learn.devsuperior.com/"
                                    isExternal
                                    color="blue.400"
                                >
                                    DevSuperior
                                </Link>{' '}
                                com frontend em React Js e backend em SpringBoot.
                            </Text>
                            <ButtonRef
                                rep="https://github.com/Smylle3/dsmovie"
                                site="https://smylle-dsmovie.netlify.app/"
                            />
                        </Flex>
                    </ScaleFade>
                </SimpleGrid>
            </Flex>
        </ScaleFade>
    )
}
