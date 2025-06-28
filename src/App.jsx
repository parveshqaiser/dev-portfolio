import About from "./pages/About"
import Contact from "./pages/Contact"
import Experience from "./pages/Experience"
import HomePage from "./pages/HomePage"
import Navbar from "./pages/Navbar"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"

function App() {
	return (
	<>
		<Navbar />
		<HomePage />
		<About />
		<Skills />
		<Projects />
		<Experience />
		<Contact />
	</>
	)
}
 
export default App;