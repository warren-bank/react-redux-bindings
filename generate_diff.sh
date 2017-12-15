#!/usr/bin/env bash

# disable file glob expansion
set -f

base_git_branch='react-redux'
output_dir='.diff'

[ -d "$output_dir" ] || mkdir -p "$output_dir"

for this_git_branch in $(git branch --list --no-color)
do
  if [ "$this_git_branch" != "$base_git_branch" -a "$this_git_branch" != '*' ]; then
    git diff --no-ext-diff --patch --raw --no-color "$base_git_branch" "$this_git_branch" > "${output_dir}/${this_git_branch}.diff"
  fi
done
