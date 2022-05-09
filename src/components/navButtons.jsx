import React from 'react'
import ColorMode from 'functions/colorMode'
import { IconButton, Flex, Tooltip, useDisclosure, SlideFade } from '@chakra-ui/react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { ColorModeSwitcher } from 'theme/ColorModeSwitcher'

import { RiHomeLine } from 'react-icons/ri'
import { SiAboutDotMe } from 'react-icons/si'
import { BiFolder, BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { AiOutlineAppstore, AiOutlineDatabase, AiOutlineControl } from 'react-icons/ai'

export const NavButtons = () => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Flex direction="column" pos="fixed" zIndex={300} right={2} bottom="10%">
            <SlideFade offsetX={50} in={isOpen}>
                <Flex direction="column">
                    <ColorModeSwitcher />
                    <Tooltip
                        label="Home"
                        placement="left"
                        hasArrow
                        bg={ColorMode('white', 'black')}
                        color={ColorMode('black', 'white')}
                    >
                        <IconButton
                            onClick={() => scroll.scrollToTop()}
                            variant="zones"
                            icon={<RiHomeLine size={20} />}
                            boxShadow={`1px 1px 3px 1px black`}
                            _focus={{ outline: 0 }}
                        />
                    </Tooltip>

                    <Link
                        activeClass="active"
                        to="destaque"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={1}
                    >
                        <Tooltip
                            label="Destaques"
                            placement="left"
                            hasArrow
                            bg={ColorMode('white', 'black')}
                            color={ColorMode('black', 'white')}
                        >
                            <IconButton
                                variant="zones"
                                icon={<AiOutlineAppstore size={20} />}
                                boxShadow={`1px 1px 3px 1px black`}
                                _focus={{ outline: 0 }}
                            />
                        </Tooltip>
                    </Link>

                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={0}
                    >
                        <Tooltip
                            label="Sobre mim"
                            placement="left"
                            hasArrow
                            bg={ColorMode('white', 'black')}
                            color={ColorMode('black', 'white')}
                        >
                            <IconButton
                                variant="zones"
                                icon={<SiAboutDotMe size={20} />}
                                boxShadow={`1px 1px 3px 1px black`}
                                _focus={{ outline: 0 }}
                            />
                        </Tooltip>
                    </Link>

                    <Link
                        activeClass="active"
                        to="projetos"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={0}
                    >
                        <Tooltip
                            label="Projetos"
                            placement="left"
                            hasArrow
                            bg={ColorMode('white', 'black')}
                            color={ColorMode('black', 'white')}
                        >
                            <IconButton
                                variant="zones"
                                icon={<AiOutlineDatabase size={20} />}
                                boxShadow={`1px 1px 3px 1px black`}
                                _focus={{ outline: 0 }}
                            />
                        </Tooltip>
                    </Link>

                    <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={0}
                    >
                        <Tooltip
                            label="Skills"
                            placement="left"
                            hasArrow
                            bg={ColorMode('white', 'black')}
                            color={ColorMode('black', 'white')}
                        >
                            <IconButton
                                variant="zones"
                                icon={<AiOutlineControl size={20} />}
                                boxShadow={`1px 1px 3px 1px black`}
                                _focus={{ outline: 0 }}
                            />
                        </Tooltip>
                    </Link>

                    <Link
                        activeClass="active"
                        to="exp"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={0}
                    >
                        <Tooltip
                            label="Experiência"
                            placement="left"
                            hasArrow
                            bg={ColorMode('white', 'black')}
                            color={ColorMode('black', 'white')}
                        >
                            <IconButton
                                variant="zones"
                                icon={<BiFolder size={20} />}
                                boxShadow={`1px 1px 3px 1px black`}
                                _focus={{ outline: 0 }}
                            />
                        </Tooltip>
                    </Link>
                </Flex>
            </SlideFade>
            <IconButton
                colorScheme="red"
                variant="solid"
                size="xs"
                isRound
                w={5}
                h={6}
                _focus={{ outline: 0 }}
                onClick={onToggle}
                icon={isOpen ? <BiRightArrow /> : <BiLeftArrow />}
            />
        </Flex>
    )
}
