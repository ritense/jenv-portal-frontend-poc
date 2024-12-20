FROM nginx:1.21.1-alpine

COPY ./build /usr/share/nginx/html
COPY /conf/nginx.conf /etc/nginx/conf.d
COPY entrypoint.sh /docker-entrypoint.d/entrypoint.sh

RUN \
    # remove default nginx conf
    rm /etc/nginx/conf.d/default.conf && \
    # sets the directory and file permissions to allow users in the root group to access them with the same authorization as the directory and file owner
    chgrp -R 0 /usr/share/nginx/html && \
    chmod -R g=u /usr/share/nginx/html && \
    # update the file and directory permissions
    chown -R 1001:0 /usr/share/nginx/html && \
    # support running as arbitrary user which belongs to the root group
    chmod g+rwx /var/cache/nginx /var/run /var/log/nginx && \
    # comment user directive as master process is run as user in OpenShift anyhow
    sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf && \
    # make entrypoint.sh executable
    chmod 775 /docker-entrypoint.d/entrypoint.sh

# users are not allowed to listen on priviliged ports
# RUN sed -i.bak 's/listen\(.*\)80;/listen 8081;/' /etc/nginx/conf.d/default.conf

EXPOSE 8080
USER 1001:0
CMD ["nginx", "-g", "daemon off;"]
