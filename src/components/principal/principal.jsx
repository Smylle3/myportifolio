import { Button, Flex } from '@chakra-ui/react'
import ColorMode from 'functions/colorMode'
import React, { useState } from 'react'
import MySlider from './slider/slider'

export default function Principal() {
    const [pages, setPages] = useState(1)

    return (
        <Flex
            h="100vh"
            w={{ base: '100%', xxl: '80%' }}
            justify="center"
            overflowY="scroll"
            css={{
                '&::-webkit-scrollbar': {
                    width: '5px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: `${ColorMode('white', 'orange')}`,
                    borderRadius: '25px',
                },
                '&::-webkit-scrollbar-track': {
                    width: '5px',
                    margin: '25px',
                },
            }}
        >
            <Button onClick={() => setPages(pages - 1)}>Volta</Button>
            <MySlider pages={pages} setPages={setPages} />
            <Button onClick={() => setPages(pages + 1)}>vai</Button>
        </Flex>
    )
}
