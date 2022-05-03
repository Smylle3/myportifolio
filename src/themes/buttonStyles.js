export const MyButton = {
    baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderRadius: 10
    },

    sizes: {
        sm: {
            fontSize: 'sm',
            px: 4,
            py: 3
        },
        md: {
            fontSize: 'md',
            px: 6,
            py: 4
        }
    },

    variants: {
        github: {
            bg: 'black',
            color: 'white',
            border: '1px solid',
            borderColor: 'white',
            _hover: {
                bg: 'gray.200',

                borderColor: 'gray.900',
                color: 'gray.800'
            }
        },
        site: {
            bg: 'orange.400',
            color: 'white',
            border: '1px solid',
            borderColor: 'white',
            _hover: {
                bg: 'orange.200',
                borderColor: 'gray.900',
                color: 'gray.800'
            }
        }
    },

    defaultProps: {
        size: 'md',
        variant: 'outline'
    }
}
