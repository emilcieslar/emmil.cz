import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default function Home({ allPostsData }) {
  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {allPostsData.map(({ slug, date, title }) => (
          <li key={slug}>
            <Link href={`/posts/${slug}`}>{title}</Link> - {date}
          </li>
        ))}
      </ul>
    </main>
  );
}
