import React, { MouseEventHandler } from "react";

type TextLinkProps = {
	href: string;
	text?: string;
	className?: string;
	children?: React.ReactNode;
	onMouseOver?: MouseEventHandler<HTMLAnchorElement>;
};

export const TextLink: React.FC<TextLinkProps> = (props) => {
	return (
		<a
			href={props.href}
			onMouseOver={props.onMouseOver}
			className={`font-semibold hover:underline decoration-2 cursor-pointer ${props.className}`}>
			{props.text ?? props.children}
		</a>
	);
};
