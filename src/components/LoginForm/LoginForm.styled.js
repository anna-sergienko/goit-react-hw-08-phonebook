import styled from "@emotion/styled";

export const LoginFormWrap = styled.form`
width: 320px;
`

export const LoginFormLabel = styled.label`
display: flex;
flex-direction: column;
margin-bottom: 16px;
font-size: 16px;
color: #00132C;
font-family: "Avenir Next LT W01 Bold",sans-serif;
`

export const LoginFormButton = styled.button`
  background-color: transparent;
  border: 1px solid #266DB6;
  box-sizing: border-box;
  color: #00132C;
  font-family: "Avenir Next LT W01 Bold",sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  padding: 16px 23px;
  position: relative;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover{
background-color: transparent;
  cursor: pointer;
  }
&:before{
    background-color: #D5EDF6;
    content: "";
    height: calc(100% + 3px);
    position: absolute;
    right: -7px;
    top: -9px;
    transition: background-color 300ms ease-in;
    width: 100%;
    z-index: -1;
}
&:hover:before {
      background-color: #6DCFF6;
    }
`


export const LoginFormInput = styled.input`
height: 25px;
border: 2px solid #D5EDF6;
border-radius: 5px;
`












