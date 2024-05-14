import ProgressCart from "@/components/ProgressCard";

export type ProgressInfo = {
  picture: string;
  description: string;
  destination: string;
}

const process: ProgressInfo[] = [
  {
    picture: "/progress2.png",
    description: "Start the application",
    destination: "/"
  },
  {
    picture: "/progress3.png",
    description: "Start the application",
    destination: "/"
  },
  {
    picture: "/progress1.png",
    description: "Start the application",
    destination: "/"
  },
  {
    picture: "/progress4.png",
    description: "Start the application",
    destination: "/"
  },
];

const Home = () => {
  return (
    <section className="pt-6 pb-24 bg-slate-300">
      <div className="container mx-auto flex flex-col gap-5 justify-center items-center">
        <h1 className="text-3xl font-bold text-center">Applying for a loan in SACCO made easy</h1>
        <h2 className="w-full md:w-1/2 text-center">Commited to give access to loans to every teacher in a reasonable period with transparent and effiscient applicaiton verification process.</h2>
        <div className="flex flex-wrap items-center justify-center">
          {process.map((p, index) => (
            <ProgressCart process={p} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home

