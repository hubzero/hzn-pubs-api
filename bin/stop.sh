#!/bin/sh

JARGREP=pubs-0.1.0-SNAPSHOT-standalone

PROC=`ps aux | grep $JARGREP | grep -v grep`
PID=`ps aux | grep $JARGREP | grep -v grep | awk '{print $2}'`

if [ "$(whoami)" != "apache" ]; then
        echo "Script must be run as user: apache"
        exit -1
fi

if [ -z "$PID" ]; then
	echo "Nothing to kill."
	exit -1
fi

echo "Killing process:"
echo $PROC
echo "PID: $PID"

kill $PID
