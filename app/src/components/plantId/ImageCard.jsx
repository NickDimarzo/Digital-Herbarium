import React from "react";

export default function ImageCard({
  plant,
  image,
  handleSelectPrimaryImage,
  handleSelectHighlightImageOne,
  handleSelectHighlightImageTwo,
  handleSelectHighlightImageThree,
  handleDeleteImage,
  primaryImageTitle,
  highLightImagesOneTitle,
  highLightImagesTwoTitle,
  highLightImagesThreeTitle,
}) {
  return (
    <div key={plant.id} className="flex-col p-2 justify-center relative">
      <Link href={image} target="_blank" rel="noopener noreferrer">
        <img
          className="border-2 border-dark-blue rounded-xl shadow-2xl shadow-black object-cover w-full h-64"
          src={image}
          alt="plant"
        />
      </Link>
      <Menu as="div" className="absolute top-4 right-4">
        <MenuButton className="bg-white p-2 rounded-full hover:bg-gray-100 shadow-lg">
          <EllipsisVerticalIcon className="h-5 w-5 text-gray-600" />
        </MenuButton>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <MenuItems className="absolute right-0 mt-2 w-64 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <MenuItem>
              {({ focus }) => (
                <button
                  onClick={() => handleSelectPrimaryImage(image)}
                  className={`${
                    focus ? "bg-light-green text-white" : "text-gray-900"
                  } group flex w-full items-center px-4 py-2 text-sm`}
                >
                  Set as{" "}
                  {primaryImageTitle ? primaryImageTitle : "Primary Image"}
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <button
                  onClick={() => handleSelectHighlightImageOne(image)}
                  className={`${
                    focus ? "bg-light-green text-white" : "text-gray-900"
                  } group flex w-full items-center px-4 py-2 text-sm`}
                >
                  Set as{" "}
                  {highLightImagesOneTitle
                    ? highLightImagesOneTitle
                    : "Highlight Image One"}
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <button
                  onClick={() => handleSelectHighlightImageTwo(image)}
                  className={`${
                    focus ? "bg-light-green text-white" : "text-gray-900"
                  } group flex w-full items-center px-4 py-2 text-sm`}
                >
                  Set as{" "}
                  {highLightImagesTwoTitle
                    ? highLightImagesTwoTitle
                    : "Highlight Image Two"}
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <button
                  onClick={() => handleSelectHighlightImageThree(image)}
                  className={`${
                    focus ? "bg-light-green text-white" : "text-gray-900"
                  } group flex w-full items-center px-4 py-2 text-sm`}
                >
                  Set as{" "}
                  {highLightImagesThreeTitle
                    ? highLightImagesThreeTitle
                    : "Highlight Image Three"}
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <button
                  onClick={() => handleDeleteImage(image)}
                  className={`${
                    focus ? "bg-light-green text-white" : "text-gray-900"
                  } group flex w-full items-center px-4 py-2 text-sm`}
                >
                  Delete
                </button>
              )}
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
