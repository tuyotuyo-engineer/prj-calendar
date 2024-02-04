## ドキュメント

- 要件定義書：[GitHub](./docs/RequirementsSpecification.md) ｜ [GoogleDocument](https://docs.google.com/document/d/1Z_xePO8Ormkt-a593q90Z_LYZ52GumZ8o9ummuylciQ/edit#heading=h.f73zjmkjrrad)

- 設計書：[GoogleDocument](https://docs.google.com/spreadsheets/d/1tATHOS9lzNq1cT6DitKWv5nRXyHaQFoAtHyOEfL3eDU/edit#gid=1957381726)

- タスク管理：[GitHub Project](https://github.com/orgs/tuyotuyo-engineer/projects/3)

- UI/UX デザイン：[Figma](https://www.figma.com/file/tdjImialhQCRy7HLvra4ZE/prj-calendar?type=design&node-id=0%3A1&mode=design&t=tCMQuHPHwUluamcK-1)

## バックエンド開発コマンド

```bash
NestJS CLI コマンドリファレンス
nest g mo [name] // モジュール作成コマンド
nest g co [name] // コントローラー作成コマンド
nest g s [name] // サービス作成コマンド
```

# docker 環境構築

```
git clone https://github.com/tuyotuyo-engineer/prj-calendar.git
cd prj-calendar
```

### backend

```
docker-compose run backend bash
npm install -g @nestjs/cli
npm install

※（コンテナ内でバージョン確認）
node -v
  → v18.17.1
npm -v
  → 9.6.7
nest -v
  → 10.3.0

コンテナぬける
exit
```

### frontend

```
docker-compose run frontend bash
npm install

※（コンテナ内でバージョン確認）
node -v
  → v18.17.1
npm -v
  → 9.6.7

コンテナぬける
exit
```

### コンテナ起動

```
docker-compose up
```

- backend アクセス
  loclahost:3000
- frontend アクセス
  loclahost:4000

# モジュールの追加や CLI を使用する場合

```
コンテナ内でnestコマンドでコントローラなど作成
docker-compose exec backend bash

コンテナ内で各種インストール
docker-compose exec frontend bash
```

## 開発ルール

### 各種ルール
- コンポーネントは`Chat.tsx`の様にする
- exportは名前付きで行う
- 型定義はtypeで定義する
- 基本的には空タグは`<>`で記述しkeyを使用する場合などに`Fragment`を使用する
- 全角スペースは使用禁止
- ネストは2階層まで
