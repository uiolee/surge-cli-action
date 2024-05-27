#!/usr/bin/env node

const setInput = (key, val) => {
  const env_key = `INPUT_${key.trim().replace(/ /g, "_").toUpperCase()}`;
  process.env[env_key] = val;
  console.info(`set ${env_key}: ${val}`);
};

console.info();
setInput("surge-args", "list");
setInput("surge-token", "afasfsafsdgasd");
setInput("surge-email", "surge@surge.sh");

console.info();
require("../bundle/index");
