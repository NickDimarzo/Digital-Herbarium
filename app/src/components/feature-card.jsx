export default function FeatureCard( {header, img, text}) {
  return (
    <div className="flex-col w-1/3 flex items-center bg-darker-blue m-5 text-white rounded-2xl shadow-2xl shadow-black">
      <div className="flex items-center">
        <h1 className="text-5xl mt-4 ">{header}</h1>
      </div>
      <div className=" w-full h-full flex justify-center">
        <img
          className="object-cover rounded-2xl my-2 shadow-2xl shadow-black "
          src={img}
        />
      </div>
      <div className="flex items-center justify-center p-4 m-4 bg-light-green rounded-2xl ">
        <p className="text-3xl">
            {text}
        </p>
      </div>
    </div>
  );
}
