import chalk from "chalk";
import axios from "axios";

export const getActivity = async (username) => {
  try {
    const respone = await axios.get(
      `https://api.github.com/users/${username}/events`
    );
    const events = respone.data;
    const userActivity = events.map((event) => {
      const details = [];
      switch (event.type) {
        case "PushEvent":
          details.push(
            `Commits: ${event.payload.commits
              .map((commit) => commit.message)
              .join(", ")}`
          );
          break;
        case "ForkEvent":
          details.push(`Forked to: ${event.payload.forkee.full_name}`);
          break;
        case "IssuesEvent":
          details.push(
            `Issue: ${event.payload.action} issue #${event.payload.issue.number} - "${event.payload.issue.title}"`
          );
          break;
        default:
          details.push("No specific details available.");
      }
      return {
        type: event.type,
        repo: event.repo.name,
        timestamp: event.created_at,
        details: details.join("\n"),
      };
    });

    console.log("your Activity:");
    userActivity.forEach((event) => {
      console.log(
        chalk.green(`
        Event: ${event.type}
       Repository: ${event.repo}
       Timestamp: ${event.timestamp}
       Details:
       ${event.details}
    `)
      );
    });
  } catch (error) {
    console.error(chalk.red("Error fetching events:", error.message));
  }
};
export default getActivity;
