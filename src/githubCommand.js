import chalk from "chalk";
import { getActivity } from "../service/getActivity.js";

export const githubCommand = {
  command: "*",
  describe: "fetch recent github activity",
  builder: (yargs) => {
    return yargs
      .option("username", {
        alias: "u",
        describe: "Github username",
        type: "string",
        demandOption: true,
      })
      .check((argv) => {
        if (!argv.username) {
          throw new Error(chalk.red("Please provide a valid username"));
        } else {
          return true;
        }
      });
  },
  handler: (argv) => {
    if (argv.username) {
      getActivity(argv.username);
    }
  },
};

export default githubCommand;
