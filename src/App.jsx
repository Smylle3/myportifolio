import React from 'react'
import { Flex } from '@chakra-ui/react'
import useMobile from 'functions/useMobile'
import Principal from 'components/principal/principal'
import SideBar from 'components/sideBar/sideBar'
import backImage from './assets/bg.jpg'
import backImageMobile from './assets/bgm.jpg'
import MobileNavBar from 'components/mobileNavBar/mobileNavBar'
import { Vertical } from 'animation/vertical'
import { NavButtons } from 'components/navButtons'

function App() {
    return (
        <Flex
            direction={{ base: 'column', xxl: 'row' }}
            bgImage={useMobile() ? backImageMobile : backImage}
            bgPos="center"
            bgSize="cover"
            bgRepeat="no-repeat"
        >
            {useMobile() ? (
                <>
                    <NavButtons />
                    <MobileNavBar />
                    <Principal />
                </>
            ) : (
                <>
                    <SideBar />
                    <Vertical />
                </>
            )}
        </Flex>
    )
}

export default App
