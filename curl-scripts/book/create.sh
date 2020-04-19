#!/bin/bash

API="https://quiet-brook-56568.herokuapp.com"
URL_PATH="/books"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "book": {
      "name": "'"${NAME}"'",
      "author": "'"${AUTHOR}"'"
    }
  }'

echo
