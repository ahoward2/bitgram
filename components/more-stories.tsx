import HeroPost from '../components/hero-post'
import Post from '../types/post'
import React from 'react'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h3 className="flex-col flex items-center mb-2 text-2xl md:text-4xl font-bold text-secondary font-mono tracking-tighter">
        More Stories 👇
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-2 md:row-gap-32 mb-16">
        {posts.map((post) => (
          <HeroPost
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
