<template>
  <div>
    <a v-link="{ path: '/foo'}">go foo</a>
    <a v-link="{ path: '/hello'}">go hello</a>
    <a v-link="{ path: '/ip'}">my ip</a>
    <router-view></router-view>
  </div>
</template>
