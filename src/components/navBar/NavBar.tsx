import { TextLink } from "../Link";
import "./navBar.css";

export const NavBar = () => {
	const classes: string = "hover:motion-safe:animate-pulse decoration-2";
	const isActive = (path: string): string => {
		return window.location.pathname === path ? " underline" : "";
	};

	return (
		<nav className="flex flex-row gap-x-4 py-6">
			<TextLink className={classes} href="/">
				jre
			</TextLink>
			<TextLink className={classes + isActive("/")} href="/">
				projects
			</TextLink>
			<TextLink className={classes + isActive("/contact")} href="/contact">
				contact
			</TextLink>
			<TextLink className={classes + isActive("/interests")} href="/interests">
				interests
			</TextLink>
		</nav>
	);
};
