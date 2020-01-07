FROM java:8-alpine
MAINTAINER Damion Junk <djunk@ucsd.edu>

RUN apk add --no-cache bash curl ca-certificates openssl

# Add the Server
COPY target/uberjar/*standalone.jar /app/

EXPOSE 3000
EXPOSE 7884

WORKDIR "/app"
CMD ["java", "-Xmx4096m", "-cp", "/app/*", "hubzero_pubs/core"]
