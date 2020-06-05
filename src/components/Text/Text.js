import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    position: relative;
    transform-style: preserve-3d;
`;

const StyledTitle = styled.p`
    color: white;
    margin-bottom: 1rem;
    font-size: 4.4rem;
    text-align: center;
    transform: translateZ(42px);
    transform-style: preserve-3d;
`;

const StyledLine = styled.span`
    display: block;
    background: linear-gradient(to right, #ef994a, #df308c);
    height: .2rem;
`;

const StyledP = styled.p`
    transform-style: preserve-3d;
    transform: translateZ(2px);
    color: white;
    width: 70%;
    margin: 2rem auto 0;
    text-align: center;
    line-height: 3rem;
`;


const Text = () => (
 <StyledDiv>
     <StyledTitle>marcinglazewski.me</StyledTitle>
     <StyledLine></StyledLine>
     <StyledP>Hello, my name is Marcin and I am Warsaw based Front End Developer. I enjoy building modern web apps using JavaScript, HTML & CSS.</StyledP>
 </StyledDiv>
);


export default Text