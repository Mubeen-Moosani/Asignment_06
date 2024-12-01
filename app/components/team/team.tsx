"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
type MyComponentProps = {
  Arr: { id: number; img: string; name: string; position: string };
};
const Team = ({ Arr }: MyComponentProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true once the component mounts on the client
  }, []);

  if (!isClient) {
    return null; // This ensures that the component only renders on the client
  }
  return (
    <div key={Arr.id} className=" px-[100px] text-center space-y-6">
      <div className=" w-fit m-auto">
        <Image src={Arr.img} height={80} width={80} alt=""></Image>
      </div>
      <div className="grid grid-rows-2 ">
        <div className="pb-[10px]">
          <div className="text-[20px] font-[600] leading-[30px]">
            {Arr.name}
          </div>
          <div>{Arr.position}</div>
        </div>
      </div>
      <div className="flex justify-center items-end space-x-4">
        <Image
          src="/team/linkedin.png"
          height={18}
          width={18}
          alt="Linkedin"
        ></Image>
        <Image
          src="/team/twitter.png"
          height={18}
          width={18}
          alt="Linkedin"
        ></Image>
        <Image
          src="/team/dribble.png"
          height={18}
          width={18}
          alt="Linkedin"
        ></Image>
      </div>
    </div>
  );
};

export default Team;
