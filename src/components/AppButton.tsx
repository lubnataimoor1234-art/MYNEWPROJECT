// import React from "react";
// import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
// import Colors from "../utils/colors.utils";

// type Props = {
//   title: string;
//   onPress: () => void;
//   backgroundColor?: string;
//   textColor?: string;
//   icon?: React.ReactNode; // pass icon component here (lucide-react-native icon)
//   style?: object;
// };

// const AppButton: React.FC<Props> = ({
//   title,
//   onPress,
//   backgroundColor = Colors.PRIMARY,
//   textColor = Colors.WHITE,
//   icon,
//   style,
// }) => {
//   return (
//     <TouchableOpacity
//       activeOpacity={0.8}
//       onPress={onPress}
//       style={[styles.button, { backgroundColor }, style]}
//     >
//       <View style={styles.content}>
//         {icon ? <View style={styles.iconWrap}>{icon}</View> : null}
//         <Text style={[styles.text, { color: textColor }]}>{title}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default AppButton;

// const styles = StyleSheet.create({
//   button: {
//     width: "100%",
//     paddingVertical: 14,
//     borderRadius: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     marginVertical: 8,
//   },
//   content: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   iconWrap: {
//     marginRight: 8,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     fontSize: 16,
//     fontWeight: "600",
//   },
// });
import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Colors from "../utils/colors.utils";

type Props = {
  title: string;
  onPress: () => void;
  icon?: React.ReactNode;
  type?: "primary" | "secondary";
  style?: object;
};

const AppButton: React.FC<Props> = ({
  title,
  onPress,
  icon,
  type = "primary",
  style,
}) => {
  const isPrimary = type === "primary";

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.button,
        isPrimary
          ? { backgroundColor: Colors.PRIMARY }
          : {
              backgroundColor: Colors.WHITE,
              borderWidth: 1,
              borderColor: Colors.BORDER_GREY,
            },
        style,
      ]}
    >
      <View style={styles.content}>
        {icon ? <View style={styles.iconWrap}>{icon}</View> : null}
        <Text
          style={[
            styles.text,
            isPrimary
              ? { color: Colors.WHITE }
              : { color: Colors.DARK_GRAY },
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrap: {
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
    
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
