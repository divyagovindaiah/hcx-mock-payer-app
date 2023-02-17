export const coverageeligibilitylistres = {
    "count": 3,
    "coverageeligibility": [
        {
            "resourceType": "Bundle",
            "id": "41eba1d0-6f8b-452f-bf06-62baf48c4ab1",
            "meta": {
                "lastUpdated": "2023-02-12T11:33:33.379+05:30",
                "profile": [
                    "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-CoverageEligibilityRequestBundle.html"
                ]
            },
            "identifier": {
                "system": "https://www.tmh.in/bundle",
                "value": "49b04ec1-6353-44d6-ae0d-2cace958e96e"
            },
            "type": "collection",
            "timestamp": "2023-02-12T11:33:33.379+05:30",
            "entry": [
                {
                    "fullUrl": "CoverageEligibilityRequest/dc82673b-8c71-48c2-8a17-16dcb3b035f6",
                    "resource": {
                        "resourceType": "CoverageEligibilityRequest",
                        "id": "dc82673b-8c71-48c2-8a17-16dcb3b035f6",
                        "meta": {
                            "profile": [
                                "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-CoverageEligibilityRequest.html"
                            ]
                        },
                        "identifier": [
                            {
                                "value": "req_70e02576-f5f5-424f-b115-b5f1029704d4"
                            }
                        ],
                        "status": "active",
                        "priority": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/processpriority",
                                    "code": "normal"
                                }
                            ]
                        },
                        "purpose": [
                            "benefits"
                        ],
                        "patient": {
                            "reference": "Patient/RVH1003"
                        },
                        "servicedPeriod": {
                            "start": "2023-02-12T11:33:32+05:30",
                            "end": "2023-02-12T11:33:32+05:30"
                        },
                        "created": "2023-02-12T11:33:32+05:30",
                        "enterer": {
                            "reference": "http://abcd.com/Tmh01"
                        },
                        "provider": {
                            "reference": "Organization/GICOFINDIA"
                        },
                        "insurer": {
                            "reference": "Organization/Tmh01"
                        },
                        "facility": {
                            "reference": "http://sgh.com.sa/Location/4461281"
                        },
                        "insurance": [
                            {
                                "coverage": {
                                    "reference": "Coverage/COVERAGE1"
                                }
                            }
                        ]
                    }
                },
                {
                    "fullUrl": "Organization/Tmh01",
                    "resource": {
                        "resourceType": "Organization",
                        "id": "Tmh01",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Organization"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "AC",
                                            "display": "Narayana"
                                        }
                                    ]
                                },
                                "system": "http://abdm.gov.in/facilities",
                                "value": "HFR-ID-FOR-TMH"
                            }
                        ],
                        "name": "Tata Memorial Hospital"
                    }
                },
                {
                    "fullUrl": "Organization/GICOFINDIA",
                    "resource": {
                        "resourceType": "Organization",
                        "id": "GICOFINDIA",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Organization"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "AC",
                                            "display": "GOVOFINDIA"
                                        }
                                    ]
                                },
                                "system": "http://irdai.gov.in/insurers",
                                "value": "GICOFINDIA"
                            }
                        ],
                        "name": "GICOFINDIA"
                    }
                },
                {
                    "fullUrl": "Patient/RVH1003",
                    "resource": {
                        "resourceType": "Patient",
                        "id": "RVH1003",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Patient"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "SN",
                                            "display": "Subscriber Number"
                                        }
                                    ]
                                },
                                "system": "http://gicofIndia.com/beneficiaries",
                                "value": "BEN-101"
                            }
                        ],
                        "name": [
                            {
                                "text": "Hina Patel"
                            }
                        ],
                        "gender": "female"
                    }
                },
                {
                    "fullUrl": "Coverage/COVERAGE1",
                    "resource": {
                        "resourceType": "Coverage",
                        "id": "COVERAGE1",
                        "meta": {
                            "profile": [
                                "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-Coverage.html"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "https://www.gicofIndia.in/policies",
                                "value": "policy-RVH1003"
                            }
                        ],
                        "status": "active",
                        "subscriber": {
                            "reference": "Patient/RVH1003"
                        },
                        "subscriberId": "SN-RVH1003",
                        "beneficiary": {
                            "reference": "Patient/RVH1003"
                        },
                        "relationship": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
                                    "code": "self"
                                }
                            ]
                        },
                        "payor": [
                            {
                                "reference": "Organization/GICOFINDIA"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "resourceType": "Bundle",
            "id": "41eba1d0-6f8b-452f-bf06-62baf48c4ab1",
            "meta": {
                "lastUpdated": "2023-02-12T11:33:33.379+05:30",
                "profile": [
                    "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-CoverageEligibilityRequestBundle.html"
                ]
            },
            "identifier": {
                "system": "https://www.tmh.in/bundle",
                "value": "49b04ec1-6353-44d6-ae0d-2cace958e97e"
            },
            "type": "collection",
            "timestamp": "2023-02-12T11:33:33.379+05:30",
            "entry": [
                {
                    "fullUrl": "CoverageEligibilityRequest/dc82673b-8c71-48c2-8a17-16dcb3b035f6",
                    "resource": {
                        "resourceType": "CoverageEligibilityRequest",
                        "id": "dc82673b-8c71-48c2-8a17-16dcb3b035f6",
                        "meta": {
                            "profile": [
                                "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-CoverageEligibilityRequest.html"
                            ]
                        },
                        "identifier": [
                            {
                                "value": "req_70e02576-f5f5-424f-b115-b5f1029704d4"
                            }
                        ],
                        "status": "active",
                        "priority": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/processpriority",
                                    "code": "normal"
                                }
                            ]
                        },
                        "purpose": [
                            "benefits"
                        ],
                        "patient": {
                            "reference": "Patient/RVH1004"
                        },
                        "servicedPeriod": {
                            "start": "2023-02-12T11:33:32+05:30",
                            "end": "2023-02-12T11:33:32+05:30"
                        },
                        "created": "2023-02-12T11:33:32+05:30",
                        "enterer": {
                            "reference": "http://abcd.com/Tmh02"
                        },
                        "provider": {
                            "reference": "Organization/GICOFINDIA"
                        },
                        "insurer": {
                            "reference": "Organization/Tmh02"
                        },
                        "facility": {
                            "reference": "http://sgh.com.sa/Location/4461281"
                        },
                        "insurance": [
                            {
                                "coverage": {
                                    "reference": "Coverage/COVERAGE2"
                                }
                            }
                        ]
                    }
                },
                {
                    "fullUrl": "Organization/Tmh02",
                    "resource": {
                        "resourceType": "Organization",
                        "id": "Tmh02",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Organization"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "AC",
                                            "display": "Krishna"
                                        }
                                    ]
                                },
                                "system": "http://abdm.gov.in/facilities",
                                "value": "HFR-ID-FOR-TMH"
                            }
                        ],
                        "name": "Aditya Hospital"
                    }
                },
                {
                    "fullUrl": "Organization/GICOFINDIA",
                    "resource": {
                        "resourceType": "Organization",
                        "id": "GICOFINDIA",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Organization"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "AC",
                                            "display": "GOVOFINDIA"
                                        }
                                    ]
                                },
                                "system": "http://irdai.gov.in/insurers",
                                "value": "GICOFINDIA"
                            }
                        ],
                        "name": "GICOFINDIA"
                    }
                },
                {
                    "fullUrl": "Patient/RVH1003",
                    "resource": {
                        "resourceType": "Patient",
                        "id": "RVH1003",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Patient"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "SN",
                                            "display": "Subscriber Number"
                                        }
                                    ]
                                },
                                "system": "http://gicofIndia.com/beneficiaries",
                                "value": "BEN-101"
                            }
                        ],
                        "name": [
                            {
                                "text": "Raj Kumar"
                            }
                        ],
                        "gender": "male"
                    }
                },
                {
                    "fullUrl": "Coverage/COVERAGE1",
                    "resource": {
                        "resourceType": "Coverage",
                        "id": "COVERAGE1",
                        "meta": {
                            "profile": [
                                "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-Coverage.html"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "https://www.gicofIndia.in/policies",
                                "value": "policy-RVH1004"
                            }
                        ],
                        "status": "active",
                        "subscriber": {
                            "reference": "Patient/RVH1004"
                        },
                        "subscriberId": "SN-RVH10034",
                        "beneficiary": {
                            "reference": "Patient/RVH1004"
                        },
                        "relationship": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
                                    "code": "self"
                                }
                            ]
                        },
                        "payor": [
                            {
                                "reference": "Organization/GICOFINDIA"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "resourceType": "Bundle",
            "id": "41eba1d0-6f8b-452f-bf06-62baf48c4ab1",
            "meta": {
                "lastUpdated": "2023-02-12T11:33:33.379+05:30",
                "profile": [
                    "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-CoverageEligibilityRequestBundle.html"
                ]
            },
            "identifier": {
                "system": "https://www.tmh.in/bundle",
                "value": "49b04ec1-6353-44d6-ae0d-2cace958e98e"
            },
            "type": "collection",
            "timestamp": "2023-02-12T11:33:33.379+05:30",
            "entry": [
                {
                    "fullUrl": "CoverageEligibilityRequest/dc82673b-8c71-48c2-8a17-16dcb3b035f6",
                    "resource": {
                        "resourceType": "CoverageEligibilityRequest",
                        "id": "dc82673b-8c71-48c2-8a17-16dcb3b035f6",
                        "meta": {
                            "profile": [
                                "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-CoverageEligibilityRequest.html"
                            ]
                        },
                        "identifier": [
                            {
                                "value": "req_70e02576-f5f5-424f-b115-b5f1029704d4"
                            }
                        ],
                        "status": "active",
                        "priority": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/processpriority",
                                    "code": "normal"
                                }
                            ]
                        },
                        "purpose": [
                            "benefits"
                        ],
                        "patient": {
                            "reference": "Patient/RVH1005"
                        },
                        "servicedPeriod": {
                            "start": "2023-02-12T11:33:32+05:30",
                            "end": "2023-02-12T11:33:32+05:30"
                        },
                        "created": "2023-02-12T11:33:32+05:30",
                        "enterer": {
                            "reference": "http://abcd.com/Tmh02"
                        },
                        "provider": {
                            "reference": "Organization/GICOFINDIA"
                        },
                        "insurer": {
                            "reference": "Organization/Tmh03"
                        },
                        "facility": {
                            "reference": "http://sgh.com.sa/Location/4461281"
                        },
                        "insurance": [
                            {
                                "coverage": {
                                    "reference": "Coverage/COVERAGE2"
                                }
                            }
                        ]
                    }
                },
                {
                    "fullUrl": "Organization/Tmh03",
                    "resource": {
                        "resourceType": "Organization",
                        "id": "Tmh02",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Organization"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "AC",
                                            "display": "Krishna"
                                        }
                                    ]
                                },
                                "system": "http://abdm.gov.in/facilities",
                                "value": "HFR-ID-FOR-TMH"
                            }
                        ],
                        "name": "Apollo Hospital"
                    }
                },
                {
                    "fullUrl": "Organization/GICOFINDIA",
                    "resource": {
                        "resourceType": "Organization",
                        "id": "GICOFINDIA",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Organization"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "AC",
                                            "display": "GOVOFINDIA"
                                        }
                                    ]
                                },
                                "system": "http://irdai.gov.in/insurers",
                                "value": "GICOFINDIA"
                            }
                        ],
                        "name": "GICOFINDIA"
                    }
                },
                {
                    "fullUrl": "Patient/RVH1003",
                    "resource": {
                        "resourceType": "Patient",
                        "id": "RVH1003",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Patient"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "SN",
                                            "display": "Subscriber Number"
                                        }
                                    ]
                                },
                                "system": "http://gicofIndia.com/beneficiaries",
                                "value": "BEN-101"
                            }
                        ],
                        "name": [
                            {
                                "text": "Priya"
                            }
                        ],
                        "gender": "female"
                    }
                },
                {
                    "fullUrl": "Coverage/COVERAGE1",
                    "resource": {
                        "resourceType": "Coverage",
                        "id": "COVERAGE1",
                        "meta": {
                            "profile": [
                                "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-Coverage.html"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "https://www.gicofIndia.in/policies",
                                "value": "policy-RVH1004"
                            }
                        ],
                        "status": "active",
                        "subscriber": {
                            "reference": "Patient/RVH1004"
                        },
                        "subscriberId": "SN-RVH10034",
                        "beneficiary": {
                            "reference": "Patient/RVH1004"
                        },
                        "relationship": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
                                    "code": "self"
                                }
                            ]
                        },
                        "payor": [
                            {
                                "reference": "Organization/GICOFINDIA"
                            }
                        ]
                    }
                }
            ]
        }
    ]
}

