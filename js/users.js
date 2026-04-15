// ==========================================
// 32 DENT - User Credentials
// Add or edit users here easily
// ==========================================

const CLINIC_USERS = [
  {
    id: '1',
    clinicName: '32 DENT Clinic',
    fullName: 'Dr. Miran Jabar',
    staffName: 'Dr. Miran Jabar',
    email: 'miran@32dent.com',
    phone: '+964 770 000 0000',
    jobTitle: 'Doctor',
    picture: 'user1.png',
    workStart: '02:00 pm',
    workEnd: '11:00 pm',
    password: 'MI1234ran'
  },
  {
    id: '2',
    clinicName: '32 DENT Clinic',
    fullName: 'Dr. Helda Makwan',
    staffName: 'Dr. Helda Makwan',
    email: 'helda@32dent.com',
    phone: '+964 770 000 0000',
    jobTitle: 'Doctor',
    picture: 'user2.png',
    workStart: '02:00 pm',
    workEnd: '11:00 pm',
    password: 'HEL1234da'
  },
  {
    id: '3',
    clinicName: '32 DENT Clinic',
    fullName: 'Shnyar Waly',
    staffName: 'Shnyar Waly',
    email: 'Shnyar@32dent.com',
    phone: '+964 770 867 6396',
    jobTitle: 'Doctor',
    picture: 'user3.png',
    workStart: '02:00 pm',
    workEnd: '07:00 pm',
    password: 'SHN1234yar'
  },
  {
    id: '4',
    clinicName: '32 DENT Clinic',
    fullName: 'Admin Didar',
    staffName: 'Admin Didar',
    email: 'admin@32dent.com',
    phone: '+964 770 007 1762',
    jobTitle: 'Administrator',
    picture: 'user4.png',
    workStart: '00:00',
    workEnd: '00:00',
    password: 'ad1234min'
  }
];

// === HOW TO ADD NEW USERS ===
// 1. Copy this block:
/*
  {
    id: '4',
    clinicName: '32 DENT Clinic',
    staffName: 'New Staff Name',
    email: 'newemail@32dent.com',
    password: 'password123'
  },
*/
// 2. Paste it before the closing bracket
// 3. Change the id, staffName, email, and password
// 4. Save the file - done!

// Function to validate login
function validateUser(email, password) {
  const user = CLINIC_USERS.find(u => u.email === email && u.password === password);
  return user;
}
