<script setup lang="js">
const education = [
  {
    degree: 'PG-DAC',
    institute: 'Centre for Development of Advanced Computing (CDAC), Delhi',
    year: 2013,
  },
  {
    degree: 'Bachelor of Computer Science Engineering',
    institute: 'Maharshi Dayanand University, Haryana',
    year: 2012,
  },
  {
    degree: 'High Secondary School (Science, Mathematics & Computer Science)',
    institute: 'Ebenezer Matriculation Higher Secondary School, Tamil Nadu',
    year: 2008,
  },
];

const achievements = [
  'DB2 Training (IBM): Completed a 3-month training program in DB2, focusing on database management and optimization techniques.',
  'HTML & Web Fundamentals (Oxford Computer Academy): Completed 6 weeks of training in HTML and Web Development fundamentals.',
  'Java Training (Informatics Computer Education): Completed a 4-week training program in Java programming.',
  'Java Internship (J.K Technologies Pvt. Ltd.): Undertook a 6-week internship in Java development.',
  'PHP & PHP++ Training (MultiSoft Systems): Completed 6 months of training in PHP and PHP++.',
  'PHP Internship (Matrix Infosys): Engaged in a 3-month PHP internship focused on real-world web application development.',
];

const certifications = [
  'Infinite Cloud Foundation: Covered key concepts in AWS, GCP, and Microsoft Azure.',
  'Certified Kubernetes Professional: Certified by Infinite Certified Kubernetes Association.',
  'Red Hat Certified: Proficient in Red Hat 7/8 Linux administration.',
  "Best Performer of the Month (Sep'22): Recognized for outstanding contributions.",
  "Spark Award (Q2, Jul'22 - Sep'22): Awarded for exceptional quarterly performance.",
];
</script>

<template>
  <div
      class="w3-container w3-dark-grey w3-border w3-border-blue w3-round w3-padding-large w3-animate-opacity"
      style="margin-top: 120px; max-width: 900px; margin-left: auto; margin-right: auto;"
  >
    <div class="w3-center w3-margin-bottom">
      <h1 class="w3-xxxlarge w3-text-blue">Education & Certifications</h1>
    </div>

    <!-- Education Section -->
    <div class="w3-margin-bottom">
      <h3 class="w3-text-light-grey">Education</h3>
      <ul class="entry-list">
        <li v-for="(item, index) in education" :key="index">
          <strong>{{ item.degree }}</strong><br/>
          <span class="institution">{{ item.institute }} | {{ item.year }}</span>
        </li>
      </ul>
    </div>

    <!-- Achievements -->
    <div class="w3-margin-bottom">
      <h3 class="w3-text-light-grey">Industrial Achievements</h3>
      <ul class="entry-list">
        <li v-for="(item, index) in achievements" :key="'a-' + index">{{ item }}</li>
      </ul>
    </div>

    <!-- Certifications -->
    <div class="w3-margin-bottom">
      <h3 class="w3-text-light-grey">Certifications</h3>
      <ul class="entry-list">
        <li v-for="(item, index) in certifications" :key="'c-' + index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.entry-list {
  padding-left: 20px;
  color: #ccc;
  line-height: 1.6;
  margin: 0;
}

.entry-list li::marker {
  color: #66ccff;
}

.institution {
  font-style: italic;
  color: #aaa;
}
</style>
