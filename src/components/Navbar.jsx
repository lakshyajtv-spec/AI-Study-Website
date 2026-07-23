function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        📚 AI Study Hub
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Classes</a></li>
        <li><a href="#">Subjects</a></li>
        <li><a href="#">AI Tutor</a></li>
        <li><a href="#">Quiz</a></li>
        <li><a href="#">About</a></li>
      </ul>

      <button className="login-btn">
        Login
      </button>
    </nav>
  );
}

export default Navbar;