import { useEffect } from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

// Add custom animations CSS
const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
  }
  
  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
    opacity: 0;
  }
  
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;

function App() {
  useEffect(() => {
    // Inject animation styles
    const style = document.createElement("style");
    style.textContent = animationStyles;
    document.head.appendChild(style);

    // Set page title
    document.title = "Aman.co - Portfolio of MERN Stack Developer";

    // Check for saved theme preference and apply it immediately
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
