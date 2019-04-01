<template>
  <div class="container">
    <p v-if="error.statusCode === 404">ページが見つかりません</p>
    <p v-else>エラーが発生しました</p>
    <nuxt-link to="/">ホーム</nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['error'],
  layout: 'blog' // エラーページ用のカスタムレイアウトを指定できます
}
</script>
