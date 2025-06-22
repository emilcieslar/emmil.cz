import Head from 'next/head';
import { remark } from 'remark';
import html from 'remark-html';
import { getAllPostSlugs, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = getPostData(params.slug);
  const processedContent = await remark().use(html).process(postData.content);
  const contentHtml = processedContent.toString();
  return {
    props: {
      postData: {
        ...postData,
        contentHtml
      }
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false
  };
}

export default function Post({ postData }) {
  return (
    <article>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1>{postData.title}</h1>
      <div>{postData.date}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
