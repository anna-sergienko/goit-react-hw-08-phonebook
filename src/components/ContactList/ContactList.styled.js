import styled from "@emotion/styled";

export const ContactsList = styled.ul`
list-style: none;
padding: 0;
`;


export const ContactsItem = styled.li`
margin: 0 0 15px 15px;

`;


export const ContactsName = styled.p`
font-weight: 500;
font-size: 18px;
font-family: "Avenir Next LT W01 Bold",sans-serif;
`;


export const DelContactBtn = styled.button`
background-color: transparent;
  border: 1px solid #266DB6;
  box-sizing: border-box;
  color: #00132C;
  font-family: "Avenir Next LT W01 Bold",sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  padding: 2px 8px;
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
}
`;
