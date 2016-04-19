#!/bin/bash
echo "Elevate - Development Mode (node.js Web Server)"
echo "- NODE_ENV environment variable will be set to: development"
echo "- Incoming HTTP requests will be printed to stdout and logged"
echo "- Output will be printed to stdout and logged"
echo "- Log file: ./dev-server-out.log"
echo "- npm log file: ./src/npm-debug.log"
echo "Running 'startdevserver' script in ./src/package.json ..."
echo ""
cd src/
npm run-script rundevserver 2>&1 | tee ../dev-server-out.log
