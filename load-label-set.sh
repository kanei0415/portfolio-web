#!/usr/bin/env bash

source "$(dirname "$0")/.env"

lokalise2 \
  --token "$LOKALISE_TOKEN" \
  --project-id "$LOKALISE_PROJECT_ID" \
  file download \
  --format json \
  --unzip-to ./src/i18n

for lang_dir in src/i18n/*; do
  if [ -d "$lang_dir" ]; then
    no_file="$lang_dir/no_filename.json"
    label_file="$lang_dir/label_set.json"
    if [ -f "$no_file" ]; then
      mv "$no_file" "$label_file"
      echo "Renamed $no_file → $label_file"
    fi
  fi
done
