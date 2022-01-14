import { useState } from "react";
import fetchPosts from "../../services/fake-posts-service";

const Component = (props) => {
  const [post, setPost] = useState(props);

  const buttonFetchPost = (
    <button
      onClick={() => {
        // use app API
        fetch("/api/posts/" + props.id)
          .then((r) => r.json())
          .then((p) => {
            p.refresh = (post.refresh || 0) + 1;
            console.log("set post", p);
            setPost(p);
          });
      }}
    >
      REFRESH
    </button>
  );

  if (!post.title) {
    // Handle Page Not Found
    return (
      <div>
        <h1>NOT FOUND</h1>
        {buttonFetchPost}
      </div>
    );
  }

  // Handle Page Found
  return (
    <div>
      <h1>
        STATIC {post.id} : {post.title}
      </h1>
      <div>{post.body}</div>
      <h4>
        Note: there are 4 posts that exist, navigate around to see what happens!
        (Some are not statically generated, can you figure out how?)
      </h4>
      <h2>API Refresh counter: {post.refresh}</h2>
      {buttonFetchPost}
    </div>
  );
};
export default Component;

///////////////// SERVER SIDE ////////////////////

/* BUILD TIME */
export async function getStaticProps(context) {
  // USE COMMON FETCH UTIL, never call out to own app's API endpoint!
  let post = await fetchPosts(context.params.id).then((r) => r.ok && r.json()); // Handle Page Found
  if (!post) post = { ...context.params }; // Handle Page Not Found
  console.log("getStaticProps", post, JSON.stringify(context));

  return {
    props: {
      id: post.id,
      title: post.title || "",
      body: post.body || "",
    }, // will be passed to the page component as props
  };
}

/* BUILD TIME */
export async function getStaticPaths() {
  // USE COMMON FETCH UTIL, never call out to own app's API endpoint!
  const posts = await fetchPosts().then((r) => r.json());
  const paths = posts
    .slice(0, 2) // look, generate only the first TWO posts!
    .map((p) => ({ params: { id: String(p.id) } }));
  console.log("getStaticPaths", posts, paths);

  return {
    paths,
    fallback: true, // false,
    // fallback: false = show `404.tsx` if URL is missing from getStaticPaths();
    // fallback: true = call getStaticProps() if static page not found, generate new page dynamically ONCE;
    // fallback: true is NOT supported when using `next export`,
    // so if you want a 100% static file site, use `fallback: false`.
  };
}
