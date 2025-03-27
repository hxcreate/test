import { BlogPost as BlogPostType } from '../types/BlogTypes';

interface BlogPostProps {
  post: BlogPostType;
  isPreview?: boolean;
}

export const BlogPost = ({ post, isPreview = false }: BlogPostProps) => {
  return (
    <article className="p-6 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <div className="text-gray-600 mb-4">
        <span>{post.author}</span> • <span>{post.date}</span>
      </div>
      <p className="text-gray-700">
        {isPreview ? post.excerpt : post.content}
      </p>
      {isPreview && (
        <a
          href={`/post/${post.id}`}
          className="inline-block mt-4 text-blue-600 hover:text-blue-800"
        >
          Read more →
        </a>
      )}
    </article>
  );
};
