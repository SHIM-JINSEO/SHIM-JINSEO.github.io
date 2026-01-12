export default function Navbar() {
  return (
    <nav className="w-full h-20 border-b-2 border-gray-300 flex items-center px-4">
      <h1 className="text-black text-xl font-bold">Jinseo's Page</h1>
      <div className="flex justify-around ">
        <h2 className="text-gray-600 px-4 mx-4">Research</h2>
        <h2 className="text-gray-600 px-4 mx-4">Publication</h2>
        <h2 className="text-gray-600 px-4 mx-4">CV</h2>
        <h2 className="text-gray-600 px-4 mx-4">Contact</h2>
        <h2 className="text-gray-600 px-4 mx-4">Fun Facts</h2>
      </div>
    </nav>
  );
}
