import React from "react";

export const RoundedButton = ({
	text,
	icon,
	className,
	textClassName,
	iconClassName,
	onClick,
}: {
	text?: string;
	icon?: any;
	iconClassName?: string;
	className?: string;
	textClassName?: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
	return (
		<button
			onClick={onClick}
			type="button"
			className={`hover:text-white border-2 border-gray-800 last:border-gray-900 hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-300 px-2 py-1 text-xs font-medium rounded-md text-center w-min flex flex-nowrap ${className}`}>
			<p className={`${iconClassName}`}>{icon}</p>
			<p className={`font-bold ${textClassName}`}>{text}</p>
		</button>
	);
};
