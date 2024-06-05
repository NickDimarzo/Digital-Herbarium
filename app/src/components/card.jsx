import Link from "next/link";

export default function Card({ title, description, route, buttonText, image }) {
  return (
    <div className=" flex-col justify-center m-4 xl:m-8 text-sm  m:text-lg lg:text-xl xl:text-2xl font-mono bg-dark-green p-2 xl:p-5 rounded-3xl shadow-2xl border-darker-blue border-4">
      <div className="">
        <div className="flex justify-start py-2">
          <h1 className=" font-bold">{title}</h1>
        </div>
        <div>
          <img src={image} alt="image" className="flex mx-auto rounded-xl object-fill "/>
        </div>
        <div className="flex justify-start py-4">
          <p>{description}</p>
        </div>
        <div className="flex justify-start">
          <button className=" bg-dark-blue text-gray-50 px-10 font-mono py-4 rounded-2xl hover:bg-light-green shadow-2xl shadow-dark-blue transition duration-500 hover:-translate-y-1 hover:scale-110">
            <Link href={route}>{buttonText}</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
