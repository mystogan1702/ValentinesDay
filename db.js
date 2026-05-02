// db.js - Shared database functions for GitHub Pages
function loadDB() {
  const stored = localStorage.getItem('physioDatabase');
  if (stored) {
    return JSON.parse(stored);
  }
  
  // Default database if empty
  const defaultDB = {
    "users": [
      {
        "id": "DOC001",
        "email": "dr.smith@goodphysio.com",
        "password": "doctor123",
        "name": "Dr. Sarah Smith",
        "role": "doctor",
        "specialization": "Sports Rehabilitation",
        "license": "PT-2020-45678",
        "created": "2025-01-15"
      },
      {
        "id": "DOC002",
        "email": "dr.jones@goodphysio.com",
        "password": "doctor456",
        "name": "Dr. Michael Jones",
        "role": "doctor",
        "specialization": "Neurological Physiotherapy",
        "license": "PT-2019-32145",
        "created": "2025-02-01"
      },
      {
        "id": "PAT001",
        "email": "maria@email.com",
        "password": "patient123",
        "name": "Maria Santos Garcia",
        "role": "patient",
        "surname": "Garcia",
        "firstname": "Maria",
        "middlename": "Santos",
        "age": "34",
        "birthdate": "1992-03-15",
        "address": "123 Rizal St., San Pedro, Laguna",
        "phone": "+63 912 345 6789",
        "sex": "Female",
        "occupation": "Teacher",
        "emergencyContact": {
          "name": "Juan Garcia",
          "phone": "+63 917 111 2222",
          "relationship": "Spouse"
        },
        "medicalHistory": [],
        "created": "2025-03-10"
      },
      {
        "id": "PAT002",
        "email": "david@email.com",
        "password": "patient456",
        "name": "David Kim",
        "role": "patient",
        "surname": "Kim",
        "firstname": "David",
        "middlename": "",
        "age": "28",
        "birthdate": "1998-07-22",
        "address": "45 Mabini St., Binan, Laguna",
        "phone": "+63 917 890 1234",
        "sex": "Male",
        "occupation": "Software Engineer",
        "emergencyContact": {
          "name": "Sofia Kim",
          "phone": "+63 918 333 4444",
          "relationship": "Sister"
        },
        "medicalHistory": [],
        "created": "2025-04-22"
      }
    ],
    "appointments": [],
    "posts": [],
    "ratings": [],
    "availableSlots": ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"]
  };
  
  localStorage.setItem('physioDatabase', JSON.stringify(defaultDB));
  return defaultDB;
}

function saveDB(db) {
  localStorage.setItem('physioDatabase', JSON.stringify(db));
}

function getLoggedInUser() {
  const u = localStorage.getItem('physioLoggedInUser');
  return u ? JSON.parse(u) : null;
}
