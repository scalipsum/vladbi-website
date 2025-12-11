export default function Footer() {
	return (
		<footer className="bg-brand-600 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<p className="text-center">
					© {new Date().getFullYear()} Vladbi. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
