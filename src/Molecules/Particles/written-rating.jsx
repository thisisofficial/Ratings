import React from 'react'
import styled from 'styled-components'
import { Cont } from './Atoms/containers'
import { Text } from './Atoms/text'

const Img = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-image: url(${props=>props.src});
    background-style: no-repeat;
    background-size: contain;
    margin-right: 20px;

`;

export function WrittenRating(props) {
    const {text, writer, title, image, position} = props;
  
    return (
        <Cont width="30%" bgcolor="#512051" align_self={position} flexabsolute height="auto" resetwidth marginphone="20px 0 20px">
            <Cont width="80%" height="80%" pad="0">
                <Cont width="100%" height="auto" flexabsolute justify="flex-start" pad="7% 0 0">
                    <Img src={image}/>
                    <Cont height="100%" width="calc(100% - 60px)">
                        <Text bold color="#FFFFFF">{writer}</Text>
                        <Text thin color="#EE69A4">{title}</Text>
                    </Cont>
                </Cont>
                <Cont pad="3% 0 7%" width="100%" height="auto">
                    <Text color="#FFFFFF">
                        {text}
                    </Text>
                </Cont>
            </Cont>
        </Cont>
    )
}
