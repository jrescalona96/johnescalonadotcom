export const PageTitle = ({
	text,
	classes,
}: {
	text: string;
	classes?: string;
}) => {
	const className: string = `title ${classes}`;
	return <h1 className={classes}>{text}</h1>;
};
