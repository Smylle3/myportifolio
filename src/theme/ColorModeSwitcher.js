import React from 'react'
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

export const ColorModeSwitcher = props => {
    const { toggleColorMode } = useColorMode()
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)
    return (
        <IconButton
            variant='github'
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
            _focus={{ outline: 0 }}
            zIndex={1100}
        />
    )
}
