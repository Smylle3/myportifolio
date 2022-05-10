import React from 'react'
import { Flex } from '@chakra-ui/react'
import useMobile from 'functions/useMobile'
import Principal from 'components/principal/principal'
import SideBar from 'components/sideBar/sideBar'
import backImageMobile from './assets/bgm.jpg'
import MobileNavBar from 'components/mobileNavBar/mobileNavBar'
import { NavButtons } from 'components/navButtons'
import WebPrincipal from 'components/webPrincipal/webPrincipal'
import ColorMode from 'functions/colorMode'

function App() {
    return (
        <Flex
            direction="column"
            //direction={{ base: 'column', xxl: 'row' }}
            bgColor={ColorMode('gray.100', 'gray.800')}
            bgImage={useMobile() ? backImageMobile : backImageMobile}
            bgPos="center"
            bgSize="cover"
            bgRepeat="no-repeat"
        >
            {true ? (
                <>
                    <NavButtons />
                    <MobileNavBar />
                    <Principal />
                </>
            ) : (
                <>
                    <SideBar />
                    <WebPrincipal />
                </>
            )}
        </Flex>
    )
}

export default App
