import Link from "next/link";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "./CodeBlock";

export type ArticleProps = {
  content: string;
};

export const Article: FC<ArticleProps> = ({ content }) => {
  return (
    <article className={`p-4 rounded-md shadow-sm bg-neutral-50`}>
      <div className="flex flex-col space-y-2">
        <ReactMarkdown
          components={{
            h1: ({ ...props }) => <h1 className="text-xl font-bold mb-2" {...props} />,
            h2: ({ ...props }) => <h2 className="text-xl font-bold mb-2" {...props} />,
            a: ({ href, ...props }) => <Link href={href ?? "/404"} prefetch={false} className="underline" {...props} />,
            code: CodeBlock,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
};
