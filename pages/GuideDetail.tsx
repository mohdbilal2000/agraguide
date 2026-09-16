import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CalendarDays, Info, ArrowRight, ArrowLeft } from 'lucide-react';
import { GUIDES } from '../guides';
import OptimizedImage from '../components/OptimizedImage';
import SEO, { SITE_URL } from '../components/SEO';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

const GuideDetail: React.FC = () => {
  const { slug } = useParams();
  const guide = GUIDES.find(g => g.slug === slug);

  if (!guide) return <Navigate to="/guides" replace />;

  const guideUrl = `${SITE_URL}/guides/${guide.slug}`;

  const schema: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: guide.h1,
      description: guide.metaDescription,
      image: guide.image,
      datePublished: guide.updated,
      dateModified: guide.updated,
      inLanguage: 'en',
      mainEntityOfPage: { '@type': 'WebPage', '@id': guideUrl },
      author: { '@type': 'Organization', name: 'Indiventure Travellers', url: SITE_URL },
      publisher: {
        '@type': 'Organization',
        name: 'Indiventure Travellers',
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` }
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Travel Guides', item: `${SITE_URL}/guides` },
        { '@type': 'ListItem', position: 3, name: guide.cardTitle, item: guideUrl }
      ]
    }
  ];

  if (guide.faqs && guide.faqs.length > 0) {
    schema.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: guide.faqs.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer }
      }))
    });
  }

  return (
    <div className="bg-brand-bg min-h-screen">
      <SEO
        title={guide.metaTitle}
        description={guide.metaDescription}
        image={guide.image}
        type="article"
        canonical={`/guides/${guide.slug}`}
        schema={schema}
      />

      <div className="relative h-[42vh] md:h-[52vh] w-full overflow-hidden">
        <OptimizedImage src={guide.image} alt={guide.h1} priority sizes="100vw" className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent opacity-95" />
        <div className="absolute top-0 left-0 right-0 p-4 md:p-8 z-50">
          <Link to="/guides" aria-label="Back to all guides" className="inline-flex p-2 md:p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all">
            <ArrowLeft size={20} aria-hidden="true" />
          </Link>
        </div>
        <div className="absolute inset-0 page-container flex flex-col justify-end pb-10 md:pb-14">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/guides" className="hover:text-white transition-colors">Guides</Link>
          </nav>
          <h1 className="display-lg font-bold playfair text-white max-w-4xl">{guide.h1}</h1>
        </div>
      </div>

      <div className="page-container mt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <article className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-[2rem] p-8 md:p-14 shadow-soft border border-brand-dark/5">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-8">
                <CalendarDays size={13} aria-hidden="true" />
                Last updated {formatDate(guide.updated)}
              </p>

              {guide.intro.map((p, i) => (
                <p key={i} className="text-lg md:text-xl text-gray-700 leading-relaxed mb-5">{p}</p>
              ))}

              {guide.sections.length > 1 && (
                <nav aria-label="On this page" className="bg-brand-bg rounded-2xl p-6 my-10">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">On this page</p>
                  <ul className="space-y-2">
                    {guide.sections.map(s => (
                      <li key={s.id}>
                        <a href={`#${s.id}`} className="text-brand-primary font-medium text-sm hover:underline">
                          {s.heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              {guide.sections.map(section => (
                <section key={section.id} id={section.id} className="scroll-mt-28 mt-12 first:mt-0">
                  <h2 className="text-2xl md:text-3xl font-bold playfair text-brand-dark mb-5">{section.heading}</h2>

                  {section.body?.map((p, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                  ))}

                  {section.list && (
                    <ul className="space-y-3 my-6">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex gap-3 text-gray-700 leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.table && (
                    <div className="my-8 overflow-x-auto rounded-2xl border border-brand-dark/10">
                      <table className="w-full text-sm text-left border-collapse">
                        {section.table.caption && (
                          <caption className="text-left text-xs text-gray-500 px-5 py-3 bg-brand-bg">
                            {section.table.caption}
                          </caption>
                        )}
                        <thead>
                          <tr className="bg-brand-dark text-white">
                            {section.table.headers.map((h, i) => (
                              <th key={i} scope="col" className="px-5 py-3 font-bold text-xs uppercase tracking-wider whitespace-nowrap">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, ri) => (
                            <tr key={ri} className={ri % 2 ? 'bg-brand-bg' : 'bg-white'}>
                              {row.map((cell, ci) => (
                                <td key={ci} className="px-5 py-3 text-gray-700 align-top border-t border-brand-dark/5">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {section.callout && (
                    <aside className="my-8 flex gap-4 bg-brand-gold/10 border border-brand-gold/30 rounded-2xl p-6">
                      <Info size={20} className="text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <p className="font-bold text-brand-dark mb-1">{section.callout.title}</p>
                        <p className="text-gray-700 text-sm leading-relaxed">{section.callout.text}</p>
                      </div>
                    </aside>
                  )}
                </section>
              ))}
            </div>

            {guide.faqs && guide.faqs.length > 0 && (
              <div className="bg-white rounded-[2rem] p-8 md:p-14 shadow-soft border border-brand-dark/5">
                <h2 className="text-2xl md:text-3xl font-bold playfair text-brand-dark mb-8">Common questions</h2>
                <div className="space-y-6">
                  {guide.faqs.map((f, i) => (
                    <div key={i} className="border-b border-brand-dark/5 pb-6 last:border-0 last:pb-0">
                      <h3 className="font-bold text-brand-dark mb-2">{f.question}</h3>
                      <p className="text-gray-700 leading-relaxed text-[15px]">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {guide.seeAlso && guide.seeAlso.length > 0 && (
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-soft border border-brand-dark/5">
                <h2 className="text-xl font-bold playfair text-brand-dark mb-4">Read next</h2>
                <ul className="space-y-3">
                  {guide.seeAlso.map(s => (
                    <li key={s.to}>
                      <Link to={s.to} className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm hover:underline">
                        {s.label} <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-8 space-y-4">
              <div className="bg-white rounded-[2rem] p-8 shadow-lift border border-brand-dark/5">
                <p className="text-xs uppercase font-bold text-gray-400 tracking-widest mb-4">
                  Tours that cover this
                </p>
                <ul className="space-y-5">
                  {guide.related.map(r => (
                    <li key={r.to}>
                      <Link to={r.to} className="font-bold text-brand-dark hover:text-brand-primary transition-colors block mb-1">
                        {r.label}
                      </Link>
                      <p className="text-xs text-gray-500 leading-relaxed">{r.note}</p>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/919217519989?text=${encodeURIComponent(`Hi, I read your guide: ${guide.cardTitle}. I have a question.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full text-center bg-brand-success/10 text-brand-success py-4 rounded-2xl font-bold hover:bg-brand-success hover:text-white transition-all"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default GuideDetail;
