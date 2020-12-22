import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-2 text-dark">
        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  )
}

export default PostBody
