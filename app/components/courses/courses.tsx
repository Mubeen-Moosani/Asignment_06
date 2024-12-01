import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
type MyComponentProps = {
  Arr: {
    id: number;
    img: string;
    cont1: string;
    cont2: string;
    cont3: any;
    price: String;
  };
};
const Courses = ({ Arr }: MyComponentProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true once the component mounts on the client
  }, []);

  if (!isClient) {
    return null; // This ensures that the component only renders on the client
  }
  return (
    <div key={Arr.id} className="space-y-2  w-fit">
      <div className="">
        <Image src={Arr.img} height={300} width={416} alt="pic"></Image>
      </div>
      <div className="space-y-6">
        <div className="flex justify-between">
          <div>{Arr.cont1}</div>
          <div className="flex">
            <div>
              <Image
                src="/courses/star.png"
                width={24}
                height={24}
                alt=""
              ></Image>
            </div>
            <div>5.0</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="font-bold text-2xl	">{Arr.cont2}</div>
          <div>{Arr.cont3}</div>
        </div>
        <div className="space-x-4">
          <Button className="border-2 border-black rounded-2" variant="ghost">
            Enroll Now
          </Button>
          <Button className="font-bold" variant="ghost">
            {Arr.price}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Courses;
