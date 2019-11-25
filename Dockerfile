FROM node:12.9.0-alpine as build

WORKDIR /usr/src/node_app

ARG NODE_ENV=production
ENV PATH /usr/src/node_app/node_modules/.bin:$PATH

RUN npm install --silent
RUN npm install webpack -g --silent

COPY . /usr/src/node_app

RUN npm run postinstall

FROM ruby:2.5.1-alpine3.7

RUN apk add --no-cache --update build-base \
  linux-headers \
  git \
  postgresql-dev \
  nodejs \
  tzdata

ENV DATABASE_URL="postgres://postgres@db"
ARG RAILS_ENV=production

WORKDIR /my_app
COPY Gemfile /my_app/Gemfile
COPY Gemfile.lock /my_app/Gemfile.lock

RUN gem install bundler -v 2.0.2 && bundle install
COPY . /my_app

COPY --from=build /usr/src/node_app/app/assets/javascripts/bundle.js ./app/assets/javascripts/
COPY --from=build /usr/src/node_app/app/assets/javascripts/bundle.js.map ./app/assets/javascripts/

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]