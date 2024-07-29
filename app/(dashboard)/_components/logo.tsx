import Image from "next/image";

export const Logo = () => {
    return (
        <Image 
            height={185}
            width={185}
            alt="logo"
            src="/logo.svg"
        />
    )
}