<script setup lang="js">
const navLinks = [
  {label: 'Education', href: 'education'},
  {label: 'Projects', href: 'projects'},
  {label: 'Skills', href: 'skills'},
  {label: 'Experience', href: 'experience'},
  {label: 'Hero', href: 'hero'},
];
</script>

<template>
  <div
      class="w3-top w3-padding w3-leftbar w3-rightbar w3-card w3-round w3-dark-grey w3-border w3-border-blue w3-section"
      style="width: calc(100vw - 32px);"
  >
    <div class="w3-bar w3-section">
      <router-link
          to="/hero"
          class="w3-bar-item w3-button w3-bold w3-hover-none w3-hover-text-blue"
      >
        JG
      </router-link>

      <router-link
          v-for="(link, index) in navLinks"
          :key="index"
          :to="'/' + link.href"
          class="w3-bar-item w3-button w3-bold w3-right w3-margin-right w3-hover-none w3-hover-text-blue"
      >
        {{ link.label }}
      </router-link>
    </div>
  </div>
</template>
