import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

import Head from 'next/head';

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={utilStyles.headingXl}>{postData.title}</h1>
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date} />
				</div>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	);
}

// Development: runs on every request.
// Production: runs at build time.
export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		// fallback: false -- any paths not returned will result in 404 page.
		// fallback: true -- rendered to HTML at build time. Will not result
		// in a 404 page. Instead, Next.js will serve a "fallback" version of
		// the page on the first request to such a path. In the background,
		// Next.js will statically generate the requested path. Subsequent
		// requests to the same path will serve the generated page, just like
		// other pages pre-rendered at build time.
		// fallback: blocking -- new paths will be server-side rendered, and
		// cached for future requests so it only happens once per path.
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}
