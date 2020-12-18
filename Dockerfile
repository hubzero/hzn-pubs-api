FROM java:8-alpine
MAINTAINER Damion Junk <djunk@ucsd.edu>

RUN apk add --no-cache bash curl ca-certificates openssl

# Add the Server
COPY target/uberjar/pubs-api.jar /app/

EXPOSE 3000
EXPOSE 7884

WORKDIR "/app"
CMD ["java", "-Xmx2g", "-jar", "pubs-api.jar"]
