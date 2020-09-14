import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import Nprogress from "nprogress";
import {
  HeaderContainer,
  FooterContainer,
  AppContainer,
} from "./header.styles";

Router.onRouteChangeStart = (url) => {
  console.log(url);
  Nprogress.start();
};

Router.onRouteChangeComplete = () => {
  return Nprogress.done();
};

Router.onRouteChangeError = () => Nprogress.done();

const Header = ({ children, title }) => {
  return (
    <AppContainer>
      <HeaderContainer>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/hireme">Hire Me</Link>
      </HeaderContainer>
      <h1>{title}</h1>
      {children}
      <FooterContainer>&copy; {new Date().getFullYear()}</FooterContainer>
    </AppContainer>
  );
};

export default Header;
