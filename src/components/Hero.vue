<script setup lang="js">
const name = 'Jeetendra Gupta';
const title = 'Python Backend & API Developer';
const location = 'Gorakhpur, Uttar Pradesh, 273412';
const phone = '+91 9555613730';
const email = 'jeetendra29gupta@gmail.com';

const socialLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/jeetendra29gupta/',
    icon: `${import.meta.env.BASE_URL}images/github.png`,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jeetendra29gupta/',
    icon: `${import.meta.env.BASE_URL}images/linkedin.png`,
  },
];
</script>

<template>
  <div
      class="w3-panel w3-padding w3-dark-grey w3-border w3-border-blue w3-round w3-animate-opacity"
      style="margin-top: 120px; max-width: 900px; margin-left: auto; margin-right: auto;"
  >
    <!-- Header -->
    <div class="w3-center w3-animate-top">
      <h1 class="w3-xxxlarge w3-text-blue">{{ name }}</h1>
      <h5 class="w3-large">{{ title }}</h5>
      <p>{{ location }}</p>
      <p>
        <a :href="`tel:${phone}`" class="w3-hover-text-blue">{{ phone }}</a> |
        <a :href="`mailto:${email}`" class="w3-hover-text-blue">{{ email }}</a>
      </p>

      <!-- Social Buttons -->
      <div class="w3-margin-top">
        <a
            v-for="(link, index) in socialLinks"
            :key="index"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="w3-button w3-blue w3-margin-right w3-round"
        >
          <img :src="link.icon" :alt="link.label" style="width: 20px; height: 20px; vertical-align: middle;"/>
          <span class="w3-margin-left">{{ link.label }}</span>
        </a>
      </div>
    </div>

    <!-- Objective -->
    <div class="w3-margin-top">
      <h3 class="w3-text-light-grey">Objective</h3>
      <p>
        With 9 years of experience as a Python backend developer, I have honed my skills in developing online
        applications, REST APIs, backend services, and automating tasks. Throughout my career, I have contributed to
        increasing income, enhancing security, improving system performance, and boosting user engagement, all while
        reducing software release schedules, bugs, and operating expenses. Proficient in various software libraries and
        frameworks such as Flask, FastAPI, JavaScript, HTML, CSS, and microservices architecture, I excel in tasks
        related to automation, continuous integration, and Python programming.
      </p>
    </div>
  </div>
</template>

<style scoped>
.link {
  color: #66ccff;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

p {
  color: #ccc;
  line-height: 1.6;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
