import React from 'react'
import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react'
import perfil from '../../assets/FOTO.jpg'
import TextInfo from 'components/sideBar/sideBarComponents/textInfo'

export default function SideBar() {
    return (
        <>
            <Center h="100%" w={{ dk: '20vw' }} position={{ dk: 'fixed' }}>
                <Flex
                    h="85%"
                    w="80%"
                    border="2px solid #E2E8F0"
                    bgGradient="linear(to-b, black, gray.900, gray.800, transparent)"
                    borderRadius={25}
                    direction="column"
                    align="center"
                    padding="25px 10px"
                    overflowY="scroll"
                    css={{
                        '&::-webkit-scrollbar': {
                            width: '5px'
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: 'white',
                            borderRadius: '25px'
                        },
                        '&::-webkit-scrollbar-track': {
                            width: '5px',
                            margin: '25px'
                        }
                    }}
                >
                    <Image
                        alt="Perfil Photo"
                        boxSize="250px"
                        margin="10px 0px"
                        src={perfil}
                        borderRadius="full"
                    />
                    <Heading margin="10px 0px" color="orange.400" textAlign="center">
                        JOÃO PEDRO
                    </Heading>
                    <Text>Desenvolvedor frontend</Text>
                    <Flex direction="column" align="center" margin="25px 0" w="100%">
                        <TextInfo
                            Title="Curso (em andamento)"
                            Content="Engenharia da Computação - UnB"
                        />
                        <TextInfo Title="Nascimento" Content="15/05/2000" />
                        <TextInfo Title="Localização" Content="Brasília/DF" />
                    </Flex>
                    <Text textAlign="center">
                        © Copyright 2022 João Rodrigues. All rights reserved. Developed
                        with ReactJs.
                    </Text>
                </Flex>
            </Center>
            <Box h="100vh" w="20vw" display={{ dk: 'flex', lg: 'none' }} />
        </>
    )
}
