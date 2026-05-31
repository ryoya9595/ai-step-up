# AIステップアップ教材

手を動かしながら、AIを"使える"ようになるための5ステップ実践教材です。

## 5つのステップ

| STEP | テーマ | 使うAI |
|------|--------|--------|
| ① | 画像生成 | ChatGPT / Gemini など |
| ② | 動画生成 | Gemini / Google Flow |
| ③ | スライド作成 | ChatGPT / Gemini など |
| ④ | スキル作成 | Codex / Claude Code |
| ⑤ | ツール作成 | Codex / Claude Code |

①→③でAIに「作ってもらう」体験、④→⑤で自分用の「仕組みを作る」体験へとステップアップしていきます。

## 構成

```
ai-step-up-kyozai/
├── index.html          1ページ完結（目次＋5ステップ）
├── styles.css          スタイル
├── script.js           プロンプトのコピーボタン
└── genko/              原稿（Markdown・編集用ソース）
```

- 静的サイト（HTML/CSS/JS のみ・フレームワーク不要）
- 1ページ完結型。上部の目次から各ステップへジャンプ
- プロンプト例はワンクリックでコピー可能
- スマホ表示に対応

## ローカルで確認する

任意の静的サーバーで開けます。例：

```bash
npx serve ai-step-up-kyozai
# または
cd ai-step-up-kyozai && python3 -m http.server 8000
```

## GitHub Pages で公開する

1. このフォルダをGitHubリポジトリにpush
2. リポジトリの **Settings → Pages**
3. **Source** を `main` ブランチ・`/ (root)` に設定して保存
4. 数分後、発行されたURLで公開される

> 内容を直すときは `genko/` のMarkdownを正として編集し、HTMLに反映する運用がおすすめです。
