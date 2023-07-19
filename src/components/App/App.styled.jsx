import styled from "@emotion/styled";

export const Container = styled.div`
  margin: -8px;
  padding: 8px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.bgc};
  color: ${(props) => props.theme.colors.secondary};
`;
