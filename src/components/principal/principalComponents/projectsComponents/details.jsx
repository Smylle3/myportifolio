import { Button, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'

export default function Details(props) {
    return (
        <Flex direction="column">
            <Text marginBottom={5}>{props.abreviation}</Text>
            <Link href={props.link1} style={{ textDecoration: 'none' }} isExternal>
                <Button
                    marginBottom={5}
                    variant="github"
                    _focus={{ outline: 0 }}
                    leftIcon={<BsGithub />}
                    w="100%"
                >
                    Repositório GitHub
                </Button>
            </Link>
            <Link href={props.link2} style={{ textDecoration: 'none' }} isExternal>
                <Button
                    variant="site"
                    _focus={{ outline: 0 }}
                    leftIcon={<BiLinkExternal />}
                    w="100%"
                >
                    {props.name} Oficial
                </Button>
            </Link>
        </Flex>
    )
}
