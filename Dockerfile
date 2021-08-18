FROM node:16
ARG PROJECT_PATH="/home/project"
# install utilities
RUN apt update
RUN apt -y install vim rsyslog
# make project path
RUN mkdir ${PROJECT_PATH}
# copy files there
COPY . ${PROJECT_PATH}
# set workdir
WORKDIR ${PROJECT_PATH}
# install dependencies
RUN npm install
RUN npm run build
# copy entrypoint
COPY ./entrypoint.sh /usr/bin
# this is the entrypoint once container is started
ENTRYPOINT [ "/bin/bash", "/usr/bin/entrypoint.sh" ]