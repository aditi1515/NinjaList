import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="notfound">
      <h1>Oops...</h1>
      <h2>Page cannot be found</h2>
      <p>
        Go back to{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>{" "}
      </p>
    </div>
  );
};

export default NotFound;
