import { Container } from "../src/components/Container";
import data from "../public/product.json";
import Image from "next/image";
import Head from "next/head";

export function getServerSideProps(context) {
  const index = context.params.slug;
  const product = data[index];

  return {
    props: {
      product,
    },
  };
}

export default function Detail({ product }) {
  return (
    <div className="flex justify-center mt-24">
      <Head>
        <title>{product.name}</title>
      </Head>

      <Container className="flex bg-white rounded-md">
        <div className="w-1/3 p-5">
          <Image
            src={product.image}
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>
        <div className="flex-1 p-5">
          <div className="pb-5">
            <div className="poppins font-bold text-gray-700 text-xl">
              {product.name}
            </div>
            <div className="text-gray-700 text-lg">{product.price}</div>
          </div>
          <div className="text-gray-700 text-justify pb-5">
            {product.description}
          </div>
          <a
            href={
              "https://wa.me/6288287384105?text=" +
              encodeURIComponent(`Saya mau pesan ${product.name}`)
            }
            className="bg-primary-700 py-2 px-5 block w-44 text-center text-white rounded-md"
          >
            Pesan Sekarang
          </a>
        </div>
      </Container>
    </div>
  );
}
