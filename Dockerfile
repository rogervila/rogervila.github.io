FROM ruby:2.7.3-alpine AS builder

LABEL github-pages-dependencies https://pages.github.com/versions/

LABEL alpine-docs https://wiki.alpinelinux.org/wiki/How_to_get_regular_stuff_working

ENV JEKYLL_ENV production

WORKDIR /usr/src/app

ADD ./Gemfile /usr/src/app/Gemfile

RUN \
    apk --update add git build-base gcc abuild binutils binutils-doc gcc-doc cmake cmake-doc && \
    gem install bundler && \
    bundle install && \
    rm -rf /usr/lib/ruby/gems/*/cache/*.gem

ADD . .

RUN \
    jekyll build



FROM nginx:alpine

COPY --from=builder /usr/src/app/_site /usr/share/nginx/html

EXPOSE 80
