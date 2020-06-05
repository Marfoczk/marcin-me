import React from 'react'
import Typed from 'react-typed'
import '../Fonts/Fonts.css'
import styled from 'styled-components'
import './Typing.module.scss'

const TypedDiv = styled(Typed)`
    grid-area: card;
    justify-self: center;
    align-self: flex-start;
    font-size: 4rem;
    color: white;
    padding: 3rem;
`;

const sp = styled.span`
  font-size: 2rem;
  color: ${(props) => props.gray ? "#A0A8BB" : props.blue ? "#84A0FF" :props.green ? "#C3EC8E" : null};
`;

            {/* <span className={styles.textanim}>
                <sp gray>console</sp>
                <sp blue>.log</sp>
                <sp gray>(</sp>
                <sp blue>'</sp>
                <sp green>Hello Friend</sp>
                <sp blue>'</sp>
                <sp gray>)</sp>
            </span> */}

const Typing = () =>(
    // console.log('Hello frein');
    // alert('co jest ?');

    <TypedDiv
        className="console"
        strings={[
            "",
            "",
            "",
            "console<span style='color:#84A0FF'>.log</span>(<span style='color:#84A0FF'>'</span><span style='color:#C3EC8E'>Hello Frein</span>", 
            "console<span style='color:#84A0FF'>.log</span>(<span style='color:#84A0FF'>'</span><span style='color:#C3EC8E'>Hello Friend!</span><span style='color:#84A0FF'>'</span>)",
            "console<span style='color:#84A0FF'>.log</span>(<span style='color:#84A0FF'>'</span><span style='color:#C3EC8E'>How are You today?</span><span style='color:#84A0FF'>'</span>)",
            'c',
            ' ',
            "<span style='color:#84A0FF'>alert</span>(<span style='color:#84A0FF'>'</span><span style='color:#C3EC8E'>Flip my business card :)</span><span style='color:#84A0FF'>'</span>)",
            ' ',
            ' '
        ]}
        typeSpeed={100}
        backSpeed={50}
        loop
    />
)

export default Typing;