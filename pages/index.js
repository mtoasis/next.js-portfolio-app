import Link from "next/link";
import Header from '../components/header.component.jsx'

const Index = () => {
  return (
    <Header title="Home">
      <p>Welcome to the home page</p>
      <Link href="/about">go to about</Link>
    </Header>
  );
};

export default Index;
