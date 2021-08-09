# nuxtjs-firebase-template

## 使い方

1. クローン
1. Firebase Project 作る
1. Project ID を .firebaserc の default にセット
1. hosting/app/plugins/firebase.js の config をセット
1. dev する

## 設定済み項目

### Nuxt.js

- 言語: js
- UI フレームワーク: Vuetify.js
- ライブラリ
  - firebaseui
  - lodash
  - luxon
  - uuid
  - vuexfire
- middleware
  - Firebase Auth ログインしてなかったら/login にリダイレクト （コメントアウトしてるけど）
- dark: false
- ssr: false

### Firebase

- Hosting
  - /hosting/app/dist をみるようにしてる
- Firestore
  - indexes と rules 用意してる
