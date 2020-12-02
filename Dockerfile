FROM node:14-alpine

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app

COPY . .

ARG SHA
ENV SHA=${SHA}

RUN yarn --frozen-lockfile

RUN yarn generate

RUN yarn build:web

EXPOSE 8080

CMD ["yarn", "start:in-container"]
