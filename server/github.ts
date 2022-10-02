import { Octokit, App } from "https://cdn.skypack.dev/octokit?dts";

export const ghAuthenticate = async (ghToken: string) => {
  // Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
  const octokit = new Octokit({ auth: ghToken });

  // Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();
  console.log("Hello, %s", login);
  return octokit;
};
