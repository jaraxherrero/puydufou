#!/bin/sh

git filter-repo --force --commit-callback '
  commit.author_name = b"Jara"
  commit.author_email = b"jaraxherrero@gmail.com"
  commit.committer_name = b"Jara"
  commit.committer_email = b"jaraxherrero@gmail.com"
'
