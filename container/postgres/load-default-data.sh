#!/bin/sh

psql -U "$POSTGRES_USER" "$POSTGRES_DB" < /tmp/db.sql
