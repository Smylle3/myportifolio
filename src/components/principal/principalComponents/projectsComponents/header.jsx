import { AccordionIcon, Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'

export default function Header(props) {
    return (
        <Box>
            <Heading
                marginBottom={2}
                bgGradient="linear(to-r, orange.400, orange.200, orange.400)"
                bgClip="text"
            >
                {props.title}
            </Heading>
            <Image src={props.image} />
            <AccordionIcon />
        </Box>
    )
}
