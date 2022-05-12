<script setup>
  import { RouterView, RouterLink } from "vue-router";
  import {useGuardianStore} from "./stores/counter";
  const store=useGuardianStore();
</script>
<template>
  <pv-toolbar class="bg-primary text-white rounded-none" >
    <template #start>
      <span class="mr-1">SafeteeCall by Safeteefy.io</span>
      <div class="space-x-1">
        <RouterLink to="/home" class="text-white underline-none">
          Home
        </RouterLink>
        <RouterLink
          v-if="!!store.$state['id']"
          :to="`/guardians/${store.$state['id']}/urgencies`"
          class="text-white underline-none">
          Urgencies
        </RouterLink>

      </div>
    </template>

    <template #end>
      <span v-if="!!store.$state['id']">
        {{store.$state["username"]}}
      </span>
    </template>
  </pv-toolbar>
  <main class="p-1">
    <RouterView />
  </main>
</template>

<style>
@import "../../Safeteefy-vue/src/assets/base.css";
</style>
