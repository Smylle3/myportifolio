import React from 'react'
import { Center, Heading, Image } from '@chakra-ui/react'
import ColorMode from 'functions/colorMode'
import { Logo } from 'animation/Logo'
import photo from '../../assets/perfil.jpg'
import { useInView } from 'react-intersection-observer'
import Shadenavbar from './shadenavbar'

export default function MobileNavBar() {
    const { ref, inView } = useInView({
        threshold: 0,
    })
    return (
        <>
            <Center
                flexDirection="column"
                h="100vh"
                textAlign="center"
                backdropFilter="auto"
                backdropBlur="10px"
                bgGradient={`linear(to-b, ${ColorMode(
                    'white',
                    'black'
                )}, transparent, transparent)`}
                ref={ref}
            >
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
                    alt="text"
                    src={photo}
                    w="10em"
                    borderRadius="full"
                    border={`3px solid ${ColorMode('white', 'black')}`}
                    boxShadow={`1px 1px 10px -1px ${ColorMode('black', 'black')}`}
                />
            </Center>
            <Shadenavbar inView={inView} />
        </>
    )
}
