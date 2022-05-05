import { Center, Flex, Heading, Progress, ScaleFade } from '@chakra-ui/react'
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
                borderColor={`${ColorMode('#FF0080', '#7928CA')}`}
                color="#FF0080"
                _hover={{
                    boxShadow: `0px 0px 5px 2px ${ColorMode('#7928CA', '#FF0080')}`,
                    backgroundColor: ColorMode('rgba(255, 255, 255, 0.3)', 'black'),
                }}
            >
                <Heading
                    borderRadius={5}
                    fontWeight={400}
                    fontSize={30}
                    mb={5}
                    textAlign="center"
                    color={`${ColorMode('white', 'black')}`}
                    bgGradient={`linear(to-l,${ColorMode(
                        '#7928CA',
                        '#FF0080'
                    )}, ${ColorMode('#FF0080', '#7928CA')}, ${ColorMode(
                        '#7928CA',
                        '#FF0080'
                    )})`}
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
                <Progress
                    colorScheme="pink"
                    size="sm"
                    value={props.value}
                    max={10}
                    w="100%"
                    borderRadius="full"
                    mb={5}
                />
                {props.value} / 10
            </Center>
        </ScaleFade>
    )
}
