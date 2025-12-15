interface HeaderProps {
	title: string;
	subTitle: string;
}
export default function Header({ title, subTitle }: HeaderProps) {
	return (
		<div>
			<p>{title}</p>
			<p>{subTitle}</p>
		</div>
	);
}
