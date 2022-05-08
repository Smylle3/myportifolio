import React from 'react'
import { IconButton, Flex, Tooltip } from '@chakra-ui/react'
import { RiHomeLine } from 'react-icons/ri'
import { AiOutlineAppstore, AiOutlineDatabase, AiOutlineControl } from 'react-icons/ai'
import ColorMode from 'functions/colorMode'
import { Link, animateScroll as scroll } from 'react-scroll'
import { ColorModeSwitcher } from 'theme/ColorModeSwitcher'

export const NavButtons = props => {
    function scrollTop() {
        scroll.scrollToTop()
    }
    return (
        <Flex direction="column" pos="fixed" zIndex={300} right={2} bottom="10%">
            <ColorModeSwitcher />
            <Tooltip
                label="Home"
                placement="left"
                hasArrow
                bg={ColorMode('white', 'black')}
                color={ColorMode('black', 'white')}
            >
                <IconButton
                    onClick={() => scrollTop()}
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
                offset={-20}
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
                to="projetos"
                spy={true}
                smooth={true}
                duration={500}
                offset={-20}
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
                offset={-20}
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
        </Flex>
    )
}
