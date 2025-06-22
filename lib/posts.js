import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      slug,
      ...matterResult.data,
      date: String(matterResult.data.date)
    };
  });
  return allPostsData.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getAllPostSlugs() {
  return fs.readdirSync(postsDirectory).map(fileName => ({
    params: {
      slug: fileName.replace(/\.md$/, '')
    }
  }));
}

export function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  return {
    slug,
    content: matterResult.content,
    ...matterResult.data,
    date: String(matterResult.data.date)
  };
}
