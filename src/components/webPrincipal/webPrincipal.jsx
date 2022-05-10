import { Flex } from '@chakra-ui/react'
import { Vertical } from 'animation/vertical'
import ColorMode from 'functions/colorMode'
import React from 'react'
import AbouteMe from './aboutMe/abouteMe'
import Destaques from './destaques/destaques'
import ExperienceWeb from './experience/experience'
import InteressesWeb from './InteressesWeb/InteressesWeb'
import Projects from './projects/projects'
import SkillsWeb from './skills/webSkills'

export default function WebPrincipal() {
    return (
        <Flex direction="row">
            <Flex w="20%" />
            <Vertical />
            <Flex direction="column" w="80%" p={5}>
                <AbouteMe />
                <Flex bg={ColorMode('black', 'white')} h={1} mt={5} mb={5} />
                <Destaques />
                <Flex bg={ColorMode('black', 'white')} h={1} mt={5} mb={5} />
                <Projects />
                <Flex bg={ColorMode('black', 'white')} h={1} mt={5} mb={5} />
                <ExperienceWeb />
                <Flex bg={ColorMode('black', 'white')} h={1} mt={5} mb={5} />
                <SkillsWeb />
                <Flex bg={ColorMode('black', 'white')} h={1} mt={5} mb={5} />
                <InteressesWeb />
            </Flex>
        </Flex>
    )
}
