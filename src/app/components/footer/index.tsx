/* eslint-disable jsx-a11y/anchor-is-valid */
import { faEnvelope, faMailBulk, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../logo';

const FooterContainer = styled.div`

    background-color: #1d2124;
    ${tw`
        flex
        flex-col
        min-w-full
        pt-3
        md:pt-7
        items-center
        justify-center
    `};
`;

const InnerContainer = styled.div`
    ${tw`
        flex
        w-full
        h-full
        max-w-screen-2xl
        flex-wrap
        
    `};
`;

const ButtomContainer = styled.div`
    ${tw`
        w-full
        flex
        max-w-screen-2xl
        justify-start
    `};
`;

const CopyrightText = styled.small`
font-size: 11px;
    ${tw`
        text-gray-400
    `};
`;


const AboutContainer = styled.div`
    ${tw`
        flex
        flex-col
        mr-2
        md:mr-10
        pl-5
        md:pl-0
    `};
`;

const AboutText = styled.p`
    ${tw`
        text-white
        text-sm
        font-normal
        max-w-xs
        leading-5 
        mt-2
    `};
`;


const LinksList = styled.ul`
    ${tw`
        outline-none
        list-none
        flex
        flex-col
        mt-2 
        pl-0
        
    `};
`;

const SectionContainer = styled.div`
    ${tw`
        w-full
        md:w-auto
        flex
        flex-col
        mr-2
        sm:mr-5
        md:mr-10
        lg:mr-16
        pl-5
        mt-6
        md:mt-0
    `};
`;

const ListItem = styled.li`
    ${tw`
        mb-3
        
    `};
    & > a {
        ${tw`
            text-sm
            text-white
            no-underline
            transition-all
            hover:text-gray-500
        `};
    }
`;

const HeaderTitle = styled.h3`
    ${tw`
        text-2xl
        font-bold
        text-white
        flex
        mt-1
        mb-1
    `};
`;

const HorizontalContainer = styled.div`
    ${tw`
        flex
        flex-row
        mt-2
        mb-2
    `};
`;

const RedIcon = styled.span`
    ${tw`
        w-9
        h-9
        rounded-full
        bg-red-500
        flex
        items-center
        justify-center
        text-white
        text-base
        mr-2
    `};
`;

const SmallText = styled.h6`
    ${tw`
        w-full
        text-sm
        text-white
        items-center
        mt-1
        mb-1
    `};
`;

export function Footer() {
    return <FooterContainer>
        <InnerContainer>
            <AboutContainer>
                <Logo color="white" bgColor="dark" />
                <AboutText>
                    Your car is a Car renting and selling company located in many countries across the world
                    which has high quality cars
                </AboutText>
            </AboutContainer>
            <SectionContainer>
                <HeaderTitle>Our Links</HeaderTitle>
                <LinksList>
                    <ListItem><a href="#">Home</a></ListItem>
                    <ListItem><a href="#">About Us</a></ListItem>
                    <ListItem><a href="#">Services</a></ListItem>
                    <ListItem><a href="#">Models</a></ListItem>
                    <ListItem><a href="#">Blogs</a></ListItem>
                </LinksList>
            </SectionContainer>
            <SectionContainer>
                <HeaderTitle>Other Links</HeaderTitle>
                <LinksList>
                    <ListItem><a href="#">FAQ</a></ListItem>
                    <ListItem><a href="#">Contact Us</a></ListItem>
                    <ListItem><a href="#">Support</a></ListItem>
                    <ListItem><a href="#">Privacy Policy</a></ListItem>
                    <ListItem><a href="#">Terms &amp; Conditions</a></ListItem>
                </LinksList>
            </SectionContainer>
            <SectionContainer>
                <HeaderTitle>Call Now</HeaderTitle>
                <HorizontalContainer>
                    <RedIcon>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                    </RedIcon>
                    <SmallText>(xxx)-xxx-xxxx</SmallText>
                </HorizontalContainer>
            </SectionContainer>
            <SectionContainer>
                <HeaderTitle>Mail</HeaderTitle>
                <HorizontalContainer>
                    <RedIcon>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </RedIcon>
                    <SmallText>xxx@xxx.com</SmallText>
                </HorizontalContainer>
            </SectionContainer>
        </InnerContainer>
        <ButtomContainer>
            <CopyrightText> Copyright &copy; {new Date().getFullYear()} Your car. All right are reserved</CopyrightText>
        </ButtomContainer>
    </FooterContainer>
}