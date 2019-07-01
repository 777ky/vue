# storybookでコンポーネントを管理する

[storybook](https://storybook.js.org/basics/guide-vue/)
```
$ yarn add --save @storybook/vue
$ yarn add --save babel-loader vue-loader vue-template-compiler @babel/core babel-preset-vue
```

## 9001ポートでstorybookを立ち上げる例
``` [package.json]
{
  "scripts": {
    "storybook": "start-storybook -p 9001 -c .storybook"
  }
}
```
```
$ yarn storybook
```
http://localhost:9001/で確認する

## config例 
``` [.storybook/config.js]
import { configure } from '@storybook/vue';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
function loadStories() {
  require('../stories');
}
configure(loadStories, module);
```

## storyの記述例
``` [stories/hello.js]
import { storiesOf } from '@storybook/vue'
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
```

``` [stories/index.js]
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import './hello'
```

