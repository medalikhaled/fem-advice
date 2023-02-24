import dice from "./assets/icon-dice.svg";
import { useEffect, useState } from "react";

type TSlip = {
  id: number;
  advice: string;
};

interface Slip {
  slip: TSlip;
}

function App() {
  const [advice, setAdvice] = useState<Slip>();

  async function requestAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice", {
      cache: "reload",
      // method: "GET",
      // headers: {
      //   "Content-Type": "application/json",
      // },
    });
    const data = (await response.json()) as Slip;

    // console.log(data);

    setAdvice(data);
  }

  useEffect(() => {
    requestAdvice();
  }, []);

  return (
    <main className="h-screen min-h-screen w-full bg-bgDark font-primary grid place-content-center ">
      <div className="xl:p-12 mx-4 xl:m-0 p-8 relative bg-fgDark max-w-lg xl:max-w-2xl rounded-md w-fit shadow-lg shadow-shadow text-center">
        <cite className="text-[28px] text-accentCyan font-extrabold ">
          {advice ? `"${advice.slip.advice}"` : <h1>Loading...</h1>}
        </cite>

        <button
          onClick={requestAdvice}
          className="p-4 absolute rounded-full top-full translate-y-[-50%] left-1/2 translate-x-[-50%] bg-accentGreen max-w-fit cursor-pointer hover:shadow-outer "
        >
          <img src={dice} className="" alt="dice icon" />
        </button>
      </div>
    </main>
  );
}

export default App;
