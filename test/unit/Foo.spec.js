/* global describe, it, expect */

import Vue from 'vue'
import Foo from 'src/components/Foo'

describe('Foo.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><Foo></Foo></div>',
      components: { Foo }
    }).$mount()
    expect(vm.$el.querySelector('.hello h1').textContent).toBe('foo function')
  })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vue-loader-example/blob/master/test/unit/a.spec.js#L24-L49
