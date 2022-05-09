import "./navBar.css";

export const NavBar = () => {
	return (
		<nav>
			<ul className="flex flex-row gap-x-2.5">
				<li className="hover:underline">
					<a href="/">jre</a>
				</li>
				<li className="hover:underline">
					<a href="/projects">projects</a>
				</li>
				<li className="hover:underline">
					<a href="/contact">contact</a>
				</li>
				<li className="hover:underline">
					<a href="/interests">interests</a>
				</li>
			</ul>
		</nav>
	);
};
