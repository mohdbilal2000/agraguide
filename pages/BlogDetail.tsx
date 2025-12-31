
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS, TOURS } from '../constants';
import OptimizedImage from '../components/OptimizedImage';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Instagram } from 'lucide-react';

const BlogDetail: React.FC = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === id);

  if (!post) return <div className="pt-32 text-center">Article not found.</div>;

  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-brand-primary font-bold mb-8 hover:gap-4 transition-all">
          <ArrowLeft size={18} /> Back to Blog
        </Link>

        <header className="mb-12">
          <span className="text-brand-primary font-bold tracking-widest text-xs uppercase mb-4 block">{post.category}</span>
          <h1 className="text-4xl md:text-6xl font-bold playfair text-brand-dark mb-8 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-8 py-6 border-y border-brand-dark/5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">
                {post.author[0]}
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Written By</p>
                <p className="font-bold text-brand-dark">{post.author}</p>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Published On</p>
              <p className="font-bold text-brand-dark">{post.date}</p>
            </div>
            <div className="ml-auto flex gap-3">
              <button className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all text-brand-dark"><Facebook size={18} /></button>
              <button className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all text-brand-dark"><Twitter size={18} /></button>
              <button className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all text-brand-dark"><Share2 size={18} /></button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl">
              <OptimizedImage src={post.image} alt={post.title} className="h-[400px]" />
            </div>
            <div className="prose prose-lg max-w-none prose-headings:playfair prose-headings:font-bold prose-p:inter prose-p:text-gray-600">
              <p className="text-2xl text-brand-dark font-light mb-8 leading-relaxed italic border-l-4 border-brand-primary pl-8">
                {post.excerpt}
              </p>
              <div className="text-lg text-gray-600 leading-relaxed space-y-8">
                {post.content ? (
                  <p>{post.content}</p>
                ) : (
                  <p>Detailed article content coming soon. Our guides are currently hand-writing this historical perspective to ensure accuracy and cultural depth.</p>
                )}
                <p>Agra has always been a city of contradictions—where the grandiosity of imperial monuments meets the vibrant, dusty life of the local markets. To truly understand the Taj Mahal, one must understand the people who built it, and the descendants who still inhabit the labyrinthine streets nearby.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-brand-dark/5">
                <h3 className="text-xl font-bold playfair mb-6">Related Tours</h3>
                <div className="space-y-6">
                  {TOURS.slice(0, 2).map(tour => (
                    <Link key={tour.id} to={`/plans/${tour.id}`} className="group block">
                      <div className="flex gap-4 items-center">
                        <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                          <OptimizedImage src={tour.image} alt={tour.title} />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors leading-tight mb-1">{tour.title}</h4>
                          <p className="text-xs text-brand-primary font-bold">${tour.price} • {tour.duration}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link to="/plans" className="block w-full mt-8 py-3 bg-brand-primary text-white rounded-xl text-center font-bold text-sm">View All Tours</Link>
              </div>

              <div className="bg-brand-dark p-8 rounded-3xl text-white">
                <h3 className="text-xl font-bold playfair mb-4">Travel Consultant</h3>
                <p className="text-white/60 text-sm mb-6">Need expert advice for your itinerary? Talk to us for a custom plan.</p>
                <a href="https://wa.me/919876543210" className="block w-full py-3 bg-brand-success text-white rounded-xl text-center font-bold text-sm flex items-center justify-center gap-2">
                   <Instagram size={16} /> WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
