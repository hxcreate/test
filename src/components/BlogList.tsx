import { posts } from '../data/posts';
import { BlogPost } from './BlogPost';

export const BlogList = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      {posts.map(post => (
        <BlogPost key={post.id} post={post} isPreview={true} />
      ))}
    </div>
  );
};
