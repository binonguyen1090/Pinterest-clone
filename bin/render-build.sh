#!/usr/bin/env bash
set -o errexit
bundle install
npm install --no-audit --no-fund
npm run build
bundle exec rails assets:precompile
bundle exec rails db:migrate
bundle exec rails db:seed
