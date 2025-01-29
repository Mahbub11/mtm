import { footerItems, footernavbarItems } from "@/constants";
import LinkHover from "@/animation/LinkHover";
import MeghNameFooter from "./company-name";

export default function Footer() {
  const phrase = ["Eye-", "opening"];
  const phrase1 = ["PRESENTATIONS"];
  return (
    <footer
      className=" w-full md:px-[10rem]  lg:px-[13rem]
      xl:px-[13rem] py-[5rem]
       bg-gradient-to-b from-[#ffffff] to-[#96b9c6]
     padding-x z-30 relativebg-background 
     flex flex-col justify-between  mt-[20px] pt-[5rem] font-[700] text-gray-700"
    >
      <div
        className="w-full flex justify-between items-center
       sm:flex-col sm:space-y-5 xm:flex-col text-[20px]"
      >
        <div>
          

          <button className="link-flash text-gray-700" 
          onClick={() => window.location.href = 'https://www.linkedin.com/in/mahbub-rahim-004016159/'}>Linkdin</button>

        </div>
        <div className="">
          <h2>@2025</h2>
        </div>

        <div className=" ">
          <h2 className="link-flash cursor-pointer">mahbubrahim@hotmail.com</h2>
        </div>
      </div>
    </footer>
  );
}
