import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { TextLink } from "../../components/TextLink";
import { Interest } from "../../data/models/Interest";
import { Repository } from "../../data/repository/Repository";

export const InterestsPage = () => {
	const interests: Interest[] = Repository.getInstance().getInterests();

	return (
		<section>
			<NavBar />
			<div className="page-content">
				<Header text="Interests" />
				<div className="flex flex-col gap-y-10 mx-auto">
					{interests.map((item: Interest) => {
						const { label, url, description, assets } = item;
						if (!label.includes("Technology"))
							return (
								<div key={label}>
									<TextLink
										className="font-black hover:bg-green-200"
										text={label}
										href={url}
									/>
									<div className="flex flex-col md:flex-row gap-x-10">
										<p className="w-2/3">{description}</p>
										<img
											className="w-1/3 rounded-lg"
											src={assets[0].src}
											alt=""
											title={assets[0].label}
										/>
									</div>
								</div>
							);
					})}
				</div>
			</div>
		</section>
	);
};
