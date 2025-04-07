export default function FeatureCardReversed({ header, img, text, screenShot }) {
  return (
    <section className="flex w-full justify-center my-14 p-10 border-2 border-light-blue rounded-2xl bg-dark-blue  ">
      {/* right container */}
      <div className="flex w-2/3 items-center bg-transparent rounded-2xl m-2">
        <img
          className="rounded-2xl h-full object-fill"
          src={screenShot}
        />
      </div>
      {/* left container */}
      <div className="flex-col w-1/3 flex items-center justify-between bg-darker-blue m-2 text-white rounded-2xl ">
        <div className="flex items-center">
          <h1 className=" text-2xl xl:text-4xl mt-4 ">{header}</h1>
        </div>
        <div className="w-full flex justify-center p-2">
          <img className="rounded-2xl my-2 w-1/2 h-max" src={img} />
        </div>
        <div className="flex flex-col items-center justify-center p-4 m-4 bg-light-green rounded-2xl overflow-auto ">
        <ul className=" text-md xl:text-xl h-full justify-around items-center flex flex-col">
            <li className="m-2">{text.lineOne}</li>
            <li className="m-2">{text.lineTwo}</li>
            <li className="m-2">{text.lineThree}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
