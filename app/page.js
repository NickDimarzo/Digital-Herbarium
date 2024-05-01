import Link from "next/link";

export default function Page() {
  return (
    <main
      className="w-screen h-full flex-col justify-center  "
      style={{
        backgroundPosition: "center",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
      }}
    >
      <div className="flex w-full justify-center">
        <div className=" bg-moss rounded-3xl w-4/5  shadow-2xl shadow-dark flex items-center justify-center border-8 border-dark ">
          <div className="w-2/3 flex justify-center m-4 xl:m-10 bg-sand p-2 xl:p-6 rounded-3xl shadow-2xl ">
            <h1 className=" text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold font-mono text-brick bg-dark w-full justify-center flex rounded-3xl p-5 xl:p-10 px-10  md:px-20">
              Digital Herbarium
            </h1>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen flex justify-center">
        <div className=" w-4/5 xl:w-3/5 bg-moss flex-col h-max rounded-3xl justify-center border-8 border-dark xl:mt-64 lg:mt-32 mt-8 ">
          <div className="flex-col justify-center m-4 lg:m-8 xl:text-4xl lg:text-2xl md:text-lg  text-sm font-mono bg-sand p-2 lg:p-5 rounded-3xl items-center">
            <div className="flex justify-center items-center">
              <p className="px-8 justify-center font-bold xl:text-5xl md:text-2xl text-lg">
                Welcome to the Digital Herbarium!
              </p>
            </div>
            <p className="px-8 pt-10">
              This is a platform for botany enthusiasts and horticulturalists to
              store and share their plant identification collections.
            </p>
            <p className="px-8 pt-10">Please login to access your account.</p>
          </div>
          <div className="flex justify-center">
            <button className="bg-velvet text-brick px-10 xl:text-4xl text-xl font-mono m-8 py-4 rounded-full hover:bg-dark shadow-2xl shadow-dark transition duration-500 hover:-translate-y-1 hover:scale-110">
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
