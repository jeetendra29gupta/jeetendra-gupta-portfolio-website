<script setup lang="js">
const projects = [
  {
    title: 'PayTM Server Monitoring Panel – EGL',
    overview: 'Developed a network management system to monitor 1.8K PayTM servers, optimizing server health and ensuring high availability.',
    responsibilities: [
      'Designed backend services using Python and Flask, integrating monitoring tools like Nagios and OpenNMS.',
      'Automated server health checks and hardware inventory tracking.',
      'Set up real-time alerts for critical events.',
      'Implemented automation for server maintenance and monitoring.',
    ],
  },
  {
    title: 'Docker Duck - Docker Monitoring Tool',
    overview: 'Built a Python-based Docker monitoring tool to track container health and improve lifecycle management.',
    responsibilities: [
      'Developed monitoring scripts using Python and Shell.',
      'Stored container data in PostgreSQL and visualized using Google Graph API.',
      'Implemented email alerts for container anomalies.',
      'Improved container orchestration and system reliability.',
    ],
  },
  {
    title: 'Nokia IMPACT 21/22 with MariaDB and Oracle',
    overview: 'Enhanced reporting capabilities and system monitoring tools to improve performance and alerting.',
    responsibilities: [
      'Built a custom reporting module for client SQL queries.',
      'Developed monitoring tools with Python and email escalation.',
      'Deployed Nokia IMPACT and MariaDB with Ansible.',
      'Integrated Nagios for continuous system health checks.',
    ],
  },
  {
    title: 'Shopify Marketplace Integration with Unicommerce',
    overview: 'Developed backend APIs for seamless data synchronization between Shopify and Unicommerce.',
    responsibilities: [
      'Implemented JWT-based authentication with FastAPI.',
      'Developed APIs for dispatch, payments, inventory, and shipments.',
      'Automated e-commerce operations to reduce manual effort.',
    ],
  },
  {
    title: 'Amala Earth Finance Module',
    overview: 'Created an automated finance system for seller payment tracking based on order deliveries.',
    responsibilities: [
      'Built a Python module for payout automation.',
      'Integrated with business logic for financial reporting.',
      'Used Pandas to generate Excel reports for reconciliation.',
    ],
  },
  {
    title: 'Remote Sensing & Mapping – Bioeconomy (DRC)',
    overview: 'Built geospatial data services for ecosystem mapping and conservation efforts.',
    responsibilities: [
      'Configured GIS servers using PostGIS and PostgreSQL.',
      'Developed Flask-based web app for geospatial visualization.',
      'Used Leaflet and Chart.js for interactive mapping.',
    ],
  },
  {
    title: 'GCP File System Backup and Restore Automation',
    overview: 'Automated file system backup/restore tasks on GCP to improve reliability and reduce manual effort.',
    responsibilities: [
      'Developed Python scripts using subprocess and GCP CLI.',
      'Streamlined disaster recovery with cloud storage integration.',
      'Reduced human error and ensured backup consistency.',
    ],
  },
  {
    title: 'Snappy Agent-Based File System Backup Testing',
    overview: 'Built automated tests for Snappy-based backup/restore to ensure system reliability.',
    responsibilities: [
      'Used Behave to write feature files and step definitions.',
      'Automated repetitive test tasks to save time.',
      'Integrated tests into CI pipelines.',
    ],
  },
  {
    title: 'Automated GCP VM Snapshot Management',
    overview: 'Automated snapshot management for GCP VMs to optimize backup and disaster recovery.',
    responsibilities: [
      'Used GCP SDK and gcloud CLI for snapshot automation.',
      'Implemented retention policies to control storage costs.',
      'Integrated notifications and error handling for reliability.',
    ],
  },
  {
    title: 'SAP Data Layer API Development',
    overview: 'Created role-based secure APIs to interact with SAP HANA and retrieve data based on user permissions.',
    responsibilities: [
      'Built RESTful APIs for SAP HANA data access.',
      'Implemented RBAC for data-level security.',
      'Collaborated with SAP teams to optimize performance.',
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
      <h1 class="w3-xxxlarge w3-text-blue">Selected Projects</h1>
    </div>

    <div v-for="(project, index) in projects" :key="index" class="project-block w3-margin-bottom w3-animate-right">
      <h3 class="w3-text-light-grey">{{ project.title }}</h3>
      <p class="overview">{{ project.overview }}</p>
      <ul class="responsibility-list">
        <li v-for="(task, idx) in project.responsibilities" :key="idx">{{ task }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.project-block {
  padding: 15px;
  background-color: #2c2c2c;
  border-left: 4px solid #2196F3;
  border-radius: 4px;
}

.overview {
  color: #ccc;
  font-style: italic;
  margin: 8px 0 5px;
}

.responsibility-list {
  padding-left: 20px;
  color: #ccc;
  line-height: 1.6;
  margin: 0;
}

.responsibility-list li::marker {
  color: #66ccff;
}
</style>
