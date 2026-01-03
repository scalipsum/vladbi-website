import type {
	BlockObjectResponse,
	BlockRenderConfig,
	BlockWithChildren,
} from '@/lib/notion-blocks';
import { groupListItems } from '@/lib/notion-blocks';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { RichText } from './RichText';

interface BlockRenderProps {
	blocks: BlockObjectResponse[];
	config?: BlockRenderConfig;
}

/**
 * Main component to render Notion blocks with customizable styling
 */
export function BlockRender({ blocks, config }: BlockRenderProps) {
	if (!blocks || blocks.length === 0) {
		return null;
	}

	const groupedBlocks = groupListItems(blocks);

	return (
		<div className="space-y-4">
			{groupedBlocks.map((group, groupIndex) => {
				if (group.length === 1) {
					// Single block (not a list)
					return (
						<BlockItem
							key={group[0].id}
							block={group[0]}
							config={config}
						/>
					);
				}

				// Multiple blocks - must be a list group
				const firstBlock = group[0];

				if (firstBlock.type === 'bulleted_list_item') {
					return (
						<ul
							key={`list-${groupIndex}`}
							className={cn(
								'mb-4 list-disc pl-5',
								config?.className?.bulletedList,
							)}
						>
							{group.map((block) => (
								<li
									key={block.id}
									className={cn(
										'mb-2 font-sans text-lg leading-relaxed',
										config?.className?.listItem,
									)}
								>
									<RichText
										richText={
											(block as any).bulleted_list_item
												.rich_text
										}
									/>
								</li>
							))}
						</ul>
					);
				}

				if (firstBlock.type === 'numbered_list_item') {
					return (
						<ol
							key={`list-${groupIndex}`}
							className={cn(
								'mb-4 list-decimal pl-5',
								config?.className?.numberedList,
							)}
						>
							{group.map((block) => (
								<li
									key={block.id}
									className={cn(
										'mb-2 font-sans text-lg leading-relaxed',
										config?.className?.listItem,
									)}
								>
									<RichText
										richText={
											(block as any).numbered_list_item
												.rich_text
										}
									/>
								</li>
							))}
						</ol>
					);
				}

				return null;
			})}
		</div>
	);
}

/**
 * Renders individual block types
 */
function BlockItem({
	block,
	config,
}: {
	block: BlockObjectResponse;
	config?: BlockRenderConfig;
}) {
	switch (block.type) {
		case 'paragraph': {
			// Handle empty paragraphs as spacing
			const hasContent = block.paragraph.rich_text.length > 0;
			if (!hasContent) {
				return <div className="h-4" aria-hidden="true" />;
			}
			return (
				<p className={cn('mb-4', config?.className?.paragraph)}>
					<RichText richText={block.paragraph.rich_text} />
				</p>
			);
		}

		case 'heading_1':
			return (
				<h1
					className={cn(
						'mb-4 font-bold text-4xl text-foreground',
						config?.className?.h1,
					)}
				>
					<RichText richText={block.heading_1.rich_text} />
				</h1>
			);

		case 'heading_2':
			return (
				<h2
					className={cn(
						'mb-2 font-bold text-2xl text-foreground',
						config?.className?.h2,
					)}
				>
					<RichText richText={block.heading_2.rich_text} />
				</h2>
			);

		case 'heading_3':
			return (
				<h3
					className={cn(
						'mb-1 font-bold text-xl text-foreground',
						config?.className?.h3,
					)}
				>
					<RichText richText={block.heading_3.rich_text} />
				</h3>
			);

		case 'quote':
			return (
				<blockquote
					className={cn(
						'mb-4 border-neutral-300 dark:border-neutral-600 border-l-2 py-2 pl-4 italic text-muted-foreground',
						config?.className?.quote,
					)}
				>
					<RichText richText={block.quote.rich_text} />
				</blockquote>
			);

		case 'divider':
			return (
				<hr
					className={cn(
						'my-6 border-neutral-300 dark:border-neutral-600',
						config?.className?.divider,
					)}
				/>
			);

		case 'code':
			return (
				<CodeBlock
					code={block.code.rich_text
						.map((t) => t.plain_text)
						.join('')}
					language={block.code.language}
					config={config}
				/>
			);

		case 'image':
			return <ImageBlock block={block} config={config} />;

		case 'column_list':
			return <ColumnList block={block} config={config} />;

		case 'bulleted_list_item':
		case 'numbered_list_item':
			// These should be handled by grouping, but render individually if not grouped
			return (
				<ul className={cn('mb-4 list-disc pl-5')}>
					<li className={cn('mb-2', config?.className?.listItem)}>
						<RichText
							richText={
								block.type === 'bulleted_list_item'
									? block.bulleted_list_item.rich_text
									: (block as any).numbered_list_item
											.rich_text
							}
						/>
					</li>
				</ul>
			);

		default:
			// Unsupported block type
			return null;
	}
}

/**
 * Renders code blocks with syntax highlighting (matching Mdx.tsx)
 */
function CodeBlock({
	code,
	language,
	config,
}: {
	code: string;
	language: string;
	config?: BlockRenderConfig;
}) {
	return (
		<div className={cn('mb-4', config?.className?.code)}>
			<SyntaxHighlighter
				style={vscDarkPlus}
				language={language || 'text'}
				PreTag="div"
				className="rounded-md [&>code]:bg-transparent [&>code]:p-2 [&>code]:rounded-md"
			>
				{code}
			</SyntaxHighlighter>
		</div>
	);
}

/**
 * Renders image blocks using Next.js Image component
 */
function ImageBlock({
	block,
	config,
}: {
	block: BlockObjectResponse;
	config?: BlockRenderConfig;
}) {
	if (block.type !== 'image') {
		return null;
	}

	const imageUrl =
		block.image.type === 'file'
			? block.image.file.url
			: block.image.external.url;

	// Get caption if available
	const caption = block.image.caption.map((t) => t.plain_text).join('');

	return (
		<figure className={cn('mb-6', config?.className?.image)}>
			<div className="relative w-full">
				<Image
					src={imageUrl}
					alt={caption || 'Image'}
					className="h-auto w-full rounded-lg"
					width={1000}
					height={1000}
				/>
			</div>
			{caption && (
				<figcaption className="mt-2 text-center text-muted-foreground text-sm italic">
					{caption}
				</figcaption>
			)}
		</figure>
	);
}

/**
 * Renders column layouts (2-col or 3-col)
 */
function ColumnList({
	block,
	config,
}: {
	block: BlockObjectResponse;
	config?: BlockRenderConfig;
}) {
	if (block.type !== 'column_list') {
		return null;
	}

	// Get children columns
	const blockWithChildren = block as BlockWithChildren;
	if (!blockWithChildren.children) {
		return null;
	}

	const columns = blockWithChildren.children.filter(
		(child) => child.type === 'column',
	);

	// Determine grid class based on column count
	const gridClass =
		columns.length === 2
			? 'grid-cols-1 md:grid-cols-2'
			: columns.length === 3
			? 'grid-cols-1 md:grid-cols-3'
			: `grid-cols-${columns.length}`;

	return (
		<div
			className={cn(
				'mb-6 grid gap-6',
				gridClass,
				config?.className?.columnList,
			)}
		>
			{columns.map((column) => {
				const columnWithChildren = column as BlockWithChildren;
				return (
					<div
						key={column.id}
						className={cn('space-y-4', config?.className?.column)}
					>
						{columnWithChildren.children && (
							<BlockRender
								blocks={columnWithChildren.children}
								config={config}
							/>
						)}
					</div>
				);
			})}
		</div>
	);
}
