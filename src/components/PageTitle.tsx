export const PageTitle = ({
	text,
	classes,
}: {
	text: string;
	classes?: string;
}) => {
	const className: string = `text-3xl font-bold ${classes}`;
	return <h1 className={classes}>{text}</h1>;
};
