// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';

export default function Home() {
  return (
    <div className="bg-[#ECEEEE] w-full min-h-[100vh] pb-10">
      <Head>
        <title>Great Videos Start with a Plan</title>
        <meta name="description" content="Plan your videos with VEED's free plan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="w-full p-4 flex flex-col justify-center items-center">
        <h1 className="font-bebas text-5xl text-center md:text-8xl tracking-wide">
          Great videos start with a plan
        </h1>
        <h2 className="font-roboto text-md text-gray-500 md:text-2xl">
          Try VEED with our{" "}
          <a href="/free-plan" className="font-roboto text-[#6A79FE] underline">Free Plan</a>
        </h2>
      </div>
      <Cards />
    </div>
  );
}
