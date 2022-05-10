import { Box, Heading, ScaleFade, SimpleGrid } from '@chakra-ui/react'
import MyAccordion from 'components/principal/myAccordion/myAccordion'
import React from 'react'
import pokecoin from '../../../assets/07.png'
import pomodoro from '../../../assets/pomo.png'
import { SiReact, SiFirebase } from 'react-icons/si'
import { useInView } from 'react-intersection-observer'

export default function Destaques() {
    const { ref, inView } = useInView({
        threshold: 0.2,
    })

    return (
        <ScaleFade initialScale={0.5} in={inView}>
            <Box ref={ref}>
                <Heading fontWeight={300} fontSize={40} mb={10} cursor="default">
                    Projetos destaque
                </Heading>
                <SimpleGrid columns={2} spacing={7}>
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
                    <MyAccordion
                        title="PokéCoin"
                        image={pokecoin}
                        date="Abril / 2022"
                        abreviation="PokeCoin é uma plataforma de negociação de pokémons. Desenvolvido com ReactJs e bando de dados com Firebase realizei esse projeto para adquirir conhecimentos no desenvolvimento frontend."
                        rep="https://github.com/Smylle3/poke_coin"
                        site="https://poke-coin.vercel.app/"
                        framework="React Js"
                        styles="Chakra Ui"
                        backend="Firebase"
                        frameIcon={SiReact}
                        frameBack={SiFirebase}
                    />
                </SimpleGrid>
            </Box>
        </ScaleFade>
    )
}
