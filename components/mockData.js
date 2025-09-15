export const countries = [
  { 
    id: '1', 
    name: 'Pakistan', 
    code: 'PK',
    coordinates: { latitude: 30.3753, longitude: 69.3451 }
  },
  { 
    id: '2', 
    name: 'United States', 
    code: 'US',
    coordinates: { latitude: 37.0902, longitude: -95.7129 }
  },
  { 
    id: '3', 
    name: 'United Kingdom', 
    code: 'UK',
    coordinates: { latitude: 55.3781, longitude: -3.4360 }
  },
  { 
    id: '4', 
    name: 'Canada', 
    code: 'CA',
    coordinates: { latitude: 56.1304, longitude: -106.3468 }
  },
  { 
    id: '5', 
    name: 'Australia', 
    code: 'AU',
    coordinates: { latitude: -25.2744, longitude: 133.7751 }
  },
  { 
    id: '6', 
    name: 'India', 
    code: 'IN',
    coordinates: { latitude: 20.5937, longitude: 78.9629 }
  },
];

export const mockLocations = [
  { 
    id: '1', 
    name: 'Main Market', 
    address: '123 Main Street, Karachi', 
    type: 'market',
    coordinates: { latitude: 24.8607, longitude: 67.0011 }
  },
  { 
    id: '2', 
    name: 'City Center', 
    address: '456 Center Road, Lahore', 
    type: 'mall',
    coordinates: { latitude: 31.5204, longitude: 74.3587 }
  },
  { 
    id: '3', 
    name: 'Gulshan Plaza', 
    address: '789 Gulshan Avenue, Islamabad', 
    type: 'plaza',
    coordinates: { latitude: 33.6844, longitude: 73.0479 }
  },
  { 
    id: '4', 
    name: 'Commercial Area', 
    address: '321 Business Road, Rawalpindi', 
    type: 'commercial',
    coordinates: { latitude: 33.5651, longitude: 73.0169 }
  },
  { 
    id: '5', 
    name: 'Shopping District', 
    address: '654 Market Street, Faisalabad', 
    type: 'shopping',
    coordinates: { latitude: 31.4504, longitude: 73.1350 }
  },
];

// Add a default export to fix the warning
const mockData = {
  countries,
  mockLocations
};

export default mockData;