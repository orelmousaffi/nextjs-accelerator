#!/usr/bin/env bash

echo Installing vscode extensions:

cat ./.devcontainer/extensions.txt | while read extension || [[ -n $extension ]];
do
  code --install-extension $extension --force
done

exit