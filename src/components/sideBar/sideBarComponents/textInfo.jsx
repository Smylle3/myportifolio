import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function TextInfo(props) {
    return (
        <Flex
            direction="column"
            w="100%"
            borderBottom="1px solid orange"
            marginBottom={5}
            paddingBottom={2}
        >
            <Text>{props.Title}</Text>
            <Text color="orange.400" fontSize="lg">
                {props.Content}
            </Text>
        </Flex>
    )
}
