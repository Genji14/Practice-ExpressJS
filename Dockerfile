
FROM node:18.1.0-alpine

# Environment
ENV PORT ${PORT}

ENV MONGO_DB_URI ${MONGO_DB_URI}

# Copy folder to another device
COPY . /home/app

# cd to project folder
WORKDIR /home/app

# RUN CODE TERMINAL, START WHEN BUILDING CONTAINER
RUN npm install

# PORT WHEN RUN -P
EXPOSE ${PORT}

# WHEN RUN CONTAINER
CMD [ "node", "index.js" ]
