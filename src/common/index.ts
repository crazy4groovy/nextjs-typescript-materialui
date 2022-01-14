/**
 * Misc util functions
 */

export const clone = (obj: any) => JSON.parse(JSON.stringify(obj));

export const delay = (ms = 500) => {
  console.log("!server delay:", ms);
  return new Promise((res) => setTimeout(res, ms));
};
