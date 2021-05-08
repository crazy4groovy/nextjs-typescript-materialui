import fetchPosts from "../../../../util/fake-posts-service";

export default async (req: any, res: any) => {
  const id = String(req.query.id);

  // USE COMMON FETCH UTIL, never call out to own app's API endpoint!
  let post = await fetchPosts(id).then((r) => r.ok && r.json());
  post = post || { ...req.query };

  console.log("POST:", id, post, req.query);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(post));
  return;
};
