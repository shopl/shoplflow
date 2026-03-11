/**
 * Storybook 10 메인 설정 파일
 *
 * - 스토리/문서 경로, 사용할 프레임워크, 애드온, Vite 커스터마이징을 정의합니다.
 * - 이 파일은 Node에서만 로드되며, 상대 경로는 .storybook 디렉터리 기준입니다.
 * @see https://storybook.js.org/docs/configure#main-configuration-file
 */
import type { StorybookConfig } from "@storybook/react-vite";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// ESM 환경에서 require.resolve를 쓰기 위해 createRequire 사용
const require = createRequire(import.meta.url);
// ESM에서 __dirname 대체 (import.meta.url → 디렉터리 경로)
const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  // -------------------------------------------------------------------------
  // framework: 사용할 Storybook 프레임워크 (React + Vite)
  // - name: 패키지명. Vite가 React 앱을 빌드/서빙하는 방식으로 스토리를 실행합니다.
  // - options: 프레임워크별 옵션 (react-vite는 보통 빈 객체)
  // -------------------------------------------------------------------------
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  // -------------------------------------------------------------------------
  // stories: 스토리/문서 파일을 찾는 glob 패턴 배열
  // - *.stories.@(js|jsx|mjs|ts|tsx): CSF(Component Story Format) 스토리
  // - *.mdx: MDX 문서(레거시 Docs 등). 상대 경로는 프로젝트 루트가 아니라 이 설정 파일 기준
  // -------------------------------------------------------------------------
  stories: [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.mdx",
  ],

  // -------------------------------------------------------------------------
  // addons: Storybook UI/기능 확장
  // - addon-links: 스토리 간 링크
  // - addon-docs: Docs 탭, autodocs, MDX, Controls 등
  // - addon-a11y: 접근성 검사
  // - addon-designs: Figma 등 디자인 링크
  // - addon-mcp: MCP 도구셋(dev/docs) 노출
  // -------------------------------------------------------------------------
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-designs",
    "@storybook/addon-themes",
    {
      name: "@storybook/addon-mcp",
      options: {
        toolsets: {
          dev: true,
          docs: true,
        },
      },
    },
  ],

  // -------------------------------------------------------------------------
  // viteFinal: Storybook이 사용하는 Vite 설정을 병합/오버라이드
  // - 빌드/개발 서버 모두에 적용됩니다.
  // -------------------------------------------------------------------------
  viteFinal: async (config) => {
    return {
      ...config,

      // 브라우저 환경에서 process.env를 참조하는 코드 대체 (Node 전용 변수 제거)
      define: {
        ...config.define,
        "process.env": {},
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
      },

      resolve: {
        ...config.resolve,
        // React/React-DOM이 여러 번 번들에 들어가지 않도록 단일 인스턴스로 통일
        dedupe: ["react", "react-dom"],
        alias: {
          ...config.resolve?.alias,
          // Node 전용 'tty' 모듈이 브라우저 번들에서 import될 때 에러 방지 (Storybook 10 + Vite)
          tty: join(__dirname, "stubs", "tty.js"),
          "node:tty": join(__dirname, "stubs", "tty.js"),
        },
      },

      plugins: [
        ...(config.plugins || []),
        // file:// 프로토콜로 들어오는 경로를 로컬 파일 경로로 변환 (일부 애드온/의존성 대응)
        {
          name: "resolve-file-protocol",
          enforce: "pre",
          resolveId(source) {
            if (source.startsWith("file://")) {
              return source.replace("file://", "");
            }
            return null;
          },
        },
      ],

      build: {
        ...config.build,
        rollupOptions: {
          ...config.build?.rollupOptions,
          // UNRESOLVED_IMPORT 경고는 의도적으로 무시 (모노레포/심볼릭 링크 등에서 자주 발생)
          onwarn(warning, warn) {
            if (warning.code === "UNRESOLVED_IMPORT") return;
            warn(warning);
          },
        },
      },

      // 의존성 pre-bundle 설정 (개발 서버에서 ESM 변환 및 캐시)
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [
          ...(config.optimizeDeps?.include ?? []),
          "@shoplflow/shopl-assets",
          "@shoplflow/hada-assets",
          "@storybook/addon-docs",
          // CJS 전용 패키지. pre-bundle로 ESM 변환해 "export named 'default'" 에러 방지
          // "semver",
        ],
        // CJS 모듈을 ESM으로 감쌀 때 default export 인터롭 필요
        needsInterop: [
          ...(config.optimizeDeps?.needsInterop ?? []),
          // "semver",
        ],
      },

      server: {
        ...config.server,
        fs: {
          ...config.server?.fs,
          // 프로젝트 루트 밖(node_modules, 모노레포 상위 등) 파일 접근 허용
          strict: false,
        },
      },
    };
  },

  // -------------------------------------------------------------------------
  // docs: 문서(Docs 탭) 관련 전역 설정
  // - Storybook 10부터 autodocs 노출은 main이 아니라 preview의 tags 또는 스토리 meta의 tags로 제어
  // - 전체 자동 문서: preview.tsx에 tags: ['autodocs']
  // - 파일별: 각 *.stories.tsx의 meta에 tags: ['autodocs']
  // -------------------------------------------------------------------------
  docs: {},

  // -------------------------------------------------------------------------
  // features: 실험/기능 플래그
  // - experimentalComponentsManifest: 컴포넌트 매니페스트(검색 등) 실험 기능
  // -------------------------------------------------------------------------
  features: {
    experimentalComponentsManifest: true,
  },
};

export default config;
