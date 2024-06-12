import Link from "next/link";
import FeatureCard from "../components/feature-card";

export default function Page() {
  return (
    // Main Container
    <div className="flex flex-col w-full justify-center font-mono">
      {/*Top Container*/}
      <div className="flex flex-row w-7/8 justify-center mx-20 my-10 ">
        {/*Left Container*/}
        <div className="flex-col w-1/2 xl:w-1/3 flex bg-darker-blue justify-center items-center rounded-l-2xl">
          <div className="flex items-center p-4 justify-center">
            <h1 className="text-2xl xl:text-4xl text-white">Digital Herbarium</h1>
          </div>
          <div className="w-2/3 flex items-center ">
            <p className="p-4 text-xl xl:text-2xl w-full text-white">
              This is a platform for botany enthusiasts and horticulturalists to
              store and share their plant identification collections.
            </p>
          </div>
          <div className="flex">
            <button className="bg-dark-green text-gray-50 px-5 xl:px-10 xl:text-2xl text-xl font-mono m-8 py-4 rounded-2xl hover:bg-light-green shadow-2xl shadow-dark-blue transition duration-500 hover:-translate-y-1 hover:scale-110">
              <Link href="../src">Start Here</Link>
            </button>
          </div>
        </div>
        {/*Right Container*/}
        <div className="w-1/2 xl:w-1/3 flex justify-center bg-light-green rounded-r-2xl">
          <img
            className="w-full m-12 object-cover rounded-2xl border-4 border-dark-blue shadow-2xl shadow-dark-blue "
            src="https://media.istockphoto.com/id/1466653322/photo/close-up-woman-planting-a-young-fir-tree-in-the-forest-putting-it-down-on-the-ground.jpg?s=612x612&w=0&k=20&c=6B_xWx9GiHJzz24ilUUz-dfhPnY4iujhSYWj9aFzkVg="
          />
        </div>
      </div>
      {/*Bottom Container*/}
      <div className="flex justify-center mx-20 my-5">
        {/*Left Container*/}
        <FeatureCard
          header="Feature 1"
          img="https://images.unsplash.com/photo-1599864231004-948c8dcb3bbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGFsYmVydGF8ZW58MHx8MHx8fDA%3D"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi incidunt officiis dolorem accusamus odit perferendis aperiam eaque voluptas, iure suscipit maxime doloremque est laborum recusandae illo fugit debitis amet consequatur."
        />
        {/*Center Container*/}
        <FeatureCard
          header="Feature 2"
          img="https://plus.unsplash.com/premium_photo-1673102662960-094f49b1d4e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxwbGFudHN8ZW58MHx8MHx8fDA%3D"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi incidunt officiis dolorem accusamus odit perferendis aperiam eaque voluptas, iure suscipit maxime doloremque est laborum recusandae illo fugit debitis amet consequatur."
        />
        {/*Right Container*/}
        <FeatureCard
          header="Feature 3"
          img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi incidunt officiis dolorem accusamus odit perferendis aperiam eaque voluptas, iure suscipit maxime doloremque est laborum recusandae illo fugit debitis amet consequatur."
        />
      </div>
    </div>
  );
}
