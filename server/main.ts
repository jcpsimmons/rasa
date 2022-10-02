import { ghAuthenticate } from "./github.ts";
import { getConfig } from "./config.ts";

// const watcher = Deno.watchFs(".");
// for await (const event of watcher) {
//   if (event.kind === "modify") {
//     // git add and sync
//   }
// }

const config = getConfig();

ghAuthenticate(config.ghToken);
