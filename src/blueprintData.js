// Baseline transcription from the Sarawak Digital Economy Blueprint 2030 (2023).
// Page numbers are the printed Blueprint pages, not PDF viewer indices.

export const LAST_UPDATED = "2026-08-10";

export const BLUEPRINT_META = {
  title: "Sarawak Digital Economy Blueprint 2030",
  issuer: "Sarawak Government",
  publishers: [
    "Economic Planning Unit Sarawak, Department of the Premier of Sarawak",
    "Sarawak Multimedia Authority",
  ],
  firstPublished: 2023,
  pillars: 5,
  strategicActions: 31,
  initiatives: 106,
  sourceNote: "Baseline commitments transcribed from Sarawak Digital Economy Blueprint 2030 (2023). This source does not verify current implementation status.",
};

export const BLUEPRINT_OUTCOMES = [
  "Create between 39,000 to 48,750 new semi and high-skilled digital jobs",
  "Achieve 50% growth in investment and partnerships",
  "Achieve 96% high-speed connectivity throughout Sarawak",
  "Achieve 20% Digital Economy contribution to Sarawak’s GDP by 2030 (RM56.4 billion)",
  "Achieve RM4,000 average contribution from digital economy to household income",
  "Create 500 high-tech start-ups",
  "Achieve 100% online service delivery and improved ease of doing business",
];

export const ROADMAP_PHASES = [
  { year: 2025, name: "Strengthen Digital Readiness", targets: ["100% conducive digital policies and regulatory framework", "50% online government services", "94% high-speed connectivity", "80% competent & agile digital workforce", "Operationalise cyber security framework", "Operationalise InvestSarawak – ICT Investment"] },
  { year: 2027, name: "Accelerate Digital Transformation", targets: ["80% online government services", "100% cashless payment option by ministries/agencies", "100% digitally literate civil servants", "200 high-tech start-ups", "Establish digital accelerator in each ministry/agency", "All students to have access to online learning"] },
  { year: 2030, name: "Digitally Developed Sarawak", targets: ["100% online government services", "20% contribution to Sarawak GDP (RM56.4 billion)", "39,000-48,750 new skilled jobs", "96% of the household with access to high-speed internet", "Equitable access to opportunities and inclusive digital society", "50% growth in digital investment", "80% digitally literate society", "500 new high-tech start-ups", "80% of the MSMEs digitalised"] },
];

