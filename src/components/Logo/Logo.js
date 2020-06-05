import React from "react"
import styled from 'styled-components'
import Scene from './Scene.js'

const StyledDiv = styled.div`
    grid-area: logo;
    justify-self: flex-start;
    align-self: flex-end;
`;


const Logo = ({ color }) => (
    <StyledDiv>
        <Scene color={color}/>
    </StyledDiv>
)

export default Logo