import Link from "next/link";

export default function Redirect() {

  return (
    <div className=" w-full flex justify-center text-black text-sm m:text-lg lg:text-xl xl:text-2xl">
      <div class="custom-card">
        <div className="flex-col justify-center m-8 font-mono ">
          <div className="flex justify-center">
            <p>You must be signed in with a verified account to access this page</p>
          </div>
          <div className="flex justify-center">
            <button className="bg-darker-blue text-gray-50 px-6  font-mono m-8 py-2 rounded-lg hover:bg-light-green shadow-2xl shadow-darker-blue transition duration-500 hover:-translate-y-1 hover:scale-110">
              <Link href="/src">Sign In</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
