#!/bin/bash
echo "Elevate - Production Mode (node.js Web Server)"
echo "- NODE_ENV environment variable will be set to: production"
echo "- Incoming HTTP requests will not be logged"
echo "- Output will be printed to stdout and logged"
echo "- Log file: ./prod-server-out.log"
echo "- npm log file: ./src/npm-debug.log"
echo "Running 'startproductionserver' script in ./src/package.json ..."
echo ""
cd src/
npm run-script runproductionserver 2>&1 | tee ../prod-server-out.log
