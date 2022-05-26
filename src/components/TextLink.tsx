import React, { MouseEventHandler } from "react";

type Parameters = {
	href: string;
	text?: string;
	className?: string;
	children?: React.ReactNode;
	onMouseOver?: MouseEventHandler<HTMLAnchorElement>;
	disabled?: boolean;
};

export const TextLink: React.FC<Parameters> = (props) => {
	const isDisabled: boolean = props.disabled ?? false;
	return isDisabled ? (
		<p className={`inline ${props.className}`}>
			{props.text ?? props.children}
		</p>
	) : (
		<a
			href={props.href}
			onMouseOver={props.onMouseOver}
			className={`font-semibold hover:underline decoration-2 ${props.className}`}>
			{props.text ?? props.children}
		</a>
	);
};
