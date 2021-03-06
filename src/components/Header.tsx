type Parameters = { text: string; className?: string };

export const Header: React.FC<Parameters> = (props) => {
	const { text, className } = props;
	return <h1 className={`text-xl font-bold ${className}`}>{text}</h1>;
};
