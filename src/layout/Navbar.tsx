import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <nav className="w-full h-20 border-b-2 border-gray-300 flex items-center px-4">
      <h1 className="text-black text-xl font-bold mx-2">
        <Link to="/">Jinseo's Page</Link>
      </h1>
      <div className="flex justify-around ">
        <h2 className="text-gray-600 px-4 mx-4">
          <Link to="/Research">Research</Link>
        </h2>
        <h2 className="text-gray-600 px-4 mx-4">
          <Link to="/Publication">Publication</Link>
        </h2>
        <h2 className="text-gray-600 px-4 mx-4">CV</h2>
        <h2 className="text-gray-600 px-4 mx-4">
          <Link to="/Contact">Contact</Link>
        </h2>
        <h2 className="text-gray-600 px-4 mx-4">
          <Link to="/FunFacts">Fun Facts</Link>
        </h2>
      </div>
    </nav>
  );
}
