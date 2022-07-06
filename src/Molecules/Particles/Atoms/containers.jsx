import styled from "styled-components";

export const Cont = styled.div`
    width: ${props=> props.width? props.width: "80%"};
    height: ${props=> props.height? props.height: "75%"};
    background-color: ${props=> props.bgcolor? props.bgcolor: "none"};
    border-radius: ${props=> props.bgcolor? "8px": "0px"};
    display: ${props=> props.flex || props.flexabsolute? "flex": "block"};
    padding: ${props=> props.pad? props.pad: "0"};
    flex-direction: ${props=> props.dir? props.dir: "unset"};
    justify-content: ${props=> props.justify? props.justify: "center"};
    align-items: ${props=> props.align? props.align: "center"};
    align-self: ${props=> props.align_self? props.align_self: "unset"};
    min-height: ${props=> props.minheight? props.minheight : "unset"};
    @media (max-width: 800px){
        width: ${props=> props.widthphone? props.widthphone : props.resetwidth? "100%": props.width};
        height: ${props=> props.heightphone? props.heightphone : props.resetheight? "100%": props.height};
        display: ${props=> props.flexabsolute? "flex": "block"};
        flex-direction: ${props=> props.dirphone? props.dirphone: props.dir? props.dir: "unset"};
        justify-content: ${props=> props.resetjustify? "center": props.justify? props.justify: "center"};
        margin: ${props=> props.marginphone? props.marginphone: "unset"};
    }
`;

export const App = styled.div `
    width: 100vw;
    height: 100vh;
    background-color: #FFFFFF;
    background-image: url(${props=> props.bg1}), url(${props=> props.bg2});
    background-position: left top, right bottom;
    background-repeat: no-repeat, no-repeat;
    background-size: contain 30%, contain;
    justify-content: center;
    align-items: center;
    display: flex;

    @media (max-width: 800px){
        height: auto;
        background-image: url(${props=> props.bg1mobile}), urls(${props=> props.bg2mobile});
        background-position: left top, right 40% bottom;
        background-repeat: no-repeat, no-repeat;
        background-size: contain, 300%;
        align-items: center;
    }
`;