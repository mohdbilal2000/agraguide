
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS, TOURS } from '../constants';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Instagram } from 'lucide-react';

const BlogDetail: React.FC = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === id);

  if (!post) return <div className="pt-32 text-center">Article not found.</div>;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Indiventure Travellers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://indiventuretravellers.com/logo.png"
      }
    },
    "datePublished": post.date,
    "description": post.excerpt
  };

  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <SEO 
        title={post.title}
        description={post.excerpt}
        image={post.image}
        type="article"
        schema={blogSchema}
      />
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-brand-primary font-bold mb-8 hover:gap-4 transition-all">
          <ArrowLeft size={18} /> Back to Blog
        </Link>

        <header className="mb-12">
          <span className="text-brand-primary font-bold tracking-widest text-xs uppercase mb-4 block">{post.category}</span>
          <h1 className="text-4xl md:text-6xl font-bold playfair text-brand-dark mb-8 leading-tight">{post.title}</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl">
              <OptimizedImage src={post.image} alt={post.title} className="h-[400px]" />
            </div>
            <article className="prose prose-lg max-w-none">
              <p className="text-2xl text-brand-dark font-light mb-8 leading-relaxed italic border-l-4 border-brand-primary pl-8">
                {post.excerpt}
              </p>
              <div className="text-lg text-gray-600 leading-relaxed space-y-8">
                {post.content}
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
