#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chalk from "chalk";
import githubCommand from "../src/githubCommand.js";

yargs(hideBin(process.argv))
  .usage("Usage: $0 <command> [options]")
  .example("$0 github-activity  -u <username>", "fetch github activity")
  .option("verboose", {
    alias: "v",
    describe: "Increase verbosity",
    type: "boolean",
    default: false,
  })
  .command(githubCommand)
  .recommendCommands()
  .demandCommand(1, chalk.red("You need at least one command before moving on"))
  .strict()
  .alias("h", "help")
  .alias("v", "version")
  .parse();
