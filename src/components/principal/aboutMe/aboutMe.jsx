import { Flex, Text } from '@chakra-ui/react'
import ColorMode from 'functions/colorMode'
import React from 'react'

export default function AboutMe() {
    return (
        <Flex
            backdropFilter="auto"
            backdropBlur="100px"
            p={3}
            borderRadius={5}
            boxShadow={`0px 0px 3px 0px ${ColorMode('black', 'white')}`}
            color={ColorMode('black', 'white')}
        >
            <Text fontSize="lg" fontWeight={300} textAlign="justify">
                Olá, sou João Pedro, também sou conhecido por Sorriso e costumo usar o
                nickName Smylle em minhas redes. Como o apelido já sugere, sou uma pessoa
                bem humorada e busco soluções de forma tranquila e eficaz. Sou
                desenvolvedor frontend em evolução buscando aprender e me aprofundar mais
                nessa área que tanto amo.
            </Text>
        </Flex>
    )
}
