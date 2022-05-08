import { Flex, IconButton, Link, Tooltip } from '@chakra-ui/react'
import ColorMode from 'functions/colorMode'
import React from 'react'
import { SiGmail, SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si'

export default function Shadenavbar({ inView }) {
    return (
        <Flex
            display={inView ? 'none' : 'flex'}
            pos="sticky"
            top={0}
            zIndex={1000}
            bg={ColorMode('white', 'black')}
            color={ColorMode('black', 'white')}
            p="7px 2em 0em 2em"
            align="center"
            justify="space-around"
        >
            <Link
                isExternal
                href="https://www.linkedin.com/in/jo%C3%A3o-pedro-smylle/"
                style={{ textDecoration: 'none' }}
            >
                <Tooltip
                    label="LinkedIn"
                    placement="bottom"
                    hasArrow
                    bg={ColorMode('black', 'white')}
                    color={ColorMode('white', 'black')}
                >
                    <IconButton
                        icon={<SiLinkedin />}
                        variant="github"
                        _focus={{ outline: 0 }}
                    />
                </Tooltip>
            </Link>
            <Link
                isExternal
                href="https://api.whatsapp.com/send?phone=5561984145192&text=Ol%C3%A1%20Jo%C3%A3o%20Pedro%2C%20tudo%20bem%3F"
                style={{ textDecoration: 'none' }}
            >
                <Tooltip
                    label="WhatsApp"
                    placement="bottom"
                    hasArrow
                    bg={ColorMode('black', 'white')}
                    color={ColorMode('white', 'black')}
                >
                    <IconButton
                        icon={<SiWhatsapp />}
                        variant="github"
                        _focus={{ outline: 0 }}
                    />
                </Tooltip>
            </Link>
            <Link
                isExternal
                href="https://www.instagram.com/dompedro_iv/"
                style={{ textDecoration: 'none' }}
            >
                <Tooltip
                    label="Instagram"
                    placement="bottom"
                    hasArrow
                    bg={ColorMode('black', 'white')}
                    color={ColorMode('white', 'black')}
                >
                    <IconButton
                        icon={<SiInstagram />}
                        variant="github"
                        _focus={{ outline: 0 }}
                    />
                </Tooltip>
            </Link>
            <Link
                isExternal
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=joao21731@gmail.com"
                style={{ textDecoration: 'none' }}
            >
                <Tooltip
                    label="Email"
                    placement="bottom"
                    hasArrow
                    bg={ColorMode('black', 'white')}
                    color={ColorMode('white', 'black')}
                >
                    <IconButton
                        icon={<SiGmail />}
                        variant="github"
                        _focus={{ outline: 0 }}
                    />
                </Tooltip>
            </Link>
        </Flex>
    )
}
