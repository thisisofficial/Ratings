import styled from "styled-components";

export const Text = styled.p`
font-family: 'League Spartan';
font-style: normal;
font-weight: ${props=> props.bold? "700": props.thin? "300": "400"};
font-size: ${props=>props.big? "19px": "17px"};
color: ${props=>props.color? props.color: "#927B91"};
line-height: ${props=>props.big? "25px": props.bold || props.thin? "16px": "22px"};
margin-block-start: .3em;
margin-block-end: .3em;
text-align: left;

@media (max-width: 800px){
    text-align: ${props=> props.big? "center": "left"};
}
`;

export const Title = styled.h1`
font-family: 'League Spartan';
font-style: normal;
font-weight: 700;
font-size: 56px;
color: #512051;
margin-block-start: .3em;
margin-block-end: .3em;
@media (max-width: 800px){
    text-align: center;
}
`;