#!/bin/sh

# Remove dots from BUILD_VERSION
BUILD_VERSION=$(echo "$BUILD_VERSION" | awk '{gsub(/\./,"")}1')

# Replace {PREFIX_DNS} with the value of PREFIX_DNS in the manifest.json
awk -v fromname="${PREFIX_DNS}" '{gsub(/\{PREFIX_DNS\}/, fromname)}1' \
    "/usr/share/nginx/html/mf/${BUILD_VERSION}/manifest.json" > \
    "/usr/share/nginx/html/mf/${BUILD_VERSION}/manifestbkp.json"

# Remove the original manifest.json
rm "/usr/share/nginx/html/mf/${BUILD_VERSION}/manifest.json"

# Rename the backup file to manifest.json
mv "/usr/share/nginx/html/mf/${BUILD_VERSION}/manifestbkp.json" "/usr/share/nginx/html/mf/${BUILD_VERSION}/manifest.json"

# Start nginx in the foreground
nginx -g 'daemon off;'

