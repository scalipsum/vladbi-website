import { ImageResponse } from 'next/og';
import { OG_HEIGHT, OG_WIDTH, BRAND_COLORS } from './constants';
import { loadOGFonts } from './fonts';
import { OGBaseLayout, OGContentCard, OGLogo, OGStripes } from './components';

export interface OGImageProps {
	title: string;
	subtitle?: string;
	description?: string;
}

export async function generateOGImage(props: OGImageProps): Promise<ImageResponse> {
	const fonts = await loadOGFonts();

	return new ImageResponse(
		(
			<OGBaseLayout>
				<OGContentCard
					title={props.title}
					subtitle={props.subtitle}
					description={props.description}
				/>
			</OGBaseLayout>
		),
		{
			width: OG_WIDTH,
			height: OG_HEIGHT,
			fonts: fonts.map((f) => ({
				name: f.name,
				data: f.data,
				weight: f.weight,
				style: f.style,
			})),
		},
	);
}

export async function generateOGImageWithCover(
	props: OGImageProps & { coverImage?: string },
): Promise<ImageResponse> {
	const fonts = await loadOGFonts();
	const hasCover = !!props.coverImage;

	return new ImageResponse(
		(
			<div
				style={{
					width: OG_WIDTH,
					height: OG_HEIGHT,
					display: 'flex',
					position: 'relative',
				}}
			>
				{hasCover && (
					// eslint-disable-next-line @next/next/no-img-element
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

				<OGStripes opacity={hasCover ? 0.15 : 0.3} />

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
			fonts: fonts.map((f) => ({
				name: f.name,
				data: f.data,
				weight: f.weight,
				style: f.style,
			})),
		},
	);
}

export { OG_WIDTH, OG_HEIGHT, BRAND_COLORS } from './constants';
export { OGBaseLayout, OGContentCard, OGLogo } from './components';
