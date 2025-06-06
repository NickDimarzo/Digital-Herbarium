import Link from "next/link";
import FeatureCard from "./src/components/feature-card";
import FeatureCardReversed from "./src/components/feature-card-reversed";
import pageText from "/public/assets/json/landing-page-text.json";

export default function Page() {
  return (
    <div className="flex flex-col w-full justify-center items-center font-mono">
      <div className="flex flex-col xl:flex-row w-full sm:w-7/8 mx-20 m-2 xl:my-10 items-center justify-center xl:items-stretch">
        <div className="flex-col w-full sm:w-1/2 xl:w-1/3 flex bg-darker-blue justify-center items-center rounded-t-2xl xl:rounded-l-2xl xl:rounded-tr-none">
          <div className="flex items-center p-4 justify-center">
            <h1 className="text-4xl xl:text-5xl text-white">
              Digital Herbarium
            </h1>
          </div>
          <div className="w-2/3 flex items-center">
            <p className="p-4 text-xl xl:text-2xl text-white">
              This platform is for botany enthusiasts and horticulturalists to
              store and share their plant identification collections.
            </p>
          </div>
          <div className="flex">
            <button className="bg-dark-green text-gray-50 px-6 xl:px-10 text-xl font-mono m-8 py-4 rounded-2xl hover:bg-light-green shadow-lg transition duration-300 transform hover:-translate-y-1">
              <Link href="/src">Start Here</Link>
            </button>
          </div>
        </div>
        <div className="w-full sm:w-1/2 xl:w-1/3 flex justify-center bg-light-green rounded-b-2xl xl:rounded-r-2xl xl:rounded-bl-none p-4">
          <img
            className="m-12 object-cover rounded-2xl border-4 border-dark-blue shadow-lg w-96 h-96"
            src="https://media.istockphoto.com/id/1466653322/photo/close-up-woman-planting-a-young-fir-tree-in-the-forest-putting-it-down-on-the-ground.jpg?s=612x612&w=0&k=20&c=6B_xWx9GiHJzz24ilUUz-dfhPnY4iujhSYWj9aFzkVg="
            alt="Planting a young fir tree"
          />
        </div>
      </div>
      <div className="flex flex-col items-center sm:mx-20">
        <FeatureCard
          header="Discover"
          img="/assets/images/reading-book.png"
          text={pageText.sectionOne}
          screenShot="/assets/images/resources-snipet.png"
        />
        <FeatureCardReversed
          header="Identify"
          img="/assets/images/icon-plant.png"
          text={pageText.sectionTwo}
          screenShot="/assets/images/collection-snipet.png"
        />
        <FeatureCard
          header="Save"
          img="/assets/images/save-icon.png"
          text={pageText.sectionThree}
          screenShot="/assets/images/plant-snipet.png"
        />
      </div>
      <footer className="bg-dark-blue w-full py-4 mt-8 text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold">Digital Herbarium</p>
            <p className="text-sm text-gray-300">© 2025 All rights reserved.</p>
          </div>
          {/* <div className="flex space-x-6">
            <Link href="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
            <Link href="/privacy" className="text-gray-300 hover:text-white">
              Privacy
            </Link>
          </div> */}
          {/* <div className="flex space-x-4">
            <Link
              href="https://github.com/NickDimarzo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/images/github.jfif"
                alt="GitHub"
                className="h-6 w-6"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nick-dimarzo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/icons/linkedin.svg"
                alt="LinkedIn"
                className="h-6 w-6"
              />
            </Link>
          </div> */}
        </div>
      </footer>
    </div>
  );
}
