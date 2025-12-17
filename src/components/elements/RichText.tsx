import React from 'react';
import type { RichTextItemResponse } from '@/lib/notion-blocks';
import { Badge } from '@/components/ui/badge';

interface RichTextProps {
	richText: RichTextItemResponse[];
	className?: string;
}

/**
 * Renders Notion rich text with annotations (bold, italic, code, etc.) and links
 */
export function RichText({ richText, className }: RichTextProps) {
	if (!richText || richText.length === 0) {
		return null;
	}

	return (
		<span className={className}>
			{richText.map((item, index) => (
				<RichTextSegment key={index} item={item} />
			))}
		</span>
	);
}

function RichTextSegment({ item }: { item: RichTextItemResponse }) {
	// Handle different rich text types
	if (item.type === 'text') {
		let element: React.ReactNode = <>{item.plain_text}</>;

		// Get annotations
		const { annotations } = item;

		// Apply annotations in order (innermost to outermost)
		// Code annotation wraps in Badge component (matching Mdx.tsx pattern)
		if (annotations.code) {
			element = (
				<Badge variant="pre" className="rounded-md font-mono text-sm">
					{element}
				</Badge>
			);
		}

		if (annotations.bold) {
			element = <strong>{element}</strong>;
		}

		if (annotations.italic) {
			element = <em>{element}</em>;
		}

		if (annotations.strikethrough) {
			element = <s>{element}</s>;
		}

		if (annotations.underline) {
			element = <u>{element}</u>;
		}

		// Handle links
		if (item.text.link) {
			element = (
				<a
					href={item.text.link.url}
					className="text-blue-500 hover:underline dark:text-blue-400"
					target="_blank"
					rel="noopener noreferrer"
				>
					{element}
				</a>
			);
		}

		return element;
	}

	// Handle mentions
	if (item.type === 'mention') {
		return (
			<span className="text-muted-foreground">{item.plain_text}</span>
		);
	}

	// Handle equations
	if (item.type === 'equation') {
		return <code className="font-mono">{item.plain_text}</code>;
	}

	// Fallback for unsupported types
	return <>{item.plain_text}</>;
}
