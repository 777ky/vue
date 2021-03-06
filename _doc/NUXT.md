# nuxtの各ディレクトリについての説明
* /store/
このディレクトリにはVuex Storeファイルが含まれています。
Vuex StoreオプションはNuxt.jsフレームワークに実装されています。
このディレクトリにindex.jsファイルを作成すると、フレームワークのオプションが自動的に有効になります。

ドキュメント内のこのディレクトリの使用法に関する詳細情報：
https://nuxtjs.org/guide/vuex-store

**このディレクトリは必須ではありません。使用したくない場合は削除できます。**

* /static/
このディレクトリには静的ファイルが含まれています。
このディレクトリ内の各ファイルは/にマッピングされています。

例：/static/robots.txtは/robots.txtとしてマッピングされています。

ドキュメント内のこのディレクトリの使用法に関する詳細情報：
https://nuxtjs.org/guide/assets#static

**このディレクトリは必須ではありません。使用したくない場合は削除できます。**

* /plugins/
このディレクトリには、ルートのvue.jsアプリケーションをインスタンス化する前に実行したいJavascriptプラグインが含まれています。

ドキュメント内のこのディレクトリの使用法に関する詳細情報：
https://nuxtjs.org/guide/plugins

**このディレクトリは必須ではありません。使用したくない場合は削除できます。**

* /pages/
このディレクトリにはアプリケーションビューとルートが含まれています。
フレームワークはこのディレクトリ内のすべての.vueファイルを読み込み、あなたのアプリケーションのルータを作成します。

ドキュメント内のこのディレクトリの使用法に関する詳細情報：
https://nuxtjs.org/guide/routing

* /layouts/
このディレクトリにはアプリケーションのレイアウトが含まれています。

ドキュメント内のこのディレクトリの使用法に関する詳細情報：
https://nuxtjs.org/guide/views#layouts

**このディレクトリは必須ではありません。使用したくない場合は削除できます。**

* /components/
componentsディレクトリにはVue.jsコンポーネントが含まれています。
Nuxt.jsはこれらのコンポーネントをスーパーチャージしません。

**このディレクトリは必須ではありません。使用したくない場合は削除できます。**

* /assets/
このディレクトリには、LESS、SASS、JavaScriptなどの未コンパイルのアセットが含まれています。

ドキュメント内のこのディレクトリの使用法に関する詳細情報：
https://nuxtjs.org/guide/assets#webpacked

**このディレクトリは必須ではありません。使用したくない場合は削除できます。**

* /middleware/
このディレクトリにはアプリケーションミドルウェアが含まれています。
ミドルウェアを使用すると、ページまたはページのグループ（レイアウト）をレンダリングする前に実行するカスタム関数を定義できます。

ドキュメント内のこのディレクトリの使用法に関する詳細情報：
https://nuxtjs.org/guide/routing#middleware

**このディレクトリは必須ではありません。使用したくない場合は削除できます。**