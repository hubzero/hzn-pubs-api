#!/bin/bash
apt-get update && apt-get install default-jdk curl vim
pushd /usr/local/bin
curl -O https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein
chmod +x lein
popd
pushd /hzn-session-auth
lein install
popd
lein run
