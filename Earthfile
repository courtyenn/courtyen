VERSION 0.7
FROM node:13.10.1-alpine3.11
WORKDIR /

build:
    # In JS, there's nothing to build in this simple form.
    # The source is also the artifact used in production.
    RUN npm install
    COPY src/assets/ .
    COPY index.js .
    SAVE ARTIFACT index.js /dist/index.js

# npm:
# WORKDIR /src
# RUN npm install
# COPY assets/ .

docker:
    COPY +build/dist dist
    ENTRYPOINT ["node", "./dist/index.js"]
    SAVE IMAGE js-example:latest