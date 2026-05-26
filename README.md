# BuddyDrop 🌿

StudyBuddy의 릴리즈 노트 사이트예요.  
새로운 업데이트를 메시지 형식으로 확인할 수 있어요.

## 기술 스택

- **Next.js 15** (App Router, ISR)
- **Tailwind CSS**
- **Supabase** (PostgreSQL)
- **Vercel** (배포)

## 화면 구성

| 페이지 | 설명 |
|--------|------|
| `/` | 릴리즈 버전 목록 |
| `/releases/[version]` | 버전별 상세 릴리즈 노트 (채팅 버블 형식) |

## 로컬 실행

```bash
npm install
npm run dev
```

`.env.local` 파일을 프로젝트 루트에 생성해주세요.

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## DB 스키마

**releases**

| 컬럼 | 타입 |
|------|------|
| id | uuid |
| version | text (unique) |
| date | date |
| summary | text |
| tag | text (`latest` \| `stable` \| `legacy`) |
| published | boolean |

**release_messages**

| 컬럼 | 타입 |
|------|------|
| id | uuid |
| release_id | uuid (→ releases.id) |
| type | text (`announce` \| `feature` \| `fix` \| `improvement`) |
| text | text |
| detail | text |
| order | int2 |

## 릴리즈 노트 추가 방법

Supabase 대시보드에서 `releases` → `release_messages` 테이블에 직접 insert하고 `published = true`로 설정하면 60초 이내에 사이트에 반영돼요.
