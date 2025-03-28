module.exports = {
  types: [
    { value: 'feat', name: 'feat: 새로운 기능 추가' },
    { value: 'fix', name: 'fix: 버그 수정' },
    { value: 'update', name: 'update: 기존 요소/기능을 수정'},
    { value: 'docs', name: 'docs: 문서 수정' },
    { value: 'style', name: 'style: 코드 포맷팅, 코드 오타, 함수명 수정' },
    { value: 'refactor', name: 'refactor: 기존 코드 리팩토링' },
    { value: 'chore', name: 'chore: 버저닝 수정(changeset), 라이브러리 설치'}
  ],
  scopes: [
    { name: 'root' },
    { name: 'base' },
    { name: 'shopl-assets' },
    { name: 'hada-assets' },
    { name: 'eslint-plugin'},
    { name: 'extension'},
    { name: 'templates' },
    { name: 'utils' }
  ],
  messages: {
    type: '커밋 유형을 선택해주세요',
    scope: '변경된 패키지를 선택해주세요',
    subject: '(필수) 변경사항을 한줄로 요약해주세요.\n',
    body: '(선택)변경사항을 상세히 입력해주세요. 없다면 엔터를 눌러주세요.\n',
    footer: '(선택)이슈번호를 입력해주세요. (예: #SHP-1234) 없다면 엔터를 눌러주세요.\n',
    confirmCommit: '이대로 커밋하시겠습니까?'
  },
  subjectLimit: 100,
  skipQuestions: ['breaking'],
  allowCustomScopes: false,
  allowEmpty: ['body','footer'],
  disableSubjectLowerCase: true,
  skipEmptyScopes: true,
    // 모든 메시지에 대해 빈 값 허용
  allowEmptyScopes: true,
  allowEmptyBody: true,
  // footer 설정
  allowEmptyFooter: true,
  footerPrefix: 'close.',
};