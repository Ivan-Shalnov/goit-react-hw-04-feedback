import styled from 'styled-components';

export const Container = styled.div`
  height: 1em;
  width: 3em;
  display: inline-flex;
  vertical-align: middle;

  justify-content: flex-end;
  font-size: 20px;
  line-height: 1;
  color: ${p => p.theme.colors.title};
  position: relative;
  overflow: hidden;
  div {
    display: flex;
  }
  .next {
    position: absolute;
    bottom: -100%;
  }
`;
export const Unit = styled.span`
  margin-left: 5px;
  vertical-align: middle;
  color: yellowgreen;
  font-size: 20px;
  line-height: 1;
`;
