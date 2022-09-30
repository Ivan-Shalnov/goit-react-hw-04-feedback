const { default: styled } = require('styled-components');

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
