import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import OptimizedImage from '../components/OptimizedImage';
import SEO, { SITE_URL } from '../components/SEO';
import { ArrowLeft, Calendar, User } from 'lucide-react';

/** Best-effort ISO date for schema. Returns undefined rather than an invalid
 *  value — a wrong date is worse than no date. */
const toISO = (value?: string) => {
  if (!value) return undefined;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10);
};

const BlogDetail: React.FC = () => {
  // The route param is read under both names so this works whether the route
  // is defined as /blog/:slug or /blog/:id.
  const params = useParams<{ slug?: string; id?: string }>();
  const key = params.slug ?? params.id;
  const post = BLOG_POSTS.find((p) => p.slug === key);

  if (!post) {
    return (
      <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
        <SEO
          title="Article Not Found"
          description="This article could not be found."
          canonical={`/blog/${key ?? ''}`}
          noindex
        />
        <div className="container mx-auto px-4 text-center max-w-lg">
          <h1 className="text-4xl font-bold playfair text-brand-dark mb-4">Article not found</h1>
          <p className="text-gray-500 mb-8">
            This story may have moved or been renamed. Browse the blog for the latest guides.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-dark transition-all"
          >
            <ArrowLeft size={18} aria-hidden="true" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const published = toISO(post.date);

  const blogSchema = {
    '@type': 'BlogPosting',
    '@id': `${SITE_URL}/blog/${post.slug}#post`,
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: {
      '@type': 'Person',
      name: post.author,
      worksFor: { '@id': `${SITE_URL}/#organization` },
    },
    publisher: { '@id': `${SITE_URL}/#organization` },
    ...(published ? { datePublished: published, dateModified: published } : {}),
    articleSection: post.category,
    inLanguage: 'en',
    isPartOf: { '@id': `${SITE_URL}/blog#blog` },
    mainEntityOfPage: { '@id': `${SITE_URL}/blog/${post.slug}#webpage` },
  };

  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        image={post.image}
        type="article"
        breadcrumbs={[{ name: 'Blog', path: '/blog' }, { name: post.title }]}
        schema={blogSchema}
      />
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-brand-primary font-bold mb-8 hover:gap-4 transition-all"
        >
          <ArrowLeft size={18} aria-hidden="true" /> Back to Blog
        </Link>

        <header className="mb-12">
          <span className="text-brand-primary font-bold tracking-widest text-xs uppercase mb-4 block">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold playfair text-brand-dark mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-[11px] text-gray-400 font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <User size={13} aria-hidden="true" /> {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={13} aria-hidden="true" />
              {published ? <time dateTime={published}>{post.date}</time> : post.date}
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl">
              <OptimizedImage
                src={post.image}
                alt={post.title}
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="h-[400px]"
              />
            </div>
            <article className="prose prose-lg max-w-none">
              <p className="text-2xl text-brand-dark font-light mb-8 leading-relaxed italic border-l-4 border-brand-primary pl-8">
                {post.excerpt}
              </p>
              <div className="text-lg text-gray-600 leading-relaxed space-y-8">{post.content}</div>
            </article>

            <aside className="mt-16 bg-white rounded-[2.5rem] p-10 shadow-xl border border-brand-dark/5 text-center">
              <h2 className="text-2xl font-bold playfair text-brand-dark mb-3">
                Planning this trip yourself?
              </h2>
              <p className="text-gray-500 mb-8 max-w-lg mx-auto">
                Our government-licensed guides run private tours across Delhi, Agra and Jaipur —
                with hotel pickup and free cancellation up to 24 hours before.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/plans"
                  className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-dark transition-all"
                >
                  Browse Tours
                </Link>
                <a
                  href="https://wa.me/919217519989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-success text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-success/90 transition-all"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </aside>
          </div>

          <aside className="lg:col-span-4">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-brand-dark/5 lg:sticky lg:top-32">
              <h2 className="text-xl font-bold playfair text-brand-dark mb-6">More Stories</h2>
              <ul className="space-y-6">
                {BLOG_POSTS.filter((p) => p.slug !== post.slug)
                  .slice(0, 4)
                  .map((p) => (
                    <li key={p.slug}>
                      <Link to={`/blog/${p.slug}`} className="group flex gap-4 items-start">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                          <OptimizedImage src={p.image} alt="" sizes="80px" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary block mb-1">
                            {p.category}
                          </span>
                          <span className="font-bold text-sm text-brand-dark leading-snug group-hover:text-brand-primary transition-colors">
                            {p.title}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
