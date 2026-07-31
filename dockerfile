# syntax=docker/dockerfile:1.4
FROM node:22-alpine

WORKDIR /app

ENV NODE_OPTIONS=--dns-result-order=ipv4first

RUN npm config set fetch-retries 5 && \
    npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000 && \
    npm config set fetch-timeout 300000 && \
    npm config set maxsockets 3

COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm install

COPY . .

RUN --mount=type=cache,target=/root/.npm \
    npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "start:dev"]