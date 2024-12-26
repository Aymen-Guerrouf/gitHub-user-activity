# GitHub Activity CLI

A command-line interface tool that fetches and displays recent GitHub activity for any user. The tool provides a simple way to view user activities such as pushes, forks, and issues directly in your terminal.

## Features

- Fetch recent GitHub activity for any user
- Display activities with color-coded output
- Support for multiple event types:
  - Push events (with commit messages)
  - Fork events
  - Issue events
- Verbose output option
- User-friendly error handling

## Installation

```bash
# Clone the repository
git clone https://github.com/Aymen-Guerrouf/GitHub-User--Activity-.git

# Navigate to the project directory
cd github-activity-cli

# Install dependencies
npm install
```

## Dependencies

- `yargs` - Command line argument parsing
- `chalk` - Terminal string styling
- `axios` - HTTP client for API requests

## Usage

```bash
# Basic usage
github-activity -u <username>

# With verbose output
github-activity -u <username> -v
```

### Options

- `-u, --username` : GitHub username (required)
- `-v, --verbose` : Enable verbose output
- `-h, --help` : Show help
- `--version` : Show version number

## Example Output

```bash
Your Activity:
        Event: PushEvent
        Repository: user/repo
        Timestamp: 2024-01-01T12:00:00Z
        Details:
        Commits: Updated README.md, Fixed bug in main.js

        Event: ForkEvent
        Repository: original/repo
        Timestamp: 2024-01-01T11:00:00Z
        Details:
        Forked to: user/repo
```

## Error Handling

The tool includes robust error handling for:

- Invalid usernames
- API request failures
- Missing required arguments

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## project Link

> ### [roadmap.sh](https://roadmap.sh/projects/github-user-activity)