export const claimslistres = {
    "count": 3,
    "claim": [
        {
            "resourceType": "Bundle",
            "id": "528d8736-4615-4a62-a226-5ccf5db47d94",
            "meta": {
                "lastUpdated": "2023-02-12T11:33:58.084+05:30",
                "profile": [
                    "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-ClaimRequestBundle.html"
                ]
            },
            "identifier": {
                "system": "https://www.tmh.in/bundle",
                "value": "87eb85b0-3394-4351-9d30-366a601ee55d"
            },
            "type": "collection",
            "timestamp": "2023-02-12T11:33:58.084+05:30",
            "entry": [
                {
                    "fullUrl": "Claim/2c244270-b299-4e7c-9cd9-0ba71e150779",
                    "resource": {
                        "resourceType": "Claim",
                        "id": "2c244270-b299-4e7c-9cd9-0ba71e150779",
                        "meta": {
                            "lastUpdated": "2023-02-12T11:33:57.985+05:30",
                            "profile": [
                                "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-Claim.html"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "http://identifiersystem.com",
                                "value": "IdentifierValue"
                            }
                        ],
                        "status": "active",
                        "type": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/claim-type",
                                    "code": "institutional"
                                }
                            ]
                        },
                        "use": "claim",
                        "patient": {
                            "reference": "Patient/RVH1003"
                        },
                        "created": "2023-02-12T11:33:57+05:30",
                        "insurer": {
                            "reference": "Organization/GICOFINDIA"
                        },
                        "provider": {
                            "reference": "Organization/Tmh01"
                        },
                        "priority": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/processpriority",
                                    "code": "normal"
                                }
                            ]
                        },
                        "payee": {
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/payeetype",
                                        "code": "provider"
                                    }
                                ]
                            },
                            "party": {
                                "reference": "Organization/Tmh01"
                            }
                        },
                        "careTeam": [
                            {
                                "sequence": 4,
                                "provider": {
                                    "reference": "Organization/Tmh01"
                                }
                            }
                        ],
                        "insurance": [
                            {
                                "sequence": 1,
                                "focal": true,
                                "coverage": {
                                    "reference": "Coverage/COVERAGE1"
                                }
                            }
                        ],
                        "item": [
                            {
                                "sequence": 1,
                                "productOrService": {
                                    "coding": [
                                        {
                                            "system": "https://pmjay.gov.in/hbp-package-code",
                                            "code": "ID003",
                                            "display": "Treatment of COVID-19 Infection"
                                        }
                                    ]
                                },
                                "unitPrice": {
                                    "value": 100000,
                                    "currency": "INR"
                                }
                            }
                        ]
                    }
                },
                {
                    "fullUrl": "Organization/Tmh02",
                    "resource": {
                        "resourceType": "Organization",
                        "id": "Tmh02",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Organization"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "AC",
                                            "display": "Krishna"
                                        }
                                    ]
                                },
                                "system": "http://abdm.gov.in/facilities",
                                "value": "HFR-ID-FOR-TMH"
                            }
                        ],
                        "name": "Aditya Hospital"
                    }
                },
                {
                    "fullUrl": "Organization/GICOFINDIA",
                    "resource": {
                        "resourceType": "Organization",
                        "id": "GICOFINDIA",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Organization"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "AC",
                                            "display": "GOVOFINDIA"
                                        }
                                    ]
                                },
                                "system": "http://irdai.gov.in/insurers",
                                "value": "GICOFINDIA"
                            }
                        ],
                        "name": "GICOFINDIA"
                    }
                },
                {
                    "fullUrl": "Patient/RVH1003",
                    "resource": {
                        "resourceType": "Patient",
                        "id": "RVH1003",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Patient"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "SN",
                                            "display": "Subscriber Number"
                                        }
                                    ]
                                },
                                "system": "http://gicofIndia.com/beneficiaries",
                                "value": "BEN-101"
                            }
                        ],
                        "name": [
                            {
                                "text": "Raj Kumar"
                            }
                        ],
                        "gender": "male"
                    }
                },
                {
                    "fullUrl": "Coverage/COVERAGE1",
                    "resource": {
                        "resourceType": "Coverage",
                        "id": "COVERAGE1",
                        "meta": {
                            "profile": [
                                "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-Coverage.html"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "https://www.gicofIndia.in/policies",
                                "value": "policy-RVH1003"
                            }
                        ],
                        "status": "active",
                        "subscriber": {
                            "reference": "Patient/RVH1003"
                        },
                        "subscriberId": "SN-RVH1003",
                        "beneficiary": {
                            "reference": "Patient/RVH1003"
                        },
                        "relationship": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
                                    "code": "self"
                                }
                            ]
                        },
                        "payor": [
                            {
                                "reference": "Organization/GICOFINDIA"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "resourceType": "Bundle",
            "id": "528d8736-4615-4a62-a226-5ccf5db47d94",
            "meta": {
                "lastUpdated": "2023-02-12T11:33:58.084+05:30",
                "profile": [
                    "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-ClaimRequestBundle.html"
                ]
            },
            "identifier": {
                "system": "https://www.tmh.in/bundle",
                "value": "87eb85b0-3394-4351-9d30-366a601ee56d"
            },
            "type": "collection",
            "timestamp": "2023-02-12T11:33:58.084+05:30",
            "entry": [
                {
                    "fullUrl": "Claim/2c244270-b299-4e7c-9cd9-0ba71e150779",
                    "resource": {
                        "resourceType": "Claim",
                        "id": "2c244270-b299-4e7c-9cd9-0ba71e150779",
                        "meta": {
                            "lastUpdated": "2023-02-12T11:33:57.985+05:30",
                            "profile": [
                                "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-Claim.html"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "http://identifiersystem.com",
                                "value": "IdentifierValue"
                            }
                        ],
                        "status": "active",
                        "type": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/claim-type",
                                    "code": "institutional"
                                }
                            ]
                        },
                        "use": "claim",
                        "patient": {
                            "reference": "Patient/RVH1003"
                        },
                        "created": "2023-02-12T11:33:57+05:30",
                        "insurer": {
                            "reference": "Organization/GICOFINDIA"
                        },
                        "provider": {
                            "reference": "Organization/Tmh01"
                        },
                        "priority": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/processpriority",
                                    "code": "normal"
                                }
                            ]
                        },
                        "payee": {
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/payeetype",
                                        "code": "provider"
                                    }
                                ]
                            },
                            "party": {
                                "reference": "Organization/Tmh01"
                            }
                        },
                        "careTeam": [
                            {
                                "sequence": 4,
                                "provider": {
                                    "reference": "Organization/Tmh01"
                                }
                            }
                        ],
                        "insurance": [
                            {
                                "sequence": 1,
                                "focal": true,
                                "coverage": {
                                    "reference": "Coverage/COVERAGE1"
                                }
                            }
                        ],
                        "item": [
                            {
                                "sequence": 1,
                                "productOrService": {
                                    "coding": [
                                        {
                                            "system": "https://pmjay.gov.in/hbp-package-code",
                                            "code": "ID003",
                                            "display": "Treatment of COVID-19 Infection"
                                        }
                                    ]
                                },
                                "unitPrice": {
                                    "value": 100000,
                                    "currency": "INR"
                                }
                            }
                        ]
                    }
                },
                {
                    "fullUrl": "Organization/Tmh01",
                    "resource": {
                        "resourceType": "Organization",
                        "id": "Tmh01",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Organization"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "AC",
                                            "display": "Narayana"
                                        }
                                    ]
                                },
                                "system": "http://abdm.gov.in/facilities",
                                "value": "HFR-ID-FOR-TMH"
                            }
                        ],
                        "name": "Tata Memorial Hospital"
                    }
                },
                {
                    "fullUrl": "Organization/GICOFINDIA",
                    "resource": {
                        "resourceType": "Organization",
                        "id": "GICOFINDIA",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Organization"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "AC",
                                            "display": "GOVOFINDIA"
                                        }
                                    ]
                                },
                                "system": "http://irdai.gov.in/insurers",
                                "value": "GICOFINDIA"
                            }
                        ],
                        "name": "GICOFINDIA"
                    }
                },
                {
                    "fullUrl": "Patient/RVH1003",
                    "resource": {
                        "resourceType": "Patient",
                        "id": "RVH1003",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Patient"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "SN",
                                            "display": "Subscriber Number"
                                        }
                                    ]
                                },
                                "system": "http://gicofIndia.com/beneficiaries",
                                "value": "BEN-101"
                            }
                        ],
                        "name": [
                            {
                                "text": "Hina Patel"
                            }
                        ],
                        "gender": "female"
                    }
                },
                {
                    "fullUrl": "Coverage/COVERAGE1",
                    "resource": {
                        "resourceType": "Coverage",
                        "id": "COVERAGE1",
                        "meta": {
                            "profile": [
                                "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-Coverage.html"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "https://www.gicofIndia.in/policies",
                                "value": "policy-RVH1003"
                            }
                        ],
                        "status": "active",
                        "subscriber": {
                            "reference": "Patient/RVH1003"
                        },
                        "subscriberId": "SN-RVH1003",
                        "beneficiary": {
                            "reference": "Patient/RVH1003"
                        },
                        "relationship": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
                                    "code": "self"
                                }
                            ]
                        },
                        "payor": [
                            {
                                "reference": "Organization/GICOFINDIA"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "resourceType": "Bundle",
            "id": "528d8736-4615-4a62-a226-5ccf5db47d94",
            "meta": {
                "lastUpdated": "2023-02-12T11:33:58.084+05:30",
                "profile": [
                    "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-ClaimRequestBundle.html"
                ]
            },
            "identifier": {
                "system": "https://www.tmh.in/bundle",
                "value": "87eb85b0-3394-4351-9d30-366a601ee57d"
            },
            "type": "collection",
            "timestamp": "2023-02-12T11:33:58.084+05:30",
            "entry": [
                {
                    "fullUrl": "Claim/2c244270-b299-4e7c-9cd9-0ba71e150779",
                    "resource": {
                        "resourceType": "Claim",
                        "id": "2c244270-b299-4e7c-9cd9-0ba71e150779",
                        "meta": {
                            "lastUpdated": "2023-02-12T11:33:57.985+05:30",
                            "profile": [
                                "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-Claim.html"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "http://identifiersystem.com",
                                "value": "IdentifierValue"
                            }
                        ],
                        "status": "active",
                        "type": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/claim-type",
                                    "code": "institutional"
                                }
                            ]
                        },
                        "use": "claim",
                        "patient": {
                            "reference": "Patient/RVH1003"
                        },
                        "created": "2023-02-12T11:33:57+05:30",
                        "insurer": {
                            "reference": "Organization/GICOFINDIA"
                        },
                        "provider": {
                            "reference": "Organization/Tmh03"
                        },
                        "priority": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/processpriority",
                                    "code": "normal"
                                }
                            ]
                        },
                        "payee": {
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/payeetype",
                                        "code": "provider"
                                    }
                                ]
                            },
                            "party": {
                                "reference": "Organization/Tmh03"
                            }
                        },
                        "careTeam": [
                            {
                                "sequence": 4,
                                "provider": {
                                    "reference": "Organization/Tmh03"
                                }
                            }
                        ],
                        "insurance": [
                            {
                                "sequence": 1,
                                "focal": true,
                                "coverage": {
                                    "reference": "Coverage/COVERAGE1"
                                }
                            }
                        ],
                        "item": [
                            {
                                "sequence": 1,
                                "productOrService": {
                                    "coding": [
                                        {
                                            "system": "https://pmjay.gov.in/hbp-package-code",
                                            "code": "ID003",
                                            "display": "Treatment of COVID-19 Infection"
                                        }
                                    ]
                                },
                                "unitPrice": {
                                    "value": 100000,
                                    "currency": "INR"
                                }
                            }
                        ]
                    }
                },
                {
                    "fullUrl": "Organization/Tmh03",
                    "resource": {
                        "resourceType": "Organization",
                        "id": "Tmh03",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Organization"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "AC",
                                            "display": "Narayana"
                                        }
                                    ]
                                },
                                "system": "http://abdm.gov.in/facilities",
                                "value": "HFR-ID-FOR-TMH"
                            }
                        ],
                        "name": "Apollo Hospital"
                    }
                },
                {
                    "fullUrl": "Organization/GICOFINDIA",
                    "resource": {
                        "resourceType": "Organization",
                        "id": "GICOFINDIA",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Organization"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "AC",
                                            "display": "GOVOFINDIA"
                                        }
                                    ]
                                },
                                "system": "http://irdai.gov.in/insurers",
                                "value": "GICOFINDIA"
                            }
                        ],
                        "name": "GICOFINDIA"
                    }
                },
                {
                    "fullUrl": "Patient/RVH1003",
                    "resource": {
                        "resourceType": "Patient",
                        "id": "RVH1003",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Patient"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "SN",
                                            "display": "Subscriber Number"
                                        }
                                    ]
                                },
                                "system": "http://gicofIndia.com/beneficiaries",
                                "value": "BEN-101"
                            }
                        ],
                        "name": [
                            {
                                "text": "Priya"
                            }
                        ],
                        "gender": "female"
                    }
                },
                {
                    "fullUrl": "Coverage/COVERAGE1",
                    "resource": {
                        "resourceType": "Coverage",
                        "id": "COVERAGE1",
                        "meta": {
                            "profile": [
                                "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-Coverage.html"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "https://www.gicofIndia.in/policies",
                                "value": "policy-RVH1003"
                            }
                        ],
                        "status": "active",
                        "subscriber": {
                            "reference": "Patient/RVH1003"
                        },
                        "subscriberId": "SN-RVH1003",
                        "beneficiary": {
                            "reference": "Patient/RVH1003"
                        },
                        "relationship": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
                                    "code": "self"
                                }
                            ]
                        },
                        "payor": [
                            {
                                "reference": "Organization/GICOFINDIA"
                            }
                        ]
                    }
                }
            ]
        }
    ]
}

