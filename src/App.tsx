import { useEffect, useState } from "react";
import dice from "./assets/icon-dice.svg";
import dividerDesktop from "./assets/pattern-divider-desktop.svg";
import dividerMobile from "./assets/pattern-divider-mobile.svg";
import Icon from "./components/seperator";

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
    });
    const data = (await response.json()) as Slip;

    // console.log(data);

    setAdvice(data);
  }

  useEffect(() => {
    requestAdvice();
  }, []);

  return (
    <main className="h-screen max-h-fit min-h-screen w-full bg-bgDark font-primary grid place-content-center ">
      <div className="xl:p-12 mx-4 xl:m-0 p-8 relative bg-fgDark max-w-lg xl:max-w-2xl rounded-md w-fit shadow-lg shadow-shadow text-center">
        <h6 className="text-accentGreen uppercase mb-4 tracking-widest text-sm">
          {advice ? `Advice #${advice.slip.id}` : <span>Loading...</span>}
        </h6>

        <cite className="text-[28px] text-accentCyan font-extrabold">
          {advice ? `"${advice.slip.advice}"` : <span>Loading...</span>}
        </cite>

        {/* <div className="xl:my-16 my-8 w-full flex ">
          <div className="h-[1px] opacity-50 bg-white w-full" />
          <img className="self-start" src={dividerMobile} alt="" />
          <div className="h-[1px] opacity-50 bg-white w-full" />
        </div> */}

        {/* <img className="mx-auto my-4" src={dividerDesktop} alt="" /> */}

        <div className="w-full grid place-content-center">
          {/* <div className="w-4 aspect-square bg-black"></div> */}
          <Icon />
        </div>

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
