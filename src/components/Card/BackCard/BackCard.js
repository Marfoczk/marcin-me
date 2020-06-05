import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
import styled from 'styled-components'
import styles from '../Card.module.scss'
import IconBox from '../IconBox/IconBox'


const ContactDiv = styled.div`
  display: flex;
  line-height: 2rem;
  font-size: 1.5rem;
  color: black;
  padding-top: 1rem;
  backface-visibility: hidden;
  
  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    cursor: none;
    background: linear-gradient(to right, #ef994a, #df308c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const FontIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
  display: flex;
  align-self: center;
`;

const StyledLine = styled.span`
    display: inline-flex;
    width: 50%;
    background: linear-gradient(to right, #ef994a, #df308c);
    height: .2rem;
    margin: .5rem 0;
`;

const IconDiv = styled.div`
  margin-top: auto;
  display: flex;
`;

const BackCard = () => (

<div className={styles.back}>
    <div className={styles.backWrapper}>
      <h2>
        Marcin Głazewski
      </h2>
      <p style={{color: "#494949", fontSize: "1.2rem"}}>Junior Front-End Developer</p>
      <StyledLine></StyledLine>
      <ContactDiv>
        <FontIcon style={{width: "1em"}} icon={faMapMarkerAlt}/>
        <p>Warsaw</p>
      </ContactDiv>
      <ContactDiv>
        <FontIcon icon={faEnvelope}/>
        <a href="mailto:marcin.glazewski@gmail.com">marcin.glazewski@gmail.com</a>
      </ContactDiv>
      <ContactDiv>
        <FontIcon icon={faLink}/>
        <a href="#">marcinglazewski.me</a>
      </ContactDiv>
      <IconDiv>
        <IconBox icon={faLinkedin} href={'https://www.linkedin.com/in/marcin-glazewski/'}/>
        <IconBox icon={faGithub} href={'https://github.com/Marfoczk'}/>
      </IconDiv>
    </div>
</div>
)
export default BackCard