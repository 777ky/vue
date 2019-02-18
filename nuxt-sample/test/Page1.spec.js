// asyncのテストに必要
import 'babel-polyfill'
import { mount,createLocalVue,shallowMount,shallow }
from '@vue/test-utils'
import Vuex from 'vuex'
import Page1 from '@/pages/page1/'
import Store from '@/store/counter'

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
      namespaced: true,
      actions: {
        addCount: jest.fn(),
        setInit: jest.fn(),
        setData: jest.fn()
      },
      state:{
        count:10,
        result:[]
      },
      mutations:{
        addCount: jest.fn(),
        setInit: jest.fn(),
        setData: jest.fn()
      },
      // getters: {
      //   getComponent: () => '',
      //   getButton: () => ''
      // }
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
    // counter = {
    //   count: 0,
    //   result:[]
    // }
    // store.replaceState({ counter: counter})
    // console.log(store.state.counter)
    console.log(counter.count);
  })

  test('count=10であること', () => {
    const p = wrapper.find('.cnt')
    // console.log(p.text())
    expect(p.text()).toBe('count=10')
  })

  // 「+」ボタンのクリックテスト
  it('「+」ボタンのクリックでaddCountが呼び出されること', () =>{

    // expect(wrapper.find('.cnt').text()).toContain('count=0')

    wrapper.find(".add-btn").trigger("click");
    // console.log(counter.actions.addCount)
    expect(counter.actions.addCount).toHaveBeenCalled()

    // expect(wrapper.find('.cnt').text()).toContain('count=1')

  });

  it('matches snapshot', () => {
    // const items = ['item 1', 'item 2']
    // const wrapper = shallowMount(List, {
    //   propsData: { items }
    // })
    // const wrap = shallowMount(AppLogo)
    expect(wrapper.html()).toMatchSnapshot()
  })


})
