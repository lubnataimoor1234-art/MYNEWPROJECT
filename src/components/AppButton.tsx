
import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Colors from "../utils/Colors.utils";

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
  const [isPressed, setIsPressed] = useState(false);
  const isPrimary = type === "primary";

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={onPress}
        style={[
          styles.button,
          isPrimary
            ? {
                backgroundColor: isPressed
                  ? Colors.PRIMARY 
                  : Colors.PRIMARY, 
              }
            : {
                backgroundColor: isPressed
                  ? Colors.PRIMARY 
                  : Colors.WHITE,
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
              {
                color:
                  isPrimary || isPressed
                    ? Colors.WHITE
                    : Colors.DARK_GRAY,
              },
            ]}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
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
