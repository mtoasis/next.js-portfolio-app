import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 1em;
  font-size: 1.2rem;
  background: indigo;

  a {
    color: darkgray;
    text-decoration: none;
  }

  a:hover {
    font-weight: bold;
    color: lightgray;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0;
  font-size: 110%;
  background: #f0f0f0;
`;

export const FooterContainer = styled.footer`
  padding: 1em;
`;
