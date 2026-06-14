

import { useEffect, useState, lazy, Suspense } from "react"
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./pages/Navbar.jsx";
import { LoaderOne } from "@/components/ui/loader";

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
		return <h2 className="min-h-screen flex justify-center items-center">
			<LoaderOne />
		</h2>
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