import Heading from "./components/heading";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="flex flex-col min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-mainpage.jpg')" }}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className="text-center text-3xl">
            GIAIC Class Work and Assignment - November 08
          </h1>
          <br></br>
        </div>
        <div className="mt-4">
        <Heading text="Topics" />
          <ul className="list-disc pl-6 text-xl">
            <li>Tailwind CSS</li>
            <ul className="
            list-inside list-decimal px-2">
              <li>Intro</li>
              <li>Font Style and Responsiveness</li>
              <li>Change or Customize Fonts</li>
              <li>Responsiveness Web Layout</li>
            </ul>
            <li>Assignment - Demo Facebook Login Page</li>
            <li>Links : Portfolio and Todo List</li>
          </ul>
        </div>

        <div className="mt-4 text-xl text-grey-600 mb-4">
          <p>
            Previous Classwork{" "}
            <Link
              className="text-blue-800 underline"
              href="https://github.com/zubairxshah/classwork-oct18"
            >
              GitHub Repo
            </Link>{" "}
            and{" "}
            <Link
              className="text-blue-800 underline"
              href="https://classwork-oct18.vercel.app/"
            >
              Vercel App
            </Link>
            .
          </p>
          <p className="text-red-800 mb-4">
            Note: Visit my GitHub Repo for understanding the code mechanism.
          </p>
          <div>
            <Link
              href="https://github.com/zubairxshah/classwork-oct25"
              passHref
            >
              <button className="text-white bg-[#90cc75] hover:bg-black hover:text-[#90cc75] px-3 py-2 rounded-md text-md font-medium">
                Visit GitHub Repo for Codes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
