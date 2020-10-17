import { delay } from "../../../../util";
import { data as fakeData } from "../../../../util/fake-data";
import { delayMs } from './'

const failurePercent = 40; // make this API very flakey!

export default async (req: any, res: any) => {
  await delay(delayMs[req.method] || 100);

  if (Math.random() * 100 < failurePercent) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Server Error! " + req.method }));
    console.log("ERROR! /items/[id]", req.body);
    return;
  }

  // const reqData = JSON.stringify({
  //   rkeys: Object.keys(req).sort(),
  //   query: req.query,
  //   url: req.url,
  // })
  const id = Number(req.query.id);

  // POST //
  if (req.method === "POST") {
    const i = fakeData.findIndex((d: any) => d.id === id);
    console.log("POSTED!", i, id, req.body);

    if (i == null) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Data not found" }));
      return;
    }

    fakeData[i] = req.body;
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.body));
    return;
  }

  // GET //
  const result = await fakeData.find((d: any) => d.id === id);
  console.log("GET!", result);
  if (!result) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Data not found" }));
    return;
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(result));
  return;
};
