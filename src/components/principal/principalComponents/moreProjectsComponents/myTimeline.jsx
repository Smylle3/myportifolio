import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { SiJavascript, SiReact, SiNextdotjs } from 'react-icons/si'
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import CardInfo from './cardInfo'

export default function MyTimeline() {
    return (
        <VerticalTimeline lineColor="orange">
            <VerticalTimelineElement
                contentStyle={{ borderRadius: 10 }}
                contentArrowStyle={{ borderRight: '5px solid  white' }}
                date="Abril / 2022"
                iconStyle={{ background: 'orange' }}
                icon={<SiJavascript color="white" />}
            >
                <CardInfo
                    lang={[
                        { id: 1, name: 'Html' },
                        { id: 2, name: 'Css' },
                        { id: 3, name: 'JavaScript' }
                    ]}
                    title="MyCalc"
                    resum="Calculadora simples criada com JavaScript e estilizada com Css."
                    link1="https://github.com/Smylle3/MyCalc"
                />
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{ borderRadius: 10 }}
                contentArrowStyle={{ borderRight: '5px solid  white' }}
                date="Fevereiro / 2022 - Momento"
                iconStyle={{ background: 'rgb(33, 150, 243)' }}
                icon={<SiReact color="white" />}
            >
                <CardInfo
                    lang={[
                        { id: 1, name: 'Android' },
                        { id: 2, name: 'IOS' },
                        { id: 3, name: 'React Native' }
                    ]}
                    title="Locale"
                    resum="Aplicativo mobile desenvolvido em React native que abrange diversas funcionalidades, o objetivo é torna-lo similar ao sistema de entrega dos Correios."
                    link1="https://github.com/Smylle3/Frontend-Locale"
                />
            </VerticalTimelineElement>

            {/*ImcCalc*/}
            <VerticalTimelineElement
                contentStyle={{ borderRadius: 10 }}
                contentArrowStyle={{ borderRight: '5px solid  white' }}
                date="Janeiro / 2022"
                iconStyle={{ background: 'rgb(33, 150, 243)' }}
                icon={<SiReact color="white" />}
            >
                <CardInfo
                    lang={[
                        { id: 1, name: 'Android' },
                        { id: 2, name: 'IOS' },
                        { id: 3, name: 'React Native' }
                    ]}
                    title="ImcCalc"
                    resum="Um simples aplicativo mobile desenvolvido em React native onde o objetivo é calcular o índice de massa corpórea de uma pessoa."
                    link1="https://github.com/Smylle3/imcCalc"
                />
            </VerticalTimelineElement>

            {/*MYCHAT*/}
            <VerticalTimelineElement
                contentStyle={{ borderRadius: 10 }}
                contentArrowStyle={{ borderRight: '5px solid  white' }}
                date="Janeiro / 2022 - Momento"
                iconStyle={{ background: 'black' }}
                icon={<SiNextdotjs color="white" />}
            >
                <CardInfo
                    lang={[{ id: 1, name: 'Next JS' }]}
                    title="MyChat"
                    resum="Aplicativo de mensagens de texto desenvolvido em NextJS como aprendizado pela plataforma Alura."
                    link1="https://github.com/Smylle3/myChat"
                />
            </VerticalTimelineElement>

            {/*DSMOVIE*/}
            <VerticalTimelineElement
                contentStyle={{ borderRadius: 10 }}
                contentArrowStyle={{ borderRight: '5px solid  white' }}
                date="Janeiro / 2022"
                iconStyle={{ background: 'rgb(33, 150, 243)' }}
                icon={<SiReact color="white" />}
            >
                <CardInfo
                    lang={[{ id: 1, name: 'React JS' }]}
                    title="DSMovie"
                    resum="WebSite desenvolvido com ReactJs feito para avaliação de filmes e séries."
                    site
                    link1="https://github.com/Smylle3/dsmovie"
                    link2="https://smylle-dsmovie.netlify.app/"
                />
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'orange' }}
                icon={<BsStarFill size={2} color="white" />}
            ></VerticalTimelineElement>
        </VerticalTimeline>
    )
}
