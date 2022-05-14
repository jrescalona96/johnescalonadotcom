import { Header } from "../components/Header";
import { TextLink } from "../components/TextLink";
import { Image } from "../data/models/Image";
import { NavBar } from "../components/NavBar";
import { Endpoints, ExtEndpoints } from "../assets/constants/endpoints";
import { useState } from "react";
import { Repository } from "../data/repository/Repository";

export const HomePage = () => {
	return (
		<section>
			<NavBar />
			<div className="page-content">
				<Header text="Hi there! I'm John." />
				<Introduction />
			</div>
		</section>
	);
};

const Introduction = () => {
	const interestImages: Image[] = Repository.getInstance().getInterestImages();
	const [imageIndex, setImageIndex] = useState(0);
	return (
		<div className="flex flex-col md:flex-row">
			<div id="welcomeMessage" className="flex flex-col gap-5 basis-1/2">
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
				</p>
				<p>
					<TextLink
						className="hover:bg-green-200 font-black"
						href={Endpoints.projects}
						text="Take a look!"
					/>
				</p>
			</div>

			<div id="interest-imgs" className="basis-1/2 my-auto">
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
	);
};
