
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import OptimizedImage from '../components/OptimizedImage';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Travel Tips', 'Cuisine', 'Shopping', 'History'];

  const filteredPosts = filter === 'All' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold playfair text-brand-dark mb-6">The Heritage Blog</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto inter">
            Insider tips, historical deep-dives, and culinary guides from our local experts.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all border-2 ${
                filter === cat 
                  ? 'bg-brand-primary text-white border-brand-primary shadow-lg' 
                  : 'bg-white text-brand-dark border-brand-dark/5 hover:border-brand-primary/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="wait">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <Link to={`/blog/${post.slug}`} className="block h-64 overflow-hidden relative">
                  <OptimizedImage src={post.image} alt={post.title} className="group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute bottom-6 left-6 bg-brand-primary text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {post.category}
                  </div>
                </Link>
                <div className="p-8">
                  <div className="flex items-center gap-6 text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold playfair text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-500 mb-6 line-clamp-2 text-sm leading-relaxed">{post.excerpt}</p>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="flex items-center gap-2 text-brand-primary font-bold text-sm group-hover:gap-4 transition-all"
                  >
                    Read Full Story <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Blog;
