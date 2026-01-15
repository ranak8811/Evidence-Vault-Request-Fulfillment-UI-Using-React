export const mockEvidence = [
  {
    id: "e1",
    name: "Fire Safety Certificate",
    type: "Certificate",
    status: "Valid",
    expiry: "2026-03-12",
    lastUpdated: "2024-02-10",
    versions: [
      {
        version: 1,
        date: "2023-01-01",
        uploadedBy: "Admin",
        notes: "Initial upload",
        fileSize: "2 MB"
      },
      {
        version: 2,
        date: "2024-02-10",
        uploadedBy: "Admin",
        notes: "Annual renewal",
        fileSize: "2.3 MB"
      }
    ]
  },
  {
    id: "e2",
    name: "Factory License",
    type: "License",
    status: "Expired",
    expiry: "2024-01-15",
    lastUpdated: "2023-01-15",
    versions: [
      {
        version: 1,
        date: "2022-01-15",
        uploadedBy: "Admin",
        notes: "Initial license",
        fileSize: "1.2 MB"
      }
    ]
  },
  {
    id: "e3",
    name: "Environmental Policy",
    type: "Policy",
    status: "Pending",
    expiry: null,
    lastUpdated: "2025-01-05",
    versions: [
      {
        version: 1,
        date: "2025-01-05",
        uploadedBy: "Compliance Team",
        notes: "Draft policy",
        fileSize: "900 KB"
      }
    ]
  },
  {
    id: "e4",
    name: "Product Certification XYZ",
    type: "Certificate",
    status: "Valid",
    expiry: "2025-06-30",
    lastUpdated: "2024-06-01",
    versions: [
      {
        version: 1,
        date: "2024-06-01",
        uploadedBy: "QA Dept",
        notes: "Initial certification",
        fileSize: "1.5 MB"
      }
    ]
  },
  {
    id: "e5",
    name: "Building Permit 2023",
    type: "License",
    status: "Valid",
    expiry: "2025-03-20",
    lastUpdated: "2024-03-20",
    versions: [
      {
        version: 1,
        date: "2023-03-20",
        uploadedBy: "Legal",
        notes: "Granted permit",
        fileSize: "3 MB"
      },
      {
        version: 2,
        date: "2024-03-20",
        uploadedBy: "Legal",
        notes: "Annual review",
        fileSize: "3.1 MB"
      }
    ]
  },
  {
    id: "e6",
    name: "Data Privacy Policy",
    type: "Policy",
    status: "Valid",
    expiry: null,
    lastUpdated: "2024-11-15",
    versions: [
      {
        version: 1,
        date: "2024-11-15",
        uploadedBy: "IT Security",
        notes: "Revised policy",
        fileSize: "1.1 MB"
      }
    ]
  },
  {
    id: "e7",
    name: "Health & Safety Certificate",
    type: "Certificate",
    status: "Expired",
    expiry: "2023-12-01",
    lastUpdated: "2022-12-01",
    versions: [
      {
        version: 1,
        date: "2022-12-01",
        uploadedBy: "HR",
        notes: "Initial certification",
        fileSize: "1.8 MB"
      }
    ]
  },
  {
    id: "e8",
    name: "Operating License 2024",
    type: "License",
    status: "Pending",
    expiry: "2025-01-01",
    lastUpdated: "2024-10-01",
    versions: [
      {
        version: 1,
        date: "2024-10-01",
        uploadedBy: "Operations",
        notes: "Application submitted",
        fileSize: "2.5 MB"
      }
    ]
  },
  {
    id: "e9",
    name: "Quality Management Policy",
    type: "Policy",
    status: "Valid",
    expiry: null,
    lastUpdated: "2024-09-01",
    versions: [
      {
        version: 1,
        date: "2024-09-01",
        uploadedBy: "Management",
        notes: "New QMS Policy",
        fileSize: "1.3 MB"
      }
    ]
  },
  {
    id: "e10",
    name: "IT Security Audit Report",
    type: "Certificate",
    status: "Valid",
    expiry: "2025-10-20",
    lastUpdated: "2024-10-20",
    versions: [
      {
        version: 1,
        date: "2024-10-20",
        uploadedBy: "IT Audit",
        notes: "Annual audit report",
        fileSize: "4 MB"
      }
    ]
  }
];

export const mockRequests = [
  {
    id: "r1",
    docType: "Certificate",
    name: "Fire Safety Certificate",
    dueDate: "2025-02-10",
    status: "Pending"
  },
  {
    id: "r2",
    docType: "License",
    name: "Factory License",
    dueDate: "2025-01-20",
    status: "Fulfilled"
  },
  {
    id: "r3",
    docType: "Certificate",
    name: "Product Certification XYZ",
    dueDate: "2025-07-01",
    status: "Pending"
  },
  {
    id: "r4",
    docType: "Policy",
    name: "New Environmental Policy",
    dueDate: "2025-03-15",
    status: "Pending"
  },
  {
    id: "r5",
    docType: "License",
    name: "Operating License Renewal",
    dueDate: "2025-01-05",
    status: "Fulfilled"
  }
];