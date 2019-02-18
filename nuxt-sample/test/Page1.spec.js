// asyncのテストに必要
import 'babel-polyfill'
import { mount,createLocalVue,shallowMount }
from '@vue/test-utils'
import Vuex from 'vuex'
import Page1 from '@/pages/page1/'

// import * as Store from '@/store'
import Store from '@/store/counter'

import { cloneDeep } from 'lodash'

import axios from 'axios'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Page1/index.vue', () => {
  let wrapper
  let store
  let counter
  let count
  let String
  beforeEach(() => {
    counter = {
      namespaced: true
    }
    store = new Vuex.Store({
      modules: {
        counter
      }
    })
    wrapper = mount(Page1, {
      store: store,
      localVue
    })
    counter = {
      count: 10,
      result:[]
    }
    store.replaceState({ counter: counter})

    console.log(store.state.counter)
  })

  // 「+」ボタンのクリックテスト
  // it('commits "increment" when "+" button is clicked', function() {
  //   const wrapper = shallowMount(Page1, {
  //     store,
  //     localVue
  //   });
  //   // wrapper.find(".plus-button").trigger("click");
  //   // expect(mutations.increment).toHaveBeenCalled();
  // });

  test('count=10であること', () => {
    // const p = wrapper.find('p')
    const p = wrapper.find('.cnt')
    console.log(p.text())
    expect(p.text()).toBe('count=10')
  })

})
