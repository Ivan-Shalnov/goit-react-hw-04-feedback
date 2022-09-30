const { default: styled } = require('styled-components');

export const BtnsContainer = styled.div`
  background: rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
`;
export const Button = styled.button`
  width: 100%;
  flex-grow: 1;
  background: none;
  border: none;
  transition: 250ms;
  font-size: 18px;
  line-height: 2;
  padding: 10px;
  border-radius: 16px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.6);
  text-transform: capitalize;
  :hover,
  :focus {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  }
`;
