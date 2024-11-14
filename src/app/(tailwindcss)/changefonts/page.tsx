import { Caveat, Rhodium_Libre } from "next/font/google";
import Link from "next/link";
const caveat = Caveat({ subsets: ["latin"] });
const rhodiumLibre = Rhodium_Libre({ weight:"400", subsets: ["latin"] });
function ChangeFonts() {
  return (
    <div
      className="w-full h-screen bg-slate-300 text-black flex flex-col
        items-center justify-center text-3xl"
    >
      <h1 className="mb-4">Changing Fonts and Their Styles in Next.js</h1>
      <h1 className="font-mono">I am a monospace font</h1>
      <h1 className="font-sans">I am a sans-serif font</h1>
      <h1 className={` ${caveat.className} text-red-900 font-semibold`}>
        I am a Caveat Font
      </h1>
      <h1 className={` ${rhodiumLibre.className} text-red-900 font-semibold`}>
        I am a Rhodium_Libre Font
      </h1>
      <div className="py-4">
        <h2 className="py-2 text-red-500 text-2xl">References:</h2>
        <p className="text-xl text-blue-700 hover:text-blue-600">
          <Link href="https://fonts.google.com/specimen/Caveat">
            Google Fonts
          </Link>
        </p>
        <p className="text-xl text-blue-700 hover:text-blue-600">
          <Link href="https://nextjs.org/docs/app/building-your-application/optimizing/fonts">
            Next Font Optimization
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ChangeFonts;
