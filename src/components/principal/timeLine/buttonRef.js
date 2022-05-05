import { Button, Link } from '@chakra-ui/react'
import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { SiGithub } from 'react-icons/si'

export default function ButtonRef(props) {
    return (
        <>
            <Link href={props.rep} style={{ textDecoration: 'none' }} w="100%" isExternal>
                <Button
                    w="100%"
                    variant="github"
                    _focus={{ outline: 0 }}
                    leftIcon={<SiGithub />}
                >
                    Repositório GitHub
                </Button>
            </Link>
            {props.site ? (
                <Link
                    href={props.site}
                    style={{ textDecoration: 'none' }}
                    w="100%"
                    isExternal
                >
                    <Button
                        w="100%"
                        variant="site"
                        _focus={{ outline: 0 }}
                        leftIcon={<BiLinkExternal />}
                    >
                        WebSite
                    </Button>
                </Link>
            ) : null}
        </>
    )
}
