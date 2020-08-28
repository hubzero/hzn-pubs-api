# hzn-pubs-api bin

This is a collection of helper scripts JBG used during the development of new pubs.

## init.sh

JBG ran a docker-composed set of containers one of which was a vanilla debian container with volume mapped directories to the hzn-pubs-api repository.  That container needed a little be of setup, a JVM, lein, etc..  This script was there to initialize fresh versions of those containers.

## prede.sh

This script built the uberjar and javascript files for the SPA app and ssh'd them to the desired server.  *IT WOULD NEED TO BE UPDATED TO THE REFLECT THE DIRECTORIES ON THE MACHINE IT IS USED.*

Development:

    $ ./prede.sh dev.purr.purdue.edu

Production:

    $ ./prede.sh purr.purdue.edu

## deploy.sh

This script would sit in the `/home` directory of the server(s).  It deploys or copies all files into the proper locations, and stop/starts the JVM.

    $ ./deploy.sh

## start.sh

This script is used by the apache user on the server to start the JVM.

## stop.sh

This script is used by the apache user on the server to stop the JVM.


