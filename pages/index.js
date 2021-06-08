import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Container } from "../src/components/Container";
import data from "../public/product.json";

export async function getServerSideProps() {
  const products = data;

  return {
    props: {
      products,
    },
  };
}

export default function Home({ products }) {
  return (
    <Fragment>
      <Head>
        <title>DDR3</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Squada+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-primary-700 h-64 mt-16 flex justify-center items-center">
        <Container
          className="text-2xl lg:text-4xl text-white text-center"
          style={{ fontFamily: "Squada One" }}
        >
          Selamat Datang!
        </Container>
      </div>
      <div className="relative flex justify-center">
        <div className="absolute top-0 left-0 w-full h-20 bg-primary-700"></div>
        <Container className="bg-white relative rounded-md grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5 mb-10">
          {products.map((item, index) => (
            <div
              className="hover:shadow-md p-3 rounded-md cursor-pointer relative"
              key={index}
            >
              <Image
                src={item.image}
                width={500}
                height={500}
                objectFit="cover"
              />
              <div className="py-2">
                <div className="font-bold text-gray-600 poppins">
                  {item.name}
                </div>
                <div className="text-gray-600">{item.price}</div>
                <Link href={`/${index}`}>
                  <a className="w-full h-full absolute top-0 left-0"></a>
                </Link>
              </div>
            </div>
          ))}
        </Container>
      </div>
    </Fragment>
  );
}
