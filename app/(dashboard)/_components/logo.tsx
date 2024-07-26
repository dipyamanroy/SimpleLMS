import Image from "next/image";

export const Logo = () => {
    return (
        <Image 
            height={155}
            width={155}
            alt="logo"
            src="/logo.svg"
        />
    )
}