function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 bg-slate-800 shadow-lg">
        <h1 className="text-3xl font-bold text-sky-400">
          📚 AI Study Hub
        </h1>

        <button className="bg-sky-500 hover:bg-sky-600 px-5 py-2 rounded-lg transition">
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">

        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Learn Smarter with AI
        </h2>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-10">
          Free AI-powered learning platform for Class 9, 10, 11 and 12 students.
          Study Notes, PDFs, AI Tutor, Quizzes and much more.
        </p>

        <div className="flex flex-col md:flex-row gap-5">

          <button className="bg-sky-500 hover:bg-sky-600 px-8 py-4 rounded-xl text-lg transition">
            🚀 Start Learning
          </button>

          <button className="border-2 border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white px-8 py-4 rounded-xl text-lg transition">
            📚 Explore Subjects
          </button>

        </div>

      </section>

    </div>
  );
}

export default App;