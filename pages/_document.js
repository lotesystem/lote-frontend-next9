import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en" dir="ltr">
				<Head>
					<meta name="theme-color" content="#ffffff" />
				</Head>
				<body>
					<Main />
					<NextScript />
					{/* Noscript */}
					<noscript>
						<h1>JavaScript is disabled in your browser.</h1>
						<span>
							Please enable JavaScript in your browser or upgrade to a
							JavaScript-capable browser.
						</span>
					</noscript>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
