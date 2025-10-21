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
    title: "garage",
    icon: <Wrench color={Colors.PRIMARY} size={28} />,
    screen: "ServiceAtGarage",
  },
  {
    id: 2,
    title: "door",
    icon: <Home color={Colors.PRIMARY} size={28} />,
    screen: "DoorServices",
  },
  {
    id: 3,
    title: "emergency",
    icon: <AlertTriangle color={Colors.PRIMARY} size={28} />,
    screen: "EmergencyServiceScreen",
  },
  {
    id: 4,
    title: "spareParts",
    icon: <ShoppingCart color={Colors.PRIMARY} size={28} />,
    screen: "ShopSparePartsScreen",
  },
  {
    id: 5,
    title: "rentCar",
    icon: <Key color={Colors.PRIMARY} size={28} />,
    screen: "RentACarScreen",
  },
  {
    id: 6,
    title: "insurance",
    icon: <ShieldCheck color={Colors.PRIMARY} size={28} />,
    screen: "InsuranceServiceScreen",
  },
  {
    id: 7,
    title: "driver",
    icon: <ShieldCheck color={Colors.PRIMARY} size={28} />,
    screen: "MapScreen",
  },
  {
    id: 8,
    title: "mechanic",
    icon: <ShieldCheck color={Colors.PRIMARY} size={28} />,
    screen: "ServiceProviderScreen",
  },
   {
    id: 9,
    title: "mechanic",
    icon: <ShieldCheck color={Colors.PRIMARY} size={28} />,
    screen: "ServiceProviderScreen",
  },
];
