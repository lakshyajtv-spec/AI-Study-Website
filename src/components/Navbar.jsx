import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-sky-400">
          📚 AI Study Hub
        </h1>

        <ul className="hidden md:flex gap-8 font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">Classes</a></li>
          <li><a href="#">Subjects</a></li>
          <li><a href="#">AI Tutor</a></li>
          <li><a href="#">Quiz</a></li>
          <li><a href="#">About</a></li>
        </ul>

        <button className="hidden md:block bg-sky-500 hover:bg-sky-600 px-5 py-2 rounded-xl">
          Login
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <ul className="flex flex-col p-5 gap-4">
            <li>Home</li>
            <li>Classes</li>
            <li>Subjects</li>
            <li>AI Tutor</li>
            <li>Quiz</li>
            <li>About</li>

            <button className="bg-sky-500 py-2 rounded-lg">
              Login
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;