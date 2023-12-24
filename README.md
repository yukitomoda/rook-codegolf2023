# Rook Code Golf 2023

## 開発者向け

### 開発環境構築

- Node.js 18.xをインストール
- `npm ci`
- `npm run dev`

### 静的解析 + コードフォーマット

VSCodeを使用して推奨拡張機能をインストール済みの場合、保存時に自動でフォーマットされるようにしています

```sh
npm run lint
npm run format
```

チェックのみにする場合:

```sh
npm run lint:check
npm run format:check
```

### 各ブランチの説明

- master: 開発の最新。
- gh-pages: 外部に公開するサイト（のソース）。ここを更新（masterからマージ）するとサイトが外部に公開されるようにしています。

### 開発するときのブランチ運用

masterから新しくブランチを切って開発し、masterへのプルリクエストを出してください。
プルリクエスト作成時にformatter, linterによるチェックとwebpackのビルド（バンドル）のチェックが行われるので、事前にチェックが通るようにしておいてください。

### ファイル追加のてびき

#### 画像

1. `src/` 以下に追加する
2. `index.html` で参照する

#### JavaScript, Sass

1. `src/` 以下に追加する
2. `index.js` でインポートする

#### npm パッケージ

1. `npm i -D {package-name}` で追加する
2. JavaScriptでインポート、使用する
