import Image from "next/image";
import { Banner } from "./Home/Banner";
import { Count } from "./Home/Count";
import Friend from "./Home/Friend";


export default function Home() {
  return (
    <div className=" ">
    <Banner/>
    <Count/>
    <Friend/>
    </div>
  );
}
