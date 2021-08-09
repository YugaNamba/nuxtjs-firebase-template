<template>
  <FirebaseAuth />
</template>

<script>
import FirebaseAuth from '@/components/FirebaseAuth'

export default {
  name: 'Login',
  components: {
    FirebaseAuth,
  },
  layout: 'no-menu',
  head() {
    return {
      title: this.getPageTitle(),
    }
  },
  methods: {
    getPageTitle() {
      return 'ログイン'
    },
  },
}
</script>
