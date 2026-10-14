import { useState } from "react";
import "./App.css";

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [showConfession, setShowConfession] = useState(false);

  return (
    <main className="page">
      <div className="floating-hearts" aria-hidden="true">
        ❤️ 💖 💕 💗 💘 🩷 💝
      </div>

      <header className="topbar">
        <span className="logo">♥ OPERATION AMA</span>
        <span className="top-note">Breaking news 👀</span>
      </header>

      <section className="billboard">
        <span className="badge">🚨 VERY IMPORTANT ANNOUNCEMENT</span>

        <p className="intro">Ama, please pay attention 😂</p>

        <h1>
          HEY <span>AMA</span>!!!
        </h1>

        <p className="subtitle">
          I have a small problem...
          <br />
          <strong>And somehow, you're responsible. 😭</strong>
        </p>

        <p className="joke">
          I wanted to rent a billboard, but my bank account said:
          <br />
          <strong>"My brother, use your laptop." 💀</strong>
        </p>

        <button className="main-button" onClick={() => setShowMessage(true)}>
          {showMessage
            ? "The announcement is here 👇"
            : "Tell me the problem 👀"}
        </button>

        {showMessage && (
          <div className="message reveal">
            <p className="label">OFFICIAL STATEMENT 📢</p>
            <h2>Ama, it's actually serious. 😂❤️</h2>

            <p>
              I've been trying to find the perfect way to tell you something,
              and then I remembered... I'm a software engineer! 💻
            </p>

            <p>
              So instead of a giant billboard in the street, I built this little
              one just for you.
            </p>

            <button
              className="main-button"
              onClick={() => setShowConfession(true)}
            >
              Reveal the truth ❤️
            </button>
          </div>
        )}

        {showConfession && (
          <div className="confession reveal">
            <div className="heart">💖</div>
            <p className="label">THE TRUTH</p>
            <h2>Ama, I like you. 🥹❤️</h2>

            <p>
              I may not have millions to print a giant billboard with your name
              on it, but I'm a software engineer, and I created this little
              corner of the internet just for you.
            </p>

            <p>
              I couldn't put my feelings on a billboard in the streets, so I
              decided to put them here, where every line of code carries a
              little piece of what I want to say.
            </p>

            <p>
              The truth is, Ama, <strong>I like you.</strong>
              And I wanted to tell you in my own way, with a little creativity
              and a lot of heart. ❤️
            </p>

            <p className="sweet-note">
              I may not have millions to spend, but if I can put a smile on your
              face with this little project, then I've already built something
              worthwhile. 💕
            </p>

            <p className="signature">
              — From your favourite developer (Harry) 😂💻 omo i don
              fra😭😭😭😭😭
            </p>
          </div>
        )}
      </section>

      <footer>
        <p>Made with ❤️, code, and a little courage.</p>
        <span>Operation Ama · Zero printing costs 😂</span>
      </footer>
    </main>
  );
}

export default App;
