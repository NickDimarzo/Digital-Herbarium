
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
                    <Link href={link} target="_blank">
                        {text}
                    </Link>
                </div>
            </div>
        </div>
    );
}