import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsGithub, BsWhatsapp, BsInstagram } from 'react-icons/bs'
import { MdOutlineMail } from 'react-icons/md'
import MyIconButtons from './contactComponents/myIconButtons'

export default function Contact() {
    return (
        <Flex direction="column" align="center" margin="20px 0px">
            <Text fontSize="2xl" fontFamily="heading" color="orange.400">
                Onde você pode me encontrar?
            </Text>
            <Flex margin="10px 0px" color="orange.400">
                <MyIconButtons
                    link="https://www.linkedin.com/in/jo%C3%A3o-pedro-smylle/"
                    icon={<FaLinkedinIn size={20} />}
                />
                <MyIconButtons
                    link="https://github.com/Smylle3"
                    icon={<BsGithub size={20} />}
                />
                <MyIconButtons
                    link="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=joao21731@gmail.com"
                    icon={<MdOutlineMail size={20} />}
                />
                <MyIconButtons
                    link="https://api.whatsapp.com/send?phone=5561984145192&text=Ol%C3%A1%20Jo%C3%A3o%20Pedro%2C%20tudo%20bem%3F"
                    icon={<BsWhatsapp size={20} />}
                />
                <MyIconButtons
                    link="https://www.instagram.com/dompedro_iv/"
                    icon={<BsInstagram size={20} />}
                />
            </Flex>
        </Flex>
    )
}
