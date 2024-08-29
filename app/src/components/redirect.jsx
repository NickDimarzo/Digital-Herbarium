import Link from "next/link";

export default function Redirect() {

  return (
    <div className="w-screen h-screen flex justify-center text-gray-50">
      <div className="w-2/5 bg-dark-blue flex-col h-max rounded-3xl justify-center border-8 border-darker-blue mt-64 ">
        <div className="flex-col justify-center m-8 text-4xl font-mono bg-dark-green p-5 rounded-3xl shadow-2xl">
          <div className="flex justify-center">
            <p>You must be signed in with a verified account to access this page</p>
          </div>
          <div className="flex justify-center">
            <button className="bg-darker-blue text-gray-50 px-10  font-mono m-8 py-4 rounded-2xl hover:bg-light-green shadow-2xl shadow-darker-blue transition duration-500 hover:-translate-y-1 hover:scale-110">
              <Link href="/src">Sign In</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
