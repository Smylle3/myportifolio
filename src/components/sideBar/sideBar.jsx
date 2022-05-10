import React from 'react'
import { Center, Flex, Heading, Image, Text } from '@chakra-ui/react'

import photo from '../../assets/perfil.jpg'
import ColorMode from 'functions/colorMode'
import TextGroup from './components/textGroup'
import { ColorModeSwitcher } from 'theme/ColorModeSwitcher'

export default function SideBar() {
    return (
        <Center w="20%" h="100%" flexDirection="column" cursor="default" position="fixed">
            <ColorModeSwitcher />
            <Flex
                boxShadow={`0px 0px 3px 0px ${ColorMode('black', 'white')}`}
                color={ColorMode('black', 'white')}
                h="80%"
                w="85%"
                align="center"
                textAlign="center"
                padding="25px 0px"
                borderRadius={4}
                flexDirection="column"
                overflowY="scroll"
                css={{
                    '&::-webkit-scrollbar': {
                        width: '5px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: `${ColorMode('white', 'black')}`,
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
                    boxShadow={`1px 1px 3px 0px ${ColorMode('black', 'white')}`}
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
