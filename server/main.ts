import { ghPushUpdates, pullUpdates } from "./github.ts";
import { getConfig } from "./config.ts";
import { debounce } from "https://deno.land/std@0.144.0/async/debounce.ts?s=debounce";

const { watchDir } = getConfig();

pullUpdates();

for await (const event of Deno.watchFs(watchDir)) {
  // on modify or file created event update if file is a markdown file
  if (event.paths[0].endsWith(".md")) {
    debounce(ghPushUpdates, 200)();
  }
}
