import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { detectLanguage } from "../../../lib/code-language-util";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents = {
    img(image) {
      return (
        <div className={classes.img}>
          <Image
            src={`/images/posts/${post.slug}/${image.src}`}
            height={300}
            width={600}
            alt={image.alt || "Post image"}
            style={{ objectFit: "contain" }}
          />
        </div>
      );
    },

    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      const language = detectLanguage(match ? match[1] : "");
      const codeValue = String(children).replace(/\n$/, "");

      if (inline) {
        return <code {...props}>{children}</code>;
      }

      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          PreTag="div"
          {...props}
        >
          {codeValue}
        </SyntaxHighlighter>
      );
    },

    mark({ children }) {
      return (
        <mark style={{ backgroundColor: "yellow", padding: "0 2px" }}>
          {children}
        </mark>
      );
    },
  };

  const contentWithHighlights = post.content.replace(
    /==(.+?)==/g,
    "<mark>$1</mark>"
  );

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown
        components={customComponents}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {contentWithHighlights}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
