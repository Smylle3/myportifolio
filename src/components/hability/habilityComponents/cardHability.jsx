import { Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function CardHability(props) {
    return (
        <Center
            bg="gray.100"
            height="80px"
            borderRadius={10}
            flexDirection="column"
            h="250px"
            color={props.color}
            boxShadow="3px 3px 10px 0px black"
        >
            {props.icon}
            <Text margin={5}>{props.name}</Text>
            <Flex bg={props.color} w={5} h={5} borderRadius="full" />
        </Center>
    )
}
