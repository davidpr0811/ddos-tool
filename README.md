# DDos tool
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdavidpr0811%2Fddos-tool.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdavidpr0811%2Fddos-tool?ref=badge_shield)


This repository contains a Node.js program that sends manipulated packets to a specific IP address. The program uses the `net` module to create a TCP client that connects to the IP address and sends packets with a fake IP header size. The purpose of this program is for educational and experimental purposes only, and should not be used for any malicious activities.

## Requirements

- Node.js v 18 installed on your machine

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.

## Usage

1. In the terminal, navigate to the project directory.
2. Run `node index.mjs` to start the program.
3. The program will run for 120 seconds, during which it will send manipulated packets to the IP address specified in the code.
4. The program will log the number of packages sent every 1 millisecond.

## Important Notes

- This program is for educational and experimental purposes only, and should not be used for any malicious activities.
- Sending manipulated packets to an IP address without permission is illegal and can result in serious consequences.
- The IP address used in this program is for demonstration purposes only and should not be used without permission.


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdavidpr0811%2Fddos-tool.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdavidpr0811%2Fddos-tool?ref=badge_large)