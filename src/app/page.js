import Image from "next/image";
import Friend from "./Home/Friend";
import { Count } from "./Home/Count";
import { Banner } from "./Home/Banner";



export default function Home() {
  return (
    <div className=" ">
    <Banner/>
    <Count/>
    <Friend/>
    </div>
  );
}
