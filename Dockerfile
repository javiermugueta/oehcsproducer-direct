FROM oraclelinux:7-slim
WORKDIR /app
RUN curl --silent --location https://rpm.nodesource.com/setup_10.x | bash -
RUN yum -y install nodejs npm
RUN npm install --save system-sleep replace-string random-int randomstring kafka-node
ADD producer-direct.js .
ADD package.json .
CMD ["node","producer-direct.js"]
