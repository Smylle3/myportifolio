import { Flex } from '@chakra-ui/react'
import Hability from 'components/hability/hability'
import React from 'react'
import Contact from './principalComponents/contact'
import MoreProjects from './principalComponents/moreProjects'
import Projects from './principalComponents/projects'

export default function PrincipalContents(props) {
    switch (props.page) {
        case 1:
            return (
                <>
                    <Flex
                        bgGradient="linear(to-b, black, transparent)"
                        w="80%"
                        justify="center"
                    >
                        <Contact />
                    </Flex>
                    <Flex border="1px solid orange" w="80%" />
                    <Projects />
                    <Flex border="1px solid orange" w="80%" />
                    <MoreProjects />
                    <Flex
                        bgGradient="linear(to-t, black, transparent)"
                        w="80%"
                        justify="center"
                    >
                        <Contact />
                    </Flex>
                </>
            )
        case 2:
            return <Hability />
        default:
            break
    }
}
