import { useColorModeValue } from '@chakra-ui/react'

export default function ColorMode(light, dark) {
    return useColorModeValue(light, dark)
}
