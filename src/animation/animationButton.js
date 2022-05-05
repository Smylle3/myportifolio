import React from 'react'
import { Center } from '@chakra-ui/react'
import ColorMode from 'functions/colorMode'

export const AnimationButton = props => {
    return (
        <Center
            {...props}
            h='100%'
            bottom={0}
            onClick={props.onClick}
            cursor="pointer"
            bgGradient={`linear(to-${props.direction}, ${ColorMode(
                'rgba(255, 255, 255, 0.1 )',
                'rgba(255,165,0, 0.1 )'
            )}, transparent)`}
            _hover={{
                bgGradient: `linear(to-${props.direction}, ${ColorMode(
                    'rgba(255, 255, 255, 0.3 )',
                    'rgba(255,165,0, 0.3 )'
                )}, transparent)`,
                transition: 'all 0.5s ease',
            }}
            _active={{
                bg: `${ColorMode('orange', 'white')}`,
            }}
        >
            {props.children}
        </Center>
    )
}
