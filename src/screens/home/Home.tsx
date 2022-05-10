import { TextLink } from "../../components/Link";
import { Image } from "../../models/Image";
import { NavBar } from "../../components/navBar/NavBar";
import { useState } from "react";

// TODO: add correct images
const interestImages: Image[] = [
	{
		src: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4470&q=80",
		label: "technology",
		emoji: "📺",
	},
	{
		src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4498&q=80",
		label: "camping",
		emoji: "🏕️",
	},
	{
		src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4275&q=80",
		label: "fitness",
		emoji: "💪",
	},
	{
		src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5537&q=80",
		label: "coffee",
		emoji: "☕",
	},
];

export const Home = () => {
	const [interestHovered, setInterestHovered] = useState(interestImages[0]);

	const handleSetHoveredInterest = (index: number) => {
		setInterestHovered(interestImages[index]);
	};

	return (
		<section className="container h-screen my-auto mx-auto max-w-4xl">
			<NavBar />
			<div className="container flex flex-col gap-x-2.5 py-10">
				<p className="text-4xl font-bold">Hi there! I'm John.</p>
				<div className="flex pt-5 pb-10">
					<div id="welcomeMessage" className="flex flex-col basis-1/2">
						<p>
							{" I currently a "}
							<TextLink href="/projects">Software Developer</TextLink>
							{" living in Southern California with interests in "}
							<TextLink
								href="/projects"
								onMouseOver={() => handleSetHoveredInterest(0)}>
								technology 📺
							</TextLink>
							{", "}
							<TextLink
								href="/camping"
								onMouseOver={() => handleSetHoveredInterest(1)}>
								camping 🏕️
							</TextLink>
							{", "}
							<TextLink
								href="/camping"
								onMouseOver={() => handleSetHoveredInterest(2)}>
								fitness 💪
							</TextLink>
							{" and "}
							<TextLink
								href="/coffee"
								onMouseOver={() => handleSetHoveredInterest(3)}>
								coffee ☕
							</TextLink>
							{"..."}
						</p>
					</div>

					<div id="interest-imgs" className="basis-1/2">
						<img
							src={interestHovered?.src ?? ""}
							alt={interestHovered?.label ?? ""}
							className="rounded-lg w-1/2 mx-auto"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
