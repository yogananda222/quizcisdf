const shuffle = arr =>
  arr.map(v => ({ v, s: Math.random() }))
     .sort((a, b) => a.s - b.s)
     .map(x => x.v);

const quizData = [
  {
    type: "mcq",
    question: "A CMDB Administrator is beginning the journey of populating the CMDB and needs to verify that any data which is no longer useful/applicable is removed.<br><br>Which governance management tool will accomplish this?",
    options: shuffle([
      "CI Class Manager",
      "CMDB and CSDM Data Foundations Dashboard",
      "CMDB Health Dashboard",
      "CMDB Data Manager",
      "De-duplication Templates"
    ]),
    answer: ["CMDB Data Manager"]
  },
  {
    type: "multiple",
    question: "What types of policies can be created within CMDB Data Manager?",
    options: shuffle(["De-duplication", "Archive", "Reconciliation", "Retire"]),
    answer: ["De-duplication", "Archive"]
  },
  {
    type: "multiple",
    question: "A CMDB Administrator wants to educate the team on the actions in the CMDB Workspace.<br><br>What actions can be initiated?",
    options: shuffle([
      "Execute ServiceNow Discovery",
      "Create a CMDB Data Manager certification policy",
      "Remediate duplicate CI records",
      "Create a new CMDB class"
    ]),
    answer: ["Execute ServiceNow Discovery", "Remediate duplicate CI records"]
  },
  {
    type: "mcq",
    question: "A CMDB Administrator changes the query for the SCCM Service Graph Connector.<br><br>What is the impact?",
    options: shuffle([
      "The Data Source for the SCCM Service Graph Connector will be marked Inactive.",
      "Any Scheduled Jobs for the SSCM Service Graph Connector will need to be configured.",
      "Any Updates for the SCCM Service Graph Connector will be skipped during the upgrade."
    ]),
    answer: ["Any Scheduled Jobs for the SSCM Service Graph Connector will need to be configured."]
  },
  {
    type: "match",
    question: `
      A CMDB Administrator seeks to understand the available tools for preventing,
      addressing, and remediating duplicate CIs.<br><br>
      <b>Drag and drop each feature with the corresponding outcome.</b><br>
      <i style='color: red;'>Some options may not apply</i>
    `,
    options: [
      "Certification Tasks",
      "CMDB Health Dashboard",
      "De-duplication Tasks",
      "De-duplication Templates",
      "Duplicate CI Remediator"
    ],
    answers: [
      { label: "Can be assigned to groups for resolving duplicate CIs", correct: "De-duplication Tasks" },
      { label: "Offers insight into duplicate CIs within the CMDB", correct: "CMDB Health Dashboard" },
      { label: "Offers a solution to resolve de-duplication tasks in bulk", correct: "De-duplication Templates" },
      { label: "Provides a wizard to resolve de-duplication tasks individually", correct: "Duplicate CI Remediator" }
    ]
  },
  {
    type: "mcq",
    question: "Using existing baseline Data Manager policies, what condition must a CI meet before it can be archived or deleted?",
    options: shuffle([
      "Be marked as inactive",
      "Be marked as critical",
      "Be retired and in end of life",
      "Be fully operational and in use"
    ]),
    answer: ["Be retired and in end of life"]
  },
  {
  type: "mcq",
  question: "A CSDM Data Manager needs metrics on the alignment of product models, locations, and business units with best practices. Which tab in the CSDM Data Foundations Dashboard provides this information?",
  options: [
    "Run",
    "Foundation",
    "Crawl",
    "Walk",
    "Fly"
  ],
  answer: ["Foundation"]
},
{
  type: "mcq",
  question: "User endpoint devices are imported into the CMDB and populate the 'Assigned to' [assigned_to] field on the Computer [cmdb_ci_computer] CI. The Asset team puts in a request for the Configuration Analysts to populate the 'Assigned to' field on the related Asset.<br> What action does a Configuration Analyst take to achieve this in an automated way?",
  options: [
    "Configure a business rule on the computer table to use a script to populate the 'Assigned to' field on the asset based on insert or update in the computer class 'Assigned to' field",
    "Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI",
    "Hide the 'Assigned to' field on the asset record and create a new field that dot walks to the related CI to get the 'Assigned to' value"
  ],
  answer: [
    "Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI"
  ]
},
{type:"mcq",
  question: "A CMDB Administrator is asked to clean up the CMDB duplicates. <br> What is the preferred way to manage this task?",
  options: [
    "My Tasks in the Application Navigator",
    "The de-duplication task module",
    "The de-duplication dashboard on the CMDB workspace"
  ],
  answer: [
    "The de-duplication dashboard on the CMDB workspace"
  ]
},
  {
    type: "mcq",
    question: "A CMDB Administrator wants to ensure all short-lived CIs that have not been discovered in the past week are removed. <br> After retiring the CI records, which recommended action does the CMDB Administrator take?",
    options: shuffle([
      "Create a delete policy",
      "Create a scheduled job",
      "Create a business rule"
    ]),
    answer: ["Create a delete policy"]
  },
    {
    type: "mcq",
    question: "A CMDB Administrator group aims to establish a process for receiving task notifications when the Support Group or Managed By Group fields are not populated for operational Linux servers stored in the CMDB. <br> Which ServiceNow modules can be leveraged to configure recommended fields and generate task records in cases where these fields are missing for Linux servers in the CMDB?",
    options: shuffle([
      "A Technical Service Offerings and Dynamic CI groups",
      "CMDB Workspace and Scheduled Jobs",
      "Dynamic CI groups and CMDB groups",
      "CI Class Manager and Health Preferences"
      
    ]),
    answer: ["CI Class Manager and Health Preferences"]
  },

    {
    type: "mcq",
    question: "A CMDB Administrator is asked to create a query using the CMDB Query Builder that displays all operational CIs belonging to a specific application service. <br> Which steps provide the deisred outcome?",
    options: shuffle([
      "1. Add the Business Application, Application Service, and Configuration Item classes to the canvas. <br> 2. Define a filter for the application service name and the operational status of the configuration items. <br> 3. Configure the relationship between the classes. <br> 4. Run the query.",
      "1. Add the Application Service and Configuration Item classes to the canvas. <br> 2. Configure the relationship between the classes. <br> 3. Define a filter for the application Service name and the operational status of the configuration items. <br> 4. Run the query.",
      "1. Add the Application Service and Configuration Item classes to the canvas. <br> 2. Configure the relationship between the classes. <br> 3. Add the Operational Status and Name fields as columns. <br> 4. Run the query."  
    ]),
    answer: ["1. Add the Application Service and Configuration Item classes to the canvas. <br> 2. Configure the relationship between the classes. <br> 3. Define a filter for the application Service name and the operational status of the configuration items. <br> 4. Run the query."]
  },
  {
  type: "multiple",
  question: "What is the value of using the CMDB in security operations?",
  options: shuffle([
    "Allows security team to assess and remediate an incident",
    "Enables audits and attestations across CIs",
    "Auto-resolves a vulnerability",
    "Identifies the IT Infrastructure with a vulnerability"
  ]),
  answer: ["Allows security team to assess and remediate an incident", "Identifies the IT Infrastructure with a vulnerability"]
  },

  {
    type: "mcq",
    question: "A CMDB Administrator needs to set a CI Class as a Principal Class. <br> Which CI Class Manager tab would need to be accessed?",
    options: shuffle([
      "Health > Attributes",
      "Class Info > Basic Info",
      "Class Info > Attributes"
      
    ]),
    answer: ["Class Info > Basic Info"]
  },

  {
    type: "mcq",
    question: "An Organization utilizes multiple data sources to update its CMDB, each assigned a different priority level. A high-priority data source is scheduled to update server records weekely. However, due to an intergration issue, the high-priority data source stops updating the records. <br> <br> Which configuration can be used to allow a lower-priority data source to update records after a specified period of inactivity from the higher-priority source?",
    options: shuffle([
      "Data Refresh Rules",
      "Health Inclusion Rules",
      "Identification Rules",
      "Reconciliation Rules"
    ]),
    answer: ["Data Refresh Rules"]
  },

  {
    type: "mcq",
    question: "A CMDB Administrator wants to leverage the Stalenss metric from the CMDB Health Dashaboard - Correctness Scorecard. <br> What is the default duration of this metric?",
    options: shuffle([
      "24 hours",
      "30 days",
      "7 days",
      "60 days"
    ]),
    answer: ["60 days"]
  },
  {
    type: "match",
    question: "Drag and drop the CMDB Health Dashboard metric in the description",
    options: [
      "Audit",
      "Duplicate",
      "Orphan",
      "Recommended",
      "Required",
      "Stale"
    ],
    answers: [
      {label: "CMDB records that represents the same physical or logical asset multiple times", correct: "Duplicate" },
      {label: "Fields necessary to create or update a CI record in the CMDB", correct:"Required"},
      {label: "CMDB records that no longer maintain their logical or physical relationships with their CIs", correct:"Orphan"},
      {label: "CMDB records that are no longer actively updated, but remain stored in the database", correct:"Stale"},
      {label: "Fields that support the accuracy, completeness, and usability of CI records in the CMDB", correct:"Recommended"},
      {label: "Actual values of specified fields are compared to the expected values defined in a template", correct:"Audit"}
    ]
  },
  {
  type: "multiple",
  question: "The CMDB Configuration Management team has successfully developed a healthy and trusted CMDB. They have integrated discovered infrastructure data, accurately referenced non-discoverable data (such as change and support group information), and made the CMDB service-aware using Service Mapping. <br><br> How will these improvements enhance the change management process?",
  options: shuffle([
    "Automatically schedules are deploys changes without human review or approval",
    "Provides insight into the potential impact of the change",
    "Ensures that no changes result in service downtime, regardless of planning or execution",
    "Enables auto population of the assignment group fiels to dynamically route changes"
  ]),
  answer: ["Provides insight into the potential impact of the change", "Enables auto population of the assignment group fiels to dynamically route changes"]
  },

{
  type: "match",
  question: "ServiceNow provides a suite of CMDB management tools designed to effectively ingest, manage, and maintain CIs and relationships.<br><br>Drag and drop the design architecture to its management tool.",
  options: [
    "Organization-built solution using transform maps",
    "Automated agent-based solution running patterns",
    "Automated agentless solution running patterns",
    "Third-party integrations from other vendors",
    "Pre-built store integration solutions that require minimal customization"
  ],
  answers: [
    {
      label: "Agent Client Collector",
      correct: "Automated agent-based solution running patterns"
    },
    {
      label: "Import Sets",
      correct: "Organization-built solution using transform maps"
    },
    {
      label: "Servie Graph Connector",
      correct: "Third-party integrations from other vendors"
    },
    {
      label: "ServiceNow Discovery",
      correct: "Automated agentless solution running patterns"
    }
  ]
},
  {
    type: "mcq",
    question: "A CMDB Administrator has a report in ServiceNow that lists all CMDB Services that do not have an owner and wants to use a ServiceNow Playbook. <br><br> What Governance process play can prevent this from recurring?",
    options: shuffle([
      "Make the field Managed by mandatory on all CIs",
      "Make the field Owned by mandatory",
      "Set a defalut value on the Service Owner field so that is never empty"
      
    ]),
    answer: ["Make the field Owned by mandatory"]
  },
  {
    type: "mcq",
    question: "A CMDB Administrator is creating technical documentation for stakeholders, which includes a list of attributes, Identification and Reconciliation Engine (IRE) rules, and suggested realtionships several classes. <br><br> Which Central location does the CMDB Administration use to collect this information?",
    options: shuffle([
      "CI Class Manager",
      "CMDB Data Manager",
      "CI Identifies",
      "CMDB Workspace"      
    ]),
    answer: ["CI Class Manager"]
  },
  {
    type: "mcq",
    question: "Where can a CMDB 360/Multisource CMDB Saved Query be viewed and created in the CMDB Workspace?",
    options: shuffle([
      "CMDB Query Builder",
      "Coverage window on the CMDB 360 tab",
      "Saved queries window on the CMDB 360 tab",
      "Saved querues window on the insights tab"
    ]),
    answer: ["Saved queries window on the CMDB 360 tab"]
  },
  {
  type: "multiple",
  question: "A CMDB Configuration Manager sets up the following data filter for a certification policy using CMDB Data Manager. <br> <ul> <li> Table : Server [cmdb_ci_server]</li> <li>Filter: Operating System | contains | Server OR Operating System | contains | Linux</li> </ul>  <br> which operating systems are affected by this policy?",
  options: shuffle([
    "AIX",
    "Windows Server 2022 Datacenter",
    "Linux CentOS",
    "Windows 2019 Datacenter"
  ]),
  answer: ["Windows Server 2022 Datacenter", "Linux CentOS"]
  },
  {
  type: "multiple",
  question: "A CMDB Administrator is comparing the Unified Map to the Service Mapping map. <br> What are additional capabilities of the Unified Map?",
  options: shuffle([
    "Visibility to an application and the host it is installed on",
    "Number of levels displayed on a map can be modified",
    "Map nodes can be filtered based on user preferences",
    "Map can be zoomed in and out"
  ]),
  answer: ["Number of levels displayed on a map can be modified", "Map nodes can be filtered based on user preferences"]
  },

  {
  type: "multiple",
  question: "Which default user groups are available when setting up a CMDB Data Manager policy and specifying the task assignment with the Assignment type set to 'User Group Field'?",
  options: shuffle([
    "Managed By Group",
    "Support Group",
    "Assignment Group",
    "Owned by Group"
  ]),
  answer: ["Managed By Group","Support Group"]
  },
  {
    type: "mcq",
    question: "A CMDB Administrator amis to utilize CSDM life cycle field mappings to better align with CSDM best practices. <br> What is the next step to take after selecting the Enable Life Cycle Sync button?",
    options: shuffle([
      "Fix the incorrect values in the Life Cycle Stage to match legacy values",
      "Activate the CSDM Life Cycle field mappings",
      "Resolve any incomplete field mappings identified in the Discrepancy Report"
      
    ]),
    answer: ["Resolve any incomplete field mappings identified in the Discrepancy Report"]
  },
  {
    type: "mcq",
    question: "The Configuration Management team finds value in the reports from CMDB 360/Multisource and wants to use it for all CI data. <br> Which must be true in order for CMDB 360/Multisource CMDB to be able to report on and analyze that data?",
    options: shuffle([
      "ServiceNow Discovery must be used to populate the CI data.",
      "Reconciliation rules with priorities must be configured",
      "The CI data must go through the IRE",
      "The CI data must be from an authorized Service Graph Connector"
    ]),
    answer: ["The CI data must go through the IRE"]
  },
{
  type: "mcq",
  question: "A CMDB Administrator wants to ensure that only relevant CIs from managed classes will be shown on Incident, Problem, and Change records. <br> <br> Which checkbox needs to be checked in the CI Class Manager for the CMDB Administrator to achieve the requested result?",
  options: shuffle([
    "Principal Class",
    "Independent",
    "Extensible",
    "Main Record"
  ]),
  answer: ["Principal Class"]
},
{
  type: "mcq",
  question: "Where can an administrator perform Natural Language Queries (NLQ)?",
  options: shuffle([
    "CMDB Health Dashboard",
    "CMDB Workspace",
    "CMDB Data Manager",
    "CI Class Manager"
  ]),
  answer: ["CMDB Workspace"]
},
{
  type: "mcq",
  question: "A Windows server is reclassified from the Server table [cmdb_ci_server] to the Windows Server table [cmdb_ci_win_server] when processed through the Identification and Reconciliation Engine (IRE). <br><br> Which process occurred?",
  options: shuffle([
    "Class Switch",
    "Class Change",
    "Class Upgrade",
    "Class Downgrade"
  ]),
  answer: ["Class Switch"]
},
{
  type: "multiple",
  question: "How do CMDB management tools and features within the CMDB governance pillar help organizations manage CIs and improve service delivery?",
  options: shuffle([
    "Assist integration choices",
    "Gain visibility and control",
    "Enhanced Service Management operations",
    "Reduced hardware costs"
  ]),
  answer: [
    "Gain visibility and control",
    "Enhanced Service Management operations"
  ]
},
 {
    type: "multiple",
    question: "A Configuration Manager wants to manager manually maintained data attribtues of CIs. <br> <br> Which group values are automatically synchronized on CIs using Technology Management Offerings (Technical Service Offerings) and dynamic CI groups?",
    options: shuffle([
      "Change group",
      "CMDB group",
      "Approval group",
      "Support group"
      
    ]),
    answer: ["Support group","Change group"]
  },

 {
    type: "mcq",
    question: "A CSDM Data Manager needs metrics on the alignment of Technology Management Services (Technical Services) and Technology Management Offerings (Technical Service Offerings) with best practices. <br><br> Which tab in the CSDM Data Foundation Dashboard provides this information?",
    options: shuffle([
      "Crawl",
      "Walk",
      "Fly",
      "Run"      
    ]),
    answer: ["Walk"]
  },
   {
    type: "mcq",
    question: "A CMDB Administrator is tasked with managing the CMDB and needs to define a new CI class to track a new type of equipment that has not been seen before. <br><br> Which action adds a new CI class and ensures it integrates properly with the existing CMDB structure?",
    options: shuffle([
      "Use Service Catalog to define the new CI class, as the CI Class Manager is only for service-related records and not for hardware CIs",
      "Create a new CI class directly in the CI Class Manager and configure the table inheritance to ensure it inherits from a relevant parent class",
      "Edit an existing CI class under CI Class Manager and add new fields specific to the new equipment type",
      "Use the CI Class Manager to create a new CI class but avoid setting up any inheritance, as CI classes should be independent of one another to maintain clarity."
    ]),
    answer: ["Create a new CI class directly in the CI Class Manager and configure the table inheritance to ensure it inherits from a relevant parent class"]
  },
  {
  type: "multiple",
  question: "What are the characteristics or functions of ServiceNow IntegrationHub ETL?",
  options: shuffle([
    "Integrates third party data into the CMDB or into non-CMDB tables",
    "Performs discovery data collection and updates the CMDB",
    "Uses the IRE to process and integrate data",
    "Imports Microsoft SCCM/Intune data into the CMDB"
  ]),
  answer: ["Integrates third party data into the CMDB or into non-CMDB tables","Uses the IRE to process and integrate data"]
  },
  {
    type: "mcq",
    question: "A CMDB Administrator needs to ingest relevant data from Microsoft SCCM into the CMDB. <br><br> Which ingestion method brings the fastest to value?",
    options: shuffle([
      "Import Sets",
      "Agent Client Collector",
      "Service Graph Connectors",
      "IntegrationHub ETL"
      
    ]),
    answer: ["Service Graph Connectors"]
  },
  {
    type: "mcq",
    question: "A CMDB Administrator would like to minimize stale CIs in the CMDB. <br><br> Which CMDB Health Dashboard scorecard displays this information?",
    options: shuffle([
      "Completeness",
      "Correctness",
      "Compliance"
      
    ]),
    answer: ["Correctness"]
  },
{
  type: "mcq",
  question: `
<p>The following identification rules exist:</p>

<table border="1" cellpadding="6" cellspacing="0">
  <thead>
    <tr>
      <th>Hardware Rule: Identifier Entries Table</th>
      <th>Criterion attributes</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Serial Number</td>
      <td>serial_number, serial_number_type</td>
      <td>100</td>
    </tr>
    <tr>
      <td>Hardware</td>
      <td>serial_number</td>
      <td>200</td>
    </tr>
    <tr>
      <td>Hardware</td>
      <td>name</td>
      <td>300</td>
    </tr>
    <tr>
      <td>Network Adapter</td>
      <td>mac_address, name</td>
      <td>400</td>
    </tr>
  </tbody>
</table>

<p>Two new CI records are imported into the hardware class of the CMDB:</p>

<ul>
  <li><strong>CI1:</strong> The name of this CI record matches the name of an existing CI record in the CMDB.</li>
  <li><strong>CI2:</strong> The IP address of this CI record matches the IP address of an existing CI record in the CMDB.</li>
</ul>

<p>Which is correct based on the identification rule and the imported CI records?</p>
`,
  options: shuffle([
    "CI1 and CI2 both will be updated with matching records",
    "CI1 will be updated with matching record and CI2 will be inserted as new record",
    "CI1 will be inserted as new record and CI2 will be updated with matching record",
    "CI1 and CI2 both will be inserted as new records"
  ]),
  answer: [
    "CI1 will be updated with matching record and CI2 will be inserted as new record"
  ]
},
{
  type: "multiple",
  question: "A CMDB Administrator utilizing the CMDB Data Foundations Dashboard sees an issue and wants to run a playbook. <br><br> Which types of documentation can they expect to be provided in a playbook?",
  options: shuffle([
    "Problem Analysis",
    "Root Cause",
    "Problem Overview",
    "Automated Remediations"
  ]),
  answer: [
    "Problem Analysis",
    "Problem Overview"
  ]
},
  {
    type: "match",
    question: "Given a list of Service types in the platform. Drag the appropriate service to its definition.",
    options: [
      "Application Service",
      "Business Service",
      "Technology Management Service [Technical Service]"

    ],
    answers: [
      { label: "Logical represntation of deploy system or application stack", correct: "Application Service" },
      { label: "Published to Service Owners and underpins one or more business or application Services.", correct: "Technology Management Service [Technical Service]" },
      { label: "Published to Business Users and underpins one or more business capabilities.", correct: "Business Service" }
    ]
  },
  {
    type: "mcq",
    question: "A CMDB Administrator knows that the CMDB Data Foundation Dashboard is a resource to monitor and improve data quality. <br><br> What is a benefit of this dashboard?",
    options: shuffle([
      "Provides the ability to configure health-realted metrics",
      "Provides key health-related metrics to make decisions",
      "Provides the ability to resolve certification policy tasks"
      
    ]),
    answer: ["Provides key health-related metrics to make decisions"]
  },
{
  type: "mcq",
  question: "A CMDB Manager uses CMDB 360/Multisource CMDB to maintain and improve CMDB quality. Why would the Manager use CMDB 360/Multisource CMDB?",
  options: shuffle([
    "To identify CI attributes from multiple data sources",
    "To ingest data from multiple data sources using Service Graph Connector(s)",
    "To ingest data from multiple data sources using Import Set(s)",
    "To populate the CMDB from multiple data sources"
  ]),
  answer: [
    "To identify CI attributes from multiple data sources"
  ]
},
{
  type: "mcq",
  question: "The Configuration Management team wants to confirm that all servers in the CMDB actually exist in the data center. <br><br> Which CMDB Data Manager policy type would the team create?",
  options: shuffle([
    "Attestation",
    "Delete",
    "Retire",
    "Archive",
    "Certification"
  ]),
  answer: ["Attestation"]
},
{
  type: "mcq",
  question: "A CMDB Administrator has a number of similar de-duplication tasks that need to be remediated in bulk. <br> How does the Administrator achieve this?",
  options: shuffle([
    "Configure and run a custom de-duplication background script",
    "Create and run a de-duplication template",
    "Create de-duplication tasks manually and remediate each",
    "Utilize the Duplicate CI Remediator Wizard"
  ]),
  answer: ["Create and run a de-duplication template"]
},
{
  type: "mcq",
  question: "The CMDB Configuration Management team wants to manage de-duplication tasks generated from data ingested into the CMDB via the Identification and Reconciliation Engine (IRE).<br><br> In which area of the CMDB Workspace can they locate these de-duplication tasks?",
  options: shuffle([
    "Important actions tile under the Home tab",
    "Total status tile under the My Work tab",
    "CMDB feature adoption tile under the Insights tab"
  ]),
  answer: [
    "Important actions tile under the Home tab"
  ]
},
{
  type: "mcq",
  question: "A Configuration Management team has decided to start taking advantage of the CMDB 360/Multisource CMDB functionality. <br> Which system property must be enabled?",
  options: shuffle([
    "glide.identification_engine.multisource_enabled",
    "glide.identification_engine.multisource.query.max.limit",
    "glide.identification_engine.multisource_cmdb_ci_enabled",
    "glide.identification_engine.multisource_non_cmdb_ci_enabled"
  ]),
  answer: [
    "glide.identification_engine.multisource_enabled"
  ]
},
{
  type: "mcq",
  question: "A Configuration Management Governance team is transitioning from utilizing legacy CMDB status fields to CSDM life cycle status fields.<br> <br> Which table can be modified?",
  options: shuffle([
    "Life Cycle Stages (life_cycle_stage)",
    "Life Cycle Mapping (life_cycle_mapping)",
    "Life Cycle Controls (life_cycle_control)",
    "Life Cycle Stage Status (life_cycle_stage_status)"
  ]),
  answer: [
    "Life Cycle Mapping (life_cycle_mapping)"
  ]
},
{
  type: "mcq",
  question: "A CMDB Administrator has imported data into the ServiceNow CMDB from a third-party source using a Service Graph Connector. The Administrator wants to review specific field-to-field mappings for the import.<br><br> Which feature will show that information?",
  options: shuffle([
    "Integration Hub",
    "CMDB Integrations Dashboard",
    "IntegrationHub ETL"
  ]),
  answer: [
    "IntegrationHub ETL"
  ]
},
{
  type: "multiple",
  question: "A CMDB Administrator is considering whether to start using the playbooks provided on the CMDB Data Foundation Dashboard.<br><br> What are the benefits to support the decision to leverage this feature?",
  options: shuffle([
    "Offers insight into the downstream impacts of poorly performing metrics",
    "Offers remediation templates to improve poorly performing metrics",
    "Offers remediation options to address and improve poorly performing metrics",
    "Offers automated scripts to resolve poorly performing metrics"
  ]),
  answer: [
    "Offers remediation templates to improve poorly performing metrics",
    "Offers remediation options to address and improve poorly performing metrics"
  ]
},
{
  type: "mcq",
  question: "A CMDB Administrator is managing group data from both the CI Class Manager and a Technical Service Offering for a specific class. <br> <br>CI Class Manager: <br><ul><li>Managed by Group = Enterprise IT Services </li></ul>Technical Service Offering: <br> <ul><li>Managed by Group = Windows Support</li><li> Change Group = Change Management Team </li></ul>What would be the Managed By Group for CIs from this class based on the configured values?",
  options: shuffle([
    "Enterprise IT Services",
    "Change Management Team",
    "Windows Support"
  ]),
  answer: ["Windows Support"]
},
{
  type: "mcq",
  question: "A CMDB Administrator viewing the CMDB Data Foundations Dashboard, notices the Unique Locations Result percentage low. <br> What is the recommended process from the associated playbook to correct this issue?",
  options: shuffle([
    "Retain the location that matches the organization's standard naming convention and delete the duplicate without further validation",
    "Review both locations, update CIs with the correct location and delete the duplicate location",
    "Keep both locations as either can be used as a valid alternate location",
    "Use the Duplicate CI Remediator to merge the duplicate location records"
  ]),
  answer: [
    "Review both locations, update CIs with the correct location and delete the duplicate location"
  ]
},
{
  type: "multiple",
  question: "An Asset Manager wants to ensure that Asset records and CI records are kept synchronized automatically. <br>How does the Manager do this?",
  options: shuffle([
    "Ensure that the business rule to update Asset fields on change on the CI table is active",
    "Ensure that scheduled jobs are run during off-business hours to ensure that the sync happens",
    "Ensure that the business rule to update CI fields on change on the asset table is active",
    "Ensure one-to-one physical mapping between Asset and CI"
  ]),
  answer: [
    "Ensure that the business rule to update Asset fields on change on the CI table is active",
    "Ensure that the business rule to update CI fields on change on the asset table is active"
  ]
},
{
  type: "mcq",
  question: "A Configuration Management team has successfully developed a healthy and trusted CMDB. They have integrated discovered infrastructure data, accurately referenced non-discoverable data (such as change and support group information), and made the CMDB service-aware using Service Mapping.<br><br>Which field on a Change Request form is automatically populated after a CI is selected that references an appropriate change group?",
  options: shuffle([
    "Managed by Group",
    "Change Group",
    "Assignment Group",
    "Support Group",
    "Assigned to"
  ]),
  answer: ["Assignment Group"]
},
{
  type: "multiple",
  question: "A Windows administration team wants a grouping of CIs using CMDB groups. <br>Which methods can be used?",
  options: shuffle([
    "Tag-based queries",
    "Encoded queries",
    "Scripted queries",
    "Saved queries"
  ]),
  answer: [
    "Tag-based queries",
    "Encoded queries"
  ]
},
{
  type: "mcq",
  question: "A CMDB Administrator wants to configure IRE rules for the CMDB. The CMDB Administrator opens CI Class Manager and sees the Health Inclusions Rules tab available under a CI Class.<br> How are these rules utilized by the IRE?",
  options: shuffle([
    "To narrow the scope of CIs included in the identification process",
    "To reduce the data ingested into the CMDB",
    "To reconcile specific attributes based on data sources"
  ]),
  answer: [
    "To narrow the scope of CIs included in the identification process"
  ]
},
{
  type: "mcq",
  question: "A data center has many servers. The CMDB Administrator wants to confirm that all servers exist. Which Data Manager policy type does the Administrator implement?",
  options: shuffle([
    "Promotion",
    "Verification",
    "Attestation",
    "Certification"
  ]),
  answer: ["Attestation"]
},
{
  type: "mcq",
  question: "A ServiceNow Administrator needs to create multiple new classes in the CMDB but wants to follow ServiceNow's best practices for naming CMDB tables to prevent technical debt. <br> Which is the starting prefix for all custom CMDB tables?",
  options: shuffle([
    "cmdb_ci",
    "u_cmdb_ci",
    "u_ci_cmdb",
    "ci_cmdb"
  ]),
  answer: ["u_cmdb_ci"]
},
{
  type: "mcq",
  question: "A health organization must track certain data (for example, regulated patient information) and its relation to Business Applications. <br> Which action does CSDM recommend to meet this goal?",
  options: shuffle([
    "Work with the Database administration team to classify the data on each database that holds patient information, and then use Relationships to map that back to the Business Application",
    "Create fields on the Business Application record to mark the Business Application as containing patient information, and then ask the Business Application owner to mark the application as having patient information or not",
    "Create an Information Object to represent the patient information, and then link it through a relationship to the Business Application after consulting with the Application owner"
  ]),
  answer: [
    "Create an Information Object to represent the patient information, and then link it through a relationship to the Business Application after consulting with the Application owner"
  ]
},
{
  type: "multiple",
  question: "ServiceNow Event Management significantly benefits from a well-maintained and properly populated CMDB. <br> What are key advantages it provides to Event Management?",
  options: shuffle([
    "Mapped services provide visibility to users consuming the service",
    "Binding of alerts to specific CIs",
    "Correlation of alerts to knowledge base articles",
    "Mapped services provide visibility to the business impact of an alert"
  ]),
  answer: [
    "Binding of alerts to specific CIs",
    "Mapped services provide visibility to the business impact of an alert"
  ]
},
{
  type: "multiple",
  question: "A Configuration Manager is managing a CI class in the CMDB. The identification rule(s) needs an update. <br>Where can the Configuration Manager view and configure the existing identification rule(s) for the class?",
  options: shuffle([
    "API Integrations",
    "IRE Application",
    "CI Class Manager",
    "CI Identifiers module"
  ]),
  answer: [
    "CI Class Manager",
    "CI Identifiers module"
  ]
},
{
  type: "match",
  question: "Drag and drop the application service type to the best description.",
  options: shuffle([
    "Service Mapping (Top-down)",
    "Service Mapping (Connection Suggestion)",
    "Tag-Based",
    "Dynamic CI Group"
  ]),
  answers: [
    {
      label: "Recommended for mission-critical application services that require a precise approach using patterns",
      correct: "Service Mapping (Top-down)"
    },
    {
      label: "Best fit to map cloud-native, container-based, or machine environments",
      correct: "Service Mapping (Connection Suggestion)"
    },
    {
      label: "Ideal for custom built applications and leverages fingerprinting to generate service maps in a timely manner",
      correct: "Tag-Based"
    },
    {
      label: "Ideal for small application services that can be easily grouped using filters and CMDB queries",
      correct: "Dynamic CI Group"
    }
  ]
},
{
  type: "mcq",
  question: "A hospital has received a new CT Scanner. The inventory management team has created a catalog item doctors can use to schedule patients for scans. <br> What CSDM domain should the inventory management team map the catalog item to?",
  options: shuffle([
    "Design and Planning (Design)",
    "Build and Integration (Build)",
    "Service Delivery (Manage Technical Service)",
    "Foundation",
    "Service Consumption (Sell/Consume)"
  ]),
  answer: ["Service Consumption (Sell/Consume)"]
},

{
  type: "mcq",
  question: "An Enterprise Architect of a financial services company is working across the enterprise and wants to track their capabilities.<br> Which CSDM 5 domain is used?",
  options: shuffle([
    "Foundation",
    "Build and Integration (Build)",
    "Design and Planning (Design)",
    "Service Consumption (Sell/Consume)",
    "Service Delivery (Manage Technical)"
  ]),
  answer: ["Design and Planning (Design)"]
},
{
  type: "mcq",
  question: "The CMDB Administrator wants to leverage the Staleness metric from the CMDB Health Dashboard – Correctness Scorecard.<br> Which field is used to calculate the duration of this metric?",
  options: shuffle([
    "Last modified on (last_modified)",
    "Created (sys_created_on)",
    "Updated (sys_updated_on)",
    "First discovered (first_discovered)",
    "Most recent discovery (last_discovery)"
  ]),
  answer: ["Most recent discovery (last_discovery)"]
},
{
  type: "mcq",
  question: "A CMDB Architect intends to populate the CMDB using the CSDM guidance. <br><br>Which key stakeholders from the organization should be involved in decisions regarding population of the CMDB using the CSDM Crawl stage?",
  options: shuffle([
    "Business Service Manager, Technology Service Owner",
    "Application Owner, Application Service Owner",
    "Customer Service Manager, Infrastructure Manager"
  ]),
  answer: [
    "Business Service Manager, Technology Service Owner"
  ]
},
{
  type: "mcq",
  question: "A CMDB Administrator has taken over management of a ServiceNow instance and has determined there are multiple deficiencies in the CMDB. During review of the CMDB Data Foundations Dashboard, the Administrator sees that ServiceNow offers Remediation Playbooks. <br><br> How can Playbooks assist the Administrator in resolving these issues?",
  options: shuffle([
    "Playbooks can automatically track common CMDB issues and output metrics",
    "Playbooks can be installed in the instance to automatically fix issues",
    "Playbooks can help analyze and fix issues"
  ]),
  answer: [
    "Playbooks can help analyze and fix issues"
  ]
},
{
  type: "mcq",
  question: "What is the relationship between an application and a server?",
  options: shuffle([
    "Application > Uses::Used by > Server",
    "Application > Runs::Runs On > Server",
    "Application > Runs on::Runs > Server",
    "Application > Used by::Uses > Server"
  ]),
  answer: [
    "Application > Runs::Runs On > Server"
  ]
},
{
  type: "mcq",
  question: "An organization needs to maintain non-discoverable attributes, such as warranty expiration dates, for hardware CIs. These attributes are not updated by automated discovery tools. <br> What method ensures these attributes are accurately maintained for all CIs?",
  options: shuffle([
    "Create a new CI class specifically for non-discoverable attributes",
    "Use the CMDB Reconciliation Engine to update the attributes",
    "Use a scheduled data import to update the attributes from an external source"
  ]),
  answer: [
    "Use a scheduled data import to update the attributes from an external source"
  ]
},
{
  type: "mcq",
  question: "A Service Desk Manager wants to leverage the Unified Map to find active incidents or problems for a selected CI. <br> Which panel will give the manager visibility and details?",
  options: shuffle([
    "Overview",
    "Application services",
    "Related items",
    "Attributes"
  ]),
  answer: [
    "Related items"
  ]
},
{
  type: "mcq",
  question: "A Service Portfolio Manager wants to know what Application Services their Business Service Offerings depend on.  <br> What stage of CSDM would map this relationship?",
  options: shuffle([
    "Fly",
    "Crawl",
    "Foundation",
    "Run",
    "Walk"
  ]),
  answer: [
    "Walk"
  ]
},
{
  type: "mcq",
  question: "A CMDB Administrator needs to track which CIs and CI classes are missing key data. <br> Which CMDB Health Dashboard scorecard supports tracking this requirement?",
  options: shuffle([
    "Compliance",
    "Correctness",
    "Completeness"
  ]),
  answer: ["Completeness"]
},
{
  type: "mcq",
  question: "During a CMDB implementation, a team member is tasked with ensuring the accuracy and completeness of CI data. This person is also responsible for maintaining data quality and resolving discrepancies. <br> Which role is responsible for these tasks?",
  options: shuffle([
    "Service Owner",
    "CMDB Architect",
    "Configuration Manager",
    "IT Asset Manager"
  ]),
  answer: ["Configuration Manager"]
},
{
  type: "mcq",
  question: "A CMDB Administrator needs insights into how their CMDB is configured according to ServiceNow recommended practices.  <br> Which should be used?",
  options: shuffle([
    "CMDB Data Foundation Dashboard",
    "CMDB Workspace",
    "CMDB Health Dashboard",
    "CMDB Data Manager"
  ]),
  answer: ["CMDB Data Foundation Dashboard"]
},
{
  type: "mcq",
  question: "A customer wants to model their business applications and would like to capture different types of data that include Personally Identifiable Information (PII) data.<br> Based on these requirements, which CMDB class needs to be leveraged to achieve this?",
  options: shuffle([
    "Business Capability",
    "API Component",
    "Information Object",
    "Data Classification"
  ]),
  answer: ["Information Object"]
},

                        //     75 Questions completed

{
  type: "multiple",
  question: "A CMDB Administrator needs to create a new CI class for the Internet of Things (IoT) Sensor in ServiceNow. <br> What are the recommended practices for this specific activity?",
  options: shuffle([
    "Install or update the CMDB CI Class Models store application, and verify the class does not already exist",
    "Modify an existing class",
    "Add a new class under an appropriate parent class",
    "Delete an unused class, and replace it with the new one"
  ]),
  answer: [
    "Install or update the CMDB CI Class Models store application, and verify the class does not already exist",
    "Add a new class under an appropriate parent class"
  ]
},
{
  type: "mcq",
  question: "A CMDB Data Manager needs to access the ServiceNow platform to create, publish, and manage policies that automate and govern CI lifecycle operations, ensuring the CMDB remains healthy and efficient. <br><br> Where can the Data Manager do this?",
  options: shuffle([
    "CMDB Workspace CMDB 360 tab",
    "Service Operations Workspace",
    "CI Class Manager",
    "CMDB Workspace Management tab"
  ]),
  answer: [
    "CMDB Workspace Management tab"
  ]
},
{
  type: "mcq",
  question: "What ensures data volume in the CMDB is manageable?",
  options: shuffle([
    "Scheduled Jobs",
    "Business Rules",
    "Archive Policies"
  ]),
  answer: ["Archive Policies"]
},
{
  type: "multiple",
  question: "Which are business values of CMDB?",
  options: shuffle([
    "Collecting and managing financial data",
    "Streamlining incident and change management",
    "Strengthening operational resiliency",
    "Automating maintenance for CI relationships"
  ]),
  answer: [
    "Streamlining incident and change management",
    "Strengthening operational resiliency"
  ]
},
{
  type: "multiple",
  question: "Which ServiceNow solution creates automatic relationships?",
  options: shuffle([
    "Discovery",
    "Workflow Studio",
    "Service Mapping",
    "IntegrationHub ETL"
  ]),
  answer: [
    "Discovery",
    "Service Mapping"
  ]
},
{
  type: "match",
  question: "Drag the CMDB objects to the correct CSDM domains.",
  options: shuffle([
    "Application Service",
    "Business Application",
    "Business Process",
    "Business Service"
  ]),
  answers: [
    {
      label: "Design and Planning domain",
      correct: "Business Application"
    },
    {
      label: "Foundation domain",
      correct: "Business Process"
    },
    {
      label: "Service Delivery domain",
      correct: "Application Service"
    },
    {
      label: "Sell / Consume domain",
      correct: "Business Service"
    }
  ]
},
{
  type: "mcq",
  question: "When integrating data into the CMDB using import sets and transform maps, which type of script is added to ensure the data is processed through the Identification and Reconciliation Engine (IRE)?",
  options: shuffle([
    "onComplete",
    "onBefore",
    "onStart",
    "onAfter"
  ]),
  answer: ["onAfter"]
},
{
  type: "multiple",
  question: "A service owner is using Unified Map to understand the composition of a service but wants to filter out irrelevant information. Which options are available to the service owner from the filter panel?",
  options: shuffle([
    "Discovery source",
    "Managed by group",
    "Business criticality",
    "CI type"
  ]),
  answer: [
    "Discovery source",
    "CI type"
  ]
},
{
  type: "mcq",
  question: "In a company, there is a need to understand the CSDM maturity level needed. Different stakeholders listed a number of use cases that they expect over time. Which use case requires information objects?",
  options: shuffle([
    "The Asset Management team wants to understand the asset life cycle compliance in a Business Application context",
    "The SecOps team wants to understand the operational risk in the Business Application context",
    "The Business Service Management team wants to understand the operational impact for their consumer parties",
    "The Event Operations team wants to automate their events into incident for operational actions",
    "The Customer Service team wants to onboard proactive case management"
  ]),
  answer: [
    "The SecOps team wants to understand the operational risk in the Business Application context"
  ]
},
{
  type: "mcq",
  question: "A customer wants recently imported server records to be automatically reclassified into more specific CMDB classes after being discovered using ServiceNow Discovery. <br><br> During the discovery process, if existing Server [cmdb_ci_server] records are reclassified into the Linux [cmdb_ci_linux_server] and Windows Server [cmdb_ci_win_server] classes, which reclassification operation occurred?",
  options: shuffle([
    "Class Switch",
    "Class Downgrade",
    "Class Upgrade"
  ]),
  answer: ["Class Upgrade"]
},
{
  type: "mcq",
  question: "A CMDB Administrator is reviewing the health of the CMDB and notices a large percentage of the Hardware CIs are missing serial numbers. The Administrator is concerned this may cause duplicate CIs and would like to resolve the issue in a timely manner. <br><br> What structured guidelines provided by ServiceNow are available to troubleshoot and resolve the issue?",
  options: shuffle([
    "CSDM Now Create Playbooks",
    "CMDB Data Foundations Dashboard Playbooks",
    "CMDB Health Dashboard Playbooks",
    "CSDM Data Foundations Dashboard Playbooks"
  ]),
  answer: ["CMDB Health Dashboard Playbooks"]
},
{
  type: "mcq",
  question: "A Platform Owner is collaborating with stakeholders in the manufacturing industry to align their CIs with the CSDM 5 framework. They need to map production line monitoring systems to the appropriate CSDM domain. <br><br> Which CSDM 5 domain does the Platform Owner use?",
  options: shuffle([
    "Service Delivery (Manage Technical)",
    "Foundation",
    "Build and Integration (Build)",
    "Service Consumption (Sell/Consume)",
    "Design and Planning (Design)"
  ]),
  answer: ["Service Delivery (Manage Technical)"]
},
{
  type: "multiple",
  question: "The Configuration Manager is preparing the justification to utilize the CMDB Data Foundations Dashboard. <br> Which benefits align with the usage of this dashboard?",
  options: shuffle([
    "It provides actionable insights to improve data quality and completeness",
    "It enables monitoring and tracking of CMDB health over time",
    "It automates the approval process for change management",
    "It helps detect and eliminate duplicate records in the CMDB"
  ]),
  answer: [
    "It provides actionable insights to improve data quality and completeness",
    "It enables monitoring and tracking of CMDB health over time"
  ]
},
{
  type: "match",
  question: " A Manufacturing organization has implemented Incident Management in ServiceNow and wants to integrate additional products to enhance its functionality. <br>   Drag each ServiceNow product to the value it brings in supporting Incident Management.",
  options: shuffle([
    "Discovery",
    "Hardware Asset Management",
    "Risk Management",
    "Service Portfolio Management"
  ]),
  answers: [
    {
      label: "Delivers asset actions and events for the management and maintenance of assets during incidents",
      correct: "Hardware Asset Management"
    },
    {
      label: "Supplies critical IT and finance risk data, enabling the team to assess the broader impact of incidents on business operations",
      correct: "Risk Management"
    },
    {
      label: "Offers detailed operational-level data on hardware and applications to improve incident resolution",
      correct: "Discovery"
    },
    {
      label: "Provides live status information about services, helping to align incidents with the status and history of services",
      correct: "Service Portfolio Management"
    }
  ]
},
{
  type: "mcq",
  question: "A Configuration Manager is planning the implementation of the CMDB. <br> Which is the prescribed CSDM rollout order?",
  options: shuffle([
    "Initiate, Plan, Execute, Deliver, Close",
    "Architecture, Business, Technical, Governance",
    "Foundation, Crawl, Walk, Run, Fly",
    "Initial, Developing, Defined, Managed"
  ]),
  answer: [
    "Foundation, Crawl, Walk, Run, Fly"
  ]
},
{
  type: "mcq",
  question: "A CMDB Administrator needs to import external data into the CMDB, As the CMDB Administrator wants to reduce the risk of creating duplicates to update information from unauthorized sources, it has to be ensured that the Identification and Reconciliation API will not be bypassed. <br> What is the recommended method to import data into the CMDB utilizing the Identifiction and Reconciliation API?",
  options: shuffle([
    "Import Sets and Transform Maps",
    "IntegrationHub ETL",
    "Table API (REST API or SOAP API)"
  ]),
  answer: [
    "IntegrationHub ETL"
  ]
},
{
  type: "mcq",
  question: "Which is a purpose or requirement of CMDB Data Manager in ServiceNow?",
  options: shuffle([
    "Automates the enforcement of relationship rules between CIs in the CMDB",
    "Automates the archival and deletion of records based on retention policies",
    "Encrypts archived records for enhanced security"
  ]),
  answer: [
    "Automates the enforcement of relationship rules between CIs in the CMDB"
  ]
},
{
  type: "multiple",
  question: `
<p>The following Reconciliation Rules were configured for ServiceNow, Altiris, and SCCM.</p>

<table border="1" cellpadding="6" cellspacing="0">
  <thead>
    <tr>
      <th>Discovery Source</th>
      <th>Class</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ServiceNow</td>
      <td>Windows Server [cmdb_ci_win_server]</td>
      <td>100</td>
    </tr>
    <tr>
      <td>Altiris</td>
      <td>Windows Server [cmdb_ci_win_server]</td>
      <td>200</td>
    </tr>
    <tr>
      <td>SCCM</td>
      <td>Windows Server [cmdb_ci_win_server]</td>
      <td>300</td>
    </tr>
  </tbody>
</table>

<p>Which are true?</p>
`,
  options: shuffle([
    "Data collected with a discovery source of ServiceNow can insert new records into the Windows Server [cmdb_ci_win_server] table, but cannot update records created by Altiris or SCCM",
    "Data collected with a discovery source of Altiris can update records inserted by SCCM into the Windows Server [cmdb_ci_win_server] table",
    "Data collected with a discovery source of SCCM can be inserted as new records in the Windows Server [cmdb_ci_win_server] table",
    "Data collected with a discovery source of SCCM can update any record in the Windows Server [cmdb_ci_win_server] table because it has the highest priority number"
  ]),
  answer: [
    "Data collected with a discovery source of ServiceNow can insert new records into the Windows Server [cmdb_ci_win_server] table, but cannot update records created by Altiris or SCCM",
    "Data collected with a discovery source of SCCM can be inserted as new records in the Windows Server [cmdb_ci_win_server] table"
  ]
},
{
  type: "mcq",
  question: "A CMDB Manager wants to improve data quality using the CMDB Health Dashboard. What needs to happen to generate CMDB health scores?",
  options: shuffle([
    "The scheduled jobs for the CMDB Health Dashboard must be activated",
    "Nothing, CMDB health scores are calculated by default",
    "The plugin, CMDB health calculation, needs to be installed"
  ]),
  answer: [
    "The scheduled jobs for the CMDB Health Dashboard must be activated"
  ]
},
{
  type: "mcq",
  question: "A CMDB Administrator has been tasked with gathering information for a presentation to leadership. The Administrator needs to provide Duplicate CI, Orphan CI, and Stale CI metrics. <br> Which scorecard provides this information on the CMDB Health Dashboard?",
  options: shuffle([
    "Correctness",
    "Compliance",
    "Completeness"
  ]),
  answer: ["Correctness"]
},
{
  type: "multiple",
  question: "A CMDB Administrator wants to run the Services Have Owners Identified playbook to remediate the issues shown in the CMDB Data Foundations Dashboard.  <br> Which remediation plays would be used?",
  options: shuffle([
    "Govern Data",
    "Report Data",
    "Fix Data"
  ]),
  answer: [
    "Govern Data",
    "Fix Data"
  ]
},
{
  type: "match",
  question: "Drag and drop the CMDB Health Dashboard metric to the description.",
  options: [
    "Audits",
    "Duplicate CIs",
    "Orphan CIs",
    "Recommended fields",
    "Required fields",
    "Stale CIs"
  ],
  answers: [
    {
      label: "Use these to compare actual values with expected values",
      correct: "Audits"
    },
    {
      label: "Use of these should be minimized",
      correct: "Orphan CIs"
    },
    {
      label: "Certain attribute values are not set, or relationships are missing",
      correct: "Required fields"
    },
    {
      label: "Preferable for them to be populated, as they could be useful in troubleshooting issues",
      correct: "Recommended fields"
    },
    {
      label: "Have not been updated and may be outdated",
      correct: "Stale CIs"
    },
    {
      label: "Detected during identification and reconciliation and have associated base system remediation tools",
      correct: "Duplicate CIs"
    }
  ]
},
{
  type: "mcq",
  question: "A CMDB Administrator is implementing a vulnerability Response or Security incident Response and needs to ensure customers have enough context to estimate risk and set task priorities. <br><br> Which Get Well Playbook from the CMDB Data Foundations Dashboard helps with this?",
  options: shuffle([
    "Percentage of Custom Status Values for CI Life Cycle Stages",
    "Named Product Modules without Product Owners",
    "Locations without a Parent Location",
    "Application Services with Business Application Relationships"
  ]),
  answer: [
    "Application Services with Business Application Relationships"
  ]
},
{
  type: "match",
  question: "Some steps need to be taken to transition from using different status attributes in the CMDB to life cycle objects. Drag and drop the objects/attributes to the description.",
  options: shuffle([
    "life_cycle_stage_status",
    "life_cycle_object",
    "life_cycle_mapping",
    "life_cycle_stage"
  ]),
  answers: [
    {
      label: "This table is pre-populated with mappings for legacy status values, based on its table, to the best-fit CSDM life-cycle value pair",
      correct: "life_cycle_mapping"
    },
    {
      label: "This is a record attribute that reflects a meta-level state of the record life cycle",
      correct: "life_cycle_stage"
    },
    {
      label: "This is a record attribute that reflects a sub-level state of the record life cycle",
      correct: "life_cycle_stage_status"
    },
    {
      label: "This table uses the type of CI (hardware, document, logical, etc.) to determine which sub-level life cycle state values are available",
      correct: "life_cycle_object"
    }
  ]
},
{
  type: "mcq",
  question: `
<img 
  src="apache.png" 
  alt="Apache Web Server Identification Rule Configuration"
  style="max-width: 100%; margin-bottom: 12px;"
/>

<p>
Yesterday, an Apache Web Server CI was discovered as part of Service Mapping.
Today, the application owner upgraded Apache to a different version and reran
discovery of the service.
</p>

<p><strong>What will happen in the CMDB?</strong></p>
`,
  options: shuffle([
    "A new Apache Web Server CI is created",
    "The Apache Web Server CI will be reclassified as a Web Server CI",
    "The existing Apache Web Server CI will be reconciled and its version will be updated",
    "A duplication error will occur"
  ]),
  answer: [
    "The existing Apache Web Server CI will be reconciled and its version will be updated"
  ]
},
{
  type: "mcq",
  question: "A Change Manager aims to streamline ITSM processes by automatically populating fields on the Change form when a CI is selected. The Configuration Management team is working to ensure that the Change Group field is populated for all managed CIs. As a result, which base system field on the Incident form will be automatically populated after selecting a CI?",
  options: shuffle([
    "Change group",
    "Assignment group",
    "Managed by group",
    "Approval group"
  ]),
  answer: ["Assignment group"]
},
{
  type: "mcq",
  question: "CMDB class owners are receiving tasks under the 'My Work' tab in the CMDB Workspace. Which CMDB management tool is generating these tasks?",
  options: shuffle([
    "CMDB Health Dashboard",
    "De-duplication templates",
    "CMDB Data Manager"
  ]),
  answer: ["CMDB Data Manager"]
},
{
  type: "mcq",
  question: "Which type of CMDB Data Manager policy creates tasks that allow the assigned individual to update fields on the CI record?",
  options: shuffle([
    "Compliance",
    "Audit",
    "Attestation",
    "Certification"
  ]),
  answer: ["Certification"]
},
{
  type: "multiple",
  question: "Configuration Management requires an accurate inventory of devices to be reflected in the CMDB. Which are common use cases for using Agent Client Collector (ACC)?",
  options: shuffle([
    "Network devices in the DMZ",
    "Devices in secure environments",
    "Servers in the data center",
    "Devices that intermittently connect to the network"
  ]),
  answer: [
    "Devices in secure environments",
    "Devices that intermittently connect to the network"
  ]
},
{
  type: "mcq",
  question: "A Configuration Manager has configured multiple data sources which are all authorized to update the same CMDB class and set of attributes. What can the Configuration Manager do to control which data source should be the authoritative source of truth?",
  options: shuffle([
    "Configure data refresh rules with a specific time period",
    "Assign a priority to each data source in the reconciliation rules",
    "Manually run the data source updates in the correct order",
    "Assign a run order to each data source in the identification rules"
  ]),
  answer: [
    "Assign a priority to each data source in the reconciliation rules"
  ]
},
{
  type: "mcq",
  question: "A Configuration Manager needs to leverage a policy type to automate the creation and assignment of tasks to validate the existence of CIs. Which policy type should be used?",
  options: shuffle([
    "Delete",
    "Attestation",
    "Certification",
    "Retire"
  ]),
  answer: ["Attestation"]
},
{
  type: "multiple",
  question: "A CMDB Administrator wants to create a CMDB query to find all databases located in Seattle that are connected to application services. They also want to include incidents related to those databases. Which actions does the company take to build this query?",
  options: shuffle([
    "Add a filter to the database node for location = Seattle",
    "Add to the canvas the Incident table from the Non-CMDB Tables list",
    "Set the relationship level to 'Up to 2nd level relationships'",
    "Add property columns to the application service node"
  ]),
  answer: [
    "Add a filter to the database node for location = Seattle",
    "Add to the canvas the Incident table from the Non-CMDB Tables list"
  ]
},
{
  type: "mcq",
  question: "A CMDB Administrator identifies duplicate CIs. One was created by a manual import, and the other was created by automated discovery. The discovered CI has the latest IP address, while the manually imported CI has an accurate relationship to a critical business application. How does the Administrator use the Duplicate CI Remediator to resolve this issue?",
  options: shuffle([
    "Merge the two CIs automatically, retaining all attributes from the discovered CI",
    "Retain the discovered CI, and delete the manually imported CI",
    "Retain the discovered CI, but merge the relationship from the manually imported CI",
    "Retain the manually imported CI, and delete the discovered CI"
  ]),
  answer: [
    "Retain the discovered CI, but merge the relationship from the manually imported CI"
  ]
},
{
  type: "multiple",
  question: "A Change Manager wants to gain value from CSDM. How will the Change Management process benefit from CSDM?",
  options: shuffle([
    "Determine the root cause of the change issue",
    "Identify blackout windows for the change",
    "Understand the impact of the change on services",
    "Route the change dynamically"
  ]),
  answer: [
    "Understand the impact of the change on services",
    "Route the change dynamically"
  ]
},
{
  type: "match",
  question: "A new ServiceNow customer is assembling a Configuration Management team to support their CMDB. Drag each role to its corresponding job description.",
  options: shuffle([
    "CI Analyst",
    "CMDB Process Owner",
    "Configuration Manager/CMDB Admin",
    "Service or Product Owner"
  ]),
  answers: [
    {
      label: "Has read-only access to CMDB data and to basic user interface such as CMDB reports and dashboards",
      correct: "CI Analyst"
    },
    {
      label: "Accountable for managing all elements that make up a portfolio throughout their entire lifecycle",
      correct: "Service or Product Owner"
    },
    {
      label: "Manages assigned CI tables and keeps records updated and resolves tasks related to CMDB records",
      correct: "Configuration Manager/CMDB Admin"
    },
    {
      label: "Obtains highest level role for CMDB privileges",
      correct: "CMDB Process Owner"
    }
  ]
},
{
  type: "mcq",
  question: "A development team is working on a project and an application will be deployed to many servers. There will be several security requirements that must be checked to adhere to lawful regulatory compliance because the application will be holding customer personal data (PII and PCI). <br><br> Where in the CSDM does the development team look to store the information that will be used to satisfy these audits?",
  options: shuffle([
    "Customer Service Offerings and Databases",
    "Business Applications and Information Objects",
    "Technology Management Service Offerings (Technical Service Offerings) and Dynamic CI Groups"
  ]),
  answer: [
    "Business Applications and Information Objects"
  ]
},
{
  type: "multiple",
  question: "A CMDB Administrator is evaluating whether to monitor the metrics provided on the CMDB Data Foundations Dashboard. <br><br> Which benefits support the decision to continually monitor the results on this dashboard?",
  options: shuffle([
    "Provides metrics for CIs processed by the IRE",
    "Reports on all orphan CIs in the CMDB",
    "Provides metrics on active CIs updated in the last 90 days",
    "Provides a list of all CIs that failed health audits"
  ]),
  answer: [
    "Provides metrics for CIs processed by the IRE",
    "Provides metrics on active CIs updated in the last 90 days"
  ]
},
{
  type: "mcq",
  question: "A Configuration Manager wants to use the Unified Map. Where would it be accessed?",
  options: shuffle([
    "CI Class Manager",
    "CMDB Workspace",
    "CMDB Data Manager"
  ]),
  answer: [
    "CMDB Workspace"
  ]
},
{
  type: "mcq",
  question: "A Platform Data Owner wants to improve data quality with a few reconciliation rules across the five discovery sources that are being used. The Data Owner knows the best option is to include CMDB 360/Multisource CMDB to manage and monitor discovery sources, but the company currently does not have a license for ITOM Discovery that is required for CMDB 360/Multisource CMDB. What can the Data Owner do in this case?",
  options: shuffle([
    "CMDB 360/Multisource is a platform product that can be used immediately",
    "ITOM Discovery needs to be purchased to take advantage of the multisource IRE rules",
    "The IRE reconciliation rules can use discovery sources regardless of CMDB 360 being enabled"
  ]),
  answer: [
    "The IRE reconciliation rules can use discovery sources regardless of CMDB 360 being enabled"
  ]
},
{
  type: "mcq",
  question: "A Data Center Manager is working with the CMDB CI Class Manager to define the relationship between Application Servers and the Applications they host. The company has multiple Application Servers that host one or more Applications. Which describes the relationship between the Application Server table (cmdb_ci_app_server) and the Application table (cmdb_ci_appl)?",
  options: shuffle([
    "Many-to-one",
    "Many-to-many",
    "One-to-many",
    "One-to-one"
  ]),
  answer: ["Many-to-many"]
},
{
  type: "mcq",
  question: "A CMDB Administrator wants to improve data quality related to the CSDM. Which action should the Administrator take to meet this goal?",
  options: shuffle([
    "Use the CSDM Data Foundations Dashboard",
    "Use the default configured CMDB Health Dashboard",
    "Start the ServiceNow Health Scan"
  ]),
  answer: ["Use the CSDM Data Foundations Dashboard"]
},
{
  type: "mcq",
  question: "What is the difference between Data Certification and Attestation policies when managing a CI?",
  options: shuffle([
    "Attestation can be scheduled, while Data Certification cannot be scheduled",
    "Attestation requires correcting specific attributes of a CI, while Data Certification tracks acknowledgement the CI still exists",
    "Attestation tracks acknowledgement the CI still exists, while Data Certification requires validating specific attributes of a CI",
    "Attestation can be assigned to a group or an individual, while Data Certification can only be assigned to an individual"
  ]),
  answer: [
    "Attestation tracks acknowledgement the CI still exists, while Data Certification requires validating specific attributes of a CI"
  ]
},
{
  type: "mcq",
  question: "According to the Common Service Data Model (CSDM), a server team is requesting a catalog item be created for infrastructure upgrade requests. Which role is involved in initiating the request and defining requirements?",
  options: shuffle([
    "Enterprise Architect",
    "Application Service Owners",
    "Technology Service Owners"
  ]),
  answer: ["Technology Service Owners"]
},
{
  type: "mcq",
  question: "A customer's CMDB is aligned to the CSDM Walk stage. What benefit is provided by the CMDB?",
  options: shuffle([
    "Allows for additional stratification of technical team support structure along the lines of OLAs and commitments",
    "Improves the implementation velocity of APM Foundation for future business application rationalization",
    "Enables impact assessments for incident, problem, and change on Business Services"
  ]),
  answer: [
    "Enables impact assessments for incident, problem, and change on Business Services"
  ]
},
{
  type: "mcq",
  question: "A CMDB Administrator needs to identify which attributes have been created specifically for the Windows Server class. Which tab in the Attributes section is used?",
  options: shuffle([
    "All",
    "Child",
    "Added",
    "Derived"
  ]),
  answer: ["Added"]
},
{
  type: "mcq",
  question: "A CMDB Configuration Manager is reviewing the metrics on the CMDB Health Dashboard's Correctness Scorecard for the Server class, which consists of a total of 50,000 servers in the CMDB.\n\nFor the Duplicate metric, it shows Healthy CIs/Evaluated as 49,900/50,000.\nFor the Orphan metric, it shows Healthy CIs/Evaluated as 45,000/50,000.\n\nWhich configuration explains the difference in the scope of Server CIs (50,000 vs. 45,000) evaluated between the two metrics?",
  options: shuffle([
    "The Orphan metric has a CMDB group configured for the Server class",
    "The Duplicate metric has a Health Inclusion rule configured for the Server class",
    "The Orphan metric has a Health Inclusion rule configured for the Server class",
    "The Duplicate metric has a CMDB group configured for the Server class"
  ]),
  answer: [
    "The Orphan metric has a Health Inclusion rule configured for the Server class"
  ]
},
{
  type: "mcq",
  question: "A healthcare provider faces a critical incident affecting its patient management system. The provider needs to determine the users impacted to mitigate disruption effectively. Which CSDM-related data should they leverage?",
  options: shuffle([
    "Service Offerings by Department or Location",
    "Affected CI task_ci related list",
    "Application Service environment attribute",
    "Incident history of similar CIs"
  ]),
  answer: [
    "Affected CI task_ci related list"
  ]
},
{
  type: "mcq",
  question: "A CMDB Administrator wants to remove all Linux Servers in the organization that have not been updated in six months. Which recommended action does the Administrator take in Data Manager?",
  options: shuffle([
    "Create a business rule",
    "Create a scheduled job",
    "Create an archive policy"
  ]),
  answer: ["Create an archive policy"]
},
{
  type: "mcq",
  question: `
<p>
The CMDB Administrator has set up two Dynamic Reconciliation Rules within the ServiceNow Production instance.
The <strong>Server</strong> class has a Dynamic Reconciliation Rule of <em>largest value</em> for the RAM field.
The <strong>Windows Server</strong> class has a Dynamic Reconciliation Rule of <em>most reported</em> for the RAM field.
</p>

<p>The following data exists in the Multisource CMDB:</p>

<table border="1" cellpadding="6" cellspacing="0">
  <thead>
    <tr>
      <th>Discovery Source</th>
      <th>RAM (MB)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tivoli</td>
      <td>4.096</td>
    </tr>
    <tr>
      <td>ServiceNow</td>
      <td>4.096</td>
    </tr>
    <tr>
      <td>LANDesk</td>
      <td>2.048</td>
    </tr>
    <tr>
      <td>Altiris</td>
      <td>8.192</td>
    </tr>
  </tbody>
</table>

<p>Given the above data, which value would be added to the CMDB for RAM for a <strong>Server</strong> CI?</p>
`,
  options: shuffle([
    "2.048 MB",
    "4.096 MB",
    "8.192 MB"
  ]),
  answer: ["8.192 MB"]
},
{
  type: "mcq",
  question: "A CMDB Administrator has installed a Service Graph Connector and customized a script transform. What will happen on subsequent upgrades if the default definition of the script transform is updated?",
  options: shuffle([
    "The upgrade stops and reports an error",
    "A skipped change is created and no change is made to the script transform definition",
    "The Service Graph Connector upgrade refuses to start"
  ]),
  answer: [
    "A skipped change is created and no change is made to the script transform definition"
  ]
},
{
  type: "multiple",
  question: "With CMDB 360/Multisource CMDB, Dynamic Reconciliation Rules are enabled. A CMDB Administrator needs to set up multiple Dynamic Reconciliation Rules. Which Dynamic Rule Types are available within the Create Reconciliation Rule wizard?",
  options: shuffle([
    "Most Reported",
    "Last Created",
    "Last Updated",
    "Smallest Value"
  ]),
  answer: [
    "Most Reported",
    "Last Updated"
  ]
},
{
  type: "multiple",
  question: "Configuration Management needs to ensure data quality for all CIs in the CMDB. What areas of data quality for CIs are in the CMDB Health Dashboard?",
  options: shuffle([
    "Downgraded CIs",
    "Duplicate CIs",
    "Missing CIs",
    "Stale CIs",
    "Upgraded CIs"
  ]),
  answer: [
    "Duplicate CIs",
    "Stale CIs"
  ]
},
{
  type: "mcq",
  question: "An organization is changing data centers and needs to know the consequences of the planned changes. <br> How can Application Service mapping be used as part of Change Management?",
  options: shuffle([
    "To understand the business impact of CIs",
    "To understand the physical location of CIs",
    "To identify which devices will go offline first"
  ]),
  answer: [
    "To understand the business impact of CIs"
  ]
},
{
  type: "multiple",
  question: "A CMDB Administrator has built a number of Technology Management Service Offerings (Technical Service Offerings) based on Dynamic CI Groups to better maintain group alignment for the member CI. <br> Which groups are synced to CIs from the offering that has a relationship to a Dynamic CI Group?",
  options: shuffle([
    "Approval Group",
    "Managed by Group",
    "Support Group",
    "Owned by Group"
  ]),
  answer: [
    "Support Group",
    "Managed by Group"
  ]
},
{
  type: "multiple",
  question: "A Configuration Management Process Owner is preparing solution options for presentation to the technical governance board for ingesting custom CIs to the CMDB. The solution needs to align with best practice, minimize the cost of future work (technical debt), and ensure compliance with future upgrades. <br><br>Which solutions accomplish this?",
  options: shuffle([
    "Repurposing a base CI class and rename attributes, as required",
    "Extending an existing Asset class table to accommodate the custom CI class attributes",
    "Extending an existing CI class table to accommodate the custom CI class attributes",
    "Installing or upgrading the CMDB CI Class Models store application to find a suitable existing CI class accommodating any new attributes"
  ]),
  answer: [
    "Extending an existing CI class table to accommodate the custom CI class attributes",
    "Installing or upgrading the CMDB CI Class Models store application to find a suitable existing CI class accommodating any new attributes"
  ]
},
{
  type: "mcq",
  question: "A CMDB Administrator wants only the CIs of Principal Classes to appear in CI reference fields, such as the CI reference fields accessible from an Incident form. <br><br> Where does the CMDB Administrator designate Principal Classes?",
  options: shuffle([
    "CMDB Data Manager",
    "CI Class Manager",
    "System Properties",
    "CMDB Workspace"
  ]),
  answer: [
    "CI Class Manager"
  ]
},
{
  type: "mcq",
  question: "A new custom class is needed to reflect a new application being managed in the CMDB. Which roles are minimally needed to add this custom CI class?",
  options: shuffle([
    "data_classification_admin and personalizable_dictionary",
    "cmdb_inst_admin and personalize_form",
    "itil_admin and personalize_form",
    "sn_cmdb_admin and personalize_dictionary"
  ]),
  answer: [
    "sn_cmdb_admin and personalize_dictionary"
  ]
},
{
  type: "mcq",
  question: "User endpoint devices are imported into the CMDB and populate the 'Assigned to' [assigned_to] field on the Computer [cmdb_ci_computer] CI. The Asset team must puts in a request for the configuration Analysts to populate the 'Assinged to' field o  the related Asset. <br><br> What action does a Configuration Analyst take to achieve this in an automated way?",
  options: shuffle([
    "Configure a business rule on the Computer table to use a script to populate the 'Assigned to' field on the asset based on insert or update in the computer class 'Assinged to' field",
    "Use the Asset CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI",
    "Hide the 'Assigned to' field on the asset record and create a new field that dot walks to the realted CI to get the 'Assigned to' value"
  ]),
  answer: [
    "Use the Asset CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI"
  ]
},
{
  type: "mcq",
  question: "The CMDB Configuration Manager is using the CI Class Manager to manage the group ownership of CI classes and needs to leverage the ownership value specified in the CI Class Manager. When configuring a CMDB Data Manager policy, which group reference field should be set?",
  options: shuffle([
    "Managed By Group",
    "Approval Group",
    "Support Group",
    "Change Group"
  ]),
  answer: [
    "Managed By Group"
  ]
},
{
  type: "mcq",
  question: "The CMDB Administrator group aims to display meaningful results on the CMDB Health Dashboard Compliance Scorecard for server records that are not on the latest patch. <br>  What must be configured to achieve this goal?",
  options: shuffle([
    "Technical Service Offerings, Dynamic CI Groups, CMDB Groups",
    "Certification Filter, Certification Template, Audit",
    "Stale, Orphan, Duplicate",
    "Certification Policies, Data Filters, Scheduled Jobs"
  ]),
  answer: [
    "Certification Policies, Data Filters, Scheduled Jobs"
  ]
},

      // 61 questions ( 75+61 = 136)
{
  type: "mcq",
  question: "A CMDB Data Owner has requested better insights on the different data sources that make up the CMDB data set. The Platform Owner knows that the new Service Graph Connector Central plugin is just what is needed. <br><br> After installing the plugin, which workspace will have the new Service Graph Connector Central tab available?",
  options: shuffle([
    "Service Graph Connector Workspace",
    "CMDB Workspace",
    "Discovery Admin Workspace"
  ]),
  answer: [
    "CMDB Workspace"
  ]
},
{
  type: "mcq",
  question: "A Configuration Manager needs to enable a CMDB Data Manager policy to remove records from a CI class while retaining the ability to restore them within a specified period. <br> Which policy type should the Configuration Manager create?",
  options: shuffle([
    "Certification",
    "Delete",
    "Retire",
    "Archive"
  ]),
  answer: [
    "Archive"
  ]
},
{
  type: "mcq",
  question: "A Business Relationship Manager in an organization wants to implement Service Portfolio Management (SPM) and to present offerings to business consumers. <br> Which CSDM domain does this align with?",
  options: shuffle([
    "Build and Integration (Build)",
    "Service Consumption (Sell/Consume)",
    "Design and Planning (Design)",
    "Service Delivery"
  ]),
  answer: [
    "Service Consumption (Sell/Consume)"
  ]
},
{
  type: "mcq",
  question: "A Service Owner needs to view related items, such as Active Incidents and Planned Changes, directly on the home node of the Unified Map. Which work area would allow the Service Owner to meet this goal?",
  options: shuffle([
    "Tool box",
    "Map",
    "Contextual side panel",
    "Content controls"
  ]),
  answer: [
    "Contextual side panel"
  ]
},
{
  type: "multiple",
  question: "Which are CMDB Data Manager end‑of‑life policy types?",
  options: shuffle([
    "Retire",
    "Lost",
    "Decommission",
    "Disposed",
    "Archive"
  ]),
  answer: [
    "Retire",
    "Archive"
  ]
},
{
  type: "multiple",
  question: "A CMDB Administrator wants to leverage the CMDB Data Foundations Dashboard. <br> What are benefits of using this application?",
  options: shuffle([
    "Has a framework to create custom metrics for the CMDB",
    "Checks that important data is valid and properly configured",
    "Provides playbooks to assist in the remediation of potential risks",
    "Uses automation to remediate potential risks"
  ]),
  answer: [
    "Checks that important data is valid and properly configured",
    "Uses automation to remediate potential risks"
  ]
},
{
  type: "mcq",
  question: "A CMDB Configuration Manager intends to implement CMDB Data Manager delete and archive policies for all server records in the New York datacenter. <br> In which lifecycle state would servers be affected by these new policies?",
  options: shuffle([
    "End of Life - Retired",
    "Missing - Stolen",
    "Inventory - Available",
    "In any lifecycle state"
  ]),
  answer: [
    "End of Life - Retired"
  ]
},
{
  type: "multiple",
  question: "A Configuration Manager wants to explore ServiceNow CMDB 360 saved queries to see if the reports can assist with managing CMDB data. <br> What insights are gained from CMDB 360 queries?",
  options: shuffle([
    "Unique CIs created from different data sources",
    "Gaps in attribute data from different data sources",
    "Different attribute values from different data sources",
    "Orphan CIs created from different data sources",
    "Duplicate configuration items from different data sources"
  ]),
  answer: [
    "Gaps in attribute data from different data sources",
    "Different attribute values from different data sources"
  ]
},
{
  type: "mcq",
  question: "A Manager needs information on how to correctly establish relationships between Infrastructure CIs, Technology Management Offerings (Technical Service Offerings), and Application Services within the CMDB. <br><br> Which CSDM domain would provide this information?",
  options: shuffle([
    "Build and Integration (Build)",
    "Foundation",
    "Design and Planning (Design)",
    "Service Consumption (Sell / Consume)",
    "Service Delivery (Manage Technical Services)"
  ]),
  answer: [
    "Service Delivery (Manage Technical Services)"
  ]
},
{
  type: "multiple",
  question: "A CMDB Administrator uses the CMDB Data Foundations Dashboard to gain insights into the CMDB. The results display low scores for several metrics. <br><br> Which actions can the CMDB Administrator take to improve the CMDB Health?",
  options: shuffle([
    "Use the Remediation Playbooks linked beside each metric",
    "Focus on metric(s) with Critical and High priorities",
    "Remove non-operational and retired CIs",
    "Adjust the metrics using exclusion rules to improve the scores"
  ]),
  answer: [
    "Use the Remediation Playbooks linked beside each metric",
    "Focus on metric(s) with Critical and High priorities"
  ]
},
{
  type: "mcq",
  question: "A CMDB Administrator needs the fastest time to value solution for effectively ingesting, managing, and maintaining CIs and relationships. <br><br> Which management tool will accomplish this to import Windows computer data from SCCM?",
  options: shuffle([
    "Import set using JDBC data source connection to SCCM using transform maps",
    "SCCM Usage Metering Spoke",
    "SCCM Service Graph Connector",
    "IntegrationHub ETL connection to SCCM using Robust Transform Engine (RTE)"
  ]),
  answer: [
    "SCCM Service Graph Connector"
  ]
},
{
  type: "multiple",
  question: "An organization is updating the CMDB to include new asset types like IoT devices. Relevant CI classes need to be added and outdated ones removed from the Principal Class filter to ensure accurate display in ITSM processes. <br><br> Which roles are needed to add or remove classes?",
  options: shuffle([
    "cmdb_query_builder",
    "personalize_dictionary",
    "sn_csdm_admin",
    "sn_cmdb_admin"
  ]),
  answer: [
    "personalize_dictionary",
    "sn_cmdb_admin"
  ]
},
{
  type: "mcq",
  question: "A Configuration Management team wants to confirm that all servers in the CMDB are correctly associated with their location. <br><br> Which CMDB Data Manager policy type does the team create?",
  options: shuffle([
    "Retire",
    "Delete",
    "Attestation",
    "Certification",
    "Archive"
  ]),
  answer: [
    "Certification"
  ]
},
{
  type: "mcq",
  question: `
<p>
The <strong>Server</strong> [cmdb_ci_server] class uses a dynamic reconciliation rule of
<strong>lowest value</strong> for the <em>Disk Space (GB)</em> field, while the
<strong>Windows Server</strong> [cmdb_ci_win_server] class uses a dynamic reconciliation rule of
<strong>most reported</strong> for the <em>Disk Space (GB)</em> field.
</p>

<p>
Given the following data sources that populate Windows Server data into the CMDB 360 / Multisource CMDB:
</p>

<table border="1" cellpadding="6" cellspacing="0">
  <thead>
    <tr>
      <th>Data Source</th>
      <th>Disk Space (GB)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tivoli</td>
      <td>75</td>
    </tr>
    <tr>
      <td>ServiceNow</td>
      <td>75</td>
    </tr>
    <tr>
      <td>LANDesk</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Altiris</td>
      <td>80</td>
    </tr>
  </tbody>
</table>

<p>
Which value would be added to the CMDB for the <em>Disk Space (GB)</em> field of a
Windows Server [cmdb_ci_win_server] record?
</p>
`,
  options: shuffle([
    "80",
    "75",
    "50"
  ]),
  answer: [
    "75"
  ]
},
{
  type: "mcq",
  question: "A retail organization needs to ensure that incidents affecting customer-facing services are resolved quickly to reduce potential revenue loss. <br><br> Which CSDM attribute is used to prioritize these services?",
  options: shuffle([
    "Assignment Group on the CI record",
    "Affected CIs in the Incident record",
    "Service classification in the Technical Service",
    "Business Criticality in the Service Offering"
  ]),
  answer: [
    "Business Criticality in the Service Offering"
  ]
},
{
  type: "mcq",
  question: "The Change Management team in an organization wants to implement a Change across multiple CIs at the same time. <br><br> Which field on the Change Request form needs to be populated with a Dynamic CI Group?",
  options: shuffle([
    "Configuration Item",
    "Business Service",
    "Service Offering"
  ]),
  answer: [
    "Configuration Item"
  ]
},
{
  type: "mcq",
  question: "A company wants to track regulatory compliance. ServiceNow has an artifact type called an Information Object as part of the CSDM framework. <br><br>What is the purpose of an information object?",
  options: shuffle([
    "It describes data in general on a group of Configuration Items",
    "It describes the logical data to the Business Applications",
    "It describes data exchanged between an API interface and an Application"
  ]),
  answer: [
    "It describes the logical data to the Business Applications"
  ]
},
{
  type: "mcq",
  question: "A CMDB Administrator is working in the CI Class Manager on the Basic Info tab. <br> How can the class be set as a Principal Class?",
  options: shuffle([
    "Click the Principal Class UI Action button",
    "Check the Principal Class check box",
    "Select 'Yes' from the Principal Class choice list"
  ]),
  answer: [
    "Check the Principal Class check box"
  ]
},
{
  type: "mcq",
  question: "A Configuration Manager is implementing end-to-end service modeling and wants help on status and playbooks for improving quality. <br><br> What does the Configuration Manager reference to obtain guidance?",
  options: shuffle([
    "CMDB Data Foundation Dashboard",
    "CMDB Workspace",
    "CSDM Data Foundation Dashboard",
    "Service Mapping Data Foundation Dashboard"
  ]),
  answer: [
    "CSDM Data Foundation Dashboard"
  ]
},
{
  type: "multiple",
  question: "The Incident Process Owner asks which classes of CSDM are used on the Incident form.  <br>Which classes are appropriate?",
  options: shuffle([
    "Business Application",
    "Service Offering",
    "Application Service",
    "Service Portfolio"
  ]),
  answer: [
    "Service Offering",
    "Application Service"
  ]
},
{
  type: "mcq",
  question: "A CMDB Administrator needs to configure a new application identification rule that considers the potential for the same application installed more than once on the same server. <br><br>Which is the best choice of a criterion attribute?",
  options: shuffle([
    "Configuration File Name",
    "Configuration File Path",
    "Class",
    "Version",
    "Port"
  ]),
  answer: [
    "Configuration File Path"
  ]
},
{
  type: "mcq",
  question: "A CMDB CI Class Owner responsible for the Windows Servers needs to manage the Windows Server class. <br> Which CI Class Manager feature will help the CI Class Owner streamline this task?",
  options: shuffle([
    "Search CI Classes",
    "Pinned Classes",
    "CI Favorites"
  ]),
  answer: [
    "Pinned Classes"
  ]
},
{
  type: "mcq",
  question: "A CMDB Administrator needs to prevent duplicate CI creation from import sets that load data into the CMDB from vendor shipment files containing CI information. <br><br> How can the Administrator do this?",
  options: shuffle([
    "Create comparison rules in the IRE",
    "Use the CMDBTransformUtil API in the transform script",
    "Set the system property to utilize the IRE within transform maps",
    "Set the coalesce on two mappings within the transform map"
  ]),
  answer: [
    "Set the coalesce on two mappings within the transform map"
  ]
},
{
  type: "match",
  question: "The CMDB Health Dashboard is based on three Key Performance Indicators (KPIs): Correctness, Compliance, and Completeness. Each KPI includes several sub-metrics. <br><br>Drag the sub-metrics to the KPI. <br><br> <i style='color: red;'>Some options may not apply</i>",
  options:shuffle([
    "Audit",
    "Stability",
    "Required",
    "Certify",
    "Suggested",
    "Orphan"
  ]),
  answers: [
    {
      label: "Completeness",
      correct: "Required"
    },
    {
      label: "Compliance",
      correct: "Audit"
    },
    {
      label: "Correctness",
      correct: "Orphan"
    }
  ]
},
 {
  type: "match",
  question: "A CMDB Administrator needs to set up CMDB 360 / Multisource CMDB. <br><br>Drag and drop the system property to the functionality.",
  options:shuffle([
    "Enables CMDB 360",
    "Enables logging for CMDB 360",
    "Enables capturing CMDB 360 data for CIs from CMDB classes",
    "Maximum number of CIs that can be included in a CMDB 360 recompute operation"
  ]),
  answers: [
    {
      label: "glide.identification_engine.multisource_enabled",
      correct: "Enables CMDB 360"
    },
    {
      label: "glide.identification_engine.multisource_cmdb_ci_enabled",
      correct: "Enables capturing CMDB 360 data for CIs from CMDB classes"
    },
    {
      label: "glide.cmdb.logger.source.cmdb_multisource",
      correct: "Enables logging for CMDB 360"
    },
    {
      label: "glide.identification_engine.multisource.recompute.max.ci.limit",
      correct: "Maximum number of CIs that can be included in a CMDB 360 recompute operation"
    }
  ]
},
{
  type: "mcq",
  question: "A CMDB Administrator notices that CIs do not have a support group. <br><br> How can the support group be automatically populated and maintained on the CI record?",
  options: shuffle([
    "Dynamic CI group",
    "Technology Management Service (Technical Service)",
    "CI Class Manager",
    "Technology Management Service Offering (Technical Service Offering)"
  ]),
  answer: [
    "Technology Management Service (Technical Service)"
  ]
},
{
  type: "mcq",
  question: "Where does a user with the appropriate role(s) review and manage the generated tasks after configuring CMDB Data Manager policies?",
  options: shuffle([
    "CMDB Health Dashboard > Duplicate CIs tab",
    "CMDB Workspace > My Work tab",
    "CMDB Workspace > Management tab",
    "CMDB Health Dashboard > Audit tab"
  ]),
  answer: [
    "CMDB Workspace > My Work tab"
  ]
},
{
  type: "multiple",
  question: "A global enterprise integrates data from multiple discovery sources such as ServiceNow Discovery, SCCM, AWS, and manual uploads to populate its CMDB. <br><br> However, each discovery source categorizes the same CI class differently, leading to duplicate records and inconsistencies across the system.  <br><br>What actions does the CMDB team take to resolve this issue?",
  options: shuffle([
    "Use CI Class Manager to establish standardized CI classes and attributes across all discovery sources",
    "Allow each discovery source to define its own CI class, even if it results in inconsistencies",
    "Implement and use identification and reconciliation rules to avoid duplicates and standardize CI classification",
    "Create a custom script to manually adjust incoming data before storing it in the CMDB"
  ]),
  answer: [
    "Use CI Class Manager to establish standardized CI classes and attributes across all discovery sources",
    "Implement and use identification and reconciliation rules to avoid duplicates and standardize CI classification"
  ]
},
{
  type: "mcq",
  question: "A Configuration Manager working in the CMDB Workspace wants to see how CIs are connected to each other. <br> <br>Which tool can be used?",
  options: shuffle([
    "Relationship Map",
    "Unified Map",
    "Business Service Map"
  ]),
  answer: [
    "Relationship Map"
  ]
},
{
  type: "mcq",
  question: "A CMDB team has noticed that some hardware CIs are missing the serial number information, making it difficult to maintain data accuracy. <br><br> The team needs a structured approach to identify and address these gaps. <br><br> Which accomplishes this task?",
  options: shuffle([
    "CMDB Data Foundation Playbook",
    "CI Class Manager",
    "Service Graph Connectors"
  ]),
  answer: [
    "CMDB Data Foundation Playbook"
  ]
},
{
  type: "multiple",
  question: "A ServiceNow Administrator wants to implement Service Graph Connectors to provide integrations to many third-party solutions that the company wants integrated into the CMDB.  <br><br>Which categories of connectors are available to the Administrator?",
  options: shuffle([
    "Workflow Automation",
    "Cloud",
    "DevOps",
    "Observability"
  ]),
  answer: [
    "Cloud",
    "Observability"
  ]
},
{
  type: "mcq",
  question: "Using CI Class Manager, the Tomcat identification rule has the following criterion attributes configured: <ul><li>Class</li><li>Install Directory</li></ul> Which identifier entry configuration option should be enabled to allow a match using the Application identification rule if no match is found with the Tomcat identification rule?",
  options: shuffle([
    "Applies to",
    "Independent",
    "Allow fallback to parent's rules",
    "Criterion attributes"
  ]),
  answer: [
    "Allow fallback to parent's rules"
  ]
},
{
  type: "mcq",
  question: "A Configuration Management team needs to prevent duplicate server records to avoid confusion among users. Server records are identified when they are processed via the Identification and Reconciliation Engine (IRE) using the configured identification rules.  <br><br>Where would these rules be configured?",
  options: shuffle([
    "CMDB Health Dashboard",
    "CMDB Workspace",
    "CMDB CI Class Manager",
    "CMDB Data Manager"
  ]),
  answer: [
    "CMDB CI Class Manager"
  ]
},
{
  type: "mcq",
  question: "The CMDB Administrator has been asked to establish Configuration Management with a functional CMDB. <br><br> Which factor is most critical for successfully operationalizing the CMDB in ServiceNow?",
  options: shuffle([
    "Establishing clear governance and continuously monitoring CMDB health",
    "Relying on automated discovery tools to maintain and update CMDB records",
    "Populating the CMDB with as much data as possible to ensure a comprehensive inventory of CIs",
    "Allowing IT teams to modify CMDB records as needed to promote flexibility in data management"
  ]),
  answer: [
    "Establishing clear governance and continuously monitoring CMDB health"
  ]
},
{
  type: "mcq",
  question: "A Configuration Management Process Owner needs to configure Data Manager for policy tasks to be correctly assigned and aligned with the group attribute assigned to a class in CI Class Manager.  <br><br>Which is the recommended field to be used for a policy task assignment?",
  options: shuffle([
    "Approval group",
    "Managed by group",
    "Change group",
    "Support group"
  ]),
  answer: [
    "Managed by group"
  ]
},
{
  type: "mcq",
  question: "A CMDB CI Class Owner has been asked to change the icon for the UNIX Server class. <br><br> Which CI Class Manager tab can the owner use to change the icon for the class?",
  options: shuffle([
    "Basic Info",
    "Suggested Relationships",
    "CI List",
    "Attributes"
  ]),
  answer: [
    "Basic Info"
  ]
},
{
  type: "multiple",
  question: "An organization is using CMDB Query Builder to find all application services with a database that has incidents and all infrastructure in those application services. <br><br> Which steps does the organization take to build this query?",
  options: shuffle([
    "Add a non-CMDB table to the query",
    "Use a Service Mapping Query to include non-CMDB tables like the Incident table",
    "Use a Service Mapping Query to find all incidents related to the database",
    "Use a CMDB Query to include application services and their related infrastructure"
  ]),
  answer: [
    "Use a Service Mapping Query to find all incidents related to the database",
    "Use a CMDB Query to include application services and their related infrastructure"
  ]
},
{
  type: "mcq",
  question: "A Configuration Manager responsible for a specific region wants to use the CMDB Health Dashboard to improve the data quality of the CMDB for that region. The Configuration Manager only sees the overall score and grouped by CI Class. <br><br>How can the Configuration Manager get a score for regionally relevant CIs?",
  options: shuffle([
    "Create CMDB groups with type, health, by region",
    "Customize the CMDB Health Dashboard scheduled jobs to group the results by region",
    "On the CMDB health settings, activate the option 'Group scores by region'"
  ]),
  answer: [
    "Create CMDB groups with type, health, by region"
  ]
},
{
  type: "mcq",
  question: "The CMDB Administrator group seeks to filter specific CI classes that display on the CMDB Health Dashboard. This ensures that only relevant data is displayed, excluding items that are not ready for management.  <br><br> Which feature can the group utilize to achieve this goal?",
  options: shuffle([
    "Health Inclusion Rules",
    "Data Refresh Rules",
    "Reconciliation Rules",
    "Identification Rules"
  ]),
  answer: [
    "Health Inclusion Rules"
  ]
},
{
  type: "mcq",
  question: "Which shows the most complete list of policy types that are provided by the CMDB Data Manager?",
  options: shuffle([
    "Retire, Archive, Attestation, Certification, and Delete",
    "Archive and Delete",
    "Delete, Attestation, Retire, and Certification",
    "Attestation, Retire, and Certification"
  ]),
  answer: [
    "Retire, Archive, Attestation, Certification, and Delete"
  ]
},
{
  type: "mcq",
  question: "A CMDB Administrator wants to leverage dynamic reconciliation rules. Which feature must be enabled?",
  options: shuffle([
    "Reconciliation Rules",
    "CMDB Workspace",
    "CMDB Data Manager",
    "CMDB 360/Multisource CMDB"
  ]),
  answer: [
    "CMDB 360/Multisource CMDB"
  ]
},
{
  type: "multiple",
  question: "How is the CMDB aligned to business processes?",
  options: shuffle([
    "Extends service delivery management to all enterprise departments",
    "Enhances decision-making and operational efficiency across the organization",
    "Enables the CFO/CIO to track software licenses",
    "Provides a centralized view of configuration items and their relationships"
  ]),
  answer: [
    "Enhances decision-making and operational efficiency across the organization",
    "Provides a centralized view of configuration items and their relationships"
  ]
},
{
  type: "mcq",
  question: "A Configuration Manager needs to ingest third-party CIs into the CMDB. <br><br> Which method minimizes the risk of technical debt?",
  options: shuffle([
    "Table API",
    "Vendor-provided integration",
    "Service Graph Connector",
    "Import Sets and Transform Maps"
  ]),
  answer: [
    "Service Graph Connector"
  ]
},
{
  type: "mcq",
  question: "How does a CMDB Administrator use the ServiceNow Platform to ensure the data quality associated with CIs in the CMDB?",
  options: shuffle([
    "Data Quality Business Rule",
    "CMDB Workspace",
    "Data Quality Scheduled Job",
    "CMDB Audit Business Rule"
  ]),
  answer: [
    "Data Quality Scheduled Job"
  ]
},
{
  type: "mcq",
  question: "The ITSM Manager wants to use Technology Management Offerings (Technical Service Offerings) to populate the support group of associated CIs.  <br><br>What CSDM stage would this be completed in?",
  options: shuffle([
    "Crawl",
    "Run",
    "Fly",
    "Walk",
    "Foundation"
  ]),
  answer: [
    "Run"
  ]
},
{
  type: "mcq",
  question: "A Configuration Manager is reviewing the life cycle of CIs to ensure data accuracy, consistency, and relevance. The manager reviews the legacy status values and their equivalent CSDM life cycle stage and life cycle stage status values. <br><br> Where are these reviewed?",
  options: shuffle([
    "Life cycle properties",
    "Life cycle choice list",
    "Life cycle mappings"
  ]),
  answer: [
    "Life cycle mappings"
  ]
},
{
  type: "multiple",
  question: "A CMDB Administrator is using the Duplicate CI Remediator to address a de-duplication task. On the first tab of the wizard, the Main CI is selected. <br><br> Which attributes are used to identify the Main CI?",
  options: shuffle([
    "Oldest Created",
    "Newest Created",
    "Least Related Items",
    "Most Related Items"
  ]),
  answer: [
    "Oldest Created",
    "Most Related Items"
  ]
},
{
  type: "mcq",
  question: "A CMDB Administrator wants to use the CMDB and CSDM Data Foundations Dashboard. Where can the Administrator obtain the dashboard?",
  options: shuffle([
    "It is a free application on the ServiceNow Innovation Lab",
    "It is a paid application on the ServiceNow Store",
    "It is a free application on the ServiceNow Store",
    "It is active by default"
  ]),
  answer: [
    "It is a free application on the ServiceNow Store"
  ]
},
{
  type: "match",
  question: "A Platform Owner is building the governance team to support the CSDM. Drag the domain to the roles that make up the governance team.",
  options:shuffle([
    "Design Domain",
    "Foundation Domain",
    "Portfolio Domain",
    "Technical Domain"
  ]),
  answers: [
    {
      label: "Service Owner(s), Platform Owner",
      correct: "Foundation Domain"
    },
    {
      label: "Technology Service Owner(s), Application Service Owner(s), Platform Owner",
      correct: "Portfolio Domain"
    },
    {
      label: "Enterprise Architect(s), Platform Owner",
      correct: "Design Domain"
    },
    {
      label: "Enterprise Architect(s), Data Steward(s), Process Owner(s), Platform Owner",
      correct: "Technical Domain"
    }
  ]
},
{
  type: "match",
  question: "An Enterprise Architect needs to help the CMDB owner understand the benefits of CSDM. Drag the CSDM domains to the respective benefits.",
  options: shuffle([
    "Foundation",
    "Design and Planning",
    "Service Consumption",
    "Service Delivery"
  ]),
  answers: [
    {
      label: "Use the base system tables when implementing the CSDM to derive the highest value from ServiceNow products and the Now Platform",
      correct: "Foundation"
    },
    {
      label: "Understand CIs related to business applications and related capabilities, identify redundancies, monitor costs, and make better investment decisions around roadmap planning",
      correct: "Design and Planning"
    },
    {
      label: "Understand business services and ownership, cost, scope of what is offered to the business/consumer, and request access to the business services",
      correct: "Service Consumption"
    },
    {
      label: "Understand technical services, technical service offerings, service support, and all relationships to underlying technology CIs",
      correct: "Service Delivery"
    }
  ]
},
{
  type: "mcq",
  question: "A CMDB Administrator, viewing the CMDB Data Foundations Dashboard, notices the Unique Locations Result percentage low.<br><br> What is the recommended process from the associated playbook to correct this issue?",
  options: shuffle([
    "Retain the location that matches the organization's standard naming convention, and delete the duplicate without further validation",
    "Keep both locations as either can be used as a valid alternate location",
    "Review both locations, update CIs with the correct location and delete the duplicate location",
    "Use the Duplicate CI Remediator to merge the duplicate location records"
  ]),
  answer: [
    "Review both locations, update CIs with the correct location and delete the duplicate location"
  ]
},
{
  type: "multiple",
  question: "A CMDB Manager wants to start adding CSDM design and planning (design) domain components into the CMDB. Who is involved in this exercise?",
  options: shuffle([
    "Application Service Owner",
    "Application Owner",
    "Enterprise Architect",
    "Business Relationship Manager"
  ]),
  answer: [
    "Application Owner",
    "Enterprise Architect"
  ]
},




];
