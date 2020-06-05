import React from 'react';
import styled from'styled-components'
import styles from '../../Card/Card.module.scss'
import Text from '../../Text/Text'

const sp = styled.span`
  font-size: 2rem;
  color: ${(props) => props.gray ? "#A0A8BB" : props.blue ? "#84A0FF" :props.green ? "#C3EC8E" : null};
`;

const FrontCard = () => (
    <div className={styles.front}>
        <Text/>
            {/* <span className={styles.textanim}>
                <sp gray>console</sp>
                <sp blue>.log</sp>
                <sp gray>(</sp>
                <sp blue>'</sp>
                <sp green>Hello Friend</sp>
                <sp blue>'</sp>
                <sp gray>)</sp>
            </span> */}
    </div>
)

export default FrontCard