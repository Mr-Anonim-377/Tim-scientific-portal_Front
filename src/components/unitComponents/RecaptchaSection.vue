<template>
  <div
      id="g-recaptcha"
      class="g-recaptcha"
      :data-sitekey="sitekey">
  </div>
</template>

<script>
export default {
  name: "RecaptchaSection",
  data () {
    return {
      sitekey: '6Lex4mcaAAAAAOFAD17jDblINvr3grQE4f7Sa1oP',
      widgetId: 0
    }
  },
  methods: {
    execute () {
      window.grecaptcha.execute(this.widgetId)
    },
    reset () {
      window.grecaptcha.reset(this.widgetId)
    },
    render () {
      if (window.grecaptcha) {
        this.widgetId = window.grecaptcha.render('g-recaptcha', {
          sitekey: this.sitekey,
          size: 'visible',
          // the callback executed when the user solve the recaptcha
          callback: (response) => {
            // emit an event called verify with the response as payload
            this.$emit('verify', response)
            // reset the recaptcha widget so you can execute it again
            this.reset()
          }
        })
      }
    }
  },
  mounted () {
    // render the recaptcha widget when the component is mounted
    this.render()
  }
}
</script>

<style scoped>
</style>