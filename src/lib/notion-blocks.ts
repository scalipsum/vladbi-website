import type {
	BlockObjectResponse,
	BulletedListItemBlockObjectResponse,
	CodeBlockObjectResponse,
	ColumnBlockObjectResponse,
	ColumnListBlockObjectResponse,
	Heading1BlockObjectResponse,
	Heading2BlockObjectResponse,
	Heading3BlockObjectResponse,
	ImageBlockObjectResponse,
	NumberedListItemBlockObjectResponse,
	ParagraphBlockObjectResponse,
	QuoteBlockObjectResponse,
	RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';

// Re-export types for convenience
export type {
	BlockObjectResponse,
	BulletedListItemBlockObjectResponse,
	CodeBlockObjectResponse,
	ColumnBlockObjectResponse,
	ColumnListBlockObjectResponse,
	Heading1BlockObjectResponse,
	Heading2BlockObjectResponse,
	Heading3BlockObjectResponse,
	ImageBlockObjectResponse,
	NumberedListItemBlockObjectResponse,
	ParagraphBlockObjectResponse,
	QuoteBlockObjectResponse,
	RichTextItemResponse,
};

// Supported block types for our renderer
export type SupportedBlockType =
	| 'paragraph'
	| 'heading_1'
	| 'heading_2'
	| 'heading_3'
	| 'bulleted_list_item'
	| 'numbered_list_item'
	| 'quote'
	| 'divider'
	| 'column_list'
	| 'column'
	| 'image'
	| 'code';

// Configuration interface for customizable styling
export interface BlockRenderConfig {
	className?: {
		h1?: string;
		h2?: string;
		h3?: string;
		paragraph?: string;
		quote?: string;
		divider?: string;
		bulletedList?: string;
		numberedList?: string;
		listItem?: string;
		columnList?: string;
		column?: string;
		link?: string;
		image?: string;
		code?: string;
	};
}

// Extended block type with children for nested structures
export type BlockWithChildren = BlockObjectResponse & {
	children?: BlockObjectResponse[];
};

/**
 * Groups consecutive list items into arrays for proper rendering
 * @param blocks Array of Notion blocks
 * @returns Array of block groups (single blocks or grouped list items)
 */
export function groupListItems(
	blocks: BlockObjectResponse[],
): BlockObjectResponse[][] {
	const grouped: BlockObjectResponse[][] = [];
	let currentGroup: BlockObjectResponse[] = [];
	let currentType: 'bulleted_list_item' | 'numbered_list_item' | null = null;

	for (const block of blocks) {
		if (
			block.type === 'bulleted_list_item' ||
			block.type === 'numbered_list_item'
		) {
			if (currentType === block.type) {
				// Continue current group
				currentGroup.push(block);
			} else {
				// Start new group
				if (currentGroup.length > 0) {
					grouped.push(currentGroup);
				}
				currentGroup = [block];
				currentType = block.type;
			}
		} else {
			// Non-list item block
			if (currentGroup.length > 0) {
				grouped.push(currentGroup);
				currentGroup = [];
				currentType = null;
			}
			grouped.push([block]);
		}
	}

	// Push any remaining group
	if (currentGroup.length > 0) {
		grouped.push(currentGroup);
	}

	return grouped;
}

/**
 * Calculates word count from Notion blocks (for reading time)
 * @param blocks Array of Notion blocks
 * @returns Total word count across all blocks
 */
export function getWordCountFromBlocks(
	blocks: BlockObjectResponse[],
): number {
	let totalWords = 0;

	function extractTextFromBlock(block: BlockObjectResponse): string {
		let text = '';

		// Extract text based on block type
		switch (block.type) {
			case 'paragraph':
				text = block.paragraph.rich_text
					.map((rt) => rt.plain_text)
					.join('');
				break;
			case 'heading_1':
				text = block.heading_1.rich_text
					.map((rt) => rt.plain_text)
					.join('');
				break;
			case 'heading_2':
				text = block.heading_2.rich_text
					.map((rt) => rt.plain_text)
					.join('');
				break;
			case 'heading_3':
				text = block.heading_3.rich_text
					.map((rt) => rt.plain_text)
					.join('');
				break;
			case 'bulleted_list_item':
				text = block.bulleted_list_item.rich_text
					.map((rt) => rt.plain_text)
					.join('');
				break;
			case 'numbered_list_item':
				text = block.numbered_list_item.rich_text
					.map((rt) => rt.plain_text)
					.join('');
				break;
			case 'quote':
				text = block.quote.rich_text
					.map((rt) => rt.plain_text)
					.join('');
				break;
			case 'code':
				text = block.code.rich_text
					.map((rt) => rt.plain_text)
					.join('');
				break;
			case 'column_list':
			case 'column':
				// Handle nested blocks in columns
				const blockWithChildren = block as BlockWithChildren;
				if (blockWithChildren.children) {
					return getWordCountFromBlocks(
						blockWithChildren.children,
					).toString();
				}
				break;
		}

		return text;
	}

	for (const block of blocks) {
		const text = extractTextFromBlock(block);

		// Count words using same logic as existing getWordCount()
		const cleanText = text
			.replace(/[^\w\s]/g, ' ')
			.replace(/\s+/g, ' ')
			.trim();

		if (cleanText.length > 0) {
			totalWords += cleanText.split(' ').length;
		}

		// Recursively count words in nested blocks
		const blockWithChildren = block as BlockWithChildren;
		if (blockWithChildren.children && block.type !== 'column_list' && block.type !== 'column') {
			totalWords += getWordCountFromBlocks(blockWithChildren.children);
		}
	}

	return totalWords;
}
