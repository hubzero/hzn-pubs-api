#!/bin/sh

LOGFILE=/var/log/hubzero/pubs.log
CFG=/opt/hubzero/pubs/pubs.edn
JAR=/opt/hubzero/pubs/pubs-0.1.0-SNAPSHOT-standalone.jar
JARGREP=pubs-0.1.0-SNAPSHOT-standalone

PROC=`ps aux | grep $JARGREP | grep -v grep`
PID=`ps aux | grep $JARGREP | grep -v grep | awk '{print $2}'`

if [ "$(whoami)" != "apache" ]; then
        echo "Script must be run as user: apache"
        exit -1
fi

if [ -z "$PID" ]; then
	echo "starting"
else
	echo "Pubs process is already running. Please stop it before running another one."
	echo "PID: $PID"
	echo "Process:"
	echo $PROC
	exit -1
fi

nohup java -Xmx2g -jar $JAR -c $CFG > $LOGFILE 2>&1 &
