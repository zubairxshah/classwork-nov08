import Image from "next/image";
import styles from './demo.module.css'

function FBLoginClone() {
    return (
        <>
        
      <div className={`${styles.watermark} bg-gray-100 h-screen flex items-center justify-center`}>
        {/* Left Side */}
        <div className="flex flex-col w-1/2 px-12">
          <Image
            src="/fb-assets/facebooklogo.svg"
            alt="logo"
            width={300}
            height={106}
          />
          <p className="text-3xl ml-7 -mt-6 mb-[90px] py-6">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
  
        {/* Right Side */}
        <div className="flex flex-col">
          <div className="bg-white p-8 rounded-xl w-[396px] shadow-lg">
            <input
              className="w-full my-2 border border-gray-300 p-3 rounded-md focus:outline-blue-600"
              type="text"
              placeholder="Email address or phone number"
            />
            <input
              className="w-full my-2 border border-gray-300 p-3 rounded-md focus:outline-blue-600"
              type="password"
              placeholder="Password"
            />
            <button className="w-full bg-blue-600 my-2 py-2 text-xl font-bold text-white rounded-md hover:bg-blue-700">
              Log in
            </button>
            <p className="cursor-pointer text-blue-600 my-2 text-center hover:underline">
              Forgotten password?
            </p>
            <hr className="my-4" />
            <div className="flex justify-center">
              <button className="bg-green-500 px-4 py-2 text-lg font-bold text-white rounded-md hover:bg-green-600">
                Create new account
              </button>
            </div>
          </div>
  
          <div className="text-center mt-4 text-sm py-2">
            <p className="text-gray-800">
              <b className="cursor-pointer font-semibold hover:underline">Create a Page</b> for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
        </>
    );
  }
  
  export default FBLoginClone;