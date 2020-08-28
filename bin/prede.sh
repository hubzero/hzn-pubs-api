#!/bin/bash

SERVER=$1

echo "Deploying to ${SERVER}..."

rm -rf /home/jbg/Development/hzn-pubs-spa/resources/public/js/compiled 

pushd ../hubzero-pubs
sudo rm -rf target/
lein uberjar
scp target/uberjar/pubs-0.1.0-SNAPSHOT-standalone.jar su-jbg@${SERVER}:
popd

pushd /home/jbg/Development/hzn-pubs-spa
lein prod
popd

rm -rf /tmp/com_pubs
cp -r app/components/com_pubs /tmp/com_pubs
rm -rf /tmp/com_pubs/.git
scp -r /tmp/com_pubs su-jbg@${SERVER}:

scp -r  hubzero-cms/core/plugins/projects/publications su-jbg@${SERVER}:

scp /home/jbg/Development/hzn-pubs-spa/resources/public/js/compiled/app.js su-jbg@${SERVER}:


