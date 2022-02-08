/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import  JeepImg  from "../../../assets/images/jeep.png"


const AbountUsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        pt-4 
        pb-4 
        pr-7 
        pl-7 
        md:pl-0
        md:pr-0
        bg-white

    `};
`;

const CarContainer = styled.div`
    width: auto;
    height: 15em;
    margin-left: -50px;

    img{
        width: auto;
        height: 100%;
    }

    @media (min-width: ${SCREENS.md}){
        height:28em;
    }
    @media (min-width: ${SCREENS.lg}){
        height:30em;
    }
    @media (min-width: ${SCREENS["2xl"]}){
        height:35em;
        margin-left:0;
    }
`;

const InfoContainer = styled.div`
    ${tw`
        w-1/2 
        flex
        flex-col
        m-12
        md:ml-5
        2xl:ml-16
    `};
`;

const Title = styled.h1`
    ${tw`
        text-black
        text-2xl 
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `};
`;

const InfoText = styled.p`
    ${tw`
        md:max-w-2xl 
        text-sm
        md:text-base
        text-gray-500
        font-normal
        mt-4
    `};
`;

export function AboutUS() {
    return <AbountUsContainer>
        <CarContainer>
            <img src={JeepImg}/>
        </CarContainer>
        <InfoContainer>
            <Title>Fell The Best Experience With Our Rental Deals</Title>
            <InfoText>
            It is a long established fact that a reader will be distracted by the readable content of a page 
            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
            as opposed to using 'Content here, content here', making it look like readable English. 
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </InfoText>
        </InfoContainer>
    </AbountUsContainer>
}