const RAW_PILLARS = [
  {
    "id": "pillar-1",
    "name": "Economic Growth Priorities",
    "actions": [
      {
        "id": "p1-s1",
        "name": "Support the development and commercialisation of technology-enabled platform to drive growth opportunities",
        "initiatives": [
          {
            "pillar": "Economic Growth Priorities",
            "action": 1,
            "actionName": "Support the development and commercialisation of technology-enabled platform to drive growth opportunities",
            "number": 1,
            "name": "e-Commerce & Fintech Platform",
            "objective": "The objectives of this initiative are: • To increase Sarawak Economy ecosystem and improve household income per capita; and • To provide assistance to local entrepreneur to leverage online platform for businesses.",
            "description": "The e-Commerce and Fintech platform initiative is to consolidate and establish the State Integrated e-Commerce Platform through collaborations, Joint- Venture and smart partnership with the existing e-Commerce platforms such as Shopee, Lazada, Alibaba, Amazon etc. This will contribute to provide multiple e-Commerce channel for local entrepreneurs to market their products and uplifting their income.",
            "outcomes": "The local entrepreneurs will have equal opportunities to utilise the digital entrepreneurs platform in uplifting their income per capital and socioeconomic status.",
            "target": "30,000 new local entrepreneurs recruited by end of year 2030.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "SDEC",
              "EPU",
              "Private Sector",
              "SAINS"
            ],
            "horizon": "medium",
            "blueprintPage": 89
          },
          {
            "pillar": "Economic Growth Priorities",
            "action": 1,
            "actionName": "Support the development and commercialisation of technology-enabled platform to drive growth opportunities",
            "number": 2,
            "name": "Sarawak Integrated Operation Centre (SIOC)",
            "objective": "The objectives of this initiative are: • To establish digital infrastructure to cater big data, data analytics, security and surveillance, traffic management and as an Operating System (OS) for smart city management in Sarawak; and • To facilitate public feedbacks, emergency and rescue operations, disaster management and war room for special operations.",
            "description": "The establishment of the Sarawak Integrated Operation Centre (SIOC) started in 2019 and is expected to be completed by the end of 2025. SIOC will provide comprehensive controlling and management environment for State Government to coordinate and organise day-to-day activities and to facilitate decision making by the Sarawak Government.",
            "outcomes": "Efficient centralised management of cities in the State.",
            "target": "Centralised Integrated Operation Centre to coordinate, monitor and manage the day-to-day operations/businesses of government agencies, private and public.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "SMA",
              "SCSDU",
              "STIU"
            ],
            "horizon": "medium",
            "blueprintPage": 89
          }
        ]
      },
      {
        "id": "p1-s2",
        "name": "Facilitate the adoption of new business models to boost productivity, create jobs and grow businesses",
        "initiatives": [
          {
            "pillar": "Economic Growth Priorities",
            "action": 2,
            "actionName": "Facilitate the adoption of new business models to boost productivity, create jobs and grow businesses",
            "number": 3,
            "name": "Enhancement of Sarawak Travel Portal and Application",
            "objective": "The objectives of this initiative are: • To develop single window for Sarawak tourism industry for effective information sharing and dissemination on tourist attraction places in Sarawak; and • To include e-Commerce function and features into existing platform to accommodate the tourism industry business needs.",
            "description": "An enhancement of the existing tourism portal and applications to include e-Commerce features and functions and to leverage on S Pay Global (e-Wallet) platform for payment gateway. The platform would be developed in web base and mobile application.",
            "outcomes": "Sarawak Travel App, an effective tool for industry players to develop, manage, and distribute tourism product and services globally, and grow visitor economy.",
            "target": "Single platform to support the tourism industry in Sarawak.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "MTCP",
              "STB",
              "Private Sector"
            ],
            "horizon": "short",
            "blueprintPage": 90
          },
          {
            "pillar": "Economic Growth Priorities",
            "action": 2,
            "actionName": "Facilitate the adoption of new business models to boost productivity, create jobs and grow businesses",
            "number": 4,
            "name": "Visitor Tracking System at National Parks",
            "objective": "The objectives of this initiative are: • To develop comprehensive tourist management system for National Parks in the State; and • To monitor the tourist movement/activities in the parks.",
            "description": "The development of visitors tracking system is to provide holistic platform for SFC in managing National Parks in the state. This system will be integrated with other systems (e-ticketing, e-booking) and big data platform, data analytic tools for analysis and to guide the Ministry of Tourism in planning purposes.",
            "outcomes": "100% secure, smart, convenient and connected tourist centric system at Bako National Park via Visitor Tracking App.",
            "target": "Unified tracking systems at National Parks in Sarawak for easy management and to facilitate the SFC on future planning and decision making.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "FD",
              "SFC",
              "Private Sector",
              "MTCP"
            ],
            "horizon": "short",
            "blueprintPage": 90
          },
          {
            "pillar": "Economic Growth Priorities",
            "action": 2,
            "actionName": "Facilitate the adoption of new business models to boost productivity, create jobs and grow businesses",
            "number": 5,
            "name": "Visitor Management System",
            "objective": "The objectives of this initiative are: • To ensure effective management and monitoring of visitors entering Sarawak; • To provide accurate landing visitor’s information, reduce operational cost and increase the efficiency for internal functionality and processes; and • To establish comprehensive open access tourism database.",
            "description": "The Visitor Management System is a comprehensive platform for the Ministry of Tourism, Creative Industry and Performing Arts Sarawak (MTCP) and other stakeholders to view, manage, monitor, and process the landing visitor’s information and increase the efficiency of relevant frontline authorities at all Airports in Sarawak.",
            "outcomes": "• Master directory and inventory of visitors and tourist agents’ activities in Sarawak throughout the year; and • 60% contribution to tourism industry revenue.",
            "target": "Holistic platform to monitor and process visitors’ information.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "MTCP"
            ],
            "horizon": "medium",
            "blueprintPage": 91
          },
          {
            "pillar": "Economic Growth Priorities",
            "action": 2,
            "actionName": "Facilitate the adoption of new business models to boost productivity, create jobs and grow businesses",
            "number": 6,
            "name": "Development of Digital Economy Policy, Procedure and Guideline (PPG)",
            "objective": "The objective of this initiative is to ensure that PPGs document related to communication and multimedia activities in Sarawak are developed, well- managed and published as a standard documents and guidance for government agencies, private and individual in Sarawak.",
            "description": "This initiative aims to develop comprehensive policies, procedures, guidelines and regulations on communication and multimedia activities in Sarawak. It is also to ensure the compliances from all government agencies, private and individual in Sarawak in carrying out any programmes, projects/ initiatives related to Digital Economy and digital government.",
            "outcomes": "Effective implementation of the initiatives related to communication and multimedia in the State to support the aspiration of the State Government to achieve high income status by year 2030.",
            "target": "Relevant Digital Economy PPGs developed, endorsed and issued.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "SMA",
              "SCSDU",
              "STIU"
            ],
            "horizon": "short",
            "blueprintPage": 91
          }
        ]
      },
      {
        "id": "p1-s3",
        "name": "Strengthen efficient framework to increase data creation, access, sharing, innovation and monetisation",
        "initiatives": [
          {
            "pillar": "Economic Growth Priorities",
            "action": 3,
            "actionName": "Strengthen efficient framework to increase data creation, access, sharing, innovation and monetisation",
            "number": 7,
            "name": "State Intellectual Property Framework",
            "objective": "The objectives of this initiative are: • To protect and secure intellectual property related to communication and multimedia; • To promote favourable climate for Foreign Direct Investment into the State; and • To foster the creation of disruptive innovation in products, processes and/or services that will drive the State socio-economic growth.",
            "description": "SMA will be the central body to manage and coordinate the protection of the Sarawak Government Agencies and Community Intellectual Property Right via filing of Copyright (CC), Trademark (TM), Geographical Indication (GI), Patent, Utility Innovation, Industrial Design, Integrated Circuit Layout Design and Plant Varieties.",
            "outcomes": "• 100% multimedia and telecommunication IPs registered; • Monetising IPs to generate revenue for the State Government; and • Contribute towards 8% economic growth for Sarawak.",
            "target": "Efficient IP management and commercialization platform.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "SMA"
            ],
            "horizon": "medium",
            "blueprintPage": 92
          },
          {
            "pillar": "Economic Growth Priorities",
            "action": 3,
            "actionName": "Strengthen efficient framework to increase data creation, access, sharing, innovation and monetisation",
            "number": 8,
            "name": "Data Monetisation",
            "objective": "The objective of this initiative is to provide comprehensive frameworks and initiatives for data monetisation, maximise data usage and facilitate data sharing by agencies.",
            "description": "The initiative will encompass the development of the frameworks, standard operating procedures and regulations for the monetisation of the data owned by the Sarawak Government.",
            "outcomes": "Contribute 8% per annum.",
            "target": "• Standardised framework for data monetisation; and • Guidelines for data gathering, sharing and commercialisation.",
            "timeline": "2022 - 2030",
            "leadAgencies": [
              "Agencies",
              "Private Sector",
              "SDEC",
              "SAINS"
            ],
            "horizon": "long",
            "blueprintPage": 92
          },
          {
            "pillar": "Economic Growth Priorities",
            "action": 3,
            "actionName": "Strengthen efficient framework to increase data creation, access, sharing, innovation and monetisation",
            "number": 9,
            "name": "Geographical Information System for Agriculture",
            "objective": "The objectives of this initiative are: • To provide platform to capitalise on the use of Geographic Information System (GIS) and spatial- based analytics to improve yield and quality of food/ agriculture production and products; • To increase the efficiency of conducting study and research related to soil fertility; and • To consolidate satellite images, aerial photogrammetry and GIS data for agriculture application.",
            "description": "The initiative is to develop a comprehensive system for geotechnical engineering and agriculture to support data analyst to improve agriculture produce. It also aims to facilitate geotechnical engineer to conduct investigation, study, research for engineering works and design.",
            "outcomes": "• Improved yield and quality of food/ agriculture production and products, geotechnical engineering works and design; and • 80% efficiency improvement of the GIS platform.",
            "target": "Comprehensive system for geotechnical engineering and agriculture.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "M-FICORD",
              "JKR",
              "SDEC",
              "SAINS"
            ],
            "horizon": "short",
            "blueprintPage": 93
          },
          {
            "pillar": "Economic Growth Priorities",
            "action": 3,
            "actionName": "Strengthen efficient framework to increase data creation, access, sharing, innovation and monetisation",
            "number": 10,
            "name": "Online International Journal of Business Events and Legacies",
            "objective": "The objective of this initiative is to provide one stop centre and an open access journal that aims to publish original research and industry viewpoint articles on business event issues from various events.",
            "description": "This initiative aims to publish industry viewpoint articles on business event and tourism event such as Meetings, Incentives, Conferences, and Exhibitions (MICE), business matching ideas, and economic, social and tourism legacies. All journal, research and industry viewpoint articles consist of all disciplinary perspectives and papers will share information that address contemporary issues to advance theory and practice.",
            "outcomes": "Increase the efficiency of information sharing among researchers.",
            "target": "Open Access journal that are widely used by business event planners, industry and academia.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "MTCP",
              "BES"
            ],
            "horizon": "short",
            "blueprintPage": 93
          }
        ]
      },
      {
        "id": "p1-s4",
        "name": "Strengthen capabilities and infrastructure for data hosting, processing and data interoperability",
        "initiatives": [
          {
            "pillar": "Economic Growth Priorities",
            "action": 4,
            "actionName": "Strengthen capabilities and infrastructure for data hosting, processing and data interoperability",
            "number": 11,
            "name": "Data Centre and Services",
            "objective": "The objective of this initiative is to establish secured data infrastructure and cloud data security including hardware and software for storing, processing and analysing data.",
            "description": "The establishment of big data infrastructure that entails the tools and agents that collect data, the software systems and physical storage media, network, and the application environments with analytics tools to analyse data. Setup of data dictionary (data cataloging), data warehouse and data exchange platform for data sharing between Sarawak Civil Service and data driven decision making in SCS. It is also to attract investment in Data Centre in Sarawak from local and international players.",
            "outcomes": "• Increased cross border flow; • 100% state data utilisation (data from data lake, data warehouse and data mart); and • Catalyst for providing Sarawak as a safe and secure place for data storage and services.",
            "target": "• 3 Data Centre are established by global companies; • Centralised, shared big data processing infrastructure; and • Data monetisation services.",
            "timeline": "2021 - 2027",
            "leadAgencies": [
              "SDEC",
              "SAINS",
              "Private Sector"
            ],
            "horizon": "medium",
            "blueprintPage": 94
          },
          {
            "pillar": "Economic Growth Priorities",
            "action": 4,
            "actionName": "Strengthen capabilities and infrastructure for data hosting, processing and data interoperability",
            "number": 12,
            "name": "Development and Implementation of Blockchain Capability",
            "objective": "The objective of this initiative is to study the implementation of blockchain technology solutions in the current digital economy initiatives platform such as digital identity, financial technology, big data, cyber security and IoT.",
            "description": "A blockchain technology is widely used to accelerate the transaction processes, quicker, cheaper, secure and more efficient, while using less energy and preventing duplication of effort on information sharing.",
            "outcomes": "• Efficient, effective, and secure service delivery for both public & government sectors; and • Accurate and reliable information from the primary source.",
            "target": "Comprehensive study and implementation of blockchain solutions across government platforms.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "SMA",
              "SDEC",
              "SAINS",
              "Private Sector"
            ],
            "horizon": "medium",
            "blueprintPage": 94
          }
        ]
      },
      {
        "id": "p1-s5",
        "name": "Accelerate digitalisation of priority economic sectors",
        "initiatives": [
          {
            "pillar": "Economic Growth Priorities",
            "action": 5,
            "actionName": "Accelerate digitalisation of priority economic sectors",
            "number": 13,
            "name": "Smart Farming",
            "objective": "The objectives of this initiative are: • Promote and encourage adoption of technologies in agriculture sector; and • Ensure the transformation of agriculture sector through digital technologies and green environment.",
            "description": "The initiatives consist of: • The Smart Farming project to accelerate the transformation of agricultural sector by adoption of digital technologies and solutions; • Implementation of IoT Smart Farming at all Agriculture Stations in the State; and • Centralised open data platform among industry players.",
            "outcomes": "Increased smart farming adoption and generate new business line via data sharing/open data initiatives.",
            "target": "• 50% increase in agriculture yield; • 40% increase in farmer’s household income; and • Reduce labour operation costs by 40%.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "M-FICORD",
              "DOA",
              "SDEC",
              "Private Sector"
            ],
            "horizon": "medium",
            "blueprintPage": 95
          },
          {
            "pillar": "Economic Growth Priorities",
            "action": 5,
            "actionName": "Accelerate digitalisation of priority economic sectors",
            "number": 14,
            "name": "Adoption of Digital Technologies to increase Productivity",
            "objective": "The objectives of this initiative are: • To establish Industry 4.0 (I4.0) testbeds and collaborative platforms, especially in partnership with technology partners; and • To develop programmes in manufacturing subsectors in particular Micro, Small and Medium (MSMEs).",
            "description": "In the current I4.0, manufacturing sector is exploring the adoption of emerging digital technologies (e.g., IoT, AI, Big data, 3D printing) for improving sustainability, productivity and production efficiency. This initiative focus on how the manufacturing sector can adopt digital technologies successfully and accelerate the digitalisation of MSMEs.",
            "outcomes": "• Contribution towards 20% to Sarawak GDP by 2030; • 40% increase in Small and Medium Enterprises (SMEs) registered in Sarawak; • Increase in number of SMEs adopting digital platform; • Greater access to key enabling I4.0 technologies and partners for local MSMEs, along with stronger collaboration in utilising new technologies across value chains; and • Increase in overall productivity growth and worker skills to reduce potential job losses.",
            "target": "• Identified gaps on adoption of latest technology; • 200 MSMEs participation per year; • Increase in the rate of digital adoption in businesses; • Contribution towards 30% increase in labour productivity across all industries; and • Contribute to creation of at least 50 start-ups",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "MINTRED",
              "SDEC",
              "Private Sector"
            ],
            "horizon": "medium",
            "blueprintPage": 95
          },
          {
            "pillar": "Economic Growth Priorities",
            "action": 5,
            "actionName": "Accelerate digitalisation of priority economic sectors",
            "number": 15,
            "name": "Agrotechnology Park Development Programme",
            "objective": "The objectives of this initiative are: • To showcase agrotechnology and their application through smart and precision farming; • To create integrated foundation and ecosystem to facilitate food security, improve efficiency and food distribution; • To support agro-businesses and attract domestic and global investment in production, processing, logistic and supply chain; and • To facilitate research and innovation, training and human capital development.",
            "description": "This initiative will support the planning and operation of agrotechnology park towards a sustainable growth and increase in farmers’ participation and sales in digital marketplace.",
            "outcomes": "• Enhanced food security; • Growth in Agro-based investments and partnerships; • Increase revenue for farmers; • Higher living standards for farmers and social wellbeing; • Improved rural employability; • Significant contribution to Sarawak’s GDP; • Growth in Agro entrepreneurs’ start-ups; and • Reduce food wastage.",
            "target": "• Agrotech Park in each district of Sarawak; • Creation of 50 start-ups in Agro businesses; • Investments and partnership with private sector; and • Contribute to 30% uplift in labour productivity.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "M-FICORD",
              "DOA",
              "Private Sector"
            ],
            "horizon": "medium",
            "blueprintPage": 96
          },
          {
            "pillar": "Economic Growth Priorities",
            "action": 5,
            "actionName": "Accelerate digitalisation of priority economic sectors",
            "number": 16,
            "name": "Digital Tourism",
            "objective": "The objectives of this initiative are: • To establish a comprehensive open database for Sarawak; and • To strengthen digital marketing activities to enable wider connection and engagement with clients and stakeholders.",
            "description": "This initiative focuses on how digital technologies and data are used to organise, manage and enhance traveller experience. This initiative will use all the tools/platform of digital transformation to change on how we travel and how the sector itself operates.",
            "outcomes": "• Higher GDP contribution – accounting for 11% by 2030; • Increased arrivals – 7.5% annual growth rate in visitor arrivals with increased length of stay from 5.5 nights to 7.5 nights; • Employment generation – 25% of total employment in the tourism & hospitality sector; • Accurate and informed decision making by stakeholders and increased innovation in the tourism ecosystem; and • More competitive tourism industry.",
            "target": "• Contribute to creation of at least 50 start-ups by 2030; • Increase in digital adoption rate across business; and • Contribute to 30% uplift in labour productivity across all sectors.",
            "timeline": "2022 - 2030",
            "leadAgencies": [
              "MTCP",
              "SDEC",
              "Private Sector"
            ],
            "horizon": "long",
            "blueprintPage": 96
          },
          {
            "pillar": "Economic Growth Priorities",
            "action": 5,
            "actionName": "Accelerate digitalisation of priority economic sectors",
            "number": 17,
            "name": "Smart Metering System",
            "objective": "The objectives of this initiative are: • To improve reliability, efficiency, performance and quality of service to consumer; and • To increase the uptake of distributed electricity generation.",
            "description": "Smart metering network provision for remote reading feature is established at targeted areas state-wide. Smart metering infrastructure with communication module will enable monitoring and analysis of load profile and meter reading remotely improving efficiency, productivity and cost.",
            "outcomes": "• Providing safe, reliable and 100% coverage for water and electricity; • Reduce non-revenue water to 25% and domestic water consumption; • Better electricity and water network planning; • Improved customer service; • Reduce downtime; and • Improved quality and supply.",
            "target": "• Target 50% of total active customers are installed with smart meters by 2025; and • Timely & accurate bills to customers (targeted approx. 50% of total active customers by 2027).",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "MUT",
              "SEB",
              "JBALB"
            ],
            "horizon": "medium",
            "blueprintPage": 97
          }
        ]
      }
    ]
  },
  {
    "id": "pillar-2",
    "name": "Digital Business Development",
    "actions": [
      {
        "id": "p2-s1",
        "name": "Introduce the dynamic and innovative financial and outcome-based incentives",
        "initiatives": [
          {
            "pillar": "Digital Business Development",
            "action": 1,
            "actionName": "Introduce the dynamic and innovative financial and outcome-based incentives",
            "number": 18,
            "name": "Go Digital Consultancy Program",
            "objective": "The objectives of this initiative are: • To promote productivity, technology integration and innovation, increase access to finance and enhance market access and internationalisation; and • To promote entrepreneurship and human capital development.",
            "description": "Go Digital Consultancy Program focuses on strategic measures and processes to enhance their competitiveness, resilience and innovations such as Micro, Small and Medium Enterprises (MSMEs) on digitalisation.",
            "outcomes": "• Effective use of technology by Micro, Small and Medium Enterprises to enhance their throughput and financial efficiency; and • 2,000 new MSMEs engagement per year, 30% onboarded, and 500 unique visitors to the platform.",
            "target": "Development of one online platform and 12 outreach and onboarding are delivered.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "MINTRED",
              "SDEC"
            ],
            "horizon": "medium",
            "blueprintPage": 99
          },
          {
            "pillar": "Digital Business Development",
            "action": 1,
            "actionName": "Introduce the dynamic and innovative financial and outcome-based incentives",
            "number": 19,
            "name": "S Pay Global",
            "objective": "The objective of this initiative is to enhance S Pay Global (Fintech solution) suite for the State to promote cashless transaction among the government agencies, business communities and the public.",
            "description": "The initiative will include: • Development and enhancement of the S Pay Global application for both iOS & android platforms; • Provision of the high-availability Fintech servers; and • Incorporate the state government agencies and business communities’ bills in the Fintech suite.",
            "outcomes": "60% of Sarawakian using S Pay Global for daily transactions.",
            "target": "e-Commerce and cross border transaction through S Pay Global App.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "EPU",
              "SAINS"
            ],
            "horizon": "short",
            "blueprintPage": 99
          },
          {
            "pillar": "Digital Business Development",
            "action": 1,
            "actionName": "Introduce the dynamic and innovative financial and outcome-based incentives",
            "number": 20,
            "name": "Sarawak Digital Bank",
            "objective": "The objective of this initiative is to facilitate businesses and e-Commerce in development and financial activities for digital transaction through Sarawak Digital Bank.",
            "description": "This initiative is to establish Sarawak’s first Digital Bank to support businesses and e-Commerce activities for digital transaction.",
            "outcomes": "Ease of payments and financial support for businesses and e-Commerce activities.",
            "target": "Establishment of Sarawak Digital Bank.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "EPU"
            ],
            "horizon": "medium",
            "blueprintPage": 100
          },
          {
            "pillar": "Digital Business Development",
            "action": 1,
            "actionName": "Introduce the dynamic and innovative financial and outcome-based incentives",
            "number": 21,
            "name": "Incentive Programmes for Digital Economy",
            "objective": "The objective of this initiative is to increase user base and user’s loyalty in S Pay Global and other government services.",
            "description": "Incentive programmes for digital economy includes partnership-based financing framework, training grants, market development fund, R&D expenditure & initiatives, venture capital, start-up grant and Go Digital consultancy program.",
            "outcomes": "Increased revenue to Sarawak via the commercialised products in the market and increased job opportunities in digital economy",
            "target": "• Financing framework; • 10 R&D training grants program; and • 10 Go Digital consultancy programs.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "SDEC",
              "SCSDU",
              "STIU",
              "EPU",
              "SMA",
              "SAINS"
            ],
            "horizon": "medium",
            "blueprintPage": 100
          },
          {
            "pillar": "Digital Business Development",
            "action": 1,
            "actionName": "Introduce the dynamic and innovative financial and outcome-based incentives",
            "number": 22,
            "name": "Digital Academy Industry Training Centres",
            "objective": "The objective of this initiative is to increase the potential local technology expert graduates from Digital Academy courses, that are able to contribute to the State’s Digital Economy initiatives.",
            "description": "CENTEXS Digital Academy Industry Training Centres involves the establishment of industry standard training labs/centres in partnership with Amazon Web Services, Bosch Rexroth, IBM, Microsoft and Keysight Technologies and others in various areas. The project also consists of infrastructure, facilities, programmes development aligned to the skills demand for digital economy.",
            "outcomes": "• 60% job readiness with workforce equipped on specific skills required by Industry by 2027; and • 100% Industry Certified Training centre and Micro-credentials Certifications.",
            "target": "• 6 conducive and state-of-the-art training centres; • Industry Standard Technologies and Tools; and • 42 Certified Industry Trainers.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "MEITD",
              "CENTEXS",
              "Private Sector"
            ],
            "horizon": "medium",
            "blueprintPage": 101
          }
        ]
      },
      {
        "id": "p2-s2",
        "name": "Create and implement mechanism to assess and address digital readiness of public and private sectors & community",
        "initiatives": [
          {
            "pillar": "Digital Business Development",
            "action": 2,
            "actionName": "Create and implement mechanism to assess and address digital readiness of public and private sectors & community",
            "number": 23,
            "name": "Digital Readiness for Sarawak",
            "objective": "The objective of this initiative is to conduct studies and assess the digital readiness of Sarawak for Digital Economy.",
            "description": "Comprehensive studies and reports on digital readiness including digital infrastructure human capital, research & innovation, ease of doing business, investment, cyber security, technology adoption, start-up ecosystem and inclusivity.",
            "outcomes": "Digital readiness index for Sarawak",
            "target": "• Digital readiness report; and • Digital gaps and challenges in infrastructure, human capital, data governance and cyber security, research & innovation, investment, technology adoption and ease of doing business.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "SMA",
              "SDEC"
            ],
            "horizon": "short",
            "blueprintPage": 102
          },
          {
            "pillar": "Digital Business Development",
            "action": 2,
            "actionName": "Create and implement mechanism to assess and address digital readiness of public and private sectors & community",
            "number": 24,
            "name": "Human Resource Management System",
            "objective": "The objectives of this initiatives are: • To provide ease of access to government workforce data and information; and • To manage the human resource in Sarawak.",
            "description": "Comprehensive system to record and retrieve the state workforce data and information for supply and demand. The Workforce Online Data System also automates attendance tracking, improves workforce productivity, promotes a culture of workforce safety and compliance, flexible scheduling, anywhere access.",
            "outcomes": "Efficient decision making on recruitment based on the analysis of the supply of talents and gap between supply and demand to support talent demand in the State.",
            "target": "A comprehensive workforce online system.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "MEITD",
              "CENTEXS",
              "Universities",
              "TVET"
            ],
            "horizon": "medium",
            "blueprintPage": 102
          },
          {
            "pillar": "Digital Business Development",
            "action": 2,
            "actionName": "Create and implement mechanism to assess and address digital readiness of public and private sectors & community",
            "number": 25,
            "name": "Database for Industry Readiness",
            "objective": "The objective of this initiative is to establish database and data centre for data, record management and analysis of readiness related projects such as e-Commerce, R&D, cybersecurity, agriculture, manufacturing, digital inclusivity etc.",
            "description": "Government to set up an integrated database for digital economy initiatives for analysis of the data for decision making by the Sarawak Government. It will also accelerate innovation and data monetisation.",
            "outcomes": "Increased efficiency in project management.",
            "target": "Integrated databases incorporating multiple data from distributed data centres.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "SDEC",
              "SMA",
              "CENTEXS"
            ],
            "horizon": "short",
            "blueprintPage": 103
          }
        ]
      },
      {
        "id": "p2-s3",
        "name": "Review and update policy and regulations to enhance business development to ease of doing business and foreign investment",
        "initiatives": [
          {
            "pillar": "Digital Business Development",
            "action": 3,
            "actionName": "Review and update policy and regulations to enhance business development to ease of doing business and foreign investment",
            "number": 26,
            "name": "InvestSarawak",
            "objective": "The objective of this initiative is to provide policy, procedure and guidelines for ICT business investments in the State.",
            "description": "The proposed function of InvestSarawak is a One- Stop Agency that represents the State in investments and trade promotion and helps position Sarawak as a preferred destination for ICT investment and trading partner.",
            "outcomes": "• Increase in digital investment in Sarawak by 50%; and • Improved business registrationy.",
            "target": "Complete policy, procedures and guidelines for domestic and foreign investments for digital economy.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "EPU",
              "SFS",
              "MINTRED",
              "SMA"
            ],
            "horizon": "medium",
            "blueprintPage": 104
          }
        ]
      },
      {
        "id": "p2-s4",
        "name": "Accelerate innovation, entrepreneurial and commercialisation activities to grow new generation of digital industry",
        "initiatives": [
          {
            "pillar": "Digital Business Development",
            "action": 4,
            "actionName": "Accelerate innovation, entrepreneurial and commercialisation activities to grow new generation of digital industry",
            "number": 27,
            "name": "High-Tech Entrepreneurship Development Programme",
            "objective": "The objectives of this initiative are: • To provide customised support for high tech entrepreneurs within various industry, focusing on the manufacturing of IoT and high-tech products; and • To provide financial opportunities to high caliber technology industries, including foreign direct investment.",
            "description": "Support entrepreneurship and the development of high-tech industry that manufactures digital products for digital economy such as development and production of IoT devices and services by provisioning funds or grants, acquiring equity, consultancy, product marketing etc.",
            "outcomes": "• Contribution towards 50% growth in high- tech investment; and • Spur high-tech industry development in Sarawak.",
            "target": "• 20% increase in commercialised local technologies, products, and services; and • 20 start-ups per year.",
            "timeline": "2022 - 2030",
            "leadAgencies": [
              "SDEC",
              "MINTRED",
              "Private Sector",
              "Universities"
            ],
            "horizon": "long",
            "blueprintPage": 105
          },
          {
            "pillar": "Digital Business Development",
            "action": 4,
            "actionName": "Accelerate innovation, entrepreneurial and commercialisation activities to grow new generation of digital industry",
            "number": 28,
            "name": "Launch Sarawak",
            "objective": "The objective of this initiative is to develop technology incubation programmes for the local start-up companies.",
            "description": "Provide MSMEs incubation programs, Landing Pad programmes and technology grants for potential technology start-ups and MSMEs to help to drive the digital economy initiatives in the State.",
            "outcomes": "Increased revenue and scalability of the start-ups and MSMEs.",
            "target": "50 Launch Sarawak programmes per year organised for the start-ups and MSMEs.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "MINTRED",
              "SDEC",
              "SAINS"
            ],
            "horizon": "medium",
            "blueprintPage": 105
          }
        ]
      },
      {
        "id": "p2-s5",
        "name": "Establish the digital industry cluster to accelerate industry development",
        "initiatives": [
          {
            "pillar": "Digital Business Development",
            "action": 5,
            "actionName": "Establish the digital industry cluster to accelerate industry development",
            "number": 29,
            "name": "Digital Village and Digital Innovation Hubs",
            "objective": "The objectives of this initiative are: • To synergise the innovation entrepreneurship opportunities at the digital innovation hubs across Sarawak in all 12 divisions; and • To establish, operate, and implement initiatives and programs at Digital Village to mature and scale up start-ups.",
            "description": "Establishment and operationalisation of innovation hubs and Digital Village in partnership with government, business, universities and communities throughout Sarawak to grow and scale up start-ups.",
            "outcomes": "Increase in the number of start-ups and job opportunities in digital sectors.",
            "target": "• 10 international engagements for scale up start- ups from Digital Village; • Successful investments for start-ups; and • 3 scale up start-ups per year exposed through landing pads outside Sarawak.",
            "timeline": "2022 - 2030",
            "leadAgencies": [
              "TEGAS",
              "SDEC",
              "Private Sector",
              "Universities"
            ],
            "horizon": "long",
            "blueprintPage": 106
          },
          {
            "pillar": "Digital Business Development",
            "action": 5,
            "actionName": "Establish the digital industry cluster to accelerate industry development",
            "number": 30,
            "name": "Digital Industry Technology Park",
            "objective": "The objectives of this initiative are: • To explore the opportunities to the development of digital industry technology parks in Sarawak; and • To develop the principle, policy and guidelines for the development of digital industry technology park in Sarawak.",
            "description": "The initiative focuses on the development of the industry technology park to attract FDI and DDI in Sarawak.",
            "outcomes": "Contribution towards 50% increase in digital investment in Sarawak.",
            "target": "• High technology parks development policy, procedures and guidelines; • Investment grants for high technology parks; and • Two industrial technology parks.",
            "timeline": "2022 - 2030",
            "leadAgencies": [
              "MINTRED",
              "EPU"
            ],
            "horizon": "long",
            "blueprintPage": 106
          }
        ]
      },
      {
        "id": "p2-s6",
        "name": "Empower improvised sector of the communities in the digital economy through entrepreneurship, sharing economy and gig economy",
        "initiatives": [
          {
            "pillar": "Digital Business Development",
            "action": 6,
            "actionName": "Empower improvised sector of the communities in the digital economy through entrepreneurship, sharing economy and gig economy",
            "number": 31,
            "name": "Start-up Ecosystem Development Programme",
            "objective": "The objective of this initiative is to deliver a unified vision of the Sarawak Digital and Innovation Ecosystem.",
            "description": "This initiative focuses on engagement with special interest groups, businesses and communities to develop start-ups and entrepreneurship development programmes in Sarawak.",
            "outcomes": "• 1,000 high-skilled tech developers trained; and • 1,000 foreign tech talents based in Sarawak by 2030.",
            "target": "• 20 successful scale up start-up with increased business revenue are produced; and • Programmes and criteria (Developer community, mentorship programme, etc.).",
            "timeline": "2022 - 2030",
            "leadAgencies": [
              "SDEC",
              "TEGAS",
              "MINTRED",
              "Universities"
            ],
            "horizon": "long",
            "blueprintPage": 107
          },
          {
            "pillar": "Digital Business Development",
            "action": 6,
            "actionName": "Empower improvised sector of the communities in the digital economy through entrepreneurship, sharing economy and gig economy",
            "number": 32,
            "name": "Community Digital Literacy Programme",
            "objective": "The objective of this initiative is to develop community digital literacy programmes for rural and semi urban areas.",
            "description": "Community Digital Literacy Programme is used to provide trainings and upskilling at rural and semi urban areas to empower citizens to participate in digital economy and reduce digital divide.",
            "outcomes": "• Reduced digital divide between rural and urban areas; and • Lower GINI coefficient index for Sarawak.",
            "target": "300 digital literacy programmes state-wide.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "MEITD",
              "PUSTAKA",
              "CENTEXS"
            ],
            "horizon": "medium",
            "blueprintPage": 107
          }
        ]
      }
    ]
  },
  {
    "id": "pillar-3",
    "name": "Public Sector & Services",
    "actions": [
      {
        "id": "p3-s1",
        "name": "Accelerate tailored, personalised and integrated service delivery supported by data protection",
        "initiatives": [
          {
            "pillar": "Public Sector & Services",
            "action": 1,
            "actionName": "Accelerate tailored, personalised and integrated service delivery supported by data protection",
            "number": 33,
            "name": "Smart City Ecosystem",
            "objective": "The objective of this initiative is to develop Smart City initiatives in accordance with the National Smart City Framework.",
            "description": "Smart City Ecosystem involves the transformation of major cities in State to improve the quality of life, reduce carbon footprint and spur investments for the city development. It includes the integrated smart city development plan, smart initiatives for all major cities/towns including smart traffic light junctions, smart flood management and smart surveillance system integrated with SIOC, the solutions/ deliverables of Miri Smart City and OKSHE smart community programmes.",
            "outcomes": "• Reduce the carbon footprint by 20%; and • Improve the quality of citizen’s life in the State",
            "target": "Integrated Smart City Development Plan",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "MPHLG",
              "SMA",
              "Agencies",
              "SAINS"
            ],
            "horizon": "medium",
            "blueprintPage": 109
          },
          {
            "pillar": "Public Sector & Services",
            "action": 1,
            "actionName": "Accelerate tailored, personalised and integrated service delivery supported by data protection",
            "number": 34,
            "name": "Irrigation Network SCADA System",
            "objective": "The objective of this initiative is to implement Irrigation Network SCADA System for field irrigation.",
            "description": "This initiative focuses on the implementation of systematic, integrated, reliable, efficient, and cost saving system for irrigation and water supply management.",
            "outcomes": "Control system to Increase water supply efficiency to optimum level for field irrigation to safeguard production and livelihoods of farmers.",
            "target": "An integrated network SCADA control system for paddy field irrigation.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "MUT",
              "DID"
            ],
            "horizon": "medium",
            "blueprintPage": 109
          },
          {
            "pillar": "Public Sector & Services",
            "action": 1,
            "actionName": "Accelerate tailored, personalised and integrated service delivery supported by data protection",
            "number": 35,
            "name": "Security Management System",
            "objective": "The objectives of this initiative are: • To support unified security access to all Government agencies; • To develop an information collection and analysis system to enhance the State security; and • To support its socio-economic development and conduct security research for policy formulation and enforcement.",
            "description": "Efficient security management solutions and operations in terms of documentation, accuracy of information, real-time records and user- friendly system to support the physical security of Government agencies. A decision support system for collecting data that will be used to plan, make decisions and implement accurate, fast and effective governance on security matters.",
            "outcomes": "• Zero trespassing of illegal entry into government agencies; • Improve the security access in government premises; and • 100% accurate decision making driven by data on security matters.",
            "target": "A Unified Security and Access Control System. A comprehensive security components and capabilities to prevent, monitor and record activities through ICT- based technology to maintain and upgrade physical security at government offices.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "UKPN"
            ],
            "horizon": "medium",
            "blueprintPage": 110
          },
          {
            "pillar": "Public Sector & Services",
            "action": 1,
            "actionName": "Accelerate tailored, personalised and integrated service delivery supported by data protection",
            "number": 36,
            "name": "Integrated Project Management System",
            "objective": "The objective of this initiative is to manage, monitor, report all the projects’ development, implementation and monitoring by the State Government Agencies.",
            "description": "Integrated Project Management System is an ICT solution in managing, monitoring and controlling the physical and non-physical projects implemented by the government agencies by compiling all statistics and data for update and report on the projects’ progress to all stakeholders.",
            "outcomes": "• Improved efficiency in monitoring of the physical and non-physical projects; and • Improved efficiency on funding distribution and monitoring of the performance of the projects.",
            "target": "Comprehensive integrated project management system.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "EPU",
              "SMA",
              "SIMU"
            ],
            "horizon": "medium",
            "blueprintPage": 110
          },
          {
            "pillar": "Public Sector & Services",
            "action": 1,
            "actionName": "Accelerate tailored, personalised and integrated service delivery supported by data protection",
            "number": 37,
            "name": "Financial and Asset Management",
            "objective": "The objectives of this initiative are: • To enable the accrual accounting concept in financial management; • To establish holistic platform for efficient and transparent procurement processes management for the State agencies (State e-procurement); • To improve the transparency, operational efficiencies and accountability in public sector financial management (SIFBAS); and • To improve the management of asset for effective planning, registration, maintenance and disposal of asset.",
            "description": "An online platform for providing the accrual accounting and improve the transparency in financial management. The platform will also manage the asset effectively via planning, registration, maintenance and disposal of the asset of the government.",
            "outcomes": "• Improved efficiency in financial management; • Reduced time of procurement cycle and lower operational cost; and • Improved asset management.",
            "target": "A comprehensive online platform for financial and asset management.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "SFSO",
              "SCSDU",
              "STIU"
            ],
            "horizon": "medium",
            "blueprintPage": 111
          },
          {
            "pillar": "Public Sector & Services",
            "action": 1,
            "actionName": "Accelerate tailored, personalised and integrated service delivery supported by data protection",
            "number": 38,
            "name": "Integrated Service Delivery System",
            "objective": "The objectives of this initiatives are: • To deploy web integrated with dynamic web Content Management System (CMS)’s functionality; • To efficiently manage government services; • To improve the efficiency in providing real time information on port operation; • To achieve end-to-end government services through innovative use of digital technologies; and • To develop one-stop integrated mobile platform for efficient service delivery to all Sarawakians.",
            "description": "This initiative involves the development and deployment of a fast web based mobile platform which is user friendly with dynamic web CMS functionality for efficient and responsive web operation. The initiative also includes development of system on the real time information on port operation for efficient decision making by port authorities.",
            "outcomes": "• 100% government services are online by 2030; • Integrated digital services; • Lower administrative cost and more efficient service delivery; • Strengthen regulations and governance supporting digital government initiative; and • Improved efficiency and ease of doing business with the Government.",
            "target": "• Appropriate policies, procedures, guidelines and regulations; and • Adoption of digital technologies to improve efficiency and service delivery.",
            "timeline": "2022 - 2030",
            "leadAgencies": [
              "SCSDU",
              "STIU",
              "MIPD",
              "Port Authorities"
            ],
            "horizon": "medium",
            "blueprintPage": 111
          },
          {
            "pillar": "Public Sector & Services",
            "action": 1,
            "actionName": "Accelerate tailored, personalised and integrated service delivery supported by data protection",
            "number": 39,
            "name": "Social Management Platform",
            "objective": "The objectives of this initiative are: • To provide single online platform to access the religion related services such as Islamic and other religion related matters in Sarawak; • To provide efficient service delivery to the public and to support internal operations of Majlis Agama Islam Sarawak (MAIS) and syariah services; and • To have monitoring system on “UP” core function and dashboard for decision making.",
            "description": "A single online platform that enables the public to access the online services related to Islamic matters such as eDakwah, eMunakahat, eMasjid, Syariah and other religion related matters. The online platform also supports internal operation of MAIS and Jabatan Kehakiman Syariah Sarawak on harmonised adat marriages procedure and syariah services. This initiative also involves the development of the system for public to access online services related to other religion related matters. In addition, this initiative also includes the monitoring system on UP core function and dashboard for decision making support for hight management.",
            "outcomes": "• Effective management of the online services related to religion matters; and • Efficient service delivery to public and improved internal operation through integrated services with other government applications.",
            "target": "Online single platform for providing services on Islamic related matters, other religion related matters and improved service delivery to the public.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "SCSDU",
              "STIU",
              "MAIS",
              "UNIFOR",
              "JAIS"
            ],
            "horizon": "medium",
            "blueprintPage": 112
          },
          {
            "pillar": "Public Sector & Services",
            "action": 1,
            "actionName": "Accelerate tailored, personalised and integrated service delivery supported by data protection",
            "number": 40,
            "name": "Online Business Management System",
            "objective": "The objectives of this initiative are: • To register the business community profile; • To verify the companies; and • To reuse the company data for other business services or government assistance.",
            "description": "A web-based system for business community to search existing business names and register new business through business names search and registration system, and to apply business trade license at District Office. The submission of the company’s application for manufacturing permit to MINTRED via “eICC” includes sensitive business information such as investment amount, machinery, technical know- how etc. Contractor and Consultant Management System (CCMS) for registration of contractor and consultant on classification head/subhead for works category.",
            "outcomes": "• Improved ease of doing trading by the business community; • Improved ease of companies to embark on industrial projects in Sarawak; and • Improved ease of contractor and consultant to participate in government tender projects.",
            "target": "50% of businesses registration.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "SCSDU",
              "STIU",
              "Agencies"
            ],
            "horizon": "short",
            "blueprintPage": 112
          },
          {
            "pillar": "Public Sector & Services",
            "action": 1,
            "actionName": "Accelerate tailored, personalised and integrated service delivery supported by data protection",
            "number": 41,
            "name": "Water Level Monitoring System Based on Hydrological Telemetry Data",
            "objective": "The objectives of this initiative are: • To provide accurate and early alert and warning of extreme event such as flood and drought to mitigate damage and enable proper coordination of essential disaster relief operations and management; and • To support major water resources/supply project such as hydroelectric dams.",
            "description": "This initiative is to develop a warming system on the flood and drought event. With this system, the government agency can view the rainfall & water level information, climate information and telemetry system. They can also monitor Hydrological Telemetry System (HTS) performance and generate mobile summary reports.",
            "outcomes": "• Increase in efficiency in flood and drought prevention and management; and • Prevention of property and asset loss due to flood and drought.",
            "target": "Central Information Telemetry Network, System Dashboard, Hydrological Data Management (HDM) and hydrological Station Operation and Maintenance System (HSOMS).",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "MUT",
              "DID"
            ],
            "horizon": "medium",
            "blueprintPage": 113
          },
          {
            "pillar": "Public Sector & Services",
            "action": 1,
            "actionName": "Accelerate tailored, personalised and integrated service delivery supported by data protection",
            "number": 42,
            "name": "Urban Drainage Information Management System (UDIMS)",
            "objective": "The objectives of this initiatives are: • To improve the business processes and performance though Digital Economy initiatives to enable end-to- end services from Sarawak Government to project proponent (consultants/developer); and • To digitalise the submission of consultant/developer on urban drainage plans with PKI solutions.",
            "description": "The urban drainage information system comprises of desktop and web-based application to facilitate various stakeholders to access UDIMS spatial information through digital platform. This initiative also aims to generate certificate for digital signing, integrated with the Integrated Service Management (ISM) and public workspace for viewing and sign-off.",
            "outcomes": "Ease of access and effective planning, design and management of the drainage infrastructure development and maintenance throughout Sarawak.",
            "target": "• Digitalised online service provider submission system; and • Digitalised business and workflow process.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "MUT",
              "DID"
            ],
            "horizon": "medium",
            "blueprintPage": 113
          },
          {
            "pillar": "Public Sector & Services",
            "action": 1,
            "actionName": "Accelerate tailored, personalised and integrated service delivery supported by data protection",
            "number": 43,
            "name": "Digitalisation of Water Supply",
            "objective": "The objectives of this initiative are: • To provide water supply reporting system (WORMS); and • To improve the information on meter bills issued to customer (JWBS).",
            "description": "WORMS involves the development of water supply operation reporting system including daily & monthly reporting on plant operation, fuel, chemical stock, water quality, chemical dosing, electricity, water usage and others. This also includes the implementation of mobile application for WORMS for offline recording to areas without internet connectivity. This initiative also involves meter reading bills with water consumption charge, payment system, Service Sarawak reconciliation, accrual accounting interfacing, and outstanding charges reservation.",
            "outcomes": "• Improve service delivery efficiency and improved customer service experience; • Improved monitoring and reporting of water supply, which in return will increase water quality and water services; and • Improved consumers quality of life with supply of clean and quality water.",
            "target": "• Digitalised water monitoring and reporting platform; and • Digitalised billing system.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "MUT",
              "JBALB"
            ],
            "horizon": "short",
            "blueprintPage": 114
          },
          {
            "pillar": "Public Sector & Services",
            "action": 1,
            "actionName": "Accelerate tailored, personalised and integrated service delivery supported by data protection",
            "number": 44,
            "name": "Information System for Utilities",
            "objective": "The objectives of this initiative are: • To provide e-Gas services, online accredited institution (e-Water, e-Gas & eMINDS), online electricity license application, data analytics & dashboard, online payment; and • To provide end-to-end online services for customers to access services anytime, anywhere.",
            "description": "The initiative includes the enhancement of (e-Gas) services to be integrated with ISM, digital signature, e-Letter/e- Certificate at public workspace. This includes online registration/renewal of accredited institution module (for e-Water, e-Gas, eMINDS), online electrical installation registration and reporting, e-Billing for water royalty. It also includes sharing for water catchment and infrastructure spatial data from JBALB via SHARES Centralised platform.",
            "outcomes": "• Improve efficiency in service process and reduce service delivery time; • Enhance revenue collection and comply requirement from Treasury Department; and • Data analytics for projection and decision-making.",
            "target": "• End-to-end digitalised online service delivery; and • Digitalised decision support system.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "MUT",
              "SCSDU",
              "STIU"
            ],
            "horizon": "medium",
            "blueprintPage": 114
          },
          {
            "pillar": "Public Sector & Services",
            "action": 1,
            "actionName": "Accelerate tailored, personalised and integrated service delivery supported by data protection",
            "number": 45,
            "name": "Online Monitoring System for Sewer Network",
            "objective": "The objective of this initiative is to address the problem of blockages and overflow of sewage and carry out preventive maintenance by flushing and clearing of sewer line at a predetermined interval at the identified hotspot areas.",
            "description": "This initiative is about the usage of technology for monitoring and maintenance and having predictive and preventive maintenance for the system.",
            "outcomes": "Improved efficiency of maintenance and monitoring of sewer network system.",
            "target": "Online sewer network monitoring system.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "Sewerage Department"
            ],
            "horizon": "short",
            "blueprintPage": 115
          }
        ]
      },
      {
        "id": "p3-s2",
        "name": "Unlock the power of government data to spur innovation",
        "initiatives": [
          {
            "pillar": "Public Sector & Services",
            "action": 2,
            "actionName": "Unlock the power of government data to spur innovation",
            "number": 46,
            "name": "Digital Innovation Clusters",
            "objective": "The objectives of this initiative are: • To establish demand-based private-led digital innovation cluster; and • To provide a platform and access to the universities entrepreneurs to accelerate product development and commercialisation.",
            "description": "The initiative focuses on establishing innovation ecosystem and access to government data to spur research, innovation and commercialisation. The initiative will also focus on adequate supply of competent talent as an enabler to grow start-ups.",
            "outcomes": "• Contribution to Sarawak’s GDP; • 30 start-ups per year; • Increased number of R&D talents; and • New high-tech jobs.",
            "target": "• 20 programmes/workshops; • 30 Intellectual Property (IP) registered related to this initiative; and • Innovation hubs in each district.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "SDEC",
              "TEGAS",
              "Private Sectors",
              "Universities"
            ],
            "horizon": "short",
            "blueprintPage": 116
          },
          {
            "pillar": "Public Sector & Services",
            "action": 2,
            "actionName": "Unlock the power of government data to spur innovation",
            "number": 47,
            "name": "e-Learning Module for Digital Economy",
            "objective": "The objectives of this initiative are: • To provide online Learning Management System (LMS) for training and courses with tracking and monitoring approach; • To effectively deliver Sarawak digital economy skills and talent development programs to end-users; and • To empower & provide local agencies and training providers with platform in providing training to the end users.",
            "description": "Development of e-Learning module leveraging on high tech equipment including AR/VR to deliver contents and to promote and support potential use cases such as telemedicine, mining etc. The initiative also aims to enable blended learning and training, certification and mentoring for public and industry/private sectors that covers all economic sectors, digital skills and technologies.",
            "outcomes": "• 30% increase in number of digital talents with skills required in digital economy in Sarawak; and • Enhanced core competencies of workers in digital economy industry.",
            "target": "• Online and immersive simulation-based e-learning modules; • 3D Models and IPs in economic sectors in the areas such as telemedicine, mining, industry 4.0 (manufacturing), oil & gas, tourism etc.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "MEITD",
              "CENTEXS"
            ],
            "horizon": "short",
            "blueprintPage": 116
          },
          {
            "pillar": "Public Sector & Services",
            "action": 2,
            "actionName": "Unlock the power of government data to spur innovation",
            "number": 48,
            "name": "Biodiversity Contents Creation Programmes for Digital Economy",
            "objective": "The objectives of this initiative are: • To create a more sustainable environment which will not increase the carbon footprint, cost or have any negative impact to the environment; • To develop more biodiversity tourisms programs and interactions with international stakeholders; and • To develop more biodiversity training and learning program in cultivate more professionals trained in the State.",
            "description": "The initiative focuses on the biodiversity contents creation program focusing in social, tourism, and agriculture sectors and includes professional certificate in biodiversity tourisms, lifelong learning; short courses and repository including digitising Sarawak Natural Heritages (Biodiversity).",
            "outcomes": "30% increase in number of professionals trained in the biodiversity tourism in Sarawak.",
            "target": "7,500 Sarawakians are trained in biodiversity contents creation.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "SBC",
              "Universities",
              "CENTEXS"
            ],
            "horizon": "medium",
            "blueprintPage": 117
          },
          {
            "pillar": "Public Sector & Services",
            "action": 2,
            "actionName": "Unlock the power of government data to spur innovation",
            "number": 49,
            "name": "One Utility Bill (OUB)",
            "objective": "The objectives of this initiative are: • To study and develop OUB platform which combines utilities bill charges for Water and Electricity into a single bill; • To improve water resource management efficiency; and • To manage the online application on the competent person/contractor and utility licensing for electricity, gas distribution, water supply product certificate, rural water supply and electrification projects.",
            "description": "This initiative involves the development of OUB system which consists of Water, Gas and Electricity as a single bill. The system also caters for any new utility services added in the future. The system also aims to provide comprehensive water monitoring command centre in managing complaints and issues related to water distribution.",
            "outcomes": "• Consolidation of consumer bills into one billing system; • Integrated service delivery to consumers; • Increased customer satisfaction rating to 85%; and • Effective monitoring of water distribution digitally.",
            "target": "• Integrated billing system for water, electricity and gas; and • Establishment of one command centre for water supply and distribution.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "MUT",
              "SDEC"
            ],
            "horizon": "short",
            "blueprintPage": 117
          },
          {
            "pillar": "Public Sector & Services",
            "action": 2,
            "actionName": "Unlock the power of government data to spur innovation",
            "number": 50,
            "name": "Environmental Quality Monitoring and Analysis System",
            "objective": "The objectives of this initiatives are: • To carry out comprehensive study on air and water quality; • To plan, install air and water quality monitoring sensors and stations state-wide; • To establish IoT and mobile communication network to enable remote monitoring of environment quality; and • To set up monitoring, data collection and analysis capability for decision support in regard to water and air quality management.",
            "description": "The initiative focuses on the development of a platform to monitor, manage and control the environment, air and water quality index through the installation of the IoT devices and sensors.",
            "outcomes": "Real time monitoring of air and water quality and ability to link to other information for analysis, research, development planning and resource management.",
            "target": "Integrated platform and IoT sensor for NREB, JBALB, KWB and DID stations.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "NREB",
              "MUDENR",
              "JBALB",
              "KWB",
              "DID",
              "MUT"
            ],
            "horizon": "medium",
            "blueprintPage": 118
          },
          {
            "pillar": "Public Sector & Services",
            "action": 2,
            "actionName": "Unlock the power of government data to spur innovation",
            "number": 51,
            "name": "Economic Sector Focused Testbeds",
            "objective": "The objectives of this initiative are: • To provide platform for research, training and innovation; • To showcase the 4IR technology and solutions for industry and workforce transformation; and • To facilitate the digitalisation of MSMEs.",
            "description": "This initiative aims to accelerate workforce and industry transformation and provide platform for training, education and research and showcasing new technologies, solutions, applications, products, services, security and processes, thus accelerating digital transformation of the economic sectors.",
            "outcomes": "• Industry and workforce transformation; • Increased number of digitally skilled workforce to drive Digital Economy; and • Showcase technology and solutions to spur innovation and high-tech industry development.",
            "target": "• Six testbeds facility and 30 technology showcase/use cases; • 12 Proof-of-concept and prototype technology solutions; and • 20 strategic partnerships with universities and businesses.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "SDEC",
              "Private Sector",
              "Universities"
            ],
            "horizon": "medium",
            "blueprintPage": 118
          },
          {
            "pillar": "Public Sector & Services",
            "action": 2,
            "actionName": "Unlock the power of government data to spur innovation",
            "number": 52,
            "name": "State Data Management",
            "objective": "The objectives of this initiative are: • To share and publish Open Data in various machine- readable and informative formats to the public; • To enable the public to request or discover, understand and download Open Data files; • To encourage the use of data sets for innovative and new product such as development of new application/system by start-ups/individual; and • To enable the use of application programming interface to access Open Data.",
            "description": "This initiative involves the Open Data, Open Source and Open Interface Initiative and Open Data Portal Application. This initiative will include further development of metadata frameworks, policies, governance, standards, best practices and platforms to enable sharing and interoperability of digital data resources between state government agencies, federal government agencies, private sector and the public.",
            "outcomes": "30% citizen and business centric applications to be developed/enhanced by external parties using the open data, open source or open Application Programming Interfaces (APIs).",
            "target": "• 80% data integrated with existing platform; and • 1000 datasets, 20 open-source apps, and 100 open APIs on the platform.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "SMA",
              "SCSDU",
              "STIU",
              "PUSTAKA"
            ],
            "horizon": "medium",
            "blueprintPage": 119
          },
          {
            "pillar": "Public Sector & Services",
            "action": 2,
            "actionName": "Unlock the power of government data to spur innovation",
            "number": 53,
            "name": "State Record Management System",
            "objective": "The objective of this initiative is to develop a unified digitalised records management system in managing the life cycle of government valued records from creation, classification, use and preparation for archival.",
            "description": "This initiative involves the development of the State Record Architecture, standards and management involving creation of records, data conversion, cataloguing, storage, archiving, backup facilities, digitisation facility, trainings, change management throughout the life cycle of every record classification.",
            "outcomes": "• Reduced government operation cost on physical documentation records; • Improved efficiency/performance of the government services delivery; and • Reduced risk of data loss.",
            "target": "An integrated State Record Management system.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "SMA",
              "SCSDU",
              "STIU",
              "PUSTAKA"
            ],
            "horizon": "short",
            "blueprintPage": 119
          }
        ]
      },
      {
        "id": "p3-s3",
        "name": "Accelerate the adoption and integration of digital technology/platform to improve service delivery, workflow efficiency and productivity",
        "initiatives": [
          {
            "pillar": "Public Sector & Services",
            "action": 3,
            "actionName": "Accelerate the adoption and integration of digital technology/platform to improve service delivery, workflow efficiency and productivity",
            "number": 54,
            "name": "Physical Infrastructure and Utility Mapping",
            "objective": "The objectives of the initiative are: • To develop and implement a centralised digital repository known as the Unified Utilities Asset Database Management System; • To manage the State’s utilities assets; and • To achieves smarter and more comfortable living.",
            "description": "The initiative focuses on one stop system development to enhance the State’s physical infrastructure and utility mapping services in 3D Geospatial mapping, data repository and 3D city model for planning and development.",
            "outcomes": "• Faster and efficient approval of development projects; and • More efficient maintenance and servicing of utility and infrastructure, leading to cost savings.",
            "target": "A one stop physical infrastructure and utility mapping data system and process.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "SCSDU",
              "STIU",
              "L&S",
              "MUT"
            ],
            "horizon": "short",
            "blueprintPage": 120
          },
          {
            "pillar": "Public Sector & Services",
            "action": 3,
            "actionName": "Accelerate the adoption and integration of digital technology/platform to improve service delivery, workflow efficiency and productivity",
            "number": 55,
            "name": "Sarawak Foreign Workers Health Management System (SaFHIS)",
            "objective": "The objective of this initiative is to implement, manage and supervise a comprehensive health and medical screening programme for all foreign workers in Sarawak.",
            "description": "A system to document the screening of health issues for foreign workers when they make their entry into and throughout their stay in Sarawak. The system is designed and managed by medical professionals with expertise in public health, occupational health, radiology, laboratory services and other related specialties. These medical professionals are able to inform Immigration if the foreign worker is healthy to work in Sarawak.",
            "outcomes": "100% end-to-end Health Monitoring and Verification process.",
            "target": "One integrated Foreign Workers Health System.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "UP",
              "ILMU"
            ],
            "horizon": "short",
            "blueprintPage": 120
          },
          {
            "pillar": "Public Sector & Services",
            "action": 3,
            "actionName": "Accelerate the adoption and integration of digital technology/platform to improve service delivery, workflow efficiency and productivity",
            "number": 56,
            "name": "State BIM Monitoring and Analysis",
            "objective": "The objectives of this initiative are: • To develop BIM system for building construction and management; • To increase the efficiency of project management and delivery; • To facilitate efficient project planning and monitoring; and • To provide reports such as quality assurance performance reports, quality compliance reports, violation reports among others.",
            "description": "This initiative includes development of BIM monitoring and analysis system that will enable the agencies to collaborate on the digital drawing via BIM that improves the communication and reduces cost. It will increase design, implementation and work efficiency and reduce risks and wastages.",
            "outcomes": "Improved resource utilisation, efficiency and product quality for the construction industry.",
            "target": "A web-based BIM system.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "JKR",
              "SDEC"
            ],
            "horizon": "short",
            "blueprintPage": 121
          },
          {
            "pillar": "Public Sector & Services",
            "action": 3,
            "actionName": "Accelerate the adoption and integration of digital technology/platform to improve service delivery, workflow efficiency and productivity",
            "number": 57,
            "name": "Citizen Centric Digital Government Platform",
            "objective": "The objectives of this initiative are: • To develop policy, procedures and guidelines for citizen centric digital government; • To create citizen and environment friendly urban living and workspace; and • To integrate key systems via API for data sharing and exchange.",
            "description": "The initiative focuses on developing citizen centric platform for Housing and Urban Development with strategies in ensuring sufficient development of sustainable housing with enhanced convenience, safety and comfort for city dwellers.",
            "outcomes": "Improved quality of life and ease of doing business.",
            "target": "Standard Policies, Procedure and Guideline on the development of digital government platform.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "SCSDU",
              "STIU"
            ],
            "horizon": "medium",
            "blueprintPage": 121
          },
          {
            "pillar": "Public Sector & Services",
            "action": 3,
            "actionName": "Accelerate the adoption and integration of digital technology/platform to improve service delivery, workflow efficiency and productivity",
            "number": 58,
            "name": "Sarawak Minerals Information System",
            "objective": "The objectives of this initiatives are: • To develop Sarawak Mining Policy to support the implementation of Sarawak Mining Masterplan; and • To develop “One Stop System” to monitor the activities involving the mining industries.",
            "description": "Sarawak Minerals Information System is a system to monitor the activities related to the mining industries. The system is a comprehensive system that provides geospatial data and capabilities for planning and decision making.",
            "outcomes": "• Effective planning and decision making; • Lower exploration costs; • Growth in sustainable and thriving mining industry; and • Increase foreign investment into State mining sector.",
            "target": "• Sarawak Mining Policy; and • A comprehensive system for Minerals Information in Sarawak with geospatial data and capabilities for planning and decision making.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "MUDeNR"
            ],
            "horizon": "short",
            "blueprintPage": 122
          },
          {
            "pillar": "Public Sector & Services",
            "action": 3,
            "actionName": "Accelerate the adoption and integration of digital technology/platform to improve service delivery, workflow efficiency and productivity",
            "number": 59,
            "name": "Digital Health Platform",
            "objective": "The objective of this initiative is to develop integrated health system connected to all medical facilities in Sarawak.",
            "description": "Digital Health system is developed to provide community a one stop centre for health services for rural and urban community and storage of all the related health records in the Sarawak Government system. This system enables the synchronisation of patient data among health facilities through electronic medical records system. The integrated digital health system enables the government and health agencies to further their studies to upgrade the health sectors including facilities, medication and professional skills of the medical professionals.",
            "outcomes": "• Secure patient healthcare information data records; and • Improve efficiency of the services provided by the health facilities to the public.",
            "target": "Integrated one health system connected to all medical facilities in the State.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "JKNS"
            ],
            "horizon": "medium",
            "blueprintPage": 122
          },
          {
            "pillar": "Public Sector & Services",
            "action": 3,
            "actionName": "Accelerate the adoption and integration of digital technology/platform to improve service delivery, workflow efficiency and productivity",
            "number": 60,
            "name": "Online Wildlife Licensing System",
            "objective": "The objectives of this initiative are: • To develop an online wildlife licensing system for the agency to monitor, manage wildlife license application, renewal and sharing of relevant research and innovation data for public awareness; and • To foster sharing of the statistical information on wildlife activities in Sarawak for agencies/public’s reference and research purposes.",
            "description": "A system will focus on delivering 100% end-to-end wildlife licensing application and renewal processes. The Online Wildlife Licensing System also involves the development of the dashboard for viewing of relevant statistics and data for overall wildlife licensing application such as renewal, pending or expiry status.",
            "outcomes": "• Increase public awareness on state’s Wildlife license application process, statistics and important notice announcement; and • Reduce the risk of the illegal hunting/ poaching and wildlife related trade in the state.",
            "target": "Online Wildlife Licensing Module",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "MUDeNR"
            ],
            "horizon": "short",
            "blueprintPage": 123
          },
          {
            "pillar": "Public Sector & Services",
            "action": 3,
            "actionName": "Accelerate the adoption and integration of digital technology/platform to improve service delivery, workflow efficiency and productivity",
            "number": 61,
            "name": "Enhance Digital Ecosystem for High-Tech Parks",
            "objective": "The objective of this initiative is to establish an integrated Security System for entry and exit of authorised personnel and vehicles in High-Tech Park/ Free Industrial Park.",
            "description": "The enhancement of the High-Tech Park’s integrated security system involves the monitoring and recording of all the access into the High-Tech Park. It also reduces the long queue at the Security Guard House and improves the security surveillance in the High-Tech Park where all the events in the area are monitored and recorded.",
            "outcomes": "• Reduction in the number of crimes at the High-Tech Park; • Reduction in the number of cases of illegal trade activities; and • Efficient traceable and real-time data on movement access.",
            "target": "A comprehensive and Integrated Security System for entry and exit of authorised personnel and vehicles.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "MINTRED",
              "SDEC"
            ],
            "horizon": "medium",
            "blueprintPage": 123
          },
          {
            "pillar": "Public Sector & Services",
            "action": 3,
            "actionName": "Accelerate the adoption and integration of digital technology/platform to improve service delivery, workflow efficiency and productivity",
            "number": 62,
            "name": "Innovative Digital Solution for Local Councils",
            "objective": "The objective of this initiative is to digitalise the work processes for efficient service delivery to the public.",
            "description": "The initiative focuses on digitalising existing manual processes to streamline daily operations in providing fast, efficient integrated services to the public.",
            "outcomes": "• Increase productivity; and • Improved and efficient service to the public.",
            "target": "Digitalising of: • Financial, budgeting and accounting System; • Human Resource Management System; • Asset Management System; • Procurement Management System; • Valuation System; • Licensing System; • Fleet Management System; • Building Control System; • Legal Management System; and • Operations Monitoring System.",
            "timeline": "2022 - 2030",
            "leadAgencies": [
              "MPHLG",
              "DBKU",
              "MBKS",
              "Other local councils"
            ],
            "horizon": "long",
            "blueprintPage": 124
          },
          {
            "pillar": "Public Sector & Services",
            "action": 3,
            "actionName": "Accelerate the adoption and integration of digital technology/platform to improve service delivery, workflow efficiency and productivity",
            "number": 63,
            "name": "Integrated Geographic Information System (GIS) for Local Councils",
            "objective": "The objectives of this initiative are: • To integrate GIS database; and • To interface GIS data to other applications.",
            "description": "Immediate and real time data request is crucial for strategic decision making and response. This initiative focuses on developing integrated GIS to improve service delivery by councils, smart city development and e-service.",
            "outcomes": "• Effective city management; and • Reduce hardcopy data usage.",
            "target": "• An integrated GIS; • Complete training and infrastructure; • Geo-database commissioning and provision of new geo-database; and • GIS data development and integration.",
            "timeline": "2024 - 2030",
            "leadAgencies": [
              "MPHLG",
              "DBKU",
              "MBKS",
              "Other local councils"
            ],
            "horizon": "long",
            "blueprintPage": 124
          },
          {
            "pillar": "Public Sector & Services",
            "action": 3,
            "actionName": "Accelerate the adoption and integration of digital technology/platform to improve service delivery, workflow efficiency and productivity",
            "number": 64,
            "name": "Public Service Platform",
            "objective": "The objectives of this initiative are: • To implement Digital Identity as the single sign on to access to government digital services; • To enhance the current One Stop Communication Channel - Talikhidmat to provide better quality service to the public; • To extend the One Stop Customer-Centric Service Delivery Platform – Service Sarawak throughout Sarawak for the convenience of the people in accessing government services; and • Integrated Service Management (ISM) framework for service and data integration that support end-to-end service digitalisation so that services can be delivered efficiently and seamlessly.",
            "description": "Common and Supporting Platform involves numerous initiatives such as implementation of Sarawak ID as Digital Identity to access Government online Service, ISM as the central access to government services, Talikhidmat with better services and Service Sarawak Centre on the extension of the Service Sarawak Kiosk throughout Sarawak.",
            "outcomes": "• 50% improvement in addressing public complaints; and • Safe and secure access to government online services.",
            "target": "• Secure digital identity access system for government; • Sarawak Service Centres; and • ISM framework.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "SCSDU",
              "STIU"
            ],
            "horizon": "short",
            "blueprintPage": 125
          }
        ]
      },
      {
        "id": "p3-s4",
        "name": "Enhance public sectors’ structure, and strengthen capacity and capabilities of civil servants",
        "initiatives": [
          {
            "pillar": "Public Sector & Services",
            "action": 4,
            "actionName": "Enhance public sectors’ structure, and strengthen capacity and capabilities of civil servants",
            "number": 65,
            "name": "Digital Talent Development and Management",
            "objective": "The objective of this initiative is to strengthen the competency and skills of the government officers via trainings and programmes related to Digital transformation of Sarawak Civil Service.",
            "description": "The Digital Talent Development and Management includes the training programmes to increase the skills and competencies of the government officers in Digital Technology and applications so that they are able to lead and drive the digital transformation in their organisation.",
            "outcomes": "• 100% digitally skilled workforce to drive the digital transformation of the public sector; and • Increase competency and work productivity of the government officer.",
            "target": "50 training programmes for Public Services and GLCs.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "HRDMU",
              "SCSDU",
              "STIU",
              "Leadership Institute"
            ],
            "horizon": "medium",
            "blueprintPage": 126
          }
        ]
      },
      {
        "id": "p3-s5",
        "name": "Enhance regulatory compliance through fit-for-purpose policies and regulations that are data and digitally enabled and are efficiently administered",
        "initiatives": [
          {
            "pillar": "Public Sector & Services",
            "action": 5,
            "actionName": "Enhance regulatory compliance through fit-for-purpose policies and regulations that are data and digitally enabled and are efficiently administered",
            "number": 66,
            "name": "Development of Enterprise Architecture (EA)",
            "objective": "The objective of the Development of Enterprise Architecture is to study, analyse, design and develop an overall EA for the Sarawak Digital Economy ecosystem.",
            "description": "The EA is to be implementable and cover all business, data, application and technology areas of the State Government, the private sector, Institutions of Higher Learnings and public (including foreigners). The initiative also aims to develop the enterprise architecture in the organisation and prevent the practitioners of enterprise architecture from being locked into proprietary methods, ensure that resources are utilised efficiently and providing timely and consistent services in cost-effective manner while meeting the expectations of the public and stakeholders.",
            "outcomes": "• Shared resources, seamless integration, ability to scale up systems, cost and effort savings, better user experience; • Increased number of trained and certified EA officers; and • Improved efficiency and performance of the government services.",
            "target": "A comprehensive development of enterprise architecture for government agencies.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "SMA"
            ],
            "horizon": "short",
            "blueprintPage": 127
          },
          {
            "pillar": "Public Sector & Services",
            "action": 5,
            "actionName": "Enhance regulatory compliance through fit-for-purpose policies and regulations that are data and digitally enabled and are efficiently administered",
            "number": 67,
            "name": "Develop Policy, Procedure and Guideline (PPG) on Regulatory Compliance",
            "objective": "The objective of the initiative is to develop PPG framework on regulatory compliance for Sarawak government agencies and public for communications and multimedia activities in Sarawak.",
            "description": "SMA is responsible to spearhead, oversee and facilitate the implementation of communication, multimedia and Digital Economy initiatives in Sarawak. The initiative focuses on developing comprehensive PPGs frameworks, policies and regulatory compliance to ensure that the initiatives are developed and implemented in accordance with standard and best practices to accelerate digital transformation in Sarawak.",
            "outcomes": "• 100% compliance of the government agencies and public on communications and multimedia activities in Sarawak; and • Standardisation and integration of systems developed by government agencies.",
            "target": "A comprehensive development of PPGs on Regulatory Compliance on communication, multimedia and Digital Economy initiatives in Sarawak.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "SMA"
            ],
            "horizon": "short",
            "blueprintPage": 127
          }
        ]
      }
    ]
  },
  {
    "id": "pillar-4",
    "name": "Frontier Technologies Adoption",
    "actions": [
      {
        "id": "p4-s1",
        "name": "Facilitate adoption of digital technologies among businesses & communities",
        "initiatives": [
          {
            "pillar": "Frontier Technologies Adoption",
            "action": 1,
            "actionName": "Facilitate adoption of digital technologies among businesses & communities",
            "number": 68,
            "name": "Business Digitalisation Programme",
            "objective": "The objective of this initiative is to assist the SMEs on digitalisation of their business and processes for enhancing their competitiveness, resilience and innovativeness.",
            "description": "The SME Business Digitalisation Program focuses on strategic measures to assist SMEs on digitalisation programme as part of the drive towards equitable economic development, bringing greater benefit to Sarawak’s economy. The programme will be continuously conducted to ensure all participants can adapt and adopt new methodology of business ecosystem.",
            "outcomes": "• 80% MSMEs digitalised; and • 50% increase in business competitiveness and 10% increase in revenue in business.",
            "target": "• Industry standard platform; • 1,000 businesses on boarded onto digitalisation annually; and • Tracking: SERAPI (Ecosystem platform) and Digital Business Listing platform operational by 2023.",
            "timeline": "2022 - 2030",
            "leadAgencies": [
              "MINTRED",
              "SDEC",
              "Private Sector"
            ],
            "horizon": "long",
            "blueprintPage": 129
          },
          {
            "pillar": "Frontier Technologies Adoption",
            "action": 1,
            "actionName": "Facilitate adoption of digital technologies among businesses & communities",
            "number": 69,
            "name": "Technology Demonstrator Project/5G Demonstrator Project",
            "objective": "The objective of this initiative is to facilitate the enhancement and development of digital infrastructure and accelerate digital economy transformation via 5G ecosystem in Sarawak.",
            "description": "This initiative is more towards the actual demonstration of use cases in the economic sectors contributing to economic and social values to Sarawak. Each of these use cases will includes planning activities, development of the specific network services, and the final integration to the realisation of the actual demonstration.",
            "outcomes": "5G use cases in priority sectors, including manufacturing, port operation, education, digital health, smart city, and others.",
            "target": "• Functional 5G testbeds; • 5G user training; and • 5G go-live.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "SDEC",
              "Private Sector"
            ],
            "horizon": "medium",
            "blueprintPage": 129
          },
          {
            "pillar": "Frontier Technologies Adoption",
            "action": 1,
            "actionName": "Facilitate adoption of digital technologies among businesses & communities",
            "number": 70,
            "name": "Creative Digital Content Development",
            "objective": "The objective of this initiative is to develop digital content skill and capabilities for marketing and business strategy.",
            "description": "This initiative is to develop the digital inclusivity and literacy skills and creation of digital content in line with current trends of animation, gaming, interactive media, digital comics and VRX.",
            "outcomes": "To increase the revenues up to 10% which are generated from Intellectual Property (IP), digital content and media.",
            "target": "• 5 IPs contents are produced per annum; and • 500 participants per year.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "SDEC",
              "Private Sector"
            ],
            "horizon": "short",
            "blueprintPage": 130
          },
          {
            "pillar": "Frontier Technologies Adoption",
            "action": 1,
            "actionName": "Facilitate adoption of digital technologies among businesses & communities",
            "number": 71,
            "name": "Feasibility Study and Implementation of Digital Certificates",
            "objective": "The objective of this initiative is to utilise the Sarawak Government online transactions with Citizen (G2C), businesses (G2B) and other Governments (G2G) that are authenticated and securely transacted.",
            "description": "This initiative aims to improve secure environment of Sarawak Government online transactions to boost the business process with Citizen (G2C), businesses (G2B) and other Governments (G2G) that are authenticated and securely transacted.",
            "outcomes": "• 100% secure transaction; and • Increased customer satisfaction.",
            "target": "State’s own Certificate Authority or equivalent to promote trusted online digital economy and digital government activities.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "SMA",
              "SCSDU",
              "STIU"
            ],
            "horizon": "medium",
            "blueprintPage": 130
          }
        ]
      },
      {
        "id": "p4-s2",
        "name": "Prioritise the adoption of digital technologies for policy formulation, implementation and regulatory functions",
        "initiatives": [
          {
            "pillar": "Frontier Technologies Adoption",
            "action": 2,
            "actionName": "Prioritise the adoption of digital technologies for policy formulation, implementation and regulatory functions",
            "number": 72,
            "name": "Rainforest Guardian System",
            "objective": "The objective of this initiative is to provide alerts to rainforest enforcement on illegal activities through the adoption of Artificial Intelligence (AI) technology and renewable energy.",
            "description": "The Rainforest Guardian System is a Proof of Concept (PoC) study and implementation with initial 15 units of rainforest guardian from Rainforest Connection California with cloud platform and training for relevant enforcement and operation staff from relevant agencies.",
            "outcomes": "Enforcement agencies can respond faster by 80% to the alerts to prevent and eradicate illegal logging, poaching and other activities endangering wildlife population.",
            "target": "Rainforest Guardian System.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "FD",
              "SFC",
              "Private Sector"
            ],
            "horizon": "medium",
            "blueprintPage": 131
          },
          {
            "pillar": "Frontier Technologies Adoption",
            "action": 2,
            "actionName": "Prioritise the adoption of digital technologies for policy formulation, implementation and regulatory functions",
            "number": 73,
            "name": "3D Web-Based System",
            "objective": "The objectives of this initiative are: • To develop 3D web-based system and User Acceptance Test (UAT); • To implement 3D web-based system for city planning; and • To develop and conduct training programmes.",
            "description": "A web-based system to publish and view 3D City profiles of major towns in Sarawak for effective city planning.",
            "outcomes": "80% efficiency sharing and utilisation of 3D datasets to generate more value-added benefits to the State of Sarawak",
            "target": "• A web-based system to publish, visualise and share 3D City Modelling dataset for major towns and cities in Sarawak; and • A 3D datasets central repository by year 2027.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "SDEC",
              "JKR",
              "SAINS",
              "Private Sector"
            ],
            "horizon": "medium",
            "blueprintPage": 131
          },
          {
            "pillar": "Frontier Technologies Adoption",
            "action": 2,
            "actionName": "Prioritise the adoption of digital technologies for policy formulation, implementation and regulatory functions",
            "number": 74,
            "name": "Integrated IoT - ERP System",
            "objective": "The objective of this initiative is to ensure optimal growing conditions for oil palm and effective usage of resources such as labour and machineries.",
            "description": "The initiative is to develop integrated IoT ERP system in line with the government objective of modernisation agriculture through the use of digital technology/IoT to improve plantation operation. Currently Sarawak Land Consolidation and Rehabilitation Authority (SALCRA) and its group of companies are using multiple systems and operating on different platform based on respective Operating Units’ requirements.",
            "outcomes": "• Automated operation processes and increase ease of doing business; • Improved efficiency and better operation control by 70%; and • Improved yield by 40%.",
            "target": "Comprehensive ERP system.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "SALCRA",
              "Private Sector"
            ],
            "horizon": "short",
            "blueprintPage": 132
          },
          {
            "pillar": "Frontier Technologies Adoption",
            "action": 2,
            "actionName": "Prioritise the adoption of digital technologies for policy formulation, implementation and regulatory functions",
            "number": 75,
            "name": "Geospatial Integrated Information System (SALIIS)",
            "objective": "The objectives of this initiative are • To consolidate all SALCRA’s survey/ mapping data into a centralised geodatabase; • To integrate different data sets using spatial location; and • To evaluate suitability and capability, estimate and predict, interpret and understand using spatial analysis.",
            "description": "GIS technology and system have increased dramatically in popularity, use, and interest over the past decade. Today, organization and groups of all types use Geographical Information System (GIS) for a wide variety of spatial activities.",
            "outcomes": "• Better land development planning; • Accurate estate inventory; and • 50% increased of productivity.",
            "target": "Online integrated information system for Geospatial services, land record, land planning and land management.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "M-FICORD",
              "SALCRA"
            ],
            "horizon": "short",
            "blueprintPage": 132
          },
          {
            "pillar": "Frontier Technologies Adoption",
            "action": 2,
            "actionName": "Prioritise the adoption of digital technologies for policy formulation, implementation and regulatory functions",
            "number": 76,
            "name": "Animal Identification and Traceability System",
            "objective": "The objective of this initiative is to develop animal identification and traceability system solution.",
            "description": "Development of the system to recognise and trace the animal for monitoring, mapping, reporting and research purposes by Department of Veterinary Services Sarawak (DVS).",
            "outcomes": "50% increase in efficiency in identifying animals for mapping purposes.",
            "target": "An integrated animal identification and tracking system.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "DVS",
              "SDEC"
            ],
            "horizon": "short",
            "blueprintPage": 133
          }
        ]
      },
      {
        "id": "p4-s3",
        "name": "Prioritise financial incentives to accelerate technology adoption",
        "initiatives": [
          {
            "pillar": "Frontier Technologies Adoption",
            "action": 3,
            "actionName": "Prioritise financial incentives to accelerate technology adoption",
            "number": 77,
            "name": "Industry Linkage Fund",
            "objective": "The objective of this initiative is to establish industry linkage matching grant scheme to accelerate strategic research & innovation in partnership between public and private sectors.",
            "description": "The Industry Linkage grant scheme is a funding program to support translational research and innovation in collaboration with universities and industry on research projects which have the potential to increase Sarawak’s capability to commercialise and enhance the industry’s competitiveness in the global marketplace.",
            "outcomes": "• Increase in revenue from Intellectual Property (IP) commercialisation and innovation projects; • 30% increase in strategic translational research in Sarawak to create marketable and innovative products; and • 60% increase in job opportunities due to extensive funding in research and innovation projects.",
            "target": "50% increase in research and innovation projects from industry linkage fund.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "SDEC",
              "Private Sector",
              "Universities"
            ],
            "horizon": "medium",
            "blueprintPage": 134
          },
          {
            "pillar": "Frontier Technologies Adoption",
            "action": 3,
            "actionName": "Prioritise financial incentives to accelerate technology adoption",
            "number": 78,
            "name": "Micro, Small and Medium Enterprises (MSMEs) Digitalisation Grants/Vouchers",
            "objective": "The objective of this initiative is to provide grants/ vouchers to digitalise MSMEs.",
            "description": "Provision of grants/vouchers to MSMEs in digitising their business and operations to foster competitiveness and access to domestic and global market.",
            "outcomes": "• Improved access to global market; • Reduction of the cost of operations; and • Increased job opportunities.",
            "target": "80% of MSMEs digitalised",
            "timeline": "2022 - 2030",
            "leadAgencies": [
              "MINTRED",
              "SDEC"
            ],
            "horizon": "medium",
            "blueprintPage": 134
          },
          {
            "pillar": "Frontier Technologies Adoption",
            "action": 3,
            "actionName": "Prioritise financial incentives to accelerate technology adoption",
            "number": 79,
            "name": "Platform as a Service (PaaS) for Micro, Small and Medium Enterprises (MSMEs)",
            "objective": "The objective of this initiative is to provide integrated platform for MSMEs to develop and promote their product and services digitally to domestic and global market.",
            "description": "Platform for MSMEs to develop, promote and market their products and solutions digitally and increase their competitiveness, market share and revenue.",
            "outcomes": "• Increased job opportunities; • Increased market penetration; • Increased revenue; and • More competitive businesses.",
            "target": "Digital Platforms as a Service to MSMEs",
            "timeline": "2022 - 2030",
            "leadAgencies": [
              "MINTRED",
              "SDEC"
            ],
            "horizon": "long",
            "blueprintPage": 135
          }
        ]
      },
      {
        "id": "p4-s4",
        "name": "Catalyse AI opportunities in public and private sectors",
        "initiatives": [
          {
            "pillar": "Frontier Technologies Adoption",
            "action": 4,
            "actionName": "Catalyse AI opportunities in public and private sectors",
            "number": 80,
            "name": "Artificial Intelligence (AI) driven Forensic Timber Identification and Forest Protection",
            "objective": "The objective of this initiative is to provide AI driven forensic timber identification system to protect the forest and generate revenue from timber identification.",
            "description": "AI and Forensic Timber Identification for timber enable every timber to be traced to the stump and concession area leading to reduction in illegal logging, mixing of illegal logs with legal logs and better protection of forest.",
            "outcomes": "• Reduction in illegal logging and improved authentication logged timber; • Improved protection of forest; and • 70% improvement in timber product management.",
            "target": "A comprehensive AI driven forensic timber identification system.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "FD"
            ],
            "horizon": "short",
            "blueprintPage": 136
          },
          {
            "pillar": "Frontier Technologies Adoption",
            "action": 4,
            "actionName": "Catalyse AI opportunities in public and private sectors",
            "number": 81,
            "name": "Artificial Intelligence (AI) Adoption Plan",
            "objective": "The objectives of this initiative are: • To develop AI action plan including acquisition and adoption of AI technology and talent requirements; • To develop State AI framework and strategy to support AI development and ethical deployment opportunities by public and private sectors; and • To develop and implement AI policies, procedures and guidelines for the adoption of AI by government and businesses.",
            "description": "The initiative focuses on the development of AI action plan and explores opportunities in public and private sectors to adopt and implement AI and machine leaning solutions to achieve more efficient, cost effective and reliable services.",
            "outcomes": "• Improved efficiency and productivity; • Increased high-tech jobs opportunities; • Contribution to Sarawak’s GDP; and • Improved competency in AI.",
            "target": "• Appropriate policies, procedures, and guidelines; and • Comprehensive AI adoption plan.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "SMA"
            ],
            "horizon": "medium",
            "blueprintPage": 136
          },
          {
            "pillar": "Frontier Technologies Adoption",
            "action": 4,
            "actionName": "Catalyse AI opportunities in public and private sectors",
            "number": 82,
            "name": "3D Cave Modelling",
            "objective": "The objectives of this initiative are: • To develop 3D models of the caves in TPAs using the LIDAR technology; • To investigate cave biodiversity for research and tourism sector; and • To promote Sarawak’s unique natural attraction to the world.",
            "description": "This initiative will focus on developing 3D Cave modelling for totally protected areas in Sarawak. The initiative will include LIDAR-based mapping of the cave structure, cave survey, data analysis and modelling.",
            "outcomes": "Contribution to Sarawak GDP in tourism sector and 50% improvement in outreach.",
            "target": "Data repository system for 3D cave modelling.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "MTCP",
              "SDEC",
              "SFC",
              "FD"
            ],
            "horizon": "short",
            "blueprintPage": 137
          }
        ]
      }
    ]
  },
  {
    "id": "pillar-5",
    "name": "Foundation for Digital Economy",
    "actions": [
      {
        "id": "p5-s1",
        "name": "Provide high-speed, reliable and affordable internet connectivity to all Sarawakians",
        "initiatives": [
          {
            "pillar": "Foundation for Digital Economy",
            "action": 1,
            "actionName": "Provide high-speed, reliable and affordable internet connectivity to all Sarawakians",
            "number": 83,
            "name": "Digital Telecommunication Infrastructure",
            "objective": "The objectives of this initiative are: • To provide high-speed and reliable telecommunication connectivity and services across Sarawak.",
            "description": "The focus of the initiative is to provide 4G L TE network to user across Sarawak to enjoy the high- speed internet connectivity and to participate in digital economy. The initiatives include Sarawak Multimedia Authority Rural Telecommunication (SMART), JENDELA, MySRBN (Fixed Wireless Access) and SALURAN, VSAT among others.",
            "outcomes": "• Reduce digital divide between rural and urban Sarawak; and • Increase the adoption and participation in digital initiatives by all Sarawakians.",
            "target": "• Improved network connectivity to 96%; • Increase the ease of doing business by 80%; and • Productivity increases by 70% in services in industrial parks.",
            "timeline": "2022 - 2030",
            "leadAgencies": [
              "MUT",
              "SDEC",
              "MCMC",
              "SAINS",
              "Private Sector"
            ],
            "horizon": "long",
            "blueprintPage": 139
          },
          {
            "pillar": "Foundation for Digital Economy",
            "action": 1,
            "actionName": "Provide high-speed, reliable and affordable internet connectivity to all Sarawakians",
            "number": 84,
            "name": "Increase SarawakNet Capacity",
            "objective": "The objective of this initiative is to upgrade the network equipment for WBM, STROPI, Old DUN, TYT Office and new DUN to new equipment for efficient LAN performance scope.",
            "description": "This initiative involves carrying out of the necessary cabling, access point installations and network services to improve the connectivity at government offices.",
            "outcomes": "Increase in work efficiency and productivity by 80%.",
            "target": "Increase the network connectivity and stability of the SarawakNet.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "MUT",
              "SCSDU",
              "STIU",
              "SAINS"
            ],
            "horizon": "short",
            "blueprintPage": 139
          },
          {
            "pillar": "Foundation for Digital Economy",
            "action": 1,
            "actionName": "Provide high-speed, reliable and affordable internet connectivity to all Sarawakians",
            "number": 85,
            "name": "5G for Sarawak Agrotechnology and Bio-industrial Parks",
            "objective": "The objective of this initiative is: • To install 5G towers at Semenggok Agriculture Center and Sarawak bio-industrial parks to spur direct investments, innovation and high-tech industry development.",
            "description": "5G connectivity is essential to boost agriculture and biotechnology business opportunities, promote research and commercialisation, attract and spur both local and foreign investments through public-private partnerships, foster the growth of new businesses and the advancement of high-tech innovation and technology.",
            "outcomes": "• 50% improvement in biotechnology and agrotechnology investments in Sarawak; and • Increase in high-tech jobs and start-ups.",
            "target": "5G-ready agrotechnology and bio-industrial park.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "MUT",
              "M-FICORD",
              "SBC",
              "Private Sector"
            ],
            "horizon": "medium",
            "blueprintPage": 140
          },
          {
            "pillar": "Foundation for Digital Economy",
            "action": 1,
            "actionName": "Provide high-speed, reliable and affordable internet connectivity to all Sarawakians",
            "number": 86,
            "name": "Sarawak Border Control",
            "objective": "The objectives of this initiative are: • To provide solutions and infrastructure for Sarawak border protection; • To link Border Patrol to SIOC in order to provide comprehensive border CCTV monitoring; and • To link Border Patrol to SOJAR by providing more digitalised military force to strengthen border security.",
            "description": "Providing better solutions on border patrol and linking Border patrol to SIOC and SOJAR to strengthen border security with digital technology such as CCTV, drone surveillance, command centre, satellite communication and telecommunication military smartphone.",
            "outcomes": "Improved communication on border patrol and reduction of crimes by 80%.",
            "target": "• Completion of Tower and Telecommunication infrastructure; and • Increase number of towers by 70% for ease of communication.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "SDEC"
            ],
            "horizon": "medium",
            "blueprintPage": 140
          }
        ]
      },
      {
        "id": "p5-s2",
        "name": "Establish global standard digital infrastructure to accelerate digital transformation",
        "initiatives": [
          {
            "pillar": "Foundation for Digital Economy",
            "action": 2,
            "actionName": "Establish global standard digital infrastructure to accelerate digital transformation",
            "number": 87,
            "name": "Data Centre and Services",
            "objective": "The objectives of this initiative are: • To establish tier I, II, III and IV Data Centres in Sarawak; and • To increase data traffic into Sarawak.",
            "description": "The initiative focuses on the establishment of Data Centres in Sarawak to accelerate establishment of Data Centres, data monetising services and increase opportunities for cross-border data flow into Sarawak leading to economic and social benefits.",
            "outcomes": "• Increase in potential foreign investment in Data Centre in Sarawak; • Economic growth through cross-border data flow; and • Increase in revenue from data monetization, cross- border data flow and Data Centre services.",
            "target": "Establishment of 5 Data Centres in Sarawak by 2030.",
            "timeline": "2022 - 2030",
            "leadAgencies": [
              "SMA",
              "EPU",
              "SDEC",
              "SAINS",
              "Private Sector"
            ],
            "horizon": "long",
            "blueprintPage": 141
          }
        ]
      },
      {
        "id": "p5-s3",
        "name": "Accelerate research, innovation, entrepreneurship & commercialisation",
        "initiatives": [
          {
            "pillar": "Foundation for Digital Economy",
            "action": 3,
            "actionName": "Accelerate research, innovation, entrepreneurship & commercialisation",
            "number": 88,
            "name": "R&D Scholarship for Digital Economy",
            "objective": "The objectives of this initiative are: • To grow the pool of experts in digital technology to participate in research, development, commercialisation activity in Sarawak; and • To ensure the continuity of research activities in digital technologies and applications in Sarawak.",
            "description": "Government and industry funded R&D scholarships for digital economy to produce pool of experts in digital technologies and application areas and ensure the continuity of research activities in digital economy in Sarawak.",
            "outcomes": "• 50% increase in expertise in digital technologies and solutions; • New Intellectual Properties (IPs) that can be commercialised; • Increased PhD/Master graduates; and • New high-tech start-ups.",
            "target": "• 20 R&D scholarships per year; and • 50% local expertise in digital economy areas such as AI, cybersecurity, blockchain and Big data analytics, I4.0, IoT, cloud computing and others.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "SDEC",
              "Universities",
              "Private Sector"
            ],
            "horizon": "short",
            "blueprintPage": 142
          },
          {
            "pillar": "Foundation for Digital Economy",
            "action": 3,
            "actionName": "Accelerate research, innovation, entrepreneurship & commercialisation",
            "number": 89,
            "name": "Centre of Excellence in Digital Economy",
            "objective": "The objectives of this initiatives are: • To engage in translational research, innovation and commercialisation in digital & data sciences, social and business innovation in partnership with industry, government, universities & community; and • To transition the outcomes of research into public and private sectors.",
            "description": "The cooperative research and innovation Centre of Excellence in Digital Economy focuses on translational research in core areas of digital economy in partnership with universities, industry, government and community.",
            "outcomes": "• 50% increase of commercialisation activity and contribution to Sarawak’s GDP; • 10 new Intellectual Property (IP) generation that can be commercialised; and • Increased opportunity for high-tech jobs.",
            "target": "• 10 R&D engagements & training programs with university and industry per year; and • 10 high-tech start-ups.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "SDEC",
              "Universities",
              "Private Sector"
            ],
            "horizon": "short",
            "blueprintPage": 142
          },
          {
            "pillar": "Foundation for Digital Economy",
            "action": 3,
            "actionName": "Accelerate research, innovation, entrepreneurship & commercialisation",
            "number": 90,
            "name": "Conferences and Workshops",
            "objective": "The objectives of this initiative are: • To create a platform for knowledge sharing & collaboration between researchers and industry players in digital economy; • To gain insight on best practices and implementation experience from other countries; • To close the digital transformation gap between government, university and industry; and • To run International Digital Economy Conference Sarawak (IDECS) annually in collaboration with national and global digital economy partners.",
            "description": "This initiative is to strengthen knowledge sharing, networking and collaboration through conferences, workshops and exhibitions in partnership with governments, universities and industries. This will also attract core international players and speakers to share their thoughts and achievements.",
            "outcomes": "• Increased collaboration with government, universities & industry; • Increased adoption of technology; • Increase in skilled workforce and knowledge transfer to drive the digital economy; and • Knowledge sharing and networking in digital economy.",
            "target": "• 10 conferences, seminar and workshops; • 60% international speakers; and • 60% increase in exhibition and international delegates.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "MEITD",
              "SMA",
              "SDEC",
              "Agencies",
              "Private"
            ],
            "horizon": "short",
            "blueprintPage": 143
          },
          {
            "pillar": "Foundation for Digital Economy",
            "action": 3,
            "actionName": "Accelerate research, innovation, entrepreneurship & commercialisation",
            "number": 91,
            "name": "AI-Focused Research and Innovation Centre",
            "objective": "The objectives of this initiative are: • To establish advanced metabolomics, proteomics, phenotyping and genotyping laboratories; • To develop AI-assisted data mining techniques for natural product discovery; and • To promote and foster innovation and multi- disciplinary research through good practices and partnerships.",
            "description": "This initiative focuses on to enriching existing data repository by identifying the key value data for big data analytics and for the development of AI-driven natural product discovery. Project components include data generation, database development and AI development.",
            "outcomes": "Research and development driven by AI that can accelerate the talent development in robotics and data analytics.",
            "target": "A platform that utilises data analytics incorporated with AI to target natural products viable for commercial development.",
            "timeline": "2021 - 2030",
            "leadAgencies": [
              "MEITD",
              "SBC",
              "Universities",
              "Private Sector"
            ],
            "horizon": "long",
            "blueprintPage": 143
          }
        ]
      },
      {
        "id": "p5-s4",
        "name": "Accelerate industry focused reskilling and upskilling of existing workforce",
        "initiatives": [
          {
            "pillar": "Foundation for Digital Economy",
            "action": 4,
            "actionName": "Accelerate industry focused reskilling and upskilling of existing workforce",
            "number": 92,
            "name": "Upskilling and Reskilling Programmes for Digital Economy",
            "objective": "The objectives of this initiative are: • To ensure adequate supply of competent talent to support the workforce needs of the digital economy; and • To develop local training providers to contribute to economic prosperity of Sarawak.",
            "description": "Industry certified technical training programmes including building capability to effectively utilise and manage productive use of industry standard tools and systems.",
            "outcomes": "Job ready graduates to meet the workforce requirements of Sarawak’s digital economy.",
            "target": "Industry focused digital talent development programmes.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "MEITD",
              "CENTEXS",
              "Universities",
              "TVET"
            ],
            "horizon": "short",
            "blueprintPage": 144
          },
          {
            "pillar": "Foundation for Digital Economy",
            "action": 4,
            "actionName": "Accelerate industry focused reskilling and upskilling of existing workforce",
            "number": 93,
            "name": "Building Automation System (BAS)",
            "objective": "The objectives of this initiatives are: • To develop the students with the programming and automation skills in home & building control for BAS.",
            "description": "The initiative focuses on developing Building Automation training for students to upgrade their skills especially in programming and automation that relates in home & building control for BAS.",
            "outcomes": "Improved building energy management, cost saving, secure environment, and personalised workplace experience.",
            "target": "20 training programmes in building automation.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "MEITD",
              "CENTEXS",
              "TVET",
              "Universities"
            ],
            "horizon": "medium",
            "blueprintPage": 144
          },
          {
            "pillar": "Foundation for Digital Economy",
            "action": 4,
            "actionName": "Accelerate industry focused reskilling and upskilling of existing workforce",
            "number": 94,
            "name": "Immersive Technologies Based Learning",
            "objective": "The objectives of this initiatives are: • To develop immersive simulation-based e-learning module leveraging high-tech equipment and technologies including AR/VR/XR/Metaverse.",
            "description": "Simulation based learning has been shown to offer the best learning outcomes in various educational and workplace settings. This initiative includes the delivery of contents and to promote and support potential application areas such as telemedicine, mining etc.",
            "outcomes": "Increased AR/VR/XR talents to meet the skills need of industry.",
            "target": "Industry certified training programmes for immersive simulation-based learning.",
            "timeline": "2022 - 2030",
            "leadAgencies": [
              "MEITD",
              "CENTEXS",
              "TVET",
              "Universities"
            ],
            "horizon": "long",
            "blueprintPage": 145
          }
        ]
      },
      {
        "id": "p5-s5",
        "name": "Match talent needs with the future needs of digital economy",
        "initiatives": [
          {
            "pillar": "Foundation for Digital Economy",
            "action": 5,
            "actionName": "Match talent needs with the future needs of digital economy",
            "number": 95,
            "name": "Workforce Competency Database System",
            "objective": "The objectives of this initiative are: • To develop a workforce competency database to assess the talent needs of the industry in Sarawak; and • To provide analytic reports on workforce requirements for industry development in the State.",
            "description": "To facilitate skill and talent matching to meet the workforce requirements of the industry, monitoring and providing feedback/inputs wherever necessary to address the workforce requirements.",
            "outcomes": "• Improved workforce management; and • Improved employability.",
            "target": "• Workforce Competency database; and • A comprehensive study report, to facilitate skill and talent matching to meet the workforce needs of the industry.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "MEITD",
              "HRDMU",
              "SMA",
              "CENTEXS",
              "TVET"
            ],
            "horizon": "medium",
            "blueprintPage": 146
          }
        ]
      },
      {
        "id": "p5-s6",
        "name": "Integrating digital skills into education at primary and secondary level",
        "initiatives": [
          {
            "pillar": "Foundation for Digital Economy",
            "action": 6,
            "actionName": "Integrating digital skills into education at primary and secondary level",
            "number": 96,
            "name": "Digital Skills Development through Digital Community Centre (DCC) & PEDi",
            "objective": "The objectives of this initiative are: • To establish digital skills development fund and expand community development program through DCC and PEDi; and • To ensure that all communities in Sarawak can benefit from the digital skills and foster improvement in community revenues.",
            "description": "The focus of this initiative is to foster digital skills development through establishment of digital skills development fund to expand community development program through DCC and PEDi.",
            "outcomes": "Talented and skilled community in digital skills to effectively participate in digital economy.",
            "target": "100 training programmes in upskilling and reskilling.",
            "timeline": "2022 - 2030",
            "leadAgencies": [
              "MEITD",
              "MCMC",
              "PUSTAKA"
            ],
            "horizon": "long",
            "blueprintPage": 147
          },
          {
            "pillar": "Foundation for Digital Economy",
            "action": 6,
            "actionName": "Integrating digital skills into education at primary and secondary level",
            "number": 97,
            "name": "Cultivating Digital and STEM Skills Amongst Teachers and Students",
            "objective": "The objectives of this initiative are: • Encourage schools and teachers to use digital technologies for virtual learning; • Create and implement technical guidelines for the use of digital technology and data in the education sector; • Introduce STEM subjects in primary schools; and • Create digital teachers’ community in schools and provide digital professional programmes for teachers.",
            "description": "This initiative is critical as it foster digital citizenship in education system. Its main focus is to embed broader set of digital and STEM skills that can assist teachers in maximising their learning abilities and improve students’ capabilities for future employability.",
            "outcomes": "• STEM enrolment of 40%; • 30,000 primary school students from poor households will have access to STEM & Digital skills knowledge; • Continuous improvement of digital educational materials at a lower cost; • Improved online education access; and • Effective data custodianship for students while protecting all user.",
            "target": "• Module and toolkits for STEM & digital programme in schools; • Implementation, monitoring and auditing report for STEM & digital programme in school; • Evaluation report for STEM & digital programme in schools; • All students in Sarawak to have access to online learning; • Increase in digital adoption rate across businesses; • All schools in Sarawak to use digital tools and technology; and • Secure and reliable education system.",
            "timeline": "2022 - 2030",
            "leadAgencies": [
              "MEITD",
              "MoE",
              "CENTEXS",
              "TVET",
              "Universities"
            ],
            "horizon": "long",
            "blueprintPage": 148
          }
        ]
      },
      {
        "id": "p5-s7",
        "name": "Foster equal access to digital economy opportunities to all Sarawakians",
        "initiatives": [
          {
            "pillar": "Foundation for Digital Economy",
            "action": 7,
            "actionName": "Foster equal access to digital economy opportunities to all Sarawakians",
            "number": 98,
            "name": "Digital Community Centre (DCC)",
            "objective": "The objectives of this initiative are: • To bridge the digital divide as well as the information gaps amongst communities in Sarawak; • To provide platform for creating awareness, accessibility, and utilisation of available resources; and • To develop the local capacity building in digital skills and socio-economic development in all districts in Sarawak.",
            "description": "To encourage the use of digital technology in daily life, the government is transforming the existing rural library into a DCC to provide digital training and skills development of underserved Sarawakians so that they can effectively participate in digital economy.",
            "outcomes": "Leverage the existing local libraries to provide digital training programs for the local community in order to help generate new skills needed for employment.",
            "target": "44 DCCs (12 Urban DCC under PUSTAKA & 32 Rural DCC under Ministry of Public Health, Housing and Local Government (MPHLG).",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "MEITD",
              "PUSTAKA"
            ],
            "horizon": "short",
            "blueprintPage": 149
          },
          {
            "pillar": "Foundation for Digital Economy",
            "action": 7,
            "actionName": "Foster equal access to digital economy opportunities to all Sarawakians",
            "number": 99,
            "name": "Pusat Ekonomi Digital Keluarga Malaysia (PEDi)",
            "objective": "The objectives of this initiative are: • To ensure the provisioning of collective internet access facilities & digital entrepreneurship programme for the underserved, rural and urban- poor areas; • To empower community training and upskilling through digital literacy programme; and • To advance the livelihood and income generation of community by leveraging on digital platforms for e-Commerce and marketing activities (digital entrepreneurship).",
            "description": "The initiative aims on advancing the livelihood and income generation of the underserved community by leveraging on digital platforms, infrastructure and services. PEDi is the initiative of the Federal Government funded by the Universal Service Provision fund (USP fund), administered by MCMC.",
            "outcomes": "• Increased of local entrepreneur by 35% statewide on online marketplace; • New jobs created through PEDi guided online entrepreneurship programme; and • Increased income generated by the trained entrepreneurs.",
            "target": "Setup PEDi in every division in the State.",
            "timeline": "2022 - 2030",
            "leadAgencies": [
              "MCMC",
              "PUSTAKA"
            ],
            "horizon": "long",
            "blueprintPage": 149
          }
        ]
      },
      {
        "id": "p5-s8",
        "name": "Accelerate digital skills in the community",
        "initiatives": [
          {
            "pillar": "Foundation for Digital Economy",
            "action": 8,
            "actionName": "Accelerate digital skills in the community",
            "number": 100,
            "name": "e-Learning System PANDei",
            "objective": "The objective of this initiative is to provide training and awareness programme to rural community through e-learning system: PANDei.",
            "description": "e-Learning System: PANDei focuses on upskilling and reskilling training for local rural community in digital technology and usage so that they can better participate in digital economy.",
            "outcomes": "• Improved digital inclusivity and improved participation in digital economy initiatives; • Increased job and entrepreneurship opportunities; • Improved household income; and • Reduced digital divide.",
            "target": "10 training programmes for rural communities in Sarawak.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "PUSTAKA",
              "MCMC"
            ],
            "horizon": "short",
            "blueprintPage": 150
          },
          {
            "pillar": "Foundation for Digital Economy",
            "action": 8,
            "actionName": "Accelerate digital skills in the community",
            "number": 101,
            "name": "Digital Awareness Programme",
            "objective": "The objectives of this initiatives are: • To engage local communities to promote Digital Economy initiatives; • To provide feedback to the local communities during roadshows; • To organise workshop, brainstorming session on the programme; and • To publish latest Digital Economy products and services on supporting media.",
            "description": "Community centres or libraries are focal points for learning and to acquire skills in technology. Libraries or community centres being positioned as community resource and digital centres through its technology accessibility, digital content access, digital literacy and programmes and services.",
            "outcomes": "• Increased audience reach on Digital Economy messaging complementing reach by radio, social media and other media; • Greater visibility and understanding of the roles and undertakings of the key implementers and success stories of businesses and other players; and • Minimised information gaps on current Digital Economy policies and initiatives in the state.",
            "target": "Digital content, social media promotion on radio programmes and information gathering on viewer’s feedback.",
            "timeline": "2022 - 2030",
            "leadAgencies": [
              "PUSTAKA"
            ],
            "horizon": "long",
            "blueprintPage": 150
          },
          {
            "pillar": "Foundation for Digital Economy",
            "action": 8,
            "actionName": "Accelerate digital skills in the community",
            "number": 102,
            "name": "Capacity Building of Local Communities in Entrepreneurship and Digital Technology",
            "objective": "The objectives of this initiative are: • Provide virtual accessibility to cultural products and services through high-resolution image technologies including virtual and augmented reality; and • Develop and train digital skillset in the creative industry.",
            "description": "This initiative aims to improve digital skills and capacity, as well as socioeconomic development, community empowerment, and the development of a sustainable and resilient community.",
            "outcomes": "• 1,800 poor households involved in handicraft entrepreneurship and will earn monthly income of above RM7,575 by 2030; and • Sarawak as hub for digital content development.",
            "target": "• Increase in digital adoption by rural communities; • Contribute to 30% increase in labour productivity; and • 10 Intellectual Properties (Ips) created in digital content.",
            "timeline": "2019 - 2030",
            "leadAgencies": [
              "PUSTAKA",
              "CENTEXS",
              "SDEC"
            ],
            "horizon": "long",
            "blueprintPage": 151
          }
        ]
      },
      {
        "id": "p5-s9",
        "name": "Enhance cyber security ecosystem, governance, uptake and awareness by public & private sectors and community",
        "initiatives": [
          {
            "pillar": "Foundation for Digital Economy",
            "action": 9,
            "actionName": "Enhance cyber security ecosystem, governance, uptake and awareness by public & private sectors and community",
            "number": 103,
            "name": "Cyber Security Awareness Programme",
            "objective": "The objectives of this initiative are: • To provide guidelines and best practices in cyber security for the public and private sectors; • To organise international conferences, seminars and workshops in cyber security; and • To organise cyber security awareness programmes.",
            "description": "This project addresses the need of cyber security code of practice and awareness programmes to protect the cyber space in Sarawak. The initiative consists of provision of policies, guidelines and best practices on cyber security for the government, businesses and public and development and delivery of cyber security awareness programmes.",
            "outcomes": "100% secured online transactions through the digital economy platforms.",
            "target": "10 cyber security code of practice and awareness programmes annually.",
            "timeline": "2022 - 2027",
            "leadAgencies": [
              "SMA",
              "SCSDU",
              "STIU"
            ],
            "horizon": "medium",
            "blueprintPage": 152
          }
        ]
      },
      {
        "id": "p5-s10",
        "name": "Enhance baseline security and resilience for critical infrastructure",
        "initiatives": [
          {
            "pillar": "Foundation for Digital Economy",
            "action": 10,
            "actionName": "Enhance baseline security and resilience for critical infrastructure",
            "number": 104,
            "name": "State’s Cyber Security Development and Management",
            "objective": "The objectives of this initiative are: • To develop cyber security policy and framework of Sarawak; • To establish the State cyber security Governance & Management structure; • To develop cyber security talents for the State; • To establish the State cyber security centre; and • To manage risk related to cyber security.",
            "description": "A cyber security management framework and team to monitor, response, recover and combat any of the cyber security threats in State.",
            "outcomes": "Increased talents and resilience in tackling cyber security threats and crimes.",
            "target": "• Establish Cyber Security Council and Cyber Security Unit; • Operationalise cyber security Framework; • PPG for cyber security; • 30% increase in talents in cyber security areas for each organisation; and • Establish State Cyber Security Research Centre.",
            "timeline": "2022 - 2030",
            "leadAgencies": [
              "SMA",
              "SCSDU",
              "STIU"
            ],
            "horizon": "long",
            "blueprintPage": 153
          }
        ]
      },
      {
        "id": "p5-s11",
        "name": "Enhance data governance, protection & privacy policies, standards and processes",
        "initiatives": [
          {
            "pillar": "Foundation for Digital Economy",
            "action": 11,
            "actionName": "Enhance data governance, protection & privacy policies, standards and processes",
            "number": 105,
            "name": "Data Protection Framework and Data Leak Protection Policy",
            "objective": "The objectives of this initiative are: • To develop data protection framework and data leak protection policy for all government data; and • To promote the data protection to the State agencies, businesses and community.",
            "description": "This initiative focuses on the development of data protection framework and data leak protection policy to protect data sovereignty and data loss or data misuse.",
            "outcomes": "50% efficiency in protecting data sovereignty and data loss or misuse.",
            "target": "Comprehensive framework and policy on data protection and data leak.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "SMA",
              "SCSDU",
              "STIU"
            ],
            "horizon": "short",
            "blueprintPage": 154
          },
          {
            "pillar": "Foundation for Digital Economy",
            "action": 11,
            "actionName": "Enhance data governance, protection & privacy policies, standards and processes",
            "number": 106,
            "name": "Communication and Multimedia Compliance",
            "objective": "The objectives of this initiative are: • To disseminate, distribute and create awareness on legal framework, policies and regulations for the protection of personal data, data residency, data sovereignty, data sharing and utilisation in Sarawak.",
            "description": "This initiative focuses on the development, endorsement and roll-out of legal framework, policies and regulations for communication and multimedia activities in the State.",
            "outcomes": "Reduction of personal data loss and reduction in cybercrimes.",
            "target": "Data sharing and data protection policy for Sarawak.",
            "timeline": "2022 - 2025",
            "leadAgencies": [
              "SMA",
              "SCSDU",
              "STIU"
            ],
            "horizon": "short",
            "blueprintPage": 154
          }
        ]
      }
    ]
  }
];

