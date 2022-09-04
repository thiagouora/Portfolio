import Header from "./components/header/header";
import Navbar from "./components/nav/nav";
import Home from "./components/home/home";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Projects from "./components/projects/project";

function App() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Navbar />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
