# shoplflow

## Project setup

```bash
pnpm i 
```

# Add Package

## 루트 경로에 패키지 추가하기
[pnpm add](https://pnpm.io/ko/cli/add)

```bash
pnpm -w add <package-name> 
```

## 특정 프로젝트에 패키지 추가하기

```bash
pnpm --filter <project-name> add <package-name> 
```

# Project Start

## 단일 프로젝트 실행하기

`--filter` 커멘드로 특정 프로젝트의 스크립트를 실행할 수 있습니다.

```bash
pnpm --filter <project-name> <script-name>
```


```bash
pnpm --filter base dev
```


## 터보로 실행하기

[turbo.build CLI](https://turbo.build/repo/docs/reference/command-line-reference)

기본적인 빌드 커멘드, 개발 서버 커멘드는 등록되어있습니다.

추가적으로 실행할 커멘드가 있다면 turbo.json에 커멘드를 추가해주세요.

```
turbo run <script-name>
```

```bash
pnpm dev:stories
pnpm dev:dev
```

```bash
turbo run build
turbo run build:package
turbo run build:assets
turbo run build:docs
turbo run build:storybook
```

## 기여하기
### commit convention
작업 유형에 맞는 commit convention을 작성해주세요.
```bash
- feat: 새로운 기능 추가

- fix : 버그 수정
close: #SHP-00000 //연동시킬 JIRA issue number

- hotfix : 핫픽스 수정

- style : 코드 포맷팅, 코드 오타, 함수명 수정 등 스타일 수정

- refactor : 코드 리팩토링(똑같은 기능인데 코드만 개선)

- chore : 정기적인 코드 유지 관리

- update : 코드 업데이트가 있을 경우 (ex: 기존 컴포넌트에 기능 추가)
```
