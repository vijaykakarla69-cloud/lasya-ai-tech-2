"use client"

import Layout from "@/src/components/layout/Layout"
import ContactCta from "@/src/components/common/ContactCta"
import { BlogPostMeta } from "@/src/data/blogPosts"
import { getBlogArticleBody } from "@/src/components/blog/articleBodies"

export default function BlogDetailClient({ post }: { post: BlogPostMeta }) {
  const ArticleBody = getBlogArticleBody(post.slug)

  return (
    <Layout headerStyle={70} footerStyle={70}>
      <section className="container-fluid position-relative section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto text-center mb-4">
              <span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase d-inline-block mb-3">
                {post.category}
              </span>
              <h2 className="fw-bold ds-4 mb-3">{post.title}</h2>
              <p className="text-500 fs-6 mb-0">
                {post.author} &middot; {post.displayDate} &middot; {post.readTime}
              </p>
            </div>
            <div className="col-lg-9 mx-auto">
              <img
                src={post.image}
                alt={post.imageAlt}
                className="img-fluid rounded-3 w-100 mb-5"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid position-relative pb-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              {ArticleBody ? <ArticleBody /> : <p className="text-500">This article is coming soon.</p>}
            </div>
          </div>
        </div>
      </section>

      <ContactCta compact />
    </Layout>
  )
}
