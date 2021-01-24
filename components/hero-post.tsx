import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'
import { Twitter } from '@icons-pack/react-simple-icons'

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
    <section className="flex flex-col box-border bg-white shadow-md">
      <div className="flex-none">
        <div className="flex justify-between pb-2 pt-2 pl-2">
          <div>
            <Avatar name={author.name} picture={author.picture} />
          </div>
          { author.twitter &&
          <div className="pt-2 text-dark">
            <a href={author.twitter}>
            <Twitter size={24}/>
            </a>
          </div>
          }
          <div className="pr-2 pt-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="25px" width="25px">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex-none mb-2">
        <CoverImage title={title} src={coverImage} slug={slug}/>
      </div>

      <div className="flex-none">
        <h3 className="px-2 mb-4 text-xl lg:text-2xl leading-tight text-dark font-mono">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
      </div>

      <div className="flex-none">
        <p className="px-2 text-sm leading-relaxed mb-2 text-dark font-mono">{excerpt}</p>
      </div>

      <div className="flex-auto">
      </div>

      <div className="flex-none">
        <div className="px-2 pt-2">
          <div className="mb-1 text-sm text-dark font-mono">
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>

      <div className="pb-2">
        <div className="py-2">
          <hr></hr>
        </div>
        <div className="grid grid-flow-col grid-cols-3 justify-items-center py-2">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="25" width="25">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="25" width="25">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="25px" width="25px">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroPost
