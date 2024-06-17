export default function FeatureCard( {header, img, text}) {
  return (
    <div className="flex-col w-full sm:w-1/2 xl:w-1/3 flex items-center bg-darker-blue m-2 text-white rounded-2xl shadow-2xl shadow-black ">
      <div className="flex items-center">
        <h1 className=" text-2xl xl:text-4xl mt-4 ">{header}</h1>
      </div>
      <div className=" w-full flex justify-center p-2">
        <img
          className="object-cover rounded-2xl my-2 w-48 h-48"
          src={img}
        />
      </div>
      <div className="flex items-center justify-center p-4 m-4 bg-light-green rounded-2xl h-64 overflow-auto ">
        <p className=" text-xl xl:text-2xl">
            {text}
        </p>
      </div>
    </div>
  );
}
