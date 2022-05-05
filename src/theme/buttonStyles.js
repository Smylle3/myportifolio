import { mode } from '@chakra-ui/theme-tools'

export const MyButton = {
    baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderRadius: 5,
        marginBottom: 2,
    },

    sizes: {
        sm: {
            fontSize: 'sm',
            px: 4,
            py: 3,
        },
        md: {
            fontSize: 'md',
            px: 6,
            py: 4,
        },
    },

    variants: {
        github: props => ({
            bg: mode('white', 'black')(props),
            color: mode('black', 'white')(props),
            border: '1px solid',
            borderColor: 'black',
            _hover: {
                bg: mode('gray.900', 'white')(props),
                borderColor: mode('white', 'black')(props),
                color: mode('white', 'black')(props),
            },
        }),
        site: props => ({
            bg: mode('orange.300', 'orange')(props),
            color: mode('orange.800', 'white')(props),
            border: '1px solid',
            borderColor: 'white',
            _hover: {
                bg: mode('gray.900', 'orange.50')(props),
                borderColor: mode('orange.300', 'orange.900')(props),
                color: mode('orange.300', 'orange.900')(props),
            },
        }),
        zones: props => ({
            bg: mode('orange.300', 'gray.900')(props),
            color: mode('black', 'white')(props),
            border: '1px solid',
            borderColor: mode('black', 'white')(props),
            _active: {
                bg: mode('gray.900', 'white')(props),
                color: mode('orange.300', 'black')(props),
                borderColor: mode('black', 'black')(props),
            }
        }),
    },

    defaultProps: {
        size: 'md',
        variant: 'outline',
    },
}
