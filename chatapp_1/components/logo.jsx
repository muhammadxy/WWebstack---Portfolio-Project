import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
    return (
        <Link href={"/chat"}>
            <div className="hover:opacity-75 transition flex items-center gap-x-5">
                <Image src={"/cal.png"} alt="Logo" width={30} height={30} />
            </div>
        </Link>
    );
};
