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