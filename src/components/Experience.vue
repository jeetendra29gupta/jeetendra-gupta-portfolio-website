<script setup lang="js">
const experiences = [
  {
    title: 'Senior Python Backend Developer',
    company: 'NTT Data Business Solutions',
    period: 'July 2024 – Present',
    responsibilities: [
      'Automated GCP File System Backup and Restore using Python subprocess and Linux commands.',
      'Implemented automated backup testing using Python Behave Framework.',
      'Automated GCP VM Snapshot Management using GCP SDK and gcloud CLI.',
      'Created "Snappy Detect" tool to identify cloud provider, OS, databases, and services with JSON export.',
    ],
  },
  {
    title: 'Senior Python Backend Developer',
    company: 'Iora Ecological Solutions Pvt. Ltd.',
    period: 'October 2023 – June 2024',
    responsibilities: [
      'Built SDG Monitoring Dashboard for Assam government.',
      'Maintained Iora Ecological Trust website.',
      'Consulted for SDG dashboard in Jammu & Kashmir.',
      'Built DRC environmental data visualization portal using Flask, Chart.js, and Leaflet.',
      'Developed Digital Carbon Toolbox using Flask and PostgreSQL.',
      'Contributed to GCP-Portal for Green Credit Program.',
      'Built data visualization tools for SLMC project using remote sensing and mapping dashboards.',
    ],
  },
  {
    title: 'Python Backend Developer',
    company: 'Jindal India Thermal Power Ltd',
    period: 'February 2023 – October 2023',
    responsibilities: [
      'Designed RESTful APIs with Flask and FastAPI.',
      'Created dynamic reporting modules using HTML, CSS, JS.',
      'Reviewed and debugged code for quality assurance.',
      'Set up CI/CD build and deployment pipelines.',
      'Optimized systems with Ansible and preventive maintenance.',
      'Mentored junior developers and promoted team collaboration.',
    ],
  },
  {
    title: 'Senior Software Developer',
    company: 'Infinite Computer Solutions',
    period: 'January 2022 – February 2023',
    responsibilities: [
      'Developed Python applications, monitoring tools, and reporting modules.',
      'Mentored new developers and fostered best practices.',
      'Diagnosed and fixed logic/coding errors.',
      'Integrated client feedback during development cycles.',
      'Collaborated with engineering teams for hardware-software integration.',
      'Created detailed technical documentation and training material.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'One97 Communications Ltd',
    period: 'May 2016 – January 2022',
    responsibilities: [
      'Developed Python app to monitor 1.8K servers and manage inventory.',
      'Worked across departments to develop scalable Python solutions.',
      'Communicated with stakeholders to align goals.',
      'Upgraded legacy systems to modern Python standards.',
      'Built scalable APIs for system integrations.',
    ],
  },
  {
    title: 'Network Support Engineer',
    company: 'Accel Frontline Services Ltd',
    period: 'July 2014 – May 2016',
    responsibilities: [
      'Installed and configured network/web/storage servers.',
      'Automated tasks with Python and generated database reports.',
      'Performed post-mortem analysis and documentation for failures.',
      'Resolved network issues promptly to ensure uptime.',
      'Supported wireless bridge network configurations.',
    ],
  },
];
</script>

<template>
  <div
      class="w3-container w3-dark-grey w3-border w3-border-blue w3-round w3-padding-large w3-animate-opacity"
      style="margin-top: 120px; max-width: 900px; margin-left: auto; margin-right: auto;"
  >
    <div class="w3-center w3-margin-bottom">
      <h1 class="w3-xxxlarge w3-text-blue">Work Experience</h1>
    </div>

    <div v-for="(job, index) in experiences" :key="index"
         class="w3-margin-bottom w3-padding w3-round w3-animate-right job-entry">
      <h3 class="w3-text-light-grey">{{ job.title }}</h3>
      <h5 class="w3-text-blue">{{ job.company }}</h5>
      <p class="job-period">{{ job.period }}</p>
      <ul class="job-tasks">
        <li v-for="(item, idx) in job.responsibilities" :key="idx">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.job-entry {
  background-color: #2c2c2c;
  border-left: 4px solid #2196F3;
}

.job-period {
  font-style: italic;
  color: #aaa;
  margin-bottom: 10px;
}

.job-tasks {
  padding-left: 20px;
  color: #ccc;
  line-height: 1.6;
}

.job-tasks li::marker {
  color: #66ccff;
}
</style>
