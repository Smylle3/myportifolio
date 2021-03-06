import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Button,
    Heading,
    HStack,
    Image,
    Link,
    Tag,
    TagLeftIcon,
    Text,
} from '@chakra-ui/react'

import React, { useState } from 'react'
import { handleOpen } from 'functions/openAccordion'
import ColorMode from 'functions/colorMode'

import { BiLinkExternal } from 'react-icons/bi'
import { SiGithub } from 'react-icons/si'

export default function MyAccordion(props) {
    const [accordionOpen, setAccordionOpen] = useState(1)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Accordion
            allowMultiple
            index={[accordionOpen]}
            onMouseEnter={() => handleOpen(0, isOpen, setIsOpen, setAccordionOpen)}
            onMouseLeave={() => handleOpen(1, isOpen, setIsOpen, setAccordionOpen)}
            onClick={() => handleOpen(-1, isOpen, setIsOpen, setAccordionOpen)}
        >
            <AccordionItem
                w="100%"
                bg={ColorMode('gray.900', 'white')}
                mb={5}
                color={ColorMode('white', 'black')}
                boxShadow={`0px 0px 5px 1px  ${ColorMode('white', 'black')}`}
                borderRadius={3}
            >
                <AccordionButton
                    padding={3}
                    _focus={{ outline: 0 }}
                    flexDirection="column"
                >
                    <HStack>
                        <Tag
                            color={ColorMode('gray.900', 'white')}
                            bg={ColorMode('white', 'black')}
                        >
                            <TagLeftIcon boxSize="12px" as={props.frameIcon} /> {props.framework}
                        </Tag>
                        <Tag
                            color={ColorMode('gray.900', 'white')}
                            bg={ColorMode('white', 'black')}
                        >
                            <TagLeftIcon boxSize="12px" as={props.frameStyle} /> {props.styles}
                        </Tag>
                        {props.backend ? (
                            <Tag
                                color={ColorMode('gray.900', 'white')}
                                bg={ColorMode('white', 'black')}
                            >
                                <TagLeftIcon boxSize="12px" as={props.frameBack} />{' '}
                                {props.backend}
                            </Tag>
                        ) : null}
                    </HStack>
                    <Heading fontWeight={300} fontSize={35} marginBottom={5}>
                        {props.title}
                    </Heading>
                    <Image src={props.image} alt={props.tilte} borderRadius={5} />
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                    <Text mb={5} textAlign="justify">
                        {props.date}
                    </Text>
                    <Text mb={5} textAlign="justify">
                        {props.abreviation}
                    </Text>
                    <Link href={props.rep} style={{ textDecoration: 'none' }} isExternal>
                        <Button
                            variant="github"
                            _focus={{ outline: 0 }}
                            w="100%"
                            leftIcon={<SiGithub />}
                        >
                            Reposit??rio GitHub
                        </Button>
                    </Link>
                    <Link href={props.site} style={{ textDecoration: 'none' }} isExternal>
                        <Button
                            variant="site"
                            _focus={{ outline: 0 }}
                            w="100%"
                            leftIcon={<BiLinkExternal />}
                        >
                            WebSite
                        </Button>
                    </Link>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
