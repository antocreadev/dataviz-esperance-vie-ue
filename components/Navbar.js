import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="./" className="btn btn-ghost normal-case text-xl">
        <span>DataViz - LifeSpan</span>
      </Link>

      <Link href="#home">
        <span>Home</span>
      </Link>
    </nav>
  );
}
