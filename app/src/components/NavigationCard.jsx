import Link from "next/link";

export default function NavigationCard({ title, description, route, buttonText, image }) {
  return (
    <div class="custom-card">
      <div className="flex flex-col justify-center text-sm m:text-lg lg:text-xl xl:text-2xl font-mono text-black">
        <div className="m-4">
          <div className="flex justify-start py-2">
            <h1 className="">{title}</h1>
          </div>
          <div>
            <img
              src={image}
              alt="image"
              className="flex mx-auto rounded-xl object-fill w-84 h-64 "
            />
          </div>
          <div className="flex justify-start py-4 h-32 overflow-y-auto w-96">
            <p>{description}</p>
          </div>
          <div className="flex justify-start">
            <button className=" bg-dark-blue text-gray-50 px-10 font-mono py-4 rounded-2xl hover:bg-light-green shadow-2xl shadow-dark-blue transition duration-500 hover:-translate-y-1 hover:scale-110">
              <Link href={route}>{buttonText}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
