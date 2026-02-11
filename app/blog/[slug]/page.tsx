import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { getPostBySlug, blogPosts } from '@/lib/data/blog-posts';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MarkdownRenderer } from '@/components/blog/MarkdownRenderer';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <section className="section-padding pb-0">
        <div className="container-custom max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="mb-6">
            {post.featured && (
              <Badge variant="success" size="md" className="mb-4">
                Featured Article
              </Badge>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-slate-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readTime}
              </div>
              <div className="font-medium">By {post.author}</div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="primary" size="md">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <hr className="border-slate-200 dark:border-slate-700 mb-8" />

          {/* Article Content */}
          <article>
            <MarkdownRenderer content={post.content} />
          </article>

          {/* Share / CTA Section */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Let's discuss how I can help with your data science projects
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}