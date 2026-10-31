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

## 网站设计 / Website design

网站使用 App 的浅紫、暖白与棕色文字，沿用圆体、小猫和毛线插画。
中英文页面均为静态 HTML；`site.js` 仅用于计数器演示及轻量入场动效，不保存或发送访问数据。
The site follows the app’s lavender, warm paper, rounded type, and original illustrations.
Both languages use static HTML. `site.js` powers a row-counter demo and light entrance motion without storing or sending visitor data.

### 字体 / Fonts

`assets/fonts/` 包含供本网站使用的寒蝉全圆体子集，已将字体家族重命名为 `KnitMemo Web Round`。原字体版权 © 2023 ChillType，按同目录的 SIL Open Font License 分发。
更新中文文案时需重新生成字体子集，覆盖新增字符。
The web fonts are subsets of ChillRoundF, renamed to `KnitMemo Web Round`, © 2023 ChillType, distributed under the included SIL Open Font License. Regenerate the subsets when adding Chinese characters.
