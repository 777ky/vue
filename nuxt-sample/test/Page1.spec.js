// asyncのテストに必要
import 'babel-polyfill'
import { mount,createLocalVue,shallowMount,shallow }
from '@vue/test-utils'
import Vuex from 'vuex'
import Page1 from '@/pages/page1/'
// import Store from '@/store/counter'
import {state,mutations,actions} from '@/store/counter'

// ミューテーションの分割束縛
const { addCount } = mutations


import axios from 'axios'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Page1/index.vue', () => {
  let counter
  let store
  let wrapper

  // let count
  // let String

  beforeEach(() => {
    counter = {
      namespaced: true,
      state,
      // state:{
      //   count:0,
      //   result:[]
      // },
      mutations:{
        addCount: jest.fn(),
        setInit: jest.fn(),
        setData: jest.fn()
      },
      actions: {
        addCount: jest.fn(),
        setInit: jest.fn(),
        setData: jest.fn()
      }
    }

    store = new Vuex.Store({
      modules: {
        counter
      }
    })

    wrapper = shallowMount(Page1, {
      store,
      localVue
    })
  })

  it('初期のテキストはcount=0であること', () => {
    const p = wrapper.find('.cnt')
    expect(p.text()).toBe('count=0')
  })

  it('「+」ボタンのクリックでaddCountが呼び出されること', () =>{
    // console.log(store.state.counter)
    // console.log(actions.addCount)
    // console.log(counter.actions.addCount)

    wrapper.find(".add-btn").trigger("click");
    // TODO:なんとなくだけど、functionがコールされたかどうかはモックをつくって確認するっぽい？
    expect(counter.actions.addCount).toHaveBeenCalled()
  });

  it('mutations addCountが呼び出されるとcountの値が1になること', () => {
    // store.commit('counter/addCount')
    addCount(store.state.counter)
    expect(store.state.counter.count).toBe(1)
  })

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  // TODO:actionのaddCountをdispatchしたい
  // it('mutations addCountが呼び出されるとcountの値が1になること', () => {
  //   store.dispatch('counter/addCount')
  //   console.log(store.state.counter.count)
  //   expect(store.state.counter.count).toBe(1)
  // })

})
