const doctors = [
  {
    id: 1,
    name: 'Dr. Emily Carter',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    specialty: 'Cardiologist',
    availability: 'Mon, Wed, Fri - 9:00 AM to 1:00 PM',
    days: ['Monday', 'Wednesday', 'Friday'],
    location: 'Downtown Medical Center, New York, NY',
    slots: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'],
  },
  {
    id: 2,
    name: 'Dr. Rajesh Kumar',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    specialty: 'Dermatologist',
    availability: 'Tue, Thu - 10:00 AM to 4:00 PM',
    days: ['Tuesday', 'Thursday'],
    location: 'SkinCare Clinic, San Francisco, CA',
    slots: ['10:00 AM', '11:30 AM', '2:00 PM', '3:30 PM'],
  },
  {
    id: 3,
    name: 'Dr. Sarah Johnson',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    specialty: 'Pediatrician',
    availability: 'Mon to Fri - 8:00 AM to 12:00 PM',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    location: 'Happy Kids Hospital, Austin, TX',
    slots: ['8:00 AM', '9:00 AM', '10:00 PM', '12:00 PM'],
  },
  {
    id: 4,
    name: 'Dr. David Lee',
    photo: 'https://randomuser.me/api/portraits/men/85.jpg',
    specialty: 'Orthopedic Surgeon',
    availability: 'Wed, Fri - 2:00 PM to 6:00 PM',
    days: ['Wednesday', 'Friday'],
    location: 'OrthoPlus Center, Seattle, WA',
    slots: ['2:00 PM', '3:30 PM', '4:00 PM', '5:30 PM'],
  },
  {
    id: 5,
    name: 'Dr. Ana Martínez',
    photo: 'https://randomuser.me/api/portraits/women/12.jpg',
    specialty: 'Neurologist',
    availability: 'Tue, Thu - 11:00 AM to 3:00 PM',
    days: ['Tuesday', 'Thursday'],
    location: 'NeuroCare Institute, Miami, FL',
    slots: ['11:00 AM', '11:30 AM', '2:00 PM', '3:00 PM'],
  },
  {
    id: 6,
    name: 'Dr. John Willson',
    photo: 'https://randomuser.me/api/portraits/men/75.jpg',
    specialty: 'Urologist',
    availability: 'Tue, Wed - 9:00 AM to 2:00 PM',
    days: ['Tuesday', 'Wednesday'],
    location: 'Urology Institute, Los Ángeles, CA',
    slots: ['9:00 AM', '11:30 AM', '12:00 PM', '2:00 PM'],
  },
];

export default doctors;
