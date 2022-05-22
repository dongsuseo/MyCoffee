import Link from "next/link";
import { useRouter } from "next/router";
// import css from "styled-jsx/css";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <style jsx>
        {`
          nav {
            background-color: tomato;
          }
          a {
            text-decoration: none;
          }
        `}
      </style>
    </nav>
  );
}
