import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) 
    {   

    return (
        <Wrap bgImg = { backgroundImg } >

            <Fade direction = 'down' >
                <ItemText >
                    <h1 > { title } </h1> 
                    <p > { description } </p> 
                </ItemText> 
            </Fade> 
            <Buttons >
                <Fade direction = 'up' >
                    <ButtonGroup >
                        <LeftButton > 
                            { leftBtnText } 
                        </LeftButton> 
                        {
                        rightBtnText && 
                        <RightButton > 
                            { rightBtnText } 
                        </RightButton>
                        }
                        </ButtonGroup> 
                </Fade> 
                <DownArrow src = "TESLA/down-arrow.svg"/>
            </Buttons> 
            </Wrap>
    )
}

export default Section

const Wrap = styled.div `
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    /* background-image:url('TESLA/model-s.jpg'); */
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    background-image:${props=> `url("TESLA/${props.bgImg}")`}
    `

const ItemText=styled.div`
    padding-top:15vh;
    text-align:center;
`
const ButtonGroup=styled.div`
    display:flex;
    // flex-direction:column;
    margin-bottom:30px;
    @media (max-width:760px) {
        flex-direction:column;
    }
`
const LeftButton=styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform: upperCase;
    font-size:12px;
    cursor:pointer;
    margin:8px;

`
const RightButton=styled(LeftButton)`
    background-color:white;
    opacity:0.65;
    color:black;
`
const DownArrow=styled.img`
    height:40px;
    animation:animateDown infinite 1.5s;
    @keyframes animateDown {
        0%,20%,50%,80%,100%{
          transform: translateY(0);
        }
        40%{
          transform: translateY(5px);
        }
        60%{
          transform: translateY(3px);
        }
      }
    
`
const Buttons=styled.div`
`