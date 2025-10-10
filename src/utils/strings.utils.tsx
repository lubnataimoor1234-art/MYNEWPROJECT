
import React from "react";
import { Wrench, Truck,Battery, Fuel, Settings, Bike } from "lucide-react-native";
import Colors from "./colors.utils";

const strings = {
  home: {
    title: "Welcome to FixMyRide",
    subtitle: "Choose your role to get started",
    driverBtn: "Driver / Rider",
    mechanicBtn: "Mechanic / Service Provider",
  },

  profile: {
    title: "Profile",
    personalInfo: "Personal Information",
    paymentMethods: "Payment Methods",
    savedLocations: "Saved Locations",
    myVehicles: "My Vehicles",
    helpSupport: "Help & Support",
    settings: "Settings",
  },

  history: {
    active: "Active Bids",
    pending: "Pending Bids",
    completed: "Completed Bids",
    title: "Service History",
    subtitle: "Your past bookings and bids",
  },

  common: {
    learnMore: "Learn more →",
    searchPlaceholder: "Search",
  },

  bikeRepair: {
    headerTitle: "Bike Repair",
    bannerTitle: "Bike Trouble?",
    bannerSubtitle: "Choose the service you need — we'll send a mechanic right away!",
    learnMore: "Learn More →",
    sectionTitle: "Available Services",

    services: [
      {
        title: "Bike Puncture",
        desc: "Flat tire repair or tube replacement",
        icon: <Wrench size={28} color={Colors.PRIMARY} />,
        route: "RequestMechanicScreen",
      },
      {
        title: "Battery Issue",
        desc: "Jump start or battery replacement",
        icon: <Battery size={28} color={Colors.PRIMARY} />,
       route: "RequestMechanicScreen ",
      },
      {
        title: "Engine Breakdown",
        desc: "Engine diagnostics and minor fixes",
        icon: <Truck size={28} color={Colors.PRIMARY} />,
       route: "RequestMechanicScreen ",
      
      },
      {
        title: "Fuel Delivery",
        desc: "Emergency fuel delivered to your location",
        icon: <Fuel size={28} color={Colors.PRIMARY} />,
           route: "RequestMechanicScreen ",
      },
      {
        title: "General Service",
        desc: "Oil change, brake check, chain lube",
        icon: <Settings size={28} color={Colors.PRIMARY} />,
       route: "RequestMechanicScreen ",
      },
      {
        title: "Bike Towing",
        desc: "Get your bike towed to nearest garage",
        icon: <Bike size={28} color={Colors.PRIMARY} />,
           route: "RequestMechanicScreen ",
      },
    ],
  },
};


export default strings;
