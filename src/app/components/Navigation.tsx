export default function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/services" className="hover:underline">Services</a></li>
        <li><a href="/team" className="hover:underline">Team</a></li>
        <li><a href="/careers" className="hover:underline">Careers</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}