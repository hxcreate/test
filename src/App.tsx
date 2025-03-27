import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogList } from './components/BlogList';
import { BlogPostDetail } from './components/BlogPostDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-3xl mx-auto py-4">
            <a href="/" className="text-2xl font-bold text-gray-800">
              My Blog
            </a>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/post/:id" element={<BlogPostDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
