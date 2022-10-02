import { Octokit } from "https://cdn.skypack.dev/octokit?dts";
import { sentence } from "https://cdn.skypack.dev/txtgen?dts";

const cwd = Deno.env.get("RASA_WATCH_DIR");

const run = (command: string[]) => {
  Deno.run({
    cmd: command,
    cwd,
  });
};

export const ghAuthenticate = async (ghToken: string) => {
  const octokit = new Octokit({ auth: ghToken });

  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();
  console.log("Hello, %s", login);
  return octokit;
};

export const pullUpdates = () => {
  run(["git", "pull"]);
};

export const ghPushUpdates = () => {
  const commitMessage = sentence();

  run(["git", "add", "."]);
  run(["git", "commit", "-m", commitMessage]);
  run(["git", "push", "origin", "master"]);
};
