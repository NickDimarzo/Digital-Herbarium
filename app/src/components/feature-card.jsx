export default function FeatureCard({ header, img, text, screenShot }) {
  return (
    <section className="flex justify-center my-14 p-10 border-2 border-light-blue rounded-2xl bg-dark-blue">
      {/* left container */}
      <div className="flex-col w-1/3 flex items-center bg-darker-blue m-2 text-white rounded-2xl ">
        <div className="flex items-center">
          <h1 className=" text-2xl xl:text-4xl mt-4 ">{header}</h1>
        </div>
        <div className="w-full flex justify-center p-2">
          <img className="object-cover rounded-2xl my-2 w-48 h-48" src={img} />
        </div>
        <div className="flex items-center justify-center p-4 m-4 bg-light-green rounded-2xl h-full overflow-auto ">
          <p className=" text-xl xl:text-2xl">{text}</p>
        </div>
      </div>
      {/* right container */}
      <div className="flex w-2/3 items-center bg-transparent rounded-2xl m-2">
        <img
          className="rounded-2xl"
          src={screenShot}
        />
      </div>
    </section>
  );
}
