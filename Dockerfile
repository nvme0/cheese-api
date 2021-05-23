#
# Base
#

FROM node:12-alpine as base
RUN echo "Setting up base image..."
WORKDIR /usr/src

COPY package.json lerna.json package-lock.json ./
COPY packages/api/package*.json ./packages/api/
COPY packages/app/package*.json ./packages/app/

COPY . .

RUN npm ci
RUN npm run bootstrap:ci

RUN ls -a
RUN ls -a packages/api
RUN ls -a packages/app

#
# Lint
#

FROM base as lint
RUN echo "Running lint stage..."
RUN npm run eslint

#
# Type Check
#

FROM base as type-check
RUN echo "Running type-check stage..."
RUN npm run type-check

#
# Test
#

FROM base as test
RUN echo "Running test stage..."
RUN npm run test

#
# Build
#

FROM base as build
RUN echo "Running build stage..."
RUN npm run build

#
# Start API
#

FROM build as start-api
RUN echo "Running start-api stage..."
COPY --from=build /usr/src/packages/api .
CMD npm start
