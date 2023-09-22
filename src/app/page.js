import About from "@/components/About";
import Contact from "@/components/Contact";
import Cta from "@/components/Cta";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Cta />
				<About />
				<Divider />
				<Projects />
				<Divider />
				<Contact />
			</main>
			{/* <Footer /> */}
		</>
	);
}
