
import React from "react";
import { Wrench, Battery, Fuel, Settings, Bike } from "lucide-react-native";
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

  bikeTrouble: {
    locationLabel: "Your Location",
    locationText: "123 Main Street, Downtown",
    title: "Select vehicle which is in trouble?",
    subtitle: "Get a mechanic in minutes",
    bannerTitle: "💰 Set Your Price, Get Bids!",
    bannerSubtitle:
      "Choose service → Set your budget → Mechanics accept or counter-bid → You pick the best deal!",
    sectionTitle: "Select a Service",

    services: [
      {
        icon: <Wrench size={22} color={Colors.PRIMARY} />,
        title: "Bike Puncture",
        desc: "Flat tire repair or tube replacement",
        route: "PunctureScreen",
      },
      {
        icon: <Battery size={22} color={Colors.PRIMARY} />,
        title: "Battery Issues",
        desc: "Jump start or battery replacement",
        route: "BatteryScreen",
      },
      {
        icon: <Wrench size={22} color={Colors.PRIMARY} />,
        title: "Engine Breakdown",
        desc: "On-site engine diagnosis and repair",
        route: "EngineScreen",
      },
      {
        icon: <Fuel size={22} color={Colors.PRIMARY} />,
        title: "Fuel Delivery",
        desc: "Emergency fuel delivery service",
        route: "FuelScreen",
      },
      {
        icon: <Settings size={22} color={Colors.PRIMARY} />,
        title: "General Service",
        desc: "Oil change, chain service, general maintenance",
        route: "GeneralServiceScreen",
      },
      {
        icon: <Bike size={22} color={Colors.PRIMARY} />,
        title: "Bike Towing",
        desc: "Towing to nearest garage",
        route: "TowingScreen",
      },
    ],
  },
};

export default strings;
