#!/bin/bash

# 원격 저장소의 최신 정보를 가져오고, 삭제된 브랜치 정보를 정리합니다.
git fetch --prune

# 원격에 없는 로컬 브랜치를 찾아서 삭제합니다.
git branch -vv | awk '/: gone]/{print $1}' | xargs -r git branch -D

