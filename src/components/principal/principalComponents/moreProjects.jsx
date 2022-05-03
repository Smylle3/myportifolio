import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import MyTimeline from './moreProjectsComponents/myTimeline'

export default function MoreProjects() {
    return (
        <Flex
            w="100%"
            direction="column"
            align="center"
            color="orange.400"
            margin="20px 0px"
        >
            <Heading
                bgGradient="linear(to-r, orange.400, orange.200, orange.400)"
                bgClip="text"
                marginBottom={5}
            >
                Outros projetos
            </Heading>
            <MyTimeline />
        </Flex>
    )
}
