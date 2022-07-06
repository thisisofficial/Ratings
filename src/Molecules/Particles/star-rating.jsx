import React from 'react'
import star from '/src/images/icon-star.svg';
import { Cont } from './Atoms/containers';
import { Text } from './Atoms/text';
import styled from 'styled-components';
``
const Star = styled.div`
    width: 16px;
    height: 16px;
    background-image: url(${star});
    background-styled: no-repeat;
    background-size: contain;
`;

export function StarRating(props) {
    const {text, position} = props;
  return (
        <Cont flexabsolute width="80%" height="auto" minheight="56px" bgcolor="#F7F2F7" align_self={position} justify="space-around" resetwidth heightphone="78px" dirphone="column">
            <Cont width="25%" height="100%" flexabsolute justify="space-between" heightphone="40%">
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
            </Cont>
            <Cont width="50%" height="100%" align="center" justify="flex-start" flexabsolute heightphone="40%" resetjustify resetwidth>
                <Text bold color='#512051'>
                    {text}
                </Text>
            </Cont>
        </Cont>
  )
}
