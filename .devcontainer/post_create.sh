#!/bin/sh

# Using the post_create script, we run the commands below to stay with thing the /workspace 
# managed by VS Code.

echo Building all app dependencies:

npm ci --verbose 

exit