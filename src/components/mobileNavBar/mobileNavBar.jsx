import React from 'react'
import { Center, Heading, Image } from '@chakra-ui/react'
import ColorMode from 'functions/colorMode'
import { Logo } from 'animation/Logo'
import { ColorModeSwitcher } from 'theme/ColorModeSwitcher'
import photo from '../../assets/perfil.jpg'

export default function MobileNavBar() {
    return (
        <Center
            flexDirection="column"
            h="100vh"
            textAlign="center"
            backdropFilter="auto"
            backdropBlur="10px"
            bgGradient={`linear(to-b, ${ColorMode('white', 'black')}, transparent, transparent)`}
        >
            <ColorModeSwitcher />
            <Logo h="20vmin" />
            <Heading
                fontWeight={400}
                bg={ColorMode('black', 'white')}
                color={ColorMode('white', 'black')}
                fontSize={40}
                marginBottom={10}
            >
                Hi, I'm João Pedro, frontend developer.
            </Heading>
            <Image
                pos="absolute"
                bottom={5}
                left={5}
                alt="text"
                src={photo}
                w="10em"
                borderRadius="full"
                border={`3px solid ${ColorMode('white', 'black')}`}
                boxShadow={`1px 1px 10px -1px ${ColorMode('black', 'black')}`}
            />
        </Center>
    )
}