export const BLUEPRINT_PILLARS = RAW_PILLARS.map((pillar, pillarIndex) => ({
  id: pillar.id,
  name: pillar.name,
  actions: pillar.actions.map((action) => ({
    id: action.id,
    name: action.name,
    initiatives: action.initiatives.map((initiative) => ({
      id: `sdb-p${pillarIndex + 1}-s${initiative.action}-i${initiative.number}`,
      name: initiative.name,
      objective: initiative.objective,
      description: initiative.description,
      outcomes: initiative.outcomes,
      target: initiative.target,
      timeline: initiative.timeline,
      leadAgencies: initiative.leadAgencies,
      horizon: initiative.horizon,
      blueprintPage: initiative.blueprintPage,
      baselineStatus: "Blueprint commitment",
    })),
  })),
}));

const ALL_INITIATIVES = BLUEPRINT_PILLARS.flatMap((pillar) => pillar.actions.flatMap((action) => action.initiatives));

if (BLUEPRINT_PILLARS.length !== 5 || BLUEPRINT_PILLARS.reduce((total, pillar) => total + pillar.actions.length, 0) !== 31 || ALL_INITIATIVES.length !== 106) {
  throw new Error("Blueprint hierarchy count does not match the 2023 Blueprint.");
}

const horizonCounts = ALL_INITIATIVES.reduce((counts, initiative) => ({ ...counts, [initiative.horizon]: (counts[initiative.horizon] || 0) + 1 }), {});
if (horizonCounts.short !== 38 || horizonCounts.medium !== 48 || horizonCounts.long !== 20 || new Set(ALL_INITIATIVES.map((initiative) => initiative.id)).size !== ALL_INITIATIVES.length) {
  throw new Error("Blueprint initiative horizons or ids do not match Table 5.1.");
}

for (const initiative of ALL_INITIATIVES) {
  for (const field of ["id", "name", "objective", "description", "outcomes", "target", "timeline", "leadAgencies", "horizon", "blueprintPage", "baselineStatus"]) {
    if (!initiative[field] || (Array.isArray(initiative[field]) && initiative[field].length === 0)) throw new Error(`Missing ${field} for ${initiative.id}`);
  }
}
