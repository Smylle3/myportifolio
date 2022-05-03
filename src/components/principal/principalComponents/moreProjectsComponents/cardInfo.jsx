import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'

export default function CardInfo(props) {
    return (
        <Box color="black">
            <Flex marginBottom={3}>
                {props.lang.map((langs) => (
                    <Flex key={langs.id} marginRight={2}>
                        <Text
                            border="1px solid"
                            borderColor="gray.700"
                            borderRadius="full"
                            bg="gray.200"
                            w="fit-content"
                            padding="2px 7px"
                        >
                            {langs.name}
                        </Text>
                    </Flex>
                ))}
            </Flex>
            <Heading>{props.title}</Heading>
            <Text color="gray.500" textAlign="justify">
                {props.resum}
            </Text>
            <Link href={props.link1} style={{ textDecoration: 'none' }} isExternal>
                <Button
                    margin="5px 0px"
                    variant="github"
                    _focus={{ outline: 0 }}
                    leftIcon={<BsGithub />}
                    w="100%"
                >
                    Repositório GitHub
                </Button>
            </Link>
            {props.site ? (
                <Link href={props.link2} style={{ textDecoration: 'none' }} isExternal>
                    <Button
                        variant="site"
                        _focus={{ outline: 0 }}
                        leftIcon={<BiLinkExternal />}
                        w="100%"
                    >
                        Visitar Website
                    </Button>
                </Link>
            ) : null}
        </Box>
    )
}
