"use client";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import Category from "./components/category/category";
import Courses from "./components/courses/courses";
import Team from "./components/team/team";
import Testimonial from "./components/testimonial/testimonial";
const Home = () => {
  const courses = [
    {
      id: 1,
      img: "/courses/1.png",
      cont1: "Design",
      cont2: "UI/UX DESIGN 201",
      cont3: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br />
          elit. Suspendisse varius enim in eros.
        </>
      ),
      price: "$400",
    },
    {
      id: 2,
      img: "/courses/2.png",
      cont1: "Programming",
      cont2: "Introduction to Python",
      cont3: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br />
          elit. Suspendisse varius enim in eros.
        </>
      ),
      price: "$400",
    },
    {
      id: 3,
      img: "/courses/3.png",
      cont1: "Data Analysis for Beginners",
      cont2: "UI/UX DESIGN 201",
      cont3: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br />
          elit. Suspendisse varius enim in eros.
        </>
      ),
      price: "$400",
    },
    {
      id: 4,
      img: "/courses/4.png",
      cont1: "Art",
      cont2: "Art Specialization",
      cont3: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br />
          elit. Suspendisse varius enim in eros.
        </>
      ),
      price: "$400",
    },
    {
      id: 5,
      img: "/courses/5.png",
      cont1: "Law",
      cont2: "Rule of Law",
      cont3: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br />
          elit. Suspendisse varius enim in eros.
        </>
      ),
      price: "$400",
    },
    {
      id: 6,
      img: "/courses/6.png",
      cont1: "Tech",
      cont2: "Introduction to Webflow",
      cont3: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br />
          elit. Suspendisse varius enim in eros.
        </>
      ),
      price: "$400",
    },
  ];
  const category = [
    {
      id: 1,
      img: "/16/1.png",
      cont1: "Design & Development",
      cont2: "50+ Courses Available",
    },
    {
      id: 2,
      img: "/16/2.png",
      cont1: "Marketing",
      cont2: "50+ Courses Available",
    },
    {
      id: 3,
      img: "/16/3.png",
      cont1: "Development",
      cont2: "50+ Courses Available",
    },
    {
      id: 4,
      img: "/16/4.png",
      cont1: "Communication",
      cont2: "50+ Courses Available",
    },
    {
      id: 5,
      img: "/16/5.png",
      cont1: "Digital Marketing",
      cont2: "50+ Courses Available",
    },
    {
      id: 6,
      img: "/16/6.png",
      cont1: "Self Development",
      cont2: "50+ Courses Available",
    },
    {
      id: 7,
      img: "/16/7.png",
      cont1: "Business",
      cont2: "50+ Courses Available",
    },
    {
      id: 8,
      img: "/16/8.png",
      cont1: "Finance",
      cont2: "50+ Courses Available",
    },
    {
      id: 9,
      img: "/16/9.png",
      cont1: "Consulting",
      cont2: "50+ Courses Available",
    },
  ];
  const team = [
    {
      id: 1,
      img: `/team/1.png`,
      name: "James Nduku",
      position: "Marketing cordinator",
    },
    {
      id: 2,
      img: `/team/2.png`,
      name: "Joseph Munyambu",
      position: "Nursing Assistant",
    },
    {
      id: 3,
      img: `/team/3.png`,
      name: "Joseph ngumbau",
      position: "Medical Assistant",
    },
    {
      id: 4,
      img: `/team/4.png`,
      name: "Erick Kipkemboi",
      position: "Web Designer",
    },
    {
      id: 5,
      img: `/team/5.png`,
      name: "Stephen Kerubo",
      position: "President of sales",
    },
    {
      id: 6,
      img: `/team/6.png`,
      name: "John Leboo",
      position: "Dog Trainer",
    },
  ];
  const testimonial = [
    {
      id: 1,
      img: "/team/3.png",
      name: "James Nduku",
      position: "Software Developer",
    },
    {
      id: 2,
      img: "/team/4.png",
      name: "Erick Kipkemboi",
      position: "Scrum Master",
    },
    {
      id: 3,
      img: "/team/5.png",
      name: "Stephen Kerubo",
      position: "UI/UX Designer",
    },
  ];

  return (
    <>
      <div className="    space-y-[50px] ">
        <div className=" border-b-2 border-black">
          <div className="w-[1154px] gap-4 m-auto flex lg:my-2">
            <div className="flex gap-4  w-[30%]  ">
              <div className="border-r-2 pr-4">phone 999 999 999 </div>
              <div> Emai: info@gmail.com</div>
            </div>
            <div className=" w-[70%]">
              <div className="flex gap-4 justify-end  ">
                <Image
                  src="/icon/fb.png"
                  height={18}
                  width={10}
                  alt="Mubeen"
                ></Image>
                <Image
                  src="/icon/insta.png"
                  height={18}
                  width={18}
                  alt="Mubeen"
                ></Image>
                <Image
                  src="/icon/twitter.png"
                  height={15.3}
                  width={18}
                  alt="Mubeen"
                ></Image>
                <Image
                  src="/icon/linkedin.png"
                  height={18}
                  width={18}
                  alt="Mubeen"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="lg:flex lg:justify-between lg:w-[1154px] lg:m-auto lg:items-center">
            <div className="">
              <Image
                src="/Ddsgnr.png"
                width={130.6}
                height={41}
                alt="Ddsgnr"
              ></Image>
            </div>
            <div className=" flex gap-[32px]">
              <div className="flex items-center gap-[32px] text-base leading-6 font-normal  ">
                <Link href="d">Home</Link>
                <Link href="d">Courses</Link>
                <Link href="d">Services</Link>
                <Link href="d">Acheivements</Link>
                <Link href="d">About Us</Link>
                <Link href="d">Testimonials</Link>
              </div>
              <div className="flex gap-4">
                <Link
                  className="border-[1px] px-[20px] py-[8px] rounded-[5px]"
                  href=""
                >
                  Login
                </Link>
                <Link
                  className="border-[1px] px-[20px] py-[8px] rounded-[5px] bg-black text-white"
                  href=""
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:items-center  w-fit m-auto">
          <div className="lg:pr-[60px] lg:pl-[80px] lg:flex lg:flex-col lg:gap-[24px]">
            <div className="lg:flex lg:flex-col lg:gap-[24px]">
              <div className="lg:text-[56px] lg:font-bold lg:leading-[67.2px]">
                Learn New Skills <br /> Online With Ease
              </div>
              <div className="lg:text-[18px] lg:leading-[27px]">
                Discover a wide range of courses covering a variety of <br />
                subjects, taught by expert instructors.
              </div>
            </div>
            <div className=" flex  flex-row  justify-content gap-[16px]">
              <Link
                className=" rounded-[5px] border-[1px] bg-black text-white text-[16px] leading-[24px] py-[12px] px-[24px]"
                href="d"
              >
                Start Learning Now
              </Link>
              <Link
                className="rounded-[5px] border-[1px] border-black text-[16px] leading-[24px] py-[12px] px-[24px]"
                href="d"
              >
                Explore Courses
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/placeholder.png"
              width={640}
              height={900}
              alt="placeholder"
              className=""
            ></Image>
          </div>
        </div>
        <div className=" lg:flex  lg:py-[80px] lg:gap-[64px] w-fit m-auto">
          <div className="lg:text-[24px] font-bold lg:leading-[33.5px] sm:text-[18px] sm:leading-[27px]">
            Trusted by 2000+ companies <br /> worldwide.
          </div>
          <div className="flex justify-between gap-[19.2px] py-[8.74px] px-[30px] ">
            <Image height={38.52} width={123.8} src="/1.png" alt="a"></Image>
            <Image height={38.52} width={123.8} src="/2.png" alt="a"></Image>
            <Image height={38.52} width={123.8} src="/3.png" alt="a"></Image>
            <Image height={38.52} width={123.8} src="/4.png" alt="a"></Image>
            <Image height={38.52} width={123.8} src="/5.png" alt="a"></Image>
            <Image height={38.52} width={123.8} src="/6.png" alt="a"></Image>
          </div>
        </div>
        <div className=" lg:flex lg:flex-col justify-center lg:py:-[112px] lg:px-[64px] lg:gap-[80px] sm:py-[48px] sm:px-[24px] sm:gap-[48px]">
          <div className=" flex flex-col lg:w-fit lg:m-auto lg:gap-[24px]">
            <div className="lg:text-[48px] font-bold lg:leading-[57.6px] sm:text-[32px] sm:leading-[41.6px] sm:align-center">
              Explore Courses By Category
            </div>
            <div className="text-[18px] leading=[27px] sm:align-center">
              Discover a wide range of courses covering a variety of subjects,
              taught by expert instructors.
            </div>
          </div>
          <div className="grid grid-cols-3 lg:w-[1280px] lg:m-auto  gap-14 ">
            {category.map((e) => (
              <Category Arr={e}></Category>
            ))}
          </div>
          <div className="	border-2 m-auto">
            <Button className="text-base border-black" variant="outline">
              Veiw All Courses
            </Button>
          </div>
        </div>
        <div className=" lg:w-[1280px] m-auto flex flex-col gap-16">
          <div className=" text-center  space-y-4">
            <div className="text-[48px] font-bold  leading-[57.6px]">
              Our Achivements
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra <br /> ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat.
            </div>
          </div>
          <div className=" grid grid-cols-4 ">
            <div className="text-center">
              <div className="text-[40px] font-bold  leading-[48px]">+200</div>
              <div className="">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-[40px] font-bold leading-[48px]">50K</div>
              <div className="">Mentors</div>
            </div>
            <div className="text-center">
              <div className="text-[40px] font-bold leading-[48px]">370K</div>
              <div className="">Students</div>
            </div>
            <div className="text-center">
              <div className="text-[40px] font-bold leading-[48px]">100+</div>
              <div className="">Recognition</div>
            </div>
          </div>
        </div>
        <div className=" flex  flex-col mt-[80px] gap-[60px]">
          <div className="w-fit m-auto space-y-4 text-center">
            <div className="text-[56px] font-bold leading-[67.2px]">
              Courses
            </div>
            <div className="text-[18px]">Your ultimate guide to learning</div>
          </div>
          <div className="w-fit m-auto space-y-6">
            <div className="flex flex-row gap-12  m-auto w-fit">
              <Link className="hover:underline" href="">
                Popular
              </Link>
              <Link className="hover:underline" href="">
                Recommended
              </Link>
              <Link className="hover:underline" href="">
                Best Price
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-[32px]">
              {courses.map((e) => (
                <Courses Arr={e}></Courses>
              ))}
            </div>
            <div className="text-center">
              <Button
                variant="ghost"
                className="border-2 border-black text-base	"
              >
                View All Courses
              </Button>
            </div>
          </div>
        </div>
        <div className=" space-y-10">
          <div className="text-center space-y-4">
            <div className="text-5xl font-bold leading-[57.6px]">Our Team</div>
            <div className="text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-12 w-fit items-center m-auto">
            {team.map((e) => (
              <Team Arr={e}></Team>
            ))}
          </div>
        </div>
        <div className="w-fit m-auto space-y-6 bg-[#F7F7F7] ">
          <div className="space-y-2">
            <div className="text-[48px] font-bold leading-[57.6px]">
              Customer testimonials
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
          <div className="grid grid-cols-3 gap-6 ">
            {testimonial.map((e) => (
              <Testimonial Arr={e}></Testimonial>
            ))}
          </div>
          <div>
            <Image
              src="/testimonial/dots.png"
              height={8}
              width={72}
              alt="dots"
            ></Image>
          </div>
        </div>
        <div>
          <div className="w-[1120px] m-auto space-y-[50px] ">
            <div className="flex  justify-between ">
              <div className="">
                <div className="text-[18px] font-bold leading-[27px]">
                  Subscribe to our newsletter
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
              <div className="space-y-[16px]">
                <div className="space-x-4 flex-end">
                  <input
                    className="rounded-[5px] border-2 border-black p-[12px] h-[48px]"
                    type="text"
                    placeholder="Enter your Email"
                  />
                  <Button
                    className="border-2 border-black p-[12px] h-[48px]"
                    variant="ghost"
                  >
                    {" "}
                    Subscribe
                  </Button>
                </div>
                <div className="text-[12px]">
                  By subscribing you agree to with our Privacy Policy
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4">
              <div>
                <Image
                  src="/Ddsgnr.png"
                  height={30}
                  width={90}
                  alt="Ddsgnr"
                ></Image>
              </div>
              <div className="space-y-[20px]">
                <div className="text-[16px] font-bold">Courses</div>
                <div>
                  <div className="py-[8px]">Business</div>
                  <div className="py-[8px]">Devlopment</div>
                  <div className="py-[8px]">Technology</div>
                  <div className="py-[8px]">Programming</div>
                </div>
              </div>
              <div className="space-y-[20px]">
                <div className="text-[16px] font-bold">Resourses</div>
                <div>
                  <div className="py-[8px]">Career</div>
                  <div className="py-[8px]">Resume</div>
                  <div className="py-[8px]">Learning</div>
                  <div className="py-[8px]">Interview Preparation</div>
                  <div className="py-[8px]">Jobs</div>
                </div>
              </div>
              <div className="space-y-[20px]">
                <div className="text-[16px] font-bold">About Us</div>
                <div>
                  <div className="py-[8px]">Contact</div>
                  <div className="py-[8px]">Help/Support</div>
                  <div className="py-[8px]">FAQs</div>
                  <div className="py-[8px]">Terms and Conditions</div>
                  <div className="py-[8px]">Partners</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <div className="text-[14px]">
                  2023 Ddsgnr. All right reserved.
                </div>
                <div className="text-[14px]">Privacy Policy</div>
                <div className="text-[14px]">Terms of Services</div>
                <div className="text-[14px]">Cookies Settings</div>
              </div>
              <div className=" flex gap-x-2">
                <Image
                  src="/Icon/fb.png"
                  height={18}
                  width={10}
                  alt="Facebook"
                ></Image>
                <Image
                  src="/Icon/insta.png"
                  height={18}
                  width={18}
                  alt="Facebook"
                ></Image>
                <Image
                  src="/Icon/twitter.png"
                  height={15.3}
                  width={18}
                  alt="Facebook"
                ></Image>
                <Image
                  src="/Icon/linkedin.png"
                  height={18}
                  width={18}
                  alt="Facebook"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
