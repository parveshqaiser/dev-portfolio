

import { useEffect, useState, lazy, Suspense } from "react"
import HomePage from "./pages/HomePage"
import Navbar from "./pages/Navbar"

const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Experience = lazy(() => import("./pages/Experience"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	if (loading) {
		return <h2 className="text-violet-600 min-h-screen text-center text-xl pt-30">Loading...</h2>
	}

	return (
		<>
			<Navbar />
			<HomePage />
			<Suspense fallback={<h2 className="text-white text-center">Loading section...</h2>}>
				<About />
				<Skills />
				<Projects />
				<Experience />
				<Contact />
			</Suspense>

		</>
	)
}

export default App;