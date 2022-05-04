import React from 'react'
import {
    Box,
    IconButton,
    keyframes,
    Link,
    SimpleGrid,
    usePrefersReducedMotion,
} from '@chakra-ui/react'
import { SiGithub, SiLinkedin, SiInstagram, SiWhatsapp } from 'react-icons/si'
import photo from '../assets/logo.svg'
import ColorMode from 'functions/colorMode'

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const Logo = props => {
    const prefersReducedMotion = usePrefersReducedMotion()

    const animation = prefersReducedMotion ? undefined : `${spin} infinite 30s linear`

    return (
        <SimpleGrid
            animation={animation}
            columns={2}
            spacing="70px"
            borderRadius="full"
            w="10em"
            h="10em"
            border="1px solid"
            borderColor={ColorMode('black', 'white')}
            bgImage={photo}
            bgPos="center"
            bgRepeat="no-repeat"
            bgSize="contain"
            color="white"
            marginBottom={20}
        >
            <Box>
                <Link href="https://github.com/Smylle3" isExternal>
                    <IconButton
                        animation={animation}
                        colorScheme="blackAlpha"
                        icon={<SiGithub size={25} color="white" />}
                        isRound
                        _focus={{ outline: 0 }}
                        _hover={{
                            boxShadow: `0px 0px 7px 3px ${ColorMode('black', 'white')}`,
                        }}
                    />
                </Link>
            </Box>
            <Box>
                <Link
                    href="https://www.linkedin.com/in/jo%C3%A3o-pedro-smylle/"
                    isExternal
                >
                    <IconButton
                        animation={animation}
                        colorScheme="blackAlpha"
                        icon={<SiLinkedin size={25} color="white" />}
                        isRound
                        _focus={{ outline: 0 }}
                        _hover={{
                            boxShadow: `0px 0px 7px 3px ${ColorMode('black', 'white')}`,
                        }}
                    />
                </Link>
            </Box>
            <Box>
                <Link href="https://www.instagram.com/dompedro_iv/" isExternal>
                    <IconButton
                        animation={animation}
                        colorScheme="blackAlpha"
                        icon={<SiInstagram size={25} color="white" />}
                        isRound
                        _focus={{ outline: 0 }}
                        _hover={{
                            boxShadow: `0px 0px 7px 3px ${ColorMode('black', 'white')}`,
                        }}
                    />
                </Link>
            </Box>
            <Box>
                <Link
                    href="https://api.whatsapp.com/send?phone=5561984145192&text=Ol%C3%A1%20Jo%C3%A3o%20Pedro%2C%20tudo%20bem%3F"
                    isExternal
                >
                    <IconButton
                        animation={animation}
                        colorScheme="blackAlpha"
                        icon={<SiWhatsapp size={25} color="white" />}
                        isRound
                        _focus={{ outline: 0 }}
                        _hover={{
                            boxShadow: `0px 0px 7px 3px ${ColorMode('black', 'white')}`,
                        }}
                    />
                </Link>
            </Box>
        </SimpleGrid>
    )
}
