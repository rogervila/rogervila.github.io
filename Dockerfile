FROM ruby:2.6.1-alpine3.8

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

EXPOSE 80

CMD jekyll serve -d /_site --force_polling -H 0.0.0.0 -P 80