export const preauthlistres = {
    "preauth": [
        {
            "resourceType": "Bundle",
            "id": "528d8736-4615-4a62-a226-5ccf5db47d94",
            "meta": {
                "lastUpdated": "2023-02-12T11:33:58.084+05:30",
                "profile": [
                    "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-PreauthRequestBundle.html"
                ]
            },
            "identifier": {
                "system": "https://www.tmh.in/bundle",
                "value": "87eb85b0-3394-4351-9d30-366a601ee55d"
            },
            "type": "collection",
            "timestamp": "2023-02-12T11:33:58.084+05:30",
            "entry": [
                {
                    "fullUrl": "Preauth/2c244270-b299-4e7c-9cd9-0ba71e150779",
                    "resource": {
                        "resourceType": "Preauth",
                        "id": "2c244270-b299-4e7c-9cd9-0ba71e150779",
                        "meta": {
                            "lastUpdated": "2023-02-12T11:33:57.985+05:30",
                            "profile": [
                                "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-Preauth.html"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "http://identifiersystem.com",
                                "value": "IdentifierValue"
                            }
                        ],
                        "status": "active",
                        "type": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/preauth-type",
                                    "code": "institutional"
                                }
                            ]
                        },
                        "use": "preauth",
                        "patient": {
                            "reference": "Patient/RVH1003"
                        },
                        "created": "2023-02-12T11:33:57+05:30",
                        "insurer": {
                            "reference": "Organization/GICOFINDIA"
                        },
                        "provider": {
                            "reference": "Organization/Tmh01"
                        },
                        "priority": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/processpriority",
                                    "code": "normal"
                                }
                            ]
                        },
                        "payee": {
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/payeetype",
                                        "code": "provider"
                                    }
                                ]
                            },
                            "party": {
                                "reference": "Organization/Tmh01"
                            }
                        },
                        "careTeam": [
                            {
                                "sequence": 4,
                                "provider": {
                                    "reference": "Organization/Tmh01"
                                }
                            }
                        ],
                        "insurance": [
                            {
                                "sequence": 1,
                                "focal": true,
                                "coverage": {
                                    "reference": "Coverage/COVERAGE1"
                                }
                            }
                        ],
                        "item": [
                            {
                                "sequence": 1,
                                "productOrService": {
                                    "coding": [
                                        {
                                            "system": "https://pmjay.gov.in/hbp-package-code",
                                            "code": "ID003",
                                            "display": "Treatment of COVID-19 Infection"
                                        }
                                    ]
                                },
                                "unitPrice": {
                                    "value": 100000,
                                    "currency": "INR"
                                }
                            }
                        ]
                    }
                },
                {
                    "fullUrl": "Organization/Tmh02",
                    "resource": {
                        "resourceType": "Organization",
                        "id": "Tmh02",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Organization"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "AC",
                                            "display": "Krishna"
                                        }
                                    ]
                                },
                                "system": "http://abdm.gov.in/facilities",
                                "value": "HFR-ID-FOR-TMH"
                            }
                        ],
                        "name": "Aditya Hospital"
                    }
                },
                {
                    "fullUrl": "Organization/GICOFINDIA",
                    "resource": {
                        "resourceType": "Organization",
                        "id": "GICOFINDIA",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Organization"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "AC",
                                            "display": "GOVOFINDIA"
                                        }
                                    ]
                                },
                                "system": "http://irdai.gov.in/insurers",
                                "value": "GICOFINDIA"
                            }
                        ],
                        "name": "GICOFINDIA"
                    }
                },
                {
                    "fullUrl": "Patient/RVH1003",
                    "resource": {
                        "resourceType": "Patient",
                        "id": "RVH1003",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Patient"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "SN",
                                            "display": "Subscriber Number"
                                        }
                                    ]
                                },
                                "system": "http://gicofIndia.com/beneficiaries",
                                "value": "BEN-101"
                            }
                        ],
                        "name": [
                            {
                                "text": "Raj Kumar"
                            }
                        ],
                        "gender": "male"
                    }
                },
                {
                    "fullUrl": "Coverage/COVERAGE1",
                    "resource": {
                        "resourceType": "Coverage",
                        "id": "COVERAGE1",
                        "meta": {
                            "profile": [
                                "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-Coverage.html"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "https://www.gicofIndia.in/policies",
                                "value": "policy-RVH1003"
                            }
                        ],
                        "status": "active",
                        "subscriber": {
                            "reference": "Patient/RVH1003"
                        },
                        "subscriberId": "SN-RVH1003",
                        "beneficiary": {
                            "reference": "Patient/RVH1003"
                        },
                        "relationship": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
                                    "code": "self"
                                }
                            ]
                        },
                        "payor": [
                            {
                                "reference": "Organization/GICOFINDIA"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "resourceType": "Bundle",
            "id": "528d8736-4615-4a62-a226-5ccf5db47d94",
            "meta": {
                "lastUpdated": "2023-02-12T11:33:58.084+05:30",
                "profile": [
                    "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-PreauthRequestBundle.html"
                ]
            },
            "identifier": {
                "system": "https://www.tmh.in/bundle",
                "value": "87eb85b0-3394-4351-9d30-366a601ee56d"
            },
            "type": "collection",
            "timestamp": "2023-02-12T11:33:58.084+05:30",
            "entry": [
                {
                    "fullUrl": "Preauth/2c244270-b299-4e7c-9cd9-0ba71e150779",
                    "resource": {
                        "resourceType": "Preauth",
                        "id": "2c244270-b299-4e7c-9cd9-0ba71e150779",
                        "meta": {
                            "lastUpdated": "2023-02-12T11:33:57.985+05:30",
                            "profile": [
                                "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-Preauth.html"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "http://identifiersystem.com",
                                "value": "IdentifierValue"
                            }
                        ],
                        "status": "active",
                        "type": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/preauth-type",
                                    "code": "institutional"
                                }
                            ]
                        },
                        "use": "preauth",
                        "patient": {
                            "reference": "Patient/RVH1003"
                        },
                        "created": "2023-02-12T11:33:57+05:30",
                        "insurer": {
                            "reference": "Organization/GICOFINDIA"
                        },
                        "provider": {
                            "reference": "Organization/Tmh01"
                        },
                        "priority": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/processpriority",
                                    "code": "normal"
                                }
                            ]
                        },
                        "payee": {
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/payeetype",
                                        "code": "provider"
                                    }
                                ]
                            },
                            "party": {
                                "reference": "Organization/Tmh01"
                            }
                        },
                        "careTeam": [
                            {
                                "sequence": 4,
                                "provider": {
                                    "reference": "Organization/Tmh01"
                                }
                            }
                        ],
                        "insurance": [
                            {
                                "sequence": 1,
                                "focal": true,
                                "coverage": {
                                    "reference": "Coverage/COVERAGE1"
                                }
                            }
                        ],
                        "item": [
                            {
                                "sequence": 1,
                                "productOrService": {
                                    "coding": [
                                        {
                                            "system": "https://pmjay.gov.in/hbp-package-code",
                                            "code": "ID003",
                                            "display": "Treatment of COVID-19 Infection"
                                        }
                                    ]
                                },
                                "unitPrice": {
                                    "value": 100000,
                                    "currency": "INR"
                                }
                            }
                        ]
                    }
                },
                {
                    "fullUrl": "Organization/Tmh01",
                    "resource": {
                        "resourceType": "Organization",
                        "id": "Tmh01",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Organization"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "AC",
                                            "display": "Narayana"
                                        }
                                    ]
                                },
                                "system": "http://abdm.gov.in/facilities",
                                "value": "HFR-ID-FOR-TMH"
                            }
                        ],
                        "name": "Tata Memorial Hospital"
                    }
                },
                {
                    "fullUrl": "Organization/GICOFINDIA",
                    "resource": {
                        "resourceType": "Organization",
                        "id": "GICOFINDIA",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Organization"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "AC",
                                            "display": "GOVOFINDIA"
                                        }
                                    ]
                                },
                                "system": "http://irdai.gov.in/insurers",
                                "value": "GICOFINDIA"
                            }
                        ],
                        "name": "GICOFINDIA"
                    }
                },
                {
                    "fullUrl": "Patient/RVH1003",
                    "resource": {
                        "resourceType": "Patient",
                        "id": "RVH1003",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Patient"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "SN",
                                            "display": "Subscriber Number"
                                        }
                                    ]
                                },
                                "system": "http://gicofIndia.com/beneficiaries",
                                "value": "BEN-101"
                            }
                        ],
                        "name": [
                            {
                                "text": "Hina Patel"
                            }
                        ],
                        "gender": "female"
                    }
                },
                {
                    "fullUrl": "Coverage/COVERAGE1",
                    "resource": {
                        "resourceType": "Coverage",
                        "id": "COVERAGE1",
                        "meta": {
                            "profile": [
                                "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-Coverage.html"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "https://www.gicofIndia.in/policies",
                                "value": "policy-RVH1003"
                            }
                        ],
                        "status": "active",
                        "subscriber": {
                            "reference": "Patient/RVH1003"
                        },
                        "subscriberId": "SN-RVH1003",
                        "beneficiary": {
                            "reference": "Patient/RVH1003"
                        },
                        "relationship": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
                                    "code": "self"
                                }
                            ]
                        },
                        "payor": [
                            {
                                "reference": "Organization/GICOFINDIA"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "resourceType": "Bundle",
            "id": "528d8736-4615-4a62-a226-5ccf5db47d94",
            "meta": {
                "lastUpdated": "2023-02-12T11:33:58.084+05:30",
                "profile": [
                    "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-PreauthRequestBundle.html"
                ]
            },
            "identifier": {
                "system": "https://www.tmh.in/bundle",
                "value": "87eb85b0-3394-4351-9d30-366a601ee57d"
            },
            "type": "collection",
            "timestamp": "2023-02-12T11:33:58.084+05:30",
            "entry": [
                {
                    "fullUrl": "Preauth/2c244270-b299-4e7c-9cd9-0ba71e150779",
                    "resource": {
                        "resourceType": "Preauth",
                        "id": "2c244270-b299-4e7c-9cd9-0ba71e150779",
                        "meta": {
                            "lastUpdated": "2023-02-12T11:33:57.985+05:30",
                            "profile": [
                                "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-Preauth.html"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "http://identifiersystem.com",
                                "value": "IdentifierValue"
                            }
                        ],
                        "status": "active",
                        "type": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/preauth-type",
                                    "code": "institutional"
                                }
                            ]
                        },
                        "use": "preauth",
                        "patient": {
                            "reference": "Patient/RVH1003"
                        },
                        "created": "2023-02-12T11:33:57+05:30",
                        "insurer": {
                            "reference": "Organization/GICOFINDIA"
                        },
                        "provider": {
                            "reference": "Organization/Tmh03"
                        },
                        "priority": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/processpriority",
                                    "code": "normal"
                                }
                            ]
                        },
                        "payee": {
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/payeetype",
                                        "code": "provider"
                                    }
                                ]
                            },
                            "party": {
                                "reference": "Organization/Tmh03"
                            }
                        },
                        "careTeam": [
                            {
                                "sequence": 4,
                                "provider": {
                                    "reference": "Organization/Tmh03"
                                }
                            }
                        ],
                        "insurance": [
                            {
                                "sequence": 1,
                                "focal": true,
                                "coverage": {
                                    "reference": "Coverage/COVERAGE1"
                                }
                            }
                        ],
                        "item": [
                            {
                                "sequence": 1,
                                "productOrService": {
                                    "coding": [
                                        {
                                            "system": "https://pmjay.gov.in/hbp-package-code",
                                            "code": "ID003",
                                            "display": "Treatment of COVID-19 Infection"
                                        }
                                    ]
                                },
                                "unitPrice": {
                                    "value": 100000,
                                    "currency": "INR"
                                }
                            }
                        ]
                    }
                },
                {
                    "fullUrl": "Organization/Tmh03",
                    "resource": {
                        "resourceType": "Organization",
                        "id": "Tmh03",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Organization"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "AC",
                                            "display": "Narayana"
                                        }
                                    ]
                                },
                                "system": "http://abdm.gov.in/facilities",
                                "value": "HFR-ID-FOR-TMH"
                            }
                        ],
                        "name": "Apollo Hospital"
                    }
                },
                {
                    "fullUrl": "Organization/GICOFINDIA",
                    "resource": {
                        "resourceType": "Organization",
                        "id": "GICOFINDIA",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Organization"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "AC",
                                            "display": "GOVOFINDIA"
                                        }
                                    ]
                                },
                                "system": "http://irdai.gov.in/insurers",
                                "value": "GICOFINDIA"
                            }
                        ],
                        "name": "GICOFINDIA"
                    }
                },
                {
                    "fullUrl": "Patient/RVH1003",
                    "resource": {
                        "resourceType": "Patient",
                        "id": "RVH1003",
                        "meta": {
                            "profile": [
                                "https://nrces.in/ndhm/fhir/r4/StructureDefinition/Patient"
                            ]
                        },
                        "identifier": [
                            {
                                "type": {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                            "code": "SN",
                                            "display": "Subscriber Number"
                                        }
                                    ]
                                },
                                "system": "http://gicofIndia.com/beneficiaries",
                                "value": "BEN-101"
                            }
                        ],
                        "name": [
                            {
                                "text": "Priya"
                            }
                        ],
                        "gender": "female"
                    }
                },
                {
                    "fullUrl": "Coverage/COVERAGE1",
                    "resource": {
                        "resourceType": "Coverage",
                        "id": "COVERAGE1",
                        "meta": {
                            "profile": [
                                "https://ig.hcxprotocol.io/v0.7.1/StructureDefinition-Coverage.html"
                            ]
                        },
                        "identifier": [
                            {
                                "system": "https://www.gicofIndia.in/policies",
                                "value": "policy-RVH1003"
                            }
                        ],
                        "status": "active",
                        "subscriber": {
                            "reference": "Patient/RVH1003"
                        },
                        "subscriberId": "SN-RVH1003",
                        "beneficiary": {
                            "reference": "Patient/RVH1003"
                        },
                        "relationship": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
                                    "code": "self"
                                }
                            ]
                        },
                        "payor": [
                            {
                                "reference": "Organization/GICOFINDIA"
                            }
                        ]
                    }
                }
            ]
        }
    ],
    "count": 3
}