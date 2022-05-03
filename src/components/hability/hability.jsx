import { Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import Contact from 'components/principal/principalComponents/contact'
import React from 'react'
import CardHability from './habilityComponents/cardHability'
import { FaHtml5, FaReact } from 'react-icons/fa'
import { SiJavascript, SiNextdotjs } from 'react-icons/si'

export default function Hability() {
    return (
        <>
            <Flex bgGradient="linear(to-b, black, transparent)" w="80%" justify="center">
                <Contact />
            </Flex>
            <Flex border="1px solid orange" w="80%" />
            <Heading
                bgGradient="linear(to-r, orange.400, orange.200, orange.400)"
                bgClip="text"
                margin="20px 0px"
            >
                Habilidades
            </Heading>
            <SimpleGrid columns={4} spacing={5} w="60%" color="black">
                <CardHability
                    name="Html5/Css3"
                    color="orange.500"
                    icon={<FaHtml5 size={100} />}
                />
                <CardHability
                    name="JavaScript"
                    color="orange"
                    icon={<SiJavascript size={100} />}
                />
                <CardHability
                    name="React Js / React Native"
                    color="blue.400"
                    icon={<FaReact size={100} />}
                    value={80}
                />
                <CardHability name="Next Js" color="black" icon={<SiNextdotjs size={100} />} />
            </SimpleGrid>
            <Flex bgGradient="linear(to-t, black, transparent)" w="80%" justify="center">
                <Contact />
            </Flex>
        </>
    )
}
