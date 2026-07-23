function ClassCard({ title, color }) {
  return (
    <div
      className="class-card"
      style={{
        borderTop: `5px solid ${color}`,
      }}
    >
      <h3>{title}</h3>

      <p>
        Study notes, PDFs, AI explanations and quizzes for {title}.
      </p>

      <button className="study-btn">
        Study Now →
      </button>
    </div>
  );
}

export default ClassCard;