'use client'

import { FCX } from 'react'
import Link from 'next/link'
import { Article, ArticleProps } from './Article'

export type ArticleListProps = {
  articles: ArticleProps[]
  previousLink?: string
  nextLink?: string
}

export const ArticleList: FCX<ArticleListProps> = ({ className, articles, previousLink, nextLink }) => {
  return (
    <div className='flex flex-col space-y-8'>
      {articles.map(({ meta, content }) => (
        <Article key={meta.id} meta={meta} content={content} />
      ))}
      {previousLink && <Link href={previousLink}>前のページへ</Link>}
      {nextLink && <Link href={nextLink}>次のページへ</Link>}
    </div>
  )
}
