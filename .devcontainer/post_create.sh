#!/bin/sh

# Using the post_create script, we run the commands below to stay with thing the /workspace 
# managed by VS Code.

echo Building all app dependencies:

npm ci --verbose

git config --global --add safe.directory /nextjs-accelerator-workspace

# Allow self-signing certificate for this repository
# For proper project use, an SSH certificate will be used
git config http.sslVerify false

exit