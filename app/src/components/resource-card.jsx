import Link from "next/link";
export default function ResourceCard({ desc, img, text, link }) {
  return (
    <div className="flex-col w-full h-max flex items-center m-6 text-black rounded-2xl h-[400px]  ">
      <div className="w-full h-[250px] flex justify-center p-2">
        <img
          className="rounded-2xl my-2 w-full h-full object-contain"
          src={img}
          alt={desc}
        />
      </div>
      <div className="flex items-center h-[120px] px-4">
        <h3 className="text-center font-semibold">{desc}</h3>
      </div>
      <div className="flex-grow flex items-end p-4">
        <div className="w-full bg-light-green rounded-2xl py-4 px-8 text-center">
          <Link className="font-bold flex" href={link} target="_blank">
            {text}
            <div className=" flex items-center ml-2">
              <svg
                height="1.5rem"
                width="1.5rem"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 291.319 291.319"
              >
                <g>
                  <path
                    style={{ fill: "#F4B459" }}
                    d="M252.089,239.901c-120.033,57.126-194.528,9.331-242.214-19.7c-2.95-1.83-7.966,0.428-3.614,5.426
            c15.886,19.263,67.95,65.692,135.909,65.692c68.005,0,108.462-37.107,113.523-43.58
            C260.719,241.321,257.169,237.78,252.089,239.901z M285.8,221.284c-3.223-4.197-19.6-4.98-29.906-3.714
            c-10.324,1.229-25.818,7.538-24.471,11.325c0.692,1.42,2.103,0.783,9.195,0.146c7.11-0.71,27.029-3.223,31.18,2.203
            c4.17,5.462-6.354,31.49-8.275,35.687c-1.857,4.197,0.71,5.28,4.197,2.485c3.441-2.795,9.668-10.032,13.847-20.274
            C285.718,238.845,288.249,224.479,285.8,221.284z"
                  />
                  <path
                    style={{ fill: "#484848" }}
                    d="M221.71,149.219V53.557C221.71,37.125,205.815,0,148.689,0C91.572,0,61.184,35.696,61.184,67.85
            l47.74,4.27c0,0,10.633-32.136,35.313-32.136s22.987,19.992,22.987,24.316v20.784C135.607,86.149,57.096,95.18,57.096,161.382
            c0,71.191,89.863,74.177,119.332,28.167c1.138,1.866,2.431,3.696,4.051,5.408c10.843,11.398,25.308,24.981,25.308,24.981
            l36.852-36.415C242.658,183.513,221.71,167.071,221.71,149.219z M112.511,152.578c0-30.579,32.764-36.779,54.722-37.507v26.319
            C167.224,193.527,112.511,185.634,112.511,152.578z"
                  />
                </g>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
