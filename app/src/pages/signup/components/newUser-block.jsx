import Link from "next/link";

export default function NewUserBlock({ user }) {
  return (
    <div>
      <div className="flex justify-center px-8 pt-10">
        <h1>Thanks for creating an account</h1>
      </div>
      <div className="flex justify-center px-8 pt-10">
        <p>A verification email has been sent to: </p>
      </div>
      <div className="flex justify-center px-8 pt-10">
        <p>{user.email}</p>
      </div>
      <div className="flex justify-center px-8 pt-10">
        <button className="flex bg-dark-blue text-gray-50 px-10 font-mono m-8 py-4 rounded-xl hover:bg-light-green shadow-2xl shadow-dark-blue transition duration-500 hover:-translate-y-1 hover:scale-110">
          <Link href="/src">Login</Link>
        </button>
      </div>
    </div>
  );
}
