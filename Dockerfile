FROM oraclelinux:7-slim
WORKDIR /app
ADD producer-direct.js .
ADD package.json .
RUN curl --silent --location https://rpm.nodesource.com/setup_10.x | bash -
RUN yum -y install nodejs npm

CMD ["node","producer-direct.js"]
