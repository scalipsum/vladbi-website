'use client';

import ContentLayout from '@/components/layout/ContentLayout';
import { Button } from '@/components/ui/button';
import Text from '@/components/ui/text';
import { RefreshCw } from 'lucide-react';
import { useState } from 'react';

export default function ContentUpdatePage() {
	const [isLoading, setIsLoading] = useState(false);

	const handleRefreshCache = async () => {
		setIsLoading(true);

		try {
			await fetch('/api/refresh-cache', {
				method: 'POST',
			});
		} catch (error) {
			console.error('Failed to refresh cache:', error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<ContentLayout className="pt-24 text-center">
			<Text type="h2" className="mb-4">
				Content Update
			</Text>
			<Text>
				Refresh the content cache from Notion without redeploying
			</Text>
			<Button
				onClick={handleRefreshCache}
				disabled={isLoading}
				size="lg"
				className="mt-8"
			>
				{isLoading ? (
					<>
						<RefreshCw className="mr-2 h-4 w-4 animate-spin" />
						Refreshing Cache...
					</>
				) : (
					<>
						<RefreshCw className="mr-2 h-4 w-4" />
						Refresh Content
					</>
				)}
			</Button>
		</ContentLayout>
	);
}
