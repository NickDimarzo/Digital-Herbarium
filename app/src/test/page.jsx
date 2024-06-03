import Link from "next/link";

export default function Page() {
  return (
    // Main Container
    <div className="flex flex-col w-full justify-center">
      {/*Top Container*/}
      <div className="flex flex-row w-7/8 justify-center border-4 border-dark-blue m-20 ">
        {/*Left Container*/}
        <div className="flex-col w-1/3 flex">
          <div className="h-1/3 flex items-center">
            <h1 className="text-7xl">Digital Herbarium</h1>
          </div>
          <div className="h-1/3 flex items-center">
            <p className="text-5xl">
              This is a platform for botany enthusiasts and horticulturalists to
              store and share their plant identification collections.
            </p>
          </div>
          <div className="flex">
            <button className="bg-dark-green text-gray-50 px-5 xl:px-10 xl:text-4xl text-xl font-mono m-8 py-4 rounded-2xl hover:bg-light-green shadow-2xl shadow-dark-blue transition duration-500 hover:-translate-y-1 hover:scale-110">
              <Link href="../src">Login page</Link>
            </button>
          </div>
        </div>
        {/*Right Container*/}
        <div className="w-1/3 flex justify-center">
          <img
            className="w-full m-12"
            src="https://media.istockphoto.com/id/1466653322/photo/close-up-woman-planting-a-young-fir-tree-in-the-forest-putting-it-down-on-the-ground.jpg?s=612x612&w=0&k=20&c=6B_xWx9GiHJzz24ilUUz-dfhPnY4iujhSYWj9aFzkVg="
          />
        </div>
      </div>
      {/*Bottom Container*/}
      <div className="flex justify-center gap-5 border-4 border-dark-blue m-20">
        {/*Left Container*/}
        <div className="flex-col w-1/3 flex items-center">
          <div className="flex items-center">
            <h1 className="text-5xl">Feature 1</h1>
          </div>
          <div className=" w-full flex justify-center">
            <img
              className="m-12"
              src="https://media.istockphoto.com/id/1466653322/photo/close-up-woman-planting-a-young-fir-tree-in-the-forest-putting-it-down-on-the-ground.jpg?s=612x612&w=0&k=20&c=6B_xWx9GiHJzz24ilUUz-dfhPnY4iujhSYWj9aFzkVg="
            />
          </div>
          <div className="flex items-center">
            <p className="text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              incidunt officiis dolorem accusamus odit perferendis aperiam eaque
              voluptas, iure suscipit maxime doloremque est laborum recusandae
              illo fugit debitis amet consequatur.
            </p>
          </div>
        </div>
        {/*Center Container*/}
        <div className="flex-col w-1/3 flex items-center">
          <div className="flex items-center">
            <h1 className="text-5xl">Feature 2</h1>
          </div>
          <div className=" w-full flex justify-center">
            <img
              className="m-12"
              src="https://media.istockphoto.com/id/1466653322/photo/close-up-woman-planting-a-young-fir-tree-in-the-forest-putting-it-down-on-the-ground.jpg?s=612x612&w=0&k=20&c=6B_xWx9GiHJzz24ilUUz-dfhPnY4iujhSYWj9aFzkVg="
            />
          </div>
          <div className="flex items-center">
            <p className="text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              incidunt officiis dolorem accusamus odit perferendis aperiam eaque
              voluptas, iure suscipit maxime doloremque est laborum recusandae
              illo fugit debitis amet consequatur.
            </p>
          </div>
        </div>
        {/*Right Container*/}
        <div className="flex-col w-1/3 flex items-center">
          <div className="flex items-center">
            <h1 className="text-5xl">Feature 3</h1>
          </div>
          <div className=" w-full flex justify-center">
            <img
              className="m-12"
              src="https://media.istockphoto.com/id/1466653322/photo/close-up-woman-planting-a-young-fir-tree-in-the-forest-putting-it-down-on-the-ground.jpg?s=612x612&w=0&k=20&c=6B_xWx9GiHJzz24ilUUz-dfhPnY4iujhSYWj9aFzkVg="
            />
          </div>
          <div className="flex items-center">
            <p className="text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              incidunt officiis dolorem accusamus odit perferendis aperiam eaque
              voluptas, iure suscipit maxime doloremque est laborum recusandae
              illo fugit debitis amet consequatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
