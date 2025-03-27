import { BlogPost } from '../types/BlogTypes';

export const posts: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with React',
    content: 'React is a popular JavaScript library for building user interfaces. It was developed by Facebook and has become one of the most widely used frontend technologies...',
    author: 'John Doe',
    date: '2024-01-15',
    excerpt: 'Learn the basics of React and how to get started with this powerful library.'
  },
  {
    id: 2,
    title: 'Understanding React Hooks',
    content: 'Hooks are a powerful feature introduced in React 16.8. They allow you to use state and other React features without writing a class component...',
    author: 'Jane Smith',
    date: '2024-01-16',
    excerpt: 'Dive deep into React Hooks and learn how they can simplify your code.'
  },
  {
    id: 3,
    title: 'React Best Practices',
    content: 'Writing clean and maintainable React code is essential for any project. In this post, we\'ll explore some of the best practices that you should follow...',
    author: 'Mike Johnson',
    date: '2024-01-17',
    excerpt: 'Learn the best practices for writing clean and maintainable React code.'
  }
];
