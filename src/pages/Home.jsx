import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ClassCard from "../components/ClassCard";
import Footer from "../components/Footer";

function Home() {
  const classes = [
    { className: "Class 9", color: "#4CAF50" },
    { className: "Class 10", color: "#2196F3" },
    { className: "Class 11", color: "#FF9800" },
    { className: "Class 12", color: "#E91E63" },
  ];

  return (
    <>
      <Navbar />
      <Hero />

      <section className="classes-section">
        <h2>Choose Your Class</h2>

        <div className="class-grid">
          {classes.map((item, index) => (
            <ClassCard
              key={index}
              title={item.className}
              color={item.color}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;