FROM postgres

COPY ./db.sql /tmp

COPY ./load-default-data.sh /docker-entrypoint-initdb.d/

EXPOSE 5432
CMD ["postgres"]
