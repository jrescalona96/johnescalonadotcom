import { Header } from "../components/Header";
import { TextLink } from "../components/TextLink";
import { Image } from "../data/models/Image";
import { NavBar } from "../components/NavBar";
import { Endpoints } from "../assets/constants/endpoints";
import { useState } from "react";
import { Repository } from "../data/repository/Repository";

export const HomePage = () => {
	const interestImages: Image[] = Repository.getInstance().getInterestImages();
	const [imageIndex, setImageIndex] = useState(0);

	return (
		<section>
			<NavBar />
			<div className="page-content">
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
			</div>
		</section>
	);
};
