import React from 'react'
import { Box } from '@chakra-ui/react'
import ColorMode from 'functions/colorMode'
export const Vertical = props => {
    return (
        <Box
            w="2px"
            bgGradient={`linear(to-b, ${ColorMode(
                'red',
                'purple'
            )}, ${ColorMode(
                'orange',
                'blue.800'
            )}, ${ColorMode(
                'yellow',
                'blue.500'
            )}, ${ColorMode(
                'green',
                'green'
            )}, ${ColorMode(
                'blue.500',
                'yellow'
            )}, ${ColorMode(
                'blue.800',
                'orange'
            )}, ${ColorMode(
                'purple',
                'red'
            )})`}
        ></Box>
    )
}
