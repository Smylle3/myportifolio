import { Flex, Text } from '@chakra-ui/react'
import ColorMode from 'functions/colorMode'
import React from 'react'

export default function AboutMe() {
    return (
        <Flex
            backdropFilter="auto"
            backdropBlur="100px"
            p={3}
            borderRadius={10}
            border="2px solid"
            borderColor={ColorMode('white', 'black')}
        >
            <Text color="black" fontSize="lg" fontWeight={300} textAlign="justify">
                Olá, sou João Pedro, também sou conhecido por Sorriso e costumo usar o
                nickName Smylle em minhas redes. Como o apelido já sugere, sou uma pessoa
                bem humorada e busco soluções de forma tranquila e em um ritmo leve. Sou
                desenvolvedor frontend em evolução buscando aprender e me aprofundar mais
                nessa área que tanto amo. Estou cursando engenharia da computação na
                Universidade de Brasília, conhecendo cada vez mais os diferentes campos da
                tecnologia.
            </Text>
        </Flex>
    )
}
