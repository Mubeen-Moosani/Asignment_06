"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
type MyComponentProps = {
  Arr: { id: number; img: string; name: string; position: string };
};
const Testimonial = ({ Arr }: MyComponentProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true once the component mounts on the client
  }, []);

  if (!isClient) {
    return null; // This ensures that the component only renders on the client
  }
  return (
    <div
      key={Arr.id}
      className="px-[15px] grid grid-rows-3 border-2 border-black gap-4"
    >
      <div className="content-center">
        <Image
          src="/testimonial/Stars.png"
          height={18.89}
          width={116}
          alt="Stars"
        ></Image>
      </div>
      <div>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Suspendisse varius enim in eros elementum tristique. Duis <br /> cursus,
        mi quis viverra ornare."
      </div>
      <div className="flex space-x-4">
        <div>
          <Image
            className="rounded-[50px]"
            src={Arr.img}
            height={56}
            width={56}
            alt="testimonials"
          ></Image>
        </div>
        <div className="content-center">
          <div className="font-bold">{Arr.name}</div>
          <div>{Arr.position}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
