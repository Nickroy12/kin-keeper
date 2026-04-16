import Image from "next/image"
import errorPng from '../../public/App-Error.png'
import Link from "next/link"

 const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-3">
       <Image src={errorPng} width={200} height={200} alt="eror"/>
       <h2 className="text-5xl font-bold text-green-800">404 Error</h2>
       <Link href='/'><button className="btn bg-green-800 text-white">Home</button></Link>
    </div>
  )
}
export default NotFoundPage