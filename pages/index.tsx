import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { Text } from "../components/Text";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Real English</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Text color="red" fontSize="20px" bold>
          Header
        </Text>
      </Header>
      <div>Hello</div>
    </div>
  );
};

export default Home;
