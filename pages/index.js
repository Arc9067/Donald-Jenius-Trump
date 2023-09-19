import Image from "next/image";
import Head from "next/head"

function Hero() {
  return (
  <>
  <Head>
    <title>Donald Jenius Trump</title>
  </Head>
    <div className="min-h-screen w-full bg-white text-black font-spaceGrotesk relative">
      <header className="py-5 w-full absolute top-0 z-50">
        <nav className="container flex justify-between items-center">
          <Image src="/logo.svg" width={60} height={60} priority />
          <a
            href=""
            className="w-48 h-14 px-8 py-4 bg-white rounded-full justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-stone-900 text-base font-normal font-GulfsDisplay leading-snug tracking-tight">
              Join Telegram
            </div>
          </a>
        </nav>
      </header>

      <section id="hero" className="min-h-screen w-full bg-red-900 py-32">
        <div className="container w-full text-center gap-8 flex justify-center items-center flex-col">
          <h1 className="text-white text-7xl font-normal font-GulfsDisplay tracking-wider text-center">
            Donald Jenuis Trump
          </h1>{" "}
          <p className=" text-white text-xl font-normal font-['Space Grotesk'] leading-loose tracking-tight">
            The project is fully decentralized and community based. We just do{" "}
          </p>
          <div className="flex justify-center flex-col md:flex-row gap-4">
            <a
              href=""
              className="w-44 h-14 px-8 py-4 bg-gradient-to-r from-sky-950 to-red-800 rounded-full justify-center items-center gap-2.5 inline-flex"
            >
              <div className="text-white text-base font-normal font-GulfsDisplay leading-snug tracking-tight">
                Telegram
              </div>
            </a>
            <a
              href=""
              className="w-44 h-14 px-8 py-4 bg-gradient-to-r from-sky-950 to-red-800 rounded-full justify-center items-center gap-2.5 inline-flex"
            >
              <div className="text-white text-base font-normal font-GulfsDisplay leading-snug tracking-tight">
                Twitter
              </div>
            </a>
            <a
              href=""
              className="w-44 h-14 px-8 py-4 bg-gradient-to-r from-sky-950 to-red-800 rounded-full justify-center items-center gap-2.5 inline-flex"
            >
              <div className="text-white text-base font-normal font-GulfsDisplay leading-snug tracking-tight">
                Live Chart
              </div>
            </a>
          </div>
          <Image src="./donald.svg" height={400} width={400} />
        </div>
      </section>

      <section id="about" className="w-full bg-white py-24 relative">
        <img src="text.svg" className="absolute right-10 bottom-10" />
        <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
          <Image src={"logo2.svg"} height={500} width={500} />
          <article className="flex flex-col gap-5">
            <h1 className="text-black text-5xl md:text-6xl font-normal font-GulfsDisplay">
              What <img src="text.svg" /> is Donald Jenuis Trump
            </h1>
            <p className=" text-black text-base font-normal font-spaceGrotesk leading-loose tracking-tight">
              The project is fully decentralized and community based. We just do
              our best to keep everyone together as an army. If you want to do
              something then do it, if someone asks for a hand out you can tell
              them that Pepe never paid for a thing. The project is fully
              decentralized and community based.{" "}
            </p>
            <div className="flex mx-auto lg:mx-0 lg:justify-start justify-center flex-row gap-4">
              <a
                href=""
                className="w-44 h-14 px-8 py-4 bg-gradient-to-r from-sky-950 to-red-800 rounded-full justify-center items-center gap-2.5 inline-flex"
              >
                <div className="text-white text-base font-normal font-GulfsDisplay leading-snug tracking-tight">
                  Telegram
                </div>
              </a>
              <a
                href=""
                className="w-44 h-14 px-8 py-4 bg-gradient-to-r from-sky-950 to-red-800 rounded-full justify-center items-center gap-2.5 inline-flex"
              >
                <div className="text-white text-base font-normal font-GulfsDisplay leading-snug tracking-tight">
                  Twitter
                </div>
              </a>
            </div>
          </article>
        </div>
      </section>

      <section
        className="py-24 w-full bg-gradient-to-r from-sky-950 to-red-800"
        id="mics"
      >
        <div
          id="mics2"
          className="container flex flex-col justify-center items-center gap-12"
        >
          <h1 className="text-white text-6xl font-normal font-GulfsDisplay tracking-wide">
            Donald Jenuis Trump
          </h1>

          <div className="p-8 bg-amber-500 rounded-3xl border-2 border-white w-full grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
            <article className="flex flex-col gap-5">
              <h1 className="text-white text-3xl md:text-5xl font-normal font-GulfsDisplay  tracking-wide">
                TOKEN DISTRIBUTION
              </h1>
              <p className=" text-black text-base font-normal font-['Space Grotesk'] leading-loose tracking-tight">
                The project is fully decentralized and community based. We just
                do our best to keep everyone together as an army. If you want to
                do something then do it, if someone asks for a hand out you can
                tell them that Pepe never paid for a thing. The project is fully
                decentralized and community based.{" "}
              </p>

              <Image src={"/logo.svg"} width={200} height={200} priority />
            </article>

            <div className="flex flex-col gap-y-6">
              <div className=" px-8 py-10 bg-white border-2 border-black justify-center items-start gap-4 flex flex-col md:flex-row">
                <div className="text-black text-2xl font-bold font-['Space Grotesk'] leading-loose tracking-wide">
                  Total Supply
                </div>
                <div className=" text-black font-normal font-['Space Grotesk'] leading-loose tracking-wide">
                  TOTAL SUPPLY OF ONLY 420,690 BILLION.
                </div>
              </div>
              <div className=" px-8 py-10 bg-white border-2 border-black justify-center items-start gap-4 flex flex-col md:flex-row">
                <div className="text-black text-2xl font-bold font-['Space Grotesk'] leading-loose tracking-wide">
                  Total Supply
                </div>
                <div className=" text-black font-normal font-['Space Grotesk'] leading-loose tracking-wide">
                  TOTAL SUPPLY OF ONLY 420,690 BILLION.
                </div>
              </div>{" "}
              <div className=" px-8 py-10 bg-white border-2 border-black justify-center items-start gap-4 flex flex-col md:flex-row">
                <div className="text-black text-2xl font-bold font-['Space Grotesk'] leading-loose tracking-wide">
                  Total Supply
                </div>
                <div className=" text-black font-normal font-['Space Grotesk'] leading-loose tracking-wide">
                  TOTAL SUPPLY OF ONLY 420,690 BILLION.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="links" className="w-full py-24">
        <div className="container flex flex-col gap-12">
          <h1>
            <span className="text-black text-5xl font-normal font-GulfsDisplay leading-10 tracking-wide">
              Donald{" "}
            </span>
            <span className="text-amber-500 text-5xl font-normal font-GulfsDisplay leading-10 tracking-wide">
              Jenuis
            </span>
            <span className="text-black text-5xl font-normal font-GulfsDisplay leading-10 tracking-wide">
              {" "}
              Trump
            </span>
          </h1>

          <div className="w-full  justify-between flex gap-y-8 justify-center items-center item-center flex-col lg:flex-row flex-wrap">
            <div className=" relative">
              <div className=" left-0 top-[2px]  bg-zinc-950" />
              <div className="4 px-20 py-7 left-0 top-0  bg-sky-600 border-2 border-zinc-950 justify-center items-center inline-flex">
                <Image src={"/icons/dexview.svg"} width={100} height={100} />
              </div>
            </div>
            <div className=" relative">
              <div className=" left-0 top-[2px]  bg-zinc-950" />
              <div className="4 px-20 py-7 left-0 top-0  bg-sky-600 border-2 border-zinc-950 justify-center items-center inline-flex">
                <Image src={"/icons/dextool.svg"} width={100} height={100} />
              </div>
            </div>
            <div className=" relative">
              <div className=" left-0 top-[2px]  bg-zinc-950" />
              <div className="4 px-20 py-7 left-0 top-0  bg-sky-600 border-2 border-zinc-950 justify-center items-center inline-flex">
                <Image src={"/icons/etherscan.svg"} width={100} height={100} />
              </div>
            </div>
            <div className=" relative">
              <div className=" left-0 top-[2px]  bg-zinc-950" />
              <div className="4 px-20 py-7 left-0 top-0  bg-sky-600 border-2 border-zinc-950 justify-center items-center inline-flex">
                <Image src={"/icons/gecko.svg"} width={100} height={100} />
              </div>
            </div>{" "}
          </div>
        </div>
      </section>

      <footer className="w-full bg-gradient-to-r from-sky-950 to-red-800 py-14">
        <div className="container flex justify-center items-center  flex-col gap-8">
          <Image src={"/logo.svg"} height={150} width={150} />
          <p className="text-white text-center text-xl font-normal font-['Space Grotesk'] leading-9">
            Copyright © 2023 Donald Jenuis Trump. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  </>
  );
}

export default Hero;
