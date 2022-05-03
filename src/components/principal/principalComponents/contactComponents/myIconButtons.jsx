import React from 'react'
import { IconButton, Link } from '@chakra-ui/react'

export default function MyIconButtons(props) {
    return (
        <Link href={props.link} isExternal>
            <IconButton
                icon={props.icon}
                variant="ghost"
                colorScheme="blackAlpha"
                border="1px solid orange"
                color="orange"
                margin="0px 10px"
                isRound
                _hover={{
                    background: 'orange',
                    color: 'grayBG'
                }}
                _focus={{ outline: 0 }}
            />
        </Link>
    )
}
