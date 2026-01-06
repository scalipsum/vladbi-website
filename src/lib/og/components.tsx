import { BRAND_COLORS, OG_HEIGHT, OG_WIDTH, SITE_NAME } from './constants';

export function OGLogo({
	size = 60,
	color = BRAND_COLORS.white,
}: {
	size?: number;
	color?: string;
}) {
	return (
		<svg
			width={size}
			height={size * 1.175}
			viewBox="0 0 160 188"
			fill="none"
		>
			<path
				d="M159.267 36.6191C164.856 1.71986 136.633 0.822901 136.633 0.822901L0 0L49.3853 188C49.3853 188 116.878 187.177 134.986 149.324C151.037 115.774 131.603 86.1742 132.929 83.4915C134.575 80.2329 155.975 57.1916 159.267 36.6191ZM71.6086 160.021C81.8972 91.7206 91.805 40.27 91.805 40.27H69.805L55.97 125.46L29.6312 19.3053L122.64 20.1282C122.64 20.1282 157.21 17.6595 106.59 85.9603C108.236 88.4619 148.156 149.324 71.6086 160.021Z"
				fill={color}
			/>
		</svg>
	);
}

export function OGStripes({ opacity = 0.3 }: { opacity?: number }) {
	return (
		<div
			style={{
				position: 'absolute',
				right: -50,
				top: 0,
				bottom: 0,
				width: 400,
				opacity,
				display: 'flex',
			}}
		>
			<svg
				width="400"
				height="630"
				viewBox="0 0 574 768"
				fill="none"
				style={{ height: '100%' }}
			>
				<path
					d="M210.362 768H120.5C313.661 443.155 240.554 121.987 180.837 -1H371.5C477.188 283.741 310.112 631.311 210.362 768Z"
					fill={BRAND_COLORS.stripe1}
				/>
				<path
					d="M123 768H45.5C184.602 319.5 73.0913 104.274 0 -1H181.458C323.963 311.814 204.393 642.006 123 768Z"
					fill={BRAND_COLORS.stripe2}
				/>
				<path
					d="M304.5 768H210.284C455.575 389.516 417.055 114.801 371 -1H552.69C644.799 354.324 408.957 659.718 304.5 768Z"
					fill={BRAND_COLORS.stripe3}
				/>
			</svg>
		</div>
	);
}

export function OGBaseLayout({
	children,
	showStripes = true,
	backgroundColor = BRAND_COLORS.primary,
}: {
	children: React.ReactNode;
	showStripes?: boolean;
	backgroundColor?: string;
}) {
	return (
		<div
			style={{
				width: OG_WIDTH,
				height: OG_HEIGHT,
				display: 'flex',
				flexDirection: 'column',
				backgroundColor,
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			{showStripes && <OGStripes />}
			{children}
		</div>
	);
}

export function OGContentCard({
	title,
	subtitle,
	description,
	showLogo = true,
}: {
	title: string;
	subtitle?: string;
	description?: string;
	showLogo?: boolean;
}) {
	const fontSize = title.length > 60 ? 42 : title.length > 40 ? 48 : 56;

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				height: '100%',
				padding: 60,
				zIndex: 1,
			}}
		>
			<div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
				{showLogo && <OGLogo size={50} />}
				<span
					style={{
						color: BRAND_COLORS.white,
						fontSize: 28,
						fontWeight: 700,
					}}
				>
					{SITE_NAME}
				</span>
			</div>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: 16,
				}}
			>
				{subtitle && (
					<span
						style={{
							color: BRAND_COLORS.lightBlue,
							fontSize: 24,
							fontWeight: 600,
						}}
					>
						{subtitle}
					</span>
				)}
				<h1
					style={{
						color: BRAND_COLORS.white,
						fontSize,
						fontWeight: 800,
						lineHeight: 1.1,
						maxWidth: 800,
						margin: 0,
					}}
				>
					{title}
				</h1>
				{description && (
					<p
						style={{
							color: BRAND_COLORS.backgroundAlt,
							fontSize: 24,
							lineHeight: 1.4,
							maxWidth: 700,
							margin: 0,
						}}
					>
						{description.length > 120
							? description.slice(0, 120) + '...'
							: description}
					</p>
				)}
			</div>

			<div style={{ display: 'flex', alignItems: 'center' }}>
				<span style={{ color: BRAND_COLORS.lightBlue, fontSize: 20 }}>
					vladbi.com
				</span>
			</div>
		</div>
	);
}
