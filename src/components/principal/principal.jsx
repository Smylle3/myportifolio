import { Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import PrincipalContents from './principalContents'

export default function Principal() {
    const [page, setPage] = useState(1)

    const slider = (event) => {
        switch (event) {
            case 'preview':
                if (page === 1) return
                else setPage(page - 1)
                break
            case 'next':
                if (page === 2) return
                else setPage(page + 1)
                break
            default:
                break
        }
    }

    return (
        <Flex
            w={{ dk: '80vw' }}
            h="100%"
            overflowY="scroll"
            css={{
                '&::-webkit-scrollbar': {
                    width: '5px'
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'white',
                    borderRadius: '25px'
                },
                '&::-webkit-scrollbar-track': {
                    width: '5px',
                    margin: '25px'
                }
            }}
        >
            {page !== 1 ? (
                <Flex
                    position="fixed"
                    height="100%"
                    align="center"
                    color="white"
                    cursor="pointer"
                    _hover={{ bgGradient: 'linear(to-r, gray.900, transparent)' }}
                    onClick={() => slider('preview')}
                >
                    <MdKeyboardArrowLeft size={75} color="white" />
                </Flex>
            ) : null}
            <Flex flexDirection="column" align="center" w='100%'>
                <PrincipalContents page={page} />
            </Flex>
            {page !== 2 ? (
                <Flex
                    position="fixed"
                    right={0}
                    height="100%"
                    align="center"
                    cursor="pointer"
                    _hover={{ bgGradient: 'linear(to-l, black, transparent)' }}
                    onClick={() => slider('next')}
                >
                    <MdKeyboardArrowRight size={75} color="#fff" />
                </Flex>
            ) : null}
        </Flex>
    )
}
