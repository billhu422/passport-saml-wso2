FROM node:latest

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai  /etc/localtime
RUN apt-get update && apt-get -y install curl && apt-get -y install git && apt-get -y install vim
WORKDIR /opt

RUN git clone https://github.com/charwliu/passport-saml-wso2.git && \
        cd passport-saml-wso2 && \
        npm install

expose 9001

CMD  node /opt/passport-saml-wso2/app.js