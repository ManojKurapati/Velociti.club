// Generates host-specific redirect configs from redirects/redirects.json.
// Run: node scripts/build-redirects.mjs
import fs from "node:fs";

const r = JSON.parse(fs.readFileSync("redirects/redirects.json", "utf8"));
const to = r.to;
const hosts = ["velociti.club", "www.velociti.club"];
const pathPairs = Object.entries(r.paths);

// Cloudflare Bulk Redirects list CSV (no header). Columns:
// source_url,target_url,status_code,preserve_query_string,include_subdomains,subpath_matching,preserve_path_suffix
// Exact old paths first; the catch-all covers www via include_subdomains and keeps path + query.
const csv = [
  ...pathPairs.map(([from, dest]) => `velociti.club${from},${to}${dest},301,true,true,false,false`),
  `velociti.club/,${to}/,301,true,true,true,true`,
];
fs.writeFileSync("redirects/cloudflare-bulk-redirects.csv", csv.join("\n") + "\n");

// Netlify / Cloudflare Pages `_redirects` (deploy on the velociti.club redirect site).
const nl = [...pathPairs.map(([from, dest]) => `${from}  ${to}${dest}  301!`), `/*  ${to}/:splat  301!`];
fs.writeFileSync("redirects/_redirects", nl.join("\n") + "\n");

// nginx server block for velociti.club.
const ng = `server {
  listen 80;
  listen 443 ssl;
  server_name ${hosts.join(" ")};
  # ssl_certificate ...; ssl_certificate_key ...;
${pathPairs.map(([from, dest]) => `  location = ${from} { return 301 ${to}${dest}$is_args$args; }`).join("\n")}
  location / { return 301 ${to}$request_uri; }
}

# Canonical host: www.thinkvelociti.com -> thinkvelociti.com
server {
  listen 80;
  listen 443 ssl;
  server_name www.thinkvelociti.com;
  return 301 ${to}$request_uri;
}
`;
fs.writeFileSync("redirects/nginx.conf", ng);

// vercel.json for a tiny redirect-only Vercel project bound to velociti.club.
const vercel = {
  redirects: [
    ...pathPairs.map(([from, dest]) => ({ source: from, destination: `${to}${dest}`, permanent: true })),
    { source: "/:path*", destination: `${to}/:path*`, permanent: true },
  ],
};
fs.writeFileSync("redirects/vercel.json", JSON.stringify(vercel, null, 2) + "\n");
console.log("redirect configs written to /redirects");
