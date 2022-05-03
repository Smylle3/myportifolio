import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Grid
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { handleOpen } from 'functions/openAccordion'
import pokemon from '../../../../assets/07.png'
import pomodoro from '../../../../assets/pomo.png'
import Header from './header'
import Details from './details'

export default function MyAccordion() {
    const [accordionOpen, setAccordionOpen] = useState(1)
    const [accordionTwoOpen, setAccordionTwoOpen] = useState(1)
    const [isOpen, setIsOpen] = useState(false)
    const [isTwoOpen, setIsTwoOpen] = useState(false)
    return (
        <Grid
            templateColumns={{ dk: 'repeat(2, 1fr)' }}
            gap={5}
            w="80%"
            margin="20px 0px"
        >
            <Accordion
                allowMultiple
                index={[accordionOpen]}
                onMouseEnter={() => handleOpen(0, isOpen, setIsOpen, setAccordionOpen)}
                onMouseLeave={() => handleOpen(1, isOpen, setIsOpen, setAccordionOpen)}
                onClick={() => handleOpen(-1, isOpen, setIsOpen, setAccordionOpen)}
            >
                <AccordionItem
                    bgGradient="linear(to-b, gray.800, red.800)"
                    border="1px solid orange"
                    borderRadius={25}
                    w="100%"
                    boxShadow={accordionOpen === 0 ? '0px 0px 20px 3px gray' : null}
                >
                    <AccordionButton padding={3} _focus={{ outline: 0 }}>
                        <Header title="PokéCoin" image={pokemon} />
                    </AccordionButton>
                    <AccordionPanel>
                        <Details
                            name="PokéCoin"
                            link1="https://github.com/Smylle3/poke_coin"
                            link2="https://poke-coin.vercel.app/"
                            abreviation="Pokecoin"
                        />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

            <Accordion
                allowMultiple
                index={[accordionTwoOpen]}
                onMouseEnter={() =>
                    handleOpen(0, isTwoOpen, setIsTwoOpen, setAccordionTwoOpen)
                }
                onMouseLeave={() =>
                    handleOpen(1, isTwoOpen, setIsTwoOpen, setAccordionTwoOpen)
                }
                onClick={() =>
                    handleOpen(-1, isTwoOpen, setIsTwoOpen, setAccordionTwoOpen)
                }
            >
                <AccordionItem
                    bgGradient="linear(to-b, gray.800, purple.800)"
                    border="1px solid orange"
                    borderRadius={25}
                    w="100%"
                    boxShadow={accordionTwoOpen === 0 ? '0px 0px 20px 3px gray' : null}
                >
                    <AccordionButton padding={3} _focus={{ outline: 0 }}>
                        <Header title="MyPomodoro" image={pomodoro} />
                    </AccordionButton>
                    <AccordionPanel>
                        <Details
                            name="MyPomodoro"
                            link1="https://github.com/Smylle3/mypomodore"
                            link2="https://mypomodore.vercel.app/"
                            abreviation="Pomodoro"
                        />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Grid>
    )
}
