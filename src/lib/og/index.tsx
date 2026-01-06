import { readFile } from 'fs/promises';
import { ImageResponse } from 'next/og';
import { join } from 'path';
import { OGContentCard, OGStripes } from './components';
import { BRAND_COLORS, OG_HEIGHT, OG_WIDTH } from './constants';

export interface OGImageProps {
	title: string;
	subtitle?: string;
	description?: string;
}

const TEXT_COLOR = '#053E6D';
const BG_COLOR = '#f9fcff';

// Load fonts from local files
async function loadFonts() {
	const fontsDir = join(process.cwd(), 'src', 'assets', 'fonts');

	const [nunitoBold, nunitoExtraBold] = await Promise.all([
		readFile(join(fontsDir, 'Nunito-Bold.ttf')),
		readFile(join(fontsDir, 'Nunito-ExtraBold.ttf')),
	]);

	return [
		{ name: 'Nunito', data: nunitoBold, weight: 700 as const },
		{ name: 'Nunito', data: nunitoExtraBold, weight: 800 as const },
	];
}

// Load person image as base64
async function loadPersonImage() {
	const personImagePath = join(process.cwd(), 'public', 'person.png');
	const personImageBuffer = await readFile(personImagePath);
	return `data:image/png;base64,${personImageBuffer.toString('base64')}`;
}

// Static pages OG image with person
export async function generateStaticOGImage(
	props: OGImageProps,
): Promise<ImageResponse> {
	const [fonts, personImageBase64] = await Promise.all([
		loadFonts(),
		loadPersonImage(),
	]);

	return new ImageResponse(
		(
			<div
				style={{
					width: OG_WIDTH,
					height: OG_HEIGHT,
					display: 'flex',
					position: 'relative',
					backgroundColor: BG_COLOR,
					overflow: 'hidden',
					fontFamily: 'Nunito',
				}}
			>
				{/* Stripes - behind person */}
				<div
					style={{
						position: 'absolute',
						right: -20,
						top: 0,
						bottom: 0,
						width: 400,
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
							fill="#55A1D2"
						/>
						<path
							d="M123 768H45.5C184.602 319.5 73.0913 104.274 0 -1H181.458C323.963 311.814 204.393 642.006 123 768Z"
							fill="#EA2A2B"
						/>
						<path
							d="M304.5 768H210.284C455.575 389.516 417.055 114.801 371 -1H552.69C644.799 354.324 408.957 659.718 304.5 768Z"
							fill="#02365F"
						/>
					</svg>
				</div>

				{/* Person image - in front of stripes */}
				<img
					src={personImageBase64}
					alt=""
					width={440}
					height={OG_HEIGHT}
					style={{
						position: 'absolute',
						top: 0,
						bottom: 0,
						right: 0,
						zIndex: 10,
					}}
				/>

				{/* Content on the left */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						height: '100%',
						padding: 60,
						paddingRight: 350,
						zIndex: 1,
					}}
				>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: 16,
						}}
					>
						<svg
							width={50}
							height={59}
							viewBox="0 0 160 188"
							fill="none"
						>
							<path
								d="M159.267 36.6191C164.856 1.71986 136.633 0.822901 136.633 0.822901L0 0L49.3853 188C49.3853 188 116.878 187.177 134.986 149.324C151.037 115.774 131.603 86.1742 132.929 83.4915C134.575 80.2329 155.975 57.1916 159.267 36.6191ZM71.6086 160.021C81.8972 91.7206 91.805 40.27 91.805 40.27H69.805L55.97 125.46L29.6312 19.3053L122.64 20.1282C122.64 20.1282 157.21 17.6595 106.59 85.9603C108.236 88.4619 148.156 149.324 71.6086 160.021Z"
								fill={TEXT_COLOR}
							/>
						</svg>
						<span
							style={{
								color: TEXT_COLOR,
								fontSize: 28,
								fontWeight: 700,
							}}
						>
							VladBi
						</span>
					</div>

					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: 16,
						}}
					>
						<h1
							style={{
								color: TEXT_COLOR,
								fontSize: props.title.length > 30 ? 44 : 52,
								fontWeight: 800,
								lineHeight: 1.1,
								maxWidth: 600,
								margin: 0,
							}}
						>
							{props.title}
						</h1>
						{props.description && (
							<p
								style={{
									color: TEXT_COLOR,
									fontSize: 22,
									lineHeight: 1.4,
									maxWidth: 550,
									margin: 0,
									opacity: 0.8,
									fontWeight: 500,
								}}
							>
								{props.description}
							</p>
						)}
					</div>

					<div style={{ display: 'flex', alignItems: 'center' }}>
						<span
							style={{
								color: TEXT_COLOR,
								fontSize: 20,
								opacity: 0.7,
							}}
						>
							vladbi.com
						</span>
					</div>
				</div>
			</div>
		),
		{
			width: OG_WIDTH,
			height: OG_HEIGHT,
			fonts,
		},
	);
}

// Dynamic [slug] pages OG image with cover (no person)
export async function generateOGImageWithCover(
	props: OGImageProps & { coverImage?: string },
): Promise<ImageResponse> {
	const fonts = await loadFonts();
	const hasCover = !!props.coverImage;

	return new ImageResponse(
		(
			<div
				style={{
					width: OG_WIDTH,
					height: OG_HEIGHT,
					display: 'flex',
					position: 'relative',
					fontFamily: 'Nunito',
				}}
			>
				{hasCover && (
					<img
						src={props.coverImage}
						alt=""
						width={OG_WIDTH}
						height={OG_HEIGHT}
						style={{
							position: 'absolute',
							width: OG_WIDTH,
							height: OG_HEIGHT,
							objectFit: 'cover',
						}}
					/>
				)}

				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: hasCover
							? 'linear-gradient(to top, rgba(4, 62, 109, 0.95), rgba(4, 62, 109, 0.7))'
							: BRAND_COLORS.primary,
						display: 'flex',
					}}
				/>

				<OGStripes />

				<OGContentCard
					title={props.title}
					subtitle={props.subtitle}
					description={props.description}
				/>
			</div>
		),
		{
			width: OG_WIDTH,
			height: OG_HEIGHT,
			fonts,
		},
	);
}

// Alias for backwards compatibility
export const generateOGImage = generateStaticOGImage;

export { OGBaseLayout, OGContentCard, OGLogo } from './components';
export { BRAND_COLORS, OG_HEIGHT, OG_WIDTH } from './constants';
