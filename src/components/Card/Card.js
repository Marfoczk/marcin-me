import React from "react"
import Tilt from 'react-tilt'
import styled from 'styled-components'
import styles from './Card.module.scss'
import BackCard from './BackCard/BackCard'
import FrontCard from './FrontCard/FrontCard'
import '../Fonts/Fonts.css'

const StyledTilt = styled(Tilt)`
  display: flex;
  justify-content: center;
  justify-self: center;
  align-self: flex-end;
  align-items: center;
  grid-area: card;
  width: 42rem;
  height: 27rem;
  transform-style: preserve-3d;
  perspective: 1000rem;
`;

const Card = () => {

  return (
      <StyledTilt  className="Tilt" options={{ max : 20, perspective: 5000, scale: 1.05 }} >
        <div className={styles.flip}>
          <div className={styles.content}>
            <FrontCard/>
            <BackCard/>
          </div>
        </div>
      </StyledTilt>
  )}

  export default Card
