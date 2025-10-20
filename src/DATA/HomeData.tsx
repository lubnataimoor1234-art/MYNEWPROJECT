import React from "react";
import {
  Wrench,
  Home,
  AlertTriangle,
  ShoppingCart,
  Key,
  ShieldCheck,
} from "lucide-react-native";
import Colors from "../utils/Colors.utils";

export const services = [
  {
    id: 1,
    title: "home.services.garage",
    icon: <Wrench color={Colors.PRIMARY} size={28} />,
    screen: "ServiceAtGarage",
  },
  {
    id: 2,
    title: "home.services.door",
    icon: <Home color={Colors.PRIMARY} size={28} />,
    screen: "DoorServices",
  },
  {
    id: 3,
    title: "home.services.emergency",
    icon: <AlertTriangle color={Colors.PRIMARY} size={28} />,
    screen: "EmergencyServiceScreen",
  },
  {
    id: 4,
    title: "home.services.spareParts",
    icon: <ShoppingCart color={Colors.PRIMARY} size={28} />,
    screen: "ShopSparePartsScreen",
  },
  {
    id: 5,
    title: "home.services.rentCar",
    icon: <Key color={Colors.PRIMARY} size={28} />,
    screen: "RentACarScreen",
  },
  {
    id: 6,
    title: "home.services.insurance",
    icon: <ShieldCheck color={Colors.PRIMARY} size={28} />,
    screen: "InsuranceServiceScreen",
  },
  {
    id: 7,
    title: "home.services.driver",
    icon: <ShieldCheck color={Colors.PRIMARY} size={28} />,
    screen: "MapScreen",
  },
  {
    id: 8,
    title: "home.services.mechanic",
    icon: <ShieldCheck color={Colors.PRIMARY} size={28} />,
    screen: "ServiceProviderScreen",
  },
   {
    id: 9,
    title: "home.services.mechanic",
    icon: <ShieldCheck color={Colors.PRIMARY} size={28} />,
    screen: "ServiceProviderScreen",
  },
];
