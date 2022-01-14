const handleResponse = async (res: any) => {
  const json = await res.json();
  if (!res.ok) {
    throw new Error(`API Error caught: "${json.error}"`);
  }
  return json;
};

export const fetcher = (route: string, id = "") =>
  window.fetch(route + id).then(handleResponse);

export const poster = (route: string, id = 0, body: string) =>
  window
    .fetch(route + id, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(handleResponse);
