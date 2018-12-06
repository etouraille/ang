FROM ubuntu:latest

RUN apt-get -qq update && apt-get -qq install -y  --no-install-recommends \
      git \
      curl \
      vim \
      build-essential \
      libfontconfig1 \
    && rm -rf /var/lib/apt/lists/*

RUN curl -skL https://deb.nodesource.com/setup_8.x -o script.sh

RUN bash script.sh

RUN rm script.sh

RUN apt-get install --yes nodejs

RUN npm install -g @angular/cli

RUN apt-get update

RUN  apt-get install -y ruby
RUN  apt-get install -y ruby-compass
RUN  gem install compass

WORKDIR /src

RUN npm install -g bower
RUN npm install -g grunt
