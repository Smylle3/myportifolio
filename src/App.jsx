import SideBar from 'components/sideBar/sideBar'
import Principal from 'components/principal/principal'
import backImage from './assets/bg.jpg'

const { Flex } = require('@chakra-ui/react')

function App() {
    return (
        <Flex bgImage={backImage} bgPos="center" bgSize="cover" bgRepeat="no-repeat" h='100vh' >
            <Flex
                backdropFilter="auto"
                backdropBlur="20px"
                direction={{ dk: 'row', lg: 'column' }}
                h='100%'
            >
                <SideBar />
                <Principal />
            </Flex>
        </Flex>
    )
}

export default App
