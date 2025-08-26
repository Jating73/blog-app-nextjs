import Head from "next/head";
import { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import PasswordForm from "../../components/posts/password-form";

function PostDetailPage(props) {
  if (props.locked) {
    return <PasswordForm slug={props.slug} />;
  }

  return (
    <Fragment>
      <Head>
        <title>{props.slug}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export async function getServerSideProps({ params, req }) {
  // import fs-dependent functions *inside* so Next.js doesn’t bundle them into client
  const { getPostData } = await import("../../lib/posts-util");
  const { slug } = params;
  const postData = getPostData(slug);

  if (postData.isProtected) {
    const cookies = req.headers.cookie || "";
    const isUnlocked = cookies.includes("unlocked=true");

    if (!isUnlocked) {
      return { props: { slug, locked: true } };
    }
  }

  return { props: { slug, post: postData, locked: false } };
}

export default PostDetailPage;
