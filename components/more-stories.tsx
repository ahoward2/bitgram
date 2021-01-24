import HeroPost from '../components/hero-post'
import Post from '../types/post'
import React from 'react'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 mt-2 md:grid-cols-2 md:col-gap-2 lg:grid-cols-3 lg:col-gap-2 row-gap-2">
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
