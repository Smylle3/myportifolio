import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      aaa
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher />
      </Grid>
    </Box>
  </ChakraProvider>
)
