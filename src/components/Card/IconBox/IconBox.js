import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from 'styled-components'
// import { fagi, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
// import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons

const StyledA = styled.a`
    cursor: none;
    position: relative;
    width: 4.5rem;
    height: 4.5rem;
    border: 2px solid black;
    margin-right: 2rem;
    font-size: 3rem;
    line-height: 4.5rem;
    text-align: center;
    color: black;
    overflow: hidden;
    
    &::before{
        content: '';
        position: absolute;
        width: 100%;
        display: block;
        height: 100%;
        background: linear-gradient(to right, #ef994a, #df308c);
        transform: translateY(-120%);
        transition: transform .5s ease;
        background-blend-mode: overlay;
        z-index: -1;
    }

    &:hover:before{
        transform: translateY(0);
    }
`;

const StyledFont = styled(FontAwesomeIcon)`
    z-index: 1000;
    transition: color .7s ease;
  
    ${StyledA}:hover &{
        color: white;
        cursor: none;
    }
`;



const IconBox = ({icon, href}) => (
    <StyledA href={href} target="_blank" rel="noreferrer">
            <StyledFont icon={icon}/>
    </StyledA>
)

export default IconBox;

