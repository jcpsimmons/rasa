type ConfigFile = {
  ghToken: string;
  watchDir: string;
  repoName: string;
};

export const getConfig = () => {
  const ghToken = Deno.env.get("RASA_GH_TOKEN");
  const watchDir = Deno.env.get("RASA_WATCH_DIR");
  const repoName = Deno.env.get("RASA_REPO_NAME");

  if (!ghToken || !watchDir || !repoName) {
    throw new Error("Missing environment variables");
  }

  const config: ConfigFile = {
    ghToken,
    watchDir,
    repoName,
  };

  return config;
};
