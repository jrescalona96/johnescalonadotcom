import { Header } from "../components/Header";
import { TextLink } from "../components/TextLink";
import { Image } from "../models/Image";
import { NavBar } from "../components/NavBar";
import { useState } from "react";
import { Endpoints } from "../assets/constants/endpoints";

// TODO: add correct images
const interestImages: Image[] = [
	new Image({
		id: 0,
		src: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4470&q=80",
		label: "technology 📺",
	}),
	new Image({
		id: 1,
		src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4498&q=80",
		label: "camping 🏕️",
	}),
	new Image({
		id: 2,
		src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4275&q=80",
		label: "fitness 💪",
	}),
	new Image({
		id: 3,
		src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5537&q=80",
		label: "coffee ☕",
	}),
];

export const Home = () => {
	const [imageIndex, setImageIndex] = useState(0);

	return (
		<section className="flex flex-col gap-2 p-8">
			<NavBar />
			<Header text="Hi there! I'm John." />
			<div className="flex flex-col md:flex-row">
				<div id="welcomeMessage" className="flex flex-col basis-1/2">
					<p>
						{" I currently a "}
						<TextLink href="/projects" text="Software Developer" />
						{" living in Southern California with interests in "}
						<TextLink
							href={Endpoints.home}
							onMouseOver={() => setImageIndex(0)}
							text="technology"
						/>
						{" 📺, "}
						<TextLink
							href={Endpoints.camping}
							onMouseOver={() => setImageIndex(1)}
							text={interestImages[1].label}
						/>
						<TextLink
							href={Endpoints.fitness}
							onMouseOver={() => setImageIndex(2)}
							text="fitness"
						/>
						{" 💪 and "}
						<TextLink
							href={Endpoints.coffee}
							onMouseOver={() => setImageIndex(3)}
							text="coffee"
						/>
						{" ☕ ..."}
					</p>
				</div>

				<div id="interest-imgs" className="basis-1/2">
					{interestImages.map((image) => {
						var classes: string = "rounded-lg mx-auto w-full md:w-3/4";
						classes += image.id === imageIndex ? "" : " hidden";
						return (
							<img
								key={image.id}
								src={image.src}
								alt={image?.label ?? ""}
								className={classes}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};
