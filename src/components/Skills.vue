<script setup lang="js">
const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'JavaScript', 'Shell/Bash'],
  },
  {
    category: 'Frameworks',
    items: ['Flask', 'Fast API'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MariaDB', 'Redis', 'Sqlite3'],
  },
  {
    category: 'Cloud Platforms',
    items: ['AWS (EC2, S3, Lambda, API Gateway)', 'GCP (Storage, Compute)'],
  },
  {
    category: 'DevOps & Automation',
    items: ['Ansible', 'CI/CD', 'Shell/Bash Scripting'],
  },
  {
    category: 'API Technologies',
    items: ['REST API', 'JWT', 'Gunicorn/Uvicorn', 'Postman', 'GraphQL', 'Swagger', 'RESTful Services'],
  },
  {
    category: 'Version Control',
    items: ['Git (GitHub, Git Bash)', 'SVN'],
  },
  {
    category: 'Authentication & Security',
    items: ['JWT', 'OAuth2'],
  },
  {
    category: 'Operating Systems',
    items: ['Linux (Redhat, CentOS, Ubuntu)', 'Windows Desktop/Server'],
  },
  {
    category: 'Web Technologies',
    items: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    category: 'Tools',
    items: ['Apache', 'Nginx', 'Jenkins', 'Jira', 'Confluence'],
  },
  {
    category: 'Data Science & Machine Learning',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
  },
  {
    category: 'Containers & Orchestration',
    items: ['Docker', 'Kubernetes'],
  },
];
</script>

<template>
  <div
      class="w3-container w3-dark-grey w3-border w3-border-blue w3-round w3-padding-large w3-animate-opacity"
      style="margin-top: 120px; max-width: 900px; margin-left: auto; margin-right: auto;"
  >
    <div class="w3-center w3-margin-bottom">
      <h1 class="w3-xxxlarge w3-text-blue">Technical Skills</h1>
    </div>

    <div v-for="(skill, index) in skills" :key="index" class="skill-category w3-margin-bottom w3-animate-right">
      <h4 class="w3-text-light-grey">{{ skill.category }}</h4>
      <ul class="skill-list">
        <li v-for="(item, idx) in skill.items" :key="idx">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.skill-category {
  padding: 10px;
  background-color: #2c2c2c;
  border-left: 4px solid #2196F3;
  border-radius: 4px;
}

.skill-list {
  padding-left: 20px;
  color: #ccc;
  line-height: 1.6;
  margin-top: 5px;
  margin-bottom: 0;
}

.skill-list li::marker {
  color: #66ccff;
}
</style>
