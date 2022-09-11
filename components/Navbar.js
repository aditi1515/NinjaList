import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/download.png" width={128} height={100}/>
        <div className="links">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/ninjas">
            <a>Ninja Listing</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
