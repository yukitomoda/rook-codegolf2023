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
