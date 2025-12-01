# Prettier Import 정렬 설정 가이드

## 1. VSCode 확장 설치

VSCode에서 Prettier 확장을 설치하세요:
- 확장 ID: `esbenp.prettier-vscode`
- 또는 VSCode 확장 마켓플레이스에서 "Prettier - Code formatter" 검색

## 2. 이미 설치된 패키지

이 프로젝트에는 이미 다음 패키지가 설치되어 있습니다:

```json
{
  "devDependencies": {
    "prettier": "^3.7.3",
    "@trivago/prettier-plugin-sort-imports": "^6.0.0",
    "prettier-plugin-tailwindcss": "^0.6.13"
  }
}
```

## 3. Prettier 설정 (`.prettierrc`)

Import 정렬 규칙이 다음과 같이 설정되어 있습니다:

```json
{
  "plugins": [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss"
  ],
  "importOrder": [
    "^react$",                    // 1. react
    "^react-(.*)$",              // 2. react-dom 등
    "^@tanstack/(.*)$",          // 3. @tanstack 라이브러리
    "<THIRD_PARTY_MODULES>",     // 4. 기타 외부 라이브러리
    "^@/(.*)$",                  // 5. @/ 절대경로
    "^[./]"                      // 6. 상대경로 (./, ../)
  ],
  "importOrderSeparation": true,        // 그룹 사이 빈 줄
  "importOrderSortSpecifiers": true     // import 내부도 정렬
}
```

## 4. VSCode 설정 (`.vscode/settings.json`)

프로젝트에 이미 설정되어 있습니다:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

## 5. 사용 방법

### 자동 정렬 (권장)
- 파일을 저장 (`Ctrl + S`)하면 자동으로 import가 정렬됩니다

### 수동 정렬
```bash
# 특정 파일
npx prettier --write src/components/todo-list/todo-editor.tsx

# 전체 프로젝트
npx prettier --write "src/**/*.{ts,tsx}"
```

## 6. 정렬 예시

### 정렬 전
```typescript
import { Button } from "../ui/button";
import { createTodo } from "@/api/create-todo";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
```

### 정렬 후
```typescript
import { useState } from "react";

import { useMutation } from "@tanstack/react-query";

import { createTodo } from "@/api/create-todo";

import { Button } from "../ui/button";
```

## 7. 커스터마이징

`.prettierrc` 파일의 `importOrder` 배열을 수정하여 원하는 순서로 변경할 수 있습니다:

```json
{
  "importOrder": [
    "^react$",
    "^next",
    "^@/lib/(.*)$",      // @/lib을 먼저
    "^@/components/(.*)$",
    "^@/(.*)$",
    "^[./]"
  ]
}
```

## 문제 해결

### Prettier가 작동하지 않을 때
1. VSCode 재시작 또는 창 다시 로드 (`Ctrl+Shift+P` → "Reload Window")
2. Prettier 확장 설치 확인
3. 명령어로 수동 실행하여 테스트:
   ```bash
   npx prettier --write src/your-file.tsx
   ```
