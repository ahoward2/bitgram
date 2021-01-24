import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import Header from '../../components/header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts, getPostsByAuthor } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import PostType from '../../types/post'
import AuthorType from '../../types/author'
import MoreStories from '../../components/more-stories'

type Props = {
  authorPosts: PostType[]
  author: AuthorType
}

const Author = ({ author, authorPosts }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !author) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Head>
            <title>
                {author.name}
            </title>
            <meta property="og:image" content={author.picture} />
            </Head>
            {authorPosts && <MoreStories posts={authorPosts}></MoreStories>}
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Author

type Params = {
  params: {
    author: string
  }
}

export async function getStaticProps({ params }: Params) {
  const authorPosts = getPostsByAuthor(params.author, [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: {
      authorPosts
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['author.slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          author: posts.author,
        },
      }
    }),
    fallback: false,
  }
}
