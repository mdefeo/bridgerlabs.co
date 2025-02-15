import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Bridger Labs</Link>
        <Navigation />
      </div>
    </header>
  );
}