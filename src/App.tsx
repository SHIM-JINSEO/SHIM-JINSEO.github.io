import Navbar from "./layout/Navbar";
import Aside from "./layout/Aside";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="flex">
        <Aside />
        <main className="flex-1 p-4">
          <h1 className="text-blue-500">Hi, I'm Jinseo Shim</h1>
        </main>
      </div>
    </div>
  );
}

export default App;
