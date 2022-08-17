import Link from "next/link";
import styled from "styled-components";
import { getPost, getSlugs } from "../../utils/wordpress";
import Container from "../../components/Container";

const StyledContainer = styled(Container)`
  .wp-block-image .aligncenter {
    display: table;
    clear: both;
    margin-left: auto;
    margin-right: auto;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  p {
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: center;
  }
  h2 {
    margin-bottom: 1rem;
    font-size: 22px;
    font-weight: 500;
  }
`;

export default function PostPage({ post }) {
  return (
    <StyledContainer>
      <h1>
        <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      </h1>
      <div
        className="card-text pb-5"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      ></div>
      <Link href="/">
        <a className="btn btn-primary">Back to Home</a>
      </Link>
    </StyledContainer>
  );
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {
  const paths = await getSlugs("posts");

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: "blocking",
  };
}

//access the router, get the id, and get the data for that post

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 10, // In seconds
  };
}
