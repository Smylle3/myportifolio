import React from 'react'
import { Center, Flex, Heading, Image, Text } from '@chakra-ui/react'

import photo from '../../assets/perfil.jpg'
import ColorMode from 'functions/colorMode'
import TextGroup from './components/textGroup'
import { ColorModeSwitcher } from 'theme/ColorModeSwitcher'

export default function SideBar() {
    return (
        <Center w="20%">
            <ColorModeSwitcher />
            <Flex
                border={`2px solid ${ColorMode('white', 'orange')}`}
                bgGradient={`linear(to-b, ${ColorMode('white', 'black')}, transparent)`}
                backdropFilter="auto"
                backdropBlur="10px"
                color={ColorMode('black', 'orange')}
                h="80%"
                w="85%"
                align="center"
                textAlign="center"
                padding="25px 0px"
                borderRadius={10}
                flexDirection="column"
                overflowY="scroll"
                css={{
                    '&::-webkit-scrollbar': {
                        width: '5px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: `${ColorMode('white', 'orange')}`,
                        borderRadius: '25px',
                    },
                    '&::-webkit-scrollbar-track': {
                        width: '5px',
                        margin: '25px',
                    },
                }}
            >
                <Image
                    alt="text"
                    src={photo}
                    w="70%"
                    borderRadius="full"
                    border={`3px solid ${ColorMode('white', 'orange')}`}
                    boxShadow={`1px 1px 10px -1px ${ColorMode('black', 'black')}`}
                />
                <Heading fontWeight={300}>João Pedro</Heading>
                <Text>Frontend Developer</Text>
                <TextGroup title="Cursando" content="Engenharia de computação" />
                <TextGroup title="Nascimento" content="15/05/2000" />
                <TextGroup title="Localização" content="Brasília-DF" />
            </Flex>
        </Center>
    )
}
