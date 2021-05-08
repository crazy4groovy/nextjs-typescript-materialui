const posts = [
  { id: "1", title: "Post 1", body: "Body 1!" },
  { id: "2", title: "Post 2", body: "Body 2!" },
  { id: "3", title: "Post 3", body: "Body 3!" },
  { id: "4", title: "Post 4", body: "Body 4!" },
];

export default async function fetchUtil(url?: string): Promise<any> {
  if (!url) {
    return {
      ok: true,
      json: async () => posts,
      headers: [],
    }
  }

  const id = Number(url.split('/').pop()) - 1;
  const post = posts[id] || null;

  return {
    ok: !!post,
    json: async () => post,
    headers: [],
  }
}
