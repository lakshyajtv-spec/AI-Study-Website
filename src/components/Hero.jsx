function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Learn
            <span className="text-sky-400"> Smarter </span>
            with AI
          </h1>

          <p className="mt-6 text-xl text-slate-300">
            Free AI-powered learning platform for Class 9, 10, 11 and 12
            students with Notes, PDFs, Quizzes and AI Tutor.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="bg-sky-500 hover:bg-sky-600 px-8 py-4 rounded-xl text-lg">
              Start Learning
            </button>

            <button className="border border-sky-500 text-sky-400 px-8 py-4 rounded-xl hover:bg-sky-500 hover:text-white">
              Explore Subjects
            </button>

          </div>

        </div>

        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full bg-sky-500/20 blur-3xl absolute"></div>

          <div className="relative text-[170px]">
            📚
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;