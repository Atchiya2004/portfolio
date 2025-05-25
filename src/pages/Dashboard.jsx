import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import studentImage from '../assets/student.png';

function Dashboard() {
  const [successText, setSuccessText] = useState('');
  const [isTypingFinished, setIsTypingFinished] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const aboutRef = useRef(null);

  const fullText = 'Build. Showcase. Succeed.';

  useEffect(() => {
    setTimeout(() => setShowBox(true), 300);
    let index = 0;
    const typeInterval = setInterval(() => {
      setSuccessText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(typeInterval);
        setIsTypingFinished(true);
      }
    }, 150);
    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .fade-in-box {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1.5s ease-out, transform 1s ease-out;
        }
        .fade-in-box.show {
          opacity: 1;
          transform: translateY(0);
        }
        .typewriter-text {
          font-size: 1.25rem;
          color: #1e3a8a;
          font-weight: 700;
          margin-top: 1rem;
          white-space: nowrap;
          display: inline-block;
        }
        .cursor {
          display: inline-block;
          width: 2px;
          height: 1.25em;
          background-color: #1e3a8a;
          margin-left: 3px;
          vertical-align: bottom;
          animation: blink 1s steps(2, start) infinite;
        }
        .cursor.finished {
          animation: none;
          opacity: 0;
        }
        .fade-in-image {
          opacity: 0;
          transition: opacity 1.5s ease-in;
        }
        .fade-in-image.visible {
          opacity: 1;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>

      <div className="min-h-screen bg-blue-100 scroll-smooth font-sans">
        <div className="flex justify-end p-4 space-x-4">
          <a
            href="#about-section"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer font-semibold tracking-wide"
          >
            About
          </a>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold tracking-wide"
          >
            Login
          </Link>
        </div>

        <div className="flex items-center justify-center px-4">
          <div className={`fade-in-box ${showBox ? 'show' : ''} bg-white p-16 rounded shadow-lg max-w-7xl w-full flex flex-col md:flex-row items-center min-h-[400px] md:min-h-[500px]`}>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-6 tracking-tight leading-tight">
                Welcome to Your Student Portfolio
              </h1>
              <p className="text-gray-700 text-xl leading-relaxed tracking-wide max-w-xl mx-auto md:mx-0">
                Manage your academic achievements, projects, and resume in one place. Keep your portfolio organized and share it with ease.
              </p>
              <p className="typewriter-text">
                {successText}
                <span className={`cursor ${isTypingFinished ? 'finished' : ''}`} />
              </p>
            </div>
            <div className={`flex-1 mt-8 md:mt-0 md:ml-12 flex justify-center fade-in-image ${isTypingFinished ? 'visible' : ''}`}>
              <img
                src={studentImage}
                className="max-w-sm rounded-xl shadow-md"
                alt="Student"
              />
            </div>
          </div>
        </div>

        <div
          id="about-section"
          ref={aboutRef}
          className={`max-w-7xl mx-auto bg-white rounded shadow-lg p-12 mt-10 transition-all duration-1000 ease-in-out ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center tracking-wide">
            ... About This Portfolio ...
          </h2><hr></hr><hr></hr>

          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-wide">Purpose</h3>
            <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
              The Student Portfolio platform empowers students by providing a centralized space to showcase academic achievements, projects, and skills. It enables users to present their progress professionally and share it with educators, employers, or peers.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-wide">Features</h3>
            <ul className="list-disc list-inside text-gray-800 text-lg leading-relaxed tracking-wide space-y-1">
              <li>Secure login and registration system for data privacy.</li>
              <li>Organized storage of academic records and certifications.</li>
              <li>Document upload including resumes, certificates, and reports.</li>
              <li>Project showcase area to highlight skills and experience.</li>
              <li>Responsive design optimized for all devices.</li>
              <li>User-friendly dashboard for quick updates and navigation.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-wide">Who Can Use</h3>
            <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
              Ideal for high school and university students, as well as lifelong learners. Whether you're preparing for college, internships, or job applications, this platform helps you track and present your academic journey.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-wide">Benefits</h3>
            <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
              A centralized portfolio improves visibility and makes it easy to share progress. It helps in self-reflection, goal tracking, and professional representation of skills and achievements.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-wide">Getting Started</h3>
            <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
              Create an account or log in to get started. Use the dashboard to manage your details, upload documents, and build a standout portfolio. Explore the features via the About and Help sections.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
