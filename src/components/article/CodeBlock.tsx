'use client'

import { CodeComponent } from 'react-markdown/lib/ast-to-react'
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const CodeBlock: CodeComponent = ({ inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '')
  const lang = match ? match[1] : 'text'
  return (
    <SyntaxHighlighter {...props} style={coy} language={lang} PreTag='div' showLineNumbers>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  )
}
