import Image from "next/image";
import Link from "next/link";
import { Card } from "flowbite-react";

export default function Page() {
  return (
    <main className="w-screen h-full flex-col justify-center"  style={{backgroundPosition: 'center', backgroundImage: "url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover'}}>
      <div className="w-screen bg-moss rounded-b-full shadow-2xl shadow-dark flex items-center justify-center ">
        <div className="w-2/3 flex justify-center m-10 bg-dark rounded-full shadow-2xl ">
          <h1 className="text-7xl font-bold font-mono text-brick p-10 px-20">
            Digital Herbarium
          </h1>
        </div>
      </div>
      <div className="w-screen h-screen flex justify-center">
        <div className="w-2/5 bg-moss flex-col h-max rounded-3xl justify-center border-8 border-dark mt-64 ">
          <div className="flex-col justify-center m-8 text-4xl font-mono bg-sand p-5 rounded-3xl">
            <div className="flex justify-center">
            <p className="px-8 justify-center font-bold text-5xl">Welcome to the Digital Herbarium!</p>
            </div>
            <p className="px-8 pt-10">
              This is a platform for botany enthusiasts and horticulturalists to store and
              share their plant identification collections.
            </p>
            <p className="px-8 pt-10">Please login to access your account.</p>
          </div>
          <div className="flex justify-center">
            <button className="bg-velvet text-brick px-10 text-4xl font-mono m-8 py-4 rounded-full hover:bg-dark shadow-2xl shadow-dark transition duration-500 hover:-translate-y-1 hover:scale-110">
              <Link href="src">Login page</Link>
            </button>
          </div>
        </div>
      </div>
      <div>
        <p>TEST</p>
      </div>
    </main>
  );
}
