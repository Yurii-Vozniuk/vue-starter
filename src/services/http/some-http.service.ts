export function fetchUrl(value: string): unknown {
  const url = `https:google.com/${value}`;
  // fetch url and return data
  return `data${url}`;
}
