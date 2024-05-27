var surge = require("surge")({ default: "publish" });

const INPUTS_MAP = {
  args: "surge-args",
  token: "surge-token",
  email: "surge-email",
};

const getInput = (key) => {
  const env_key = `INPUT_${key.trim().replace(/ /g, "_").toUpperCase()}`;
  const env_val = process.env[env_key];
  if (env_val) {
    return env_val.trim().replace(/[\s]+/g, " ");
  } else {
    console.warn(`"${env_key}" variable doesn't exist!`);
  }
};

const maskSecret = (() => {
  const { EOL } = require("node:os");
  [INPUTS_MAP.token, INPUTS_MAP.email].forEach((key) => {
    const val = getInput(key);
    if (val) {
      process.stdout.write(`::add-mask::${val}` + EOL);
      console.info("Mask", key);
    }
  });
})();

const combine = () => {
  let full_args = [];
  full_args.push(...getInput(INPUTS_MAP.args).split(" "));
  if (!full_args.includes("--token")) {
    const token_str = getInput(INPUTS_MAP.token);
    if (token_str) {
      full_args.push("--token");
      full_args.push(token_str);
    }
  }
  console.info(`Full args:`, full_args);
  return full_args;
};

console.debug("run surge");
surge(combine());

process.on("SIGINT", function () {
  console.log("\n");
  global.ponr == true
    ? console.log("   Disconnected".green + "- Expected to complete.".grey)
    : console.log("   Aborted".yellow + " - Deployment not initiated.".grey);
  console.log();
  process.exit(1);
});
