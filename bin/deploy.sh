#!/bin/bash
rm -rf /tmp/hubzero-pubs*
rm -rf /tmp/hzn-pubs*
rm -rf /tmp/pubs-*
rm -rf /tmp/app.js
rm -rf /tmp/com_pubs
rm -rf /tmp/publications_jbg

cp pubs-0.1.0-SNAPSHOT-standalone.jar /tmp
chmod o+xr /tmp/pubs-0.1.0-SNAPSHOT-standalone.jar
cp app.js /tmp/app.js
chmod o+r /tmp/app.js
cp -R com_pubs /tmp/com_pubs
chmod -R o+xr /tmp/com_pubs
cp -R publications /tmp/publications_jbg
chmod -R o+xr /tmp/publications_jbg

sudo su - hubadmin <<'EOF'
cp /tmp/pubs-0.1.0-SNAPSHOT-standalone.jar /opt/hubzero/pubs
chmod g+r /opt/hubzero/pubs/pubs-0.1.0-SNAPSHOT-standalone.jar
rm -rf /www/dev/app/components/com_pubs
cp -R /tmp/com_pubs /www/dev/app/components/com_pubs
rm -rf /www/dev/core/plugins/projects/publications 
cp -R /tmp/publications_jbg /www/dev/core/plugins/projects/publications 
cp /tmp/app.js /www/dev/app/components/com_pubs/site/assets/js/compiled/
EOF

sudo /bin/su - apache -s /bin/bash <<'EOF'
/opt/hubzero/pubs/stop.sh
sleep 5s
/opt/hubzero/pubs/start.sh
EOF

