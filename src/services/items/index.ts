import { delay } from "../../common";
import { items as itemsData } from "../fake-items";

const failurePercent = 20; // make this API very flakey!

export const delayMs: any = {
  POST: 1000,
  GET: 500,
};

export default async (req: any, res: any) => {
  await delay(delayMs[req.method] || 100);

  if (Math.random() * 100 < failurePercent) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Server Error! " + req.method }));
    console.log("ERROR! /items", req.body);
    return;
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(itemsData));
};
