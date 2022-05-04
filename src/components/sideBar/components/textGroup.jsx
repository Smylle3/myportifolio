import { Box, Text } from '@chakra-ui/react'
import ColorMode from 'functions/colorMode'
import React from 'react'

export default function TextGroup(props) {
    return (
        <Box textAlign="center" margin="10px 0px" w="90%">
            <Text color={ColorMode('white', 'orange')} fontWeight={700} fontSize={18}>
                {props.title}
            </Text>
            <Text color={ColorMode('black', 'white')} fontSize={15} fontWeight={500}>
                {props.content}
            </Text>
            <Box border={`1px solid ${ColorMode('white', 'orange')}`} marginTop={2} />
        </Box>
    )
}
