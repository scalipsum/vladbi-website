import { BlockObjectResponse } from '@notionhq/client/';

export interface BlogPost {
	id: string;
	title: string;
	slug: string;
	coverImage?: string;
	description: string;
	date: string;
	content: string;
	author?: string;
	authorAvatar?: string;
	tags?: string[];
	category?: string;
	blocks?: BlockObjectResponse[];
}

export interface Product {
	id: string;
	title: string;
	slug: string;
	coverImage?: string;
	verticalImage?: string;
	subTitle: string;
	description: string;
	date: string;
	category?: string;
	blocks?: BlockObjectResponse[];
}

export function getWordCount(content: string): number {
	const cleanText = content
		.replace(/[^\w\s]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
	return cleanText.split(' ').length;
}
