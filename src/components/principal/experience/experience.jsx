import { Flex, Heading, Text } from '@chakra-ui/react'
import ColorMode from 'functions/colorMode'
import React from 'react'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'

export default function Experience() {
    return (
        <Flex cursor='default'>
            <Timeline lineColor={'white'} animate={true}>
                <TimelineItem
                    key="001"
                    dateText="05/2021 – Atualmente"
                    dateInnerStyle={{
                        background: ColorMode('white', 'black'),
                        color: ColorMode('black', 'white'),
                    }}
                    bodyContainerStyle={{
                        background: ColorMode('white', 'black'),
                        color: ColorMode('black', 'white'),
                        padding: 20,
                        borderRadius: 8,
                        boxShadow: '0 0 5px 1px white',
                    }}
                >
                    <Heading fontSize={22} fontWeight={400}>
                        CJR - Empresa Júnior de Computação
                    </Heading>
                    <Heading fontSize={16} fontWeight={300}>
                        Dev Full Stack / Gerente de cobranças
                    </Heading>
                    <Text textAlign="justify" mt={3} >
                        Sou desenvolvedor Full Stack pela CJR uma das maiores empresas
                        júniores do Distrito Federal, já atuei em projetos internos e
                        externos, trabalhando em equipe buscando a melhor forma de
                        desenvolver a solução que o cliente deseja. Também sou gerente de
                        cobranças no núcleo de organização empresarial, juntamente com
                        meus colegas buscamos solucionar qualquer adversidade que venha
                        atrapalhar o ritmo da empresa.
                    </Text>
                </TimelineItem>

                <TimelineItem
                    key="002"
                    dateText="10/2021 – 03/2022"
                    dateInnerStyle={{
                        background: ColorMode('black', 'white'),
                        color: ColorMode('white', 'black'),
                    }}
                    bodyContainerStyle={{
                        background: ColorMode('black', 'white'),
                        color: ColorMode('white', 'black'),
                        padding: 20,
                        borderRadius: 8,
                        boxShadow: '0 0 5px 1px white',
                    }}
                >
                    <Heading fontSize={22} fontWeight={400}>
                        MKT4EDU
                    </Heading>
                    <Heading fontSize={16} fontWeight={300}>
                        Growth Hacker
                    </Heading>
                    <Text textAlign="justify" mt={3}>
                        Atuei como growth hacker, buscando soluções para assim atingir de
                        forma eficiente os objetivos do cliente, semelhante a uma ponte de
                        comunicação transmitindo as metas do cliente aos times de criação
                        e analisando dados para localizar pontos de possíveis melhorias.
                    </Text>
                </TimelineItem>
            </Timeline>
        </Flex>
    )
}
