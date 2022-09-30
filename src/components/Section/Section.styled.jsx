const { default: styled } = require('styled-components');

export const Container = styled.div`
  border-radius: 8px;
  padding: 20px;
  background-color: ${p => p.theme.colors.cardBg};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;
export const Title = styled.h1`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 28px;

  line-height: 24px;
  color: ${p => p.theme.colors.title};
  text-transform: capitalize;
`;
