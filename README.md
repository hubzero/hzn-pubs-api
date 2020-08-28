# hzn-pubs-api 


## Configuration

See `resources/pubs.config.edn` for all possible configuration settings and some basic default examples. 

All values may be overridden by env variables, or though an external configuration file that may be specified when starting up hubzero-pubs.

### ENV Vars

As the configuration is in EDN format, here are a few examples on how to override with env vars:

```
MYSQL__DBNAME="my_db"
NREPL__BIND="0.0.0.0"
SERVICE_HOST_ARGS__PORT=3000
```

Make note of the underscores and double underscores and how those relate to the EDN config.

### External EDN config

To specify an external EDN config file that will override values in the default one, when running hubzero-pubs add the command line option:

```
java -jar hubzero-pubs.jar -c /path/to/config.edn
```

Or:

```
lein run -c /path/to/config.edn 
```
