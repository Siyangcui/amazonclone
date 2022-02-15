// import axios from "axios";

import Head from "next/head";
import Header from "../components/header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        {/* Banner */}
        {/* Product Feed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

// export const getServerSideProps = async (context) => {
//   const { status, data } = await axios.get("https://fakestoreapi.com/products");

//   return {
//     props: {
//       data,
//     },
//   };
// };

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}
