import { storiesOf } from '@storybook/vue'
// import AppLogo from '@/components/AppLogo.vue'
import AppLogo from '../components/AppLogo.vue'

storiesOf('Button', module)
  .add('default', () => ({
    components: { AppLogo },
    template: `<AppLogo />`
  }))
  .add('txt', () => ({
    components: { AppLogo },
    template: `<AppLogo />`
  }))
