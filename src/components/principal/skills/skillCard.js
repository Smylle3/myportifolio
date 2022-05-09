import { Center, Flex, Heading, ScaleFade } from '@chakra-ui/react'
import ColorMode from 'functions/colorMode'
import React from 'react'

export default function SkillCard(props) {
    return (
        <ScaleFade in whileHover={{ scale: 1.1 }}>
            <Center
                flexDirection="column"
                p={5}
                border="2px solid"
                borderRadius={5}
                borderColor="white"
                color="#FF0080"
                _hover={{
                    boxShadow: `0px 0px 5px 2px white`,
                    backgroundColor: ColorMode('rgba(255, 255, 255, 0.3)', 'black'),
                }}
            >
                <Heading
                    borderRadius={5}
                    fontWeight={400}
                    fontSize={20}
                    mb={5}
                    textAlign="center"
                    color={`${ColorMode('white', 'black')}`}
                    bg={`${ColorMode('gray.900', 'white')}`}
                    w="100%"
                >
                    {props.title}
                </Heading>
                <Flex
                    borderRadius={10}
                    bg={`${ColorMode('white', 'gray.800')}`}
                    p={5}
                    mb={5}
                >
                    {props.icon}
                </Flex>
            </Center>
        </ScaleFade>
    )
}
