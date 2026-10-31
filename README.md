# 织记支持网站 / KnitMemo Support

KnitMemo 的中英文支持与隐私政策静态网站，仅包含网站文件。
Bilingual support and privacy pages for KnitMemo. This repository contains website files only.

- 中文支持 / Chinese support: https://beholder91.github.io/knitmemo-support/
- English support: https://beholder91.github.io/knitmemo-support/en.html
- 中文隐私政策 / Chinese privacy policy: https://beholder91.github.io/knitmemo-support/privacy.html
- English privacy policy: https://beholder91.github.io/knitmemo-support/privacy-en.html
- 反馈 / Feedback: https://github.com/beholder91/knitmemo-support/issues

## 自动发布 / Automatic deployment

GitHub Pages 从 `main` 分支根目录自动发布。每次推送到 `main` 后，Pages 自动更新。
GitHub Pages deploys automatically from the root of `main` after each push.
The `.nojekyll` file keeps the plain HTML and CSS unchanged during deployment.

## 本地预览 / Local preview

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```
