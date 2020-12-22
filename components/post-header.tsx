import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="bg-white">
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
        <div className="mb-2 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage} />
        </div>
        <div className="max-w-2xl mx-2 pb-1">
          <div className="text-lg text-dark">
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
    </>
  )
}

export default PostHeader
