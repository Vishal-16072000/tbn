const tableData = [
    {
      "name": "npmcli:fs",
      "version": "2.5.2",
      "source": "Public",
      "alternate": "2.5.7",
      "oss_vulnerabilities": { "T": 18, "C": 3, "H": 3, "M": 5, "L": 7 },
      "gos_vulnerabilities": { "T": 8, "C": 0, "H": 0, "M": 3, "L": 5 },
  left: {
    version: "2.5.2",
    repository: "https://github.com/npm/fs",
    publisher: "npm Inc.",
    homepage: "https://www.npmjs.com/package/fs",
    license: "MIT",
    size: "120KB",
    releaseDate: "2024-06-14",
    purl: "pkg:npm/fs@2.5.2",
    findings: [
      "Attestation",
      "Provenance",
      "Supplier and License",
      "Well maintained & Supported",
      "Malware",
      "Secrets"
    ],
    vulnerability: "1 Exploitable, 1 Critical, 2 High",
    vulnerabilitySummary: {
  critical: 3,
  high: 3,
  medium: 5,
  low: 7,
},
vulnerabilities: [
  { reason: "CVE-2021-1234", severity: "Critical" },
  { reason: "CVE-2021-5678", severity: "Critical" },
  { reason: "CVE-2021-44228", severity: "Critical" },
  { reason: "CVE-2024-2137", severity: "High" },
  { reason: "CVE-2024-2137", severity: "High" },
  { reason: "CVE-2024-2137", severity: "High" },
  { reason: "CVE-2024-2137", severity: "Medium" },
  { reason: "CVE-2024-2137", severity: "Medium" },
  { reason: "CVE-2024-2137", severity: "Medium" },
  { reason: "CVE-2024-2137", severity: "Medium" },
  { reason: "CVE-2024-2137", severity: "Medium" },
  { reason: "CVE-2024-2137", severity: "Low" },
  { reason: "CVE-2024-2137", severity: "Low" },
  { reason: "CVE-2024-2137", severity: "Low" },
  { reason: "CVE-2024-2137", severity: "Low" },
  { reason: "CVE-2024-2137", severity: "Low" },
  { reason: "CVE-2024-2137", severity: "Low" },
  { reason: "CVE-2024-2137", severity: "Low" },
],

    lastScanned: "June 14, 2025 at 14:32 UTC",
    usage: [
      {
        projectName: "Project A",
        version: "1.0.0",
        organization: "OrgX",
        product: "ProductX"
      },
      {
        projectName: "Project B",
        version: "2.3.1",
        organization: "OrgY",
        product: "ProductY"
      }
    ],
    oss_vulnerabilities: { T: 18, C: 3, H: 3, M: 5, L: 7 },
    gos_vulnerabilities: { T: 8, C: 0, H: 0, M: 3, L: 5 },
    riskPosition: "2-1",
    dependencies: [
  { name: "aiosignal 1.1.3", type: "Direct", license: "MIT", risk: "high" },
  { name: "propcache 5.3.1", type: "Direct", license: "MIT", risk: "medium" },
  { name: "aiohttp 3.11.4", type: "Direct", license: "MIT", risk: "high" },
  { name: "multidict 6.4.3", type: "Direct", license: "MIT", risk: "medium" },
  { name: "attrs 25.2.2", type: "Indirect", license: "MIT", risk: "high" },
  { name: "typing-extensions 4.13.0", type: "Indirect", license: "MIT", risk: "high" },
  { name: "yarl 1.19.7", type: "Indirect", license: "MIT", risk: "high" }
]
  },
  right: {
    version: "2.5.7",
    repository: "https://github.com/npm/fs",
    publisher: "npm Inc.",
    homepage: "https://www.npmjs.com/package/fs",
    license: "MIT",
    size: "122KB",
    releaseDate: "2025-01-20",
    purl: "pkg:npm/fs@2.5.7",
    findings: [
      "Attestation",
      "Provenance",
      "Supplier and License",
      "Well maintained & Supported",
      "Malware",
      "Secrets"
    ],
    vulnerability: "0 Exploitable, 0 Critical, 1 High",
    vulnerabilitySummary: {
  critical: 0,
  high: 0,
  medium: 3,
  low: 5,
},
vulnerabilities: [
  { reason: "CVE-2021-1234", severity: "Medium" },
  { reason: "CVE-2021-5678", severity: "Medium" },
  { reason: "CVE-2021-44228", severity: "Medium" },
  { reason: "CVE-2024-2137", severity: "Low" },
  { reason: "CVE-2024-2137", severity: "Low" },
  { reason: "CVE-2024-2137", severity: "Low" },
  { reason: "CVE-2024-2137", severity: "Low" },
  { reason: "CVE-2024-2137", severity: "Low" },
],
    lastScanned: "July 12, 2025 at 08:15 UTC",
    usage: [],
    riskPosition: "1-2",
    dependencies: [
  { name: "aiosignal 1.3.2", type: "Direct", license: "MIT", risk: "medium" },
  { name: "propcache 5.3.1", type: "Direct", license: "MIT", risk: "medium" },
  { name: "aiohttp 3.11.18", type: "Direct", license: "MIT", risk: "medium" },
  { name: "multidict 6.4.3", type: "Indirect", license: "MIT", risk: "medium" },
  { name: "attrs 25.3.0", type: "Indirect", license: "MIT", risk: "low" },
  { name: "typing-extensions 4.13.2", type: "Indirect", license: "MIT", risk: "low" },
  { name: "yarl 1.20.0", type: "Indirect", license: "MIT", risk: "low" }
]

    }
  },
    {
      "name": "npmcli:fs",
      "version": "3.0.6",
      "source": "Public",
      "alternate": "3.0.9",
      "oss_vulnerabilities": { "T": 12, "C": 2, "H": 1, "M": 3, "L": 6 },
      "gos_vulnerabilities": { "T": 5, "C": 0, "H": 0, "M": 1, "L": 4 }
    },
    {
      "name": "npmcli:fs",
      "version": "4.0.1",
      "source": "Public",
      "alternate": "4.0.5",
      "oss_vulnerabilities": { "T": 18, "C": 2, "H": 3, "M": 3, "L": 10 },
      "gos_vulnerabilities": { "T": 7, "C": 0, "H": 0, "M": 1, "L": 6 }
    },
    {
      name: "Apache Log4j2",
      version: "2.13.8",
      componentInfo: {
        name: "org.apache.tomee:log4j2-tomee",
        repository: "http://git-wip-us.apache.org/repos/asf/tomee.git",
        publisher: "The Apache Software Foundation",
        license: "https://www.apache.org/licenses/LICENSE-2.0.txt",
        releaseDate: "20 Mar 2025",
        sha: "2ceda82a856a5fa36cd3e7ea521cf029d4d23818e13c31cbb754971d2bccadc",
        digest: "2ceda82a856a5fa36cd3e7ea521cf029d4d23818e13c31cbb754971d2bccadc"
      },
      findings: [
        "Attestation",
        "Provenance",
        "Supplier and License",
        "Well maintained & Supported",
        "Malware",
        "Secrets"
      ],
      vulnerability: "0 Exploitable, 0 Critical, 0 High",
      lastScanned: "June 14, 2025 at 14:32 UTC",
      dependencies: [
  {
    name: "aiohappyeyeballs",
    version: "2.6.1",
    type: "Direct",
    license: "MIT",
    link: "https://example.com/aiohappyeyeballs"
  },
  {
    name: "aiosignal",
    version: "1.3.2",
    type: "Direct",
    license: "MIT",
    link: "https://example.com/aiosignal"
  },
  {
    name: "async-timeout",
    version: "5.0.1",
    type: "Direct",
    license: "MIT",
    link: "https://example.com/async-timeout"
  },
  {
    name: "asyncio",
    version: "3.4.3",
    type: "Direct",
    license: "MIT",
    link: "https://example.com/asyncio"
  },
  {
    name: "propcache",
    version: "0.3.1",
    type: "Direct",
    license: "MIT",
    link: "https://example.com/propcache"
  },
  {
    name: "frozenlist",
    version: "1.6.0",
    type: "Indirect",
    license: "MIT",
    link: "https://example.com/frozenlist"
  }
      ],
      vulnerabilitiesData: {
  critical: 0,
  high: 0,
  medium: 1,
  low: 2,
  list: [
    { reason: "CVE-2021-1234", severity: "Medium" },
    { reason: "CVE-2024-2137", severity: "Low" },
    { reason: "CVE-2024-18810", severity: "Low" }
  ]
}


    },
    {
      "name": "bitnami/cosign",
      "version": "2.2.5",
      "source": "Public",
      "alternate": "Request Premium",
      "oss_vulnerabilities": { "T": 14, "C": 3, "H": 3, "M": 2, "L": 6 },
      "gos_vulnerabilities": null
    },
    {
      "name": "npm:iconv-lite",
      "version": "1.6.3",
      "source": "Public",
      "alternate": "Request Premium",
      "oss_vulnerabilities": { "T": 10, "C": 2, "H": 1, "M": 1, "L": 6 },
      "gos_vulnerabilities": null
    },
    {
      "name": "npm:minimatch",
      "version": "9.0.5",
      "source": "Public",
      "alternate": "9.0.9",
      "oss_vulnerabilities": { "T": 12, "C": 2, "H": 1, "M": 3, "L": 6 },
      "gos_vulnerabilities": { "T": 5, "C": 0, "H": 0, "M": 1, "L": 4 }
    },
    {
      "name": "npm:wrap-ansi",
      "version": "8.1.0",
      "source": "Public",
      "alternate": "8.1.5",
      "oss_vulnerabilities": { "T": 18, "C": 2, "H": 3, "M": 3, "L": 10 },
      "gos_vulnerabilities": { "T": 8, "C": 0, "H": 0, "M": 1, "L": 7 }
    },
    {
      "name": "npm:exponential-backoff",
      "version": "7.6.3",
      "source": "Public",
      "alternate": "7.6.5",
      "oss_vulnerabilities": { "T": 9, "C": 1, "H": 1, "M": 3, "L": 4 },
      "gos_vulnerabilities": { "T": 4, "C": 0, "H": 0, "M": 1, "L": 3 }
    }
  ]
  
  
  export default tableData;
  