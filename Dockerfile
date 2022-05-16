FROM node:12 as build

WORKDIR /app

RUN npm cache clean --force

COPY package*.json /app/

RUN npm install @angular/cli

RUN npm install

COPY . .

RUN npm run build

FROM nginx

COPY --from=build /app/build /usr/share/nginx/html

COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 4070