import Image from "next/image"
import logo from "../../../public/image/logo.webp"
import Link from "next/link"

export function Navbar() {
    return (
        <div className="w-auto  shadow-md h-auto bg-white pr-10">
            <div className=" flex flex-wrap justify-between items-center   ">
                <Image className="rounded-full m-1 ml-3" src={logo} height={40}  alt="Logo: My Blog" />
                <div className="flex gap-6 font-bold">
                    <Link href={"/"}>Home</Link >
                    <Link href={"/about"}>About</Link>
                    <Link href={"/contact"}>Contact</Link>
                </div>
                
            </div>
        </div>


    )
}