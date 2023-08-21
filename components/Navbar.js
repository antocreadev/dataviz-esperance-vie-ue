import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="navbar" style={{ backgroundColor: "white" }}>
      <Link href="./" className="btn btn-ghost normal-case text-xl">
        <span>DataViz - Espérance de vie dans l'Union européenne</span>
      </Link>

      <p>Anthony Menghi</p>
    </nav>
  );
}
