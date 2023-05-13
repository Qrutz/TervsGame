import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950  to-emerald-900 font-mono">
        <div className="container mx-auto w-[28rem] rounded-lg bg-white">
          <div className="flex flex-col justify-center p-4">
            <div className="flex w-full flex-col items-center  gap-1    border-b p-6">
              <h2 className="text-center text-4xl font-semibold">
                GUESS ZE PRICE
              </h2>
              <p className="text-md text-center ">
                Housle is a daily trivia game where you guess the list price of
                houses!
              </p>
            </div>
            <div className="space-y-1">
              <h2 className="mt-3 text-2xl font-bold">THE BASICS</h2>
              <p className=" text-md pb-4 text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                asperiores expedita deleniti eum natus voluptatum! Illo,
                architecto ab. Magnam dolor ab incidunt, delectus illo dolorem
                aut beatae aliquam alias modi.
              </p>

              <span className="">
                <h2 className="text-2xl font-bold"> SHARE YOUR SCORE </h2>

                <p className="text-md pb-4 text-gray-500">
                  Share your score with friends and keep track of your stats
                </p>
              </span>

              <Link href="/game">
                <button className="w-full bg-slate-600  p-3 text-3xl font-extrabold text-white">
                  PLAY NOW!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
