// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// type MyComponentProps = {
//   Arr: { id: number; img: string; cont1: string; cont2: string };
// };
// const Category = ({ Arr }: MyComponentProps) => {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true); // Set to true once the component mounts on the client
//   }, []);

//   if (!isClient) {
//     return null; // This ensures that the component only renders on the client
//   }
//   return (
//     <>
//       {/* {Arr.map((e) => { */}
//       <div
//         key={Arr.id}
//         className="flex w-[410px] border-2  space-x-8 px-[15px] py-[15px]"
//       >
//         <div>
//           <Image src={Arr.img} height={32} width={32} alt="1"></Image>
//         </div>

//         <div className="flex flex-col justify-center">
//           <div className="lg:text-[20px] lg:font-semibold lg:leading-[30px] ">
//             {Arr.cont1}
//           </div>
//           <div>{Arr.cont2}</div>
//         </div>
//       </div>
//       {/* })} */}
//     </>
//   );
// };

// export default Category;

"use client";

import Image from "next/image";

type CategoryProps = {
  Arr: {
    id: number;
    img: string;
    cont1: string;
    cont2: string;
  };
};

const Category = ({ Arr }: CategoryProps) => {
  return (
    <div
      key={Arr.id}
      className="flex items-center border-2 border-gray-300 rounded-lg p-4 space-x-4 w-full sm:w-[380px] lg:w-[410px] hover:shadow-md transition-shadow duration-200"
    >
      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image src={Arr.img} height={32} width={32} alt="Category Icon" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col">
        <div className="text-lg font-semibold leading-6 text-gray-800 lg:text-xl">
          {Arr.cont1}
        </div>
        <div className="text-sm text-gray-600">{Arr.cont2}</div>
      </div>
    </div>
  );
};

export default Category;
