import React from "react";

type HeaderProps = {
	text: string;
};

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
	return <h1 className="text-3xl font-bold pt-12">{props.text}</h1>;
};
