// src/data/dataProfile.ts
import { Edit3, HelpCircle, Info } from "lucide-react-native";
import Colors from "../utils/Colors.utils";

export const getProfileOptions = (t: (key: string) => string, navigation: any) => [
  {
    id: "1",
    icon: <Edit3 size={20} color={Colors.PRIMARY} />,
    title: t("editProfile"),
    onPress: () => navigation.navigate("EditProfile" as never),
  },
  {
    id: "2",
    icon: <HelpCircle size={20} color={Colors.PRIMARY} />,
    title: t("helpSupport"),
  },
  {
    id: "3",
    icon: <Info size={20} color={Colors.PRIMARY} />,
    title: t("aboutApp"),
    style: { borderBottomWidth: 0 },
  },
];
