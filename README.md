# Introduction
Elevate is a web application that allows runners, bikers, and even drivers to plan routes in the real world. However, existing solutions such as Google Maps or Apple Maps simply provide you with the most efficient route for getting from point A to point B.

Designed for runners and bikers that wish to challenge themselves by biking on trails with various elevations, Elevate is simple and intuitive to use. Just enter the desired elevation into the web page and Elevate will take care of the rest.

Elevate is a perfect solution for those who run, bike or drive and seek to find routes that are primarily uphill, downhill, a mix of both, of mostly flat. Never spend long hours searching for that perfect route again!


## Getting Started
This guide is intended for users running Debian-based distributions of Linux
only (e.g. Ubuntu and its various flavors, Kali, Tails, etc.), mainly due to its usage of the
`apt-get` and `coreutils` packages.

Elevate uses `nodejs` as its web server and `npm` as its node.js package manager, and the server run scripts use `tee` to allow output to be printed to the console and a logfile simultaneously.

### Starting the Server
- If you don't already have `nodejs`, `npm`, and `coreutils` installed, run `sudo apt-get install nodejs npm coreutils`
- Navigate to the repository's root folder via the terminal
- Execute the command `./run-production-server.sh` to have output printed to the console as well as logged to the log file `prod-serverout.log`, located in the project's root directory
- Alternatively, execute `./run-dev-server.sh` to have all output and incoming HTTP requests printed to the console as well as logged to the log file `dev-server-out.log`, located in the project's root directory

### Server is Running
- After the server has started, it will be listening for HTTP requests on port 3000
- Open any web browser and navigate to the address `http://localhost:3000`
- You should then be redirected to the "index" page
- You should now be at the home page of the web interface

### Stopping the Server
- From the shell that the `run-production-server.sh` or `run-dev-server.sh` script was executed in, press `Ctrl+C` to stop the server
