import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';
import { BlogPost } from './BlogPost';

export const BlogPostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <BlogPost post={post} />
      <a
        href="/"
        className="inline-block mt-6 text-blue-600 hover:text-blue-800"
      >
        ← Back to all posts
      </a>
    </div>
  );
};
