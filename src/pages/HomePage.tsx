import { Header } from "../components/Header";
import { TextLink } from "../components/TextLink";
import { Image } from "../data/models/Image";
import { NavBar } from "../components/NavBar";
import { Endpoints, ExtEndpoints } from "../assets/constants/Endpoints";
import { useState } from "react";
import { Repository } from "../data/repository/Repository";

export const HomePage = () => {
	return (
		<section>
			<NavBar />
			<div className="page-content">
				<div className="flex align-baseline gap-x-10">
					<div className="basis-1/2">
						<Header text="Hi there! I'm John." />
						<Introduction />
					</div>
					<div className="basis-1/2 my-auto pt-24 flex justify-end">
						<img
							id="profile-pic"
							src="./images/grad_pic.png"
							alt=""
							className="rounded-lg my-auto"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

const Introduction = () => {
	const interestImages: Image[] = Repository.getInstance().getInterestImages();
	const [imageIndex, setImageIndex] = useState(0);
	return (
		<div className="flex flex-col md:flex-row gap-x-5 pt-10">
			<div id="welcomeMessage" className="flex flex-col gap-y-5 justify-end">
				<p>
					{" I currently a "}
					<TextLink href="/projects" text="Software Developer" />
					{" living in Southern California with interests in "}
					<TextLink
						href={Endpoints.home}
						onMouseOver={() => setImageIndex(0)}
						text="technology 📺"
					/>
					{", "}
					<TextLink
						href={Endpoints.camping}
						onMouseOver={() => setImageIndex(1)}
						text={interestImages[1].label}
					/>
					{", "}
					<TextLink
						href={Endpoints.fitness}
						onMouseOver={() => setImageIndex(2)}
						text="fitness 💪"
					/>
					{" , & "}
					<TextLink
						href={Endpoints.coffee}
						onMouseOver={() => setImageIndex(3)}
						text="coffee ☕ "
					/>
					{" ..."}
				</p>
				<p>
					{
						"I have been coding for about 4 years, including 1 year of professional Mobile & Web Development and the rest working on my "
					}
					<TextLink href={ExtEndpoints.cpp} text="Computer Science Degree," />
					{" and working on some projects on the side. "}
					<TextLink
						className="font-black"
						href={Endpoints.projects}
						text="Take a look!"
					/>
				</p>
				<a
					download="John Escalona Resume"
					className="font-bold motion-safe:animate-bounce"
					href={Endpoints.resume}>
					Click here for my Resume!
				</a>
			</div>
		</div>
	);
};
