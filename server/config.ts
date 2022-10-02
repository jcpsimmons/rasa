type ConfigFile = {
  ghToken: string;
  watchDir: string;
};

export const getConfig = () => {
  const ghToken = Deno.env.get("RASA_GH_TOKEN");
  const watchDir = Deno.env.get("RASA_WATCH_DIR");

  console.log("ghToken :>> ", ghToken);
  console.log("watchDir :>> ", watchDir);

  if (!ghToken || !watchDir) {
    throw new Error("Missing environment variables");
  }

  const config: ConfigFile = {
    ghToken,
    watchDir,
  };

  return config;
};
