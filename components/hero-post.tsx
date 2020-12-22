import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section className="box-border bg-white">
      <div className="flex justify-between pb-2 pt-2 pl-2">
        <div>
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="pr-2 pt-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="25px" width="25px">
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </div>
      </div>
      <div className="mb-2 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-2 md:mb-28 p-2">
        <div>
          <h3 className="mb-4 text-xl lg:text-2xl leading-tight text-dark font-mono">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
        </div>
        <div>
          <p className="text-sm leading-relaxed mb-4 text-dark font-mono">{excerpt}</p>
          <div className="mb-1 md:mb-0 text-sm text-dark font-mono">
          <DateFormatter dateString={date} />
        </div>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
