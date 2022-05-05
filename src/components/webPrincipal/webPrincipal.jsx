import { Flex } from '@chakra-ui/react'
import { AnimationButton } from 'animation/animationButton'
import MySlider from 'components/principal/slider/slider'
import ColorMode from 'functions/colorMode'
import React, { useState } from 'react'
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'

export default function WebPrincipal() {
    const [pages, setPages] = useState(1)

    return (
        <Flex
            h="100vh"
            w={{ base: '100%', xxl: '80%' }}
            justify='center'
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
            <AnimationButton onClick={() => setPages(pages - 1)} direction="r" left={0}>
                <BiLeftArrow size="55px" color={ColorMode('white', 'orange')} />
            </AnimationButton>
            <MySlider pages={pages} setPages={setPages} />
            <AnimationButton onClick={() => setPages(pages + 1)} direction="l" right={0}>
                <BiRightArrow size="55px" color={ColorMode('white', 'orange')} />
            </AnimationButton>
        </Flex>
    )
}
