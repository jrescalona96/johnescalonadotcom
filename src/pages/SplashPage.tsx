import Lottie from "lottie-react";
// import coffeeTea from "../assets/lottie/coffeetea.json";
// import pourOverCoffee from "../assets/lottie/pourover-coffee.json";
// import aeroPressCoffee from "../assets/lottie/aeropress-coffee.json";
import hiAnimation from "../assets/lottie/hi-loader.json";
import { useState } from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const SplashPage = () => {
	let baseClasses =
		"absolute transition-all ease-in-out h-full w-full flex bg-white justify-center z-10 invisible md:visible";
	const [classes, setClasses] = useState(baseClasses);

	return (
		<div className={classes}>
			<NavBar />
			<Lottie
				animationData={hiAnimation}
				loop={false}
				autoplay={true}
				onComplete={() => setClasses(baseClasses + " opacity-0 duration-1000")}
				// rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
				style={{
					overflow: "hidden",
					width: "30%",
				}}
			/>
			<Footer />
		</div>
	);
};
