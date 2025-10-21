import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../utils/Colors.utils";
import { moderateScale } from "react-native-size-matters";

const IconButton = ({ icon: Icon, active, onPress }: any) => (
  <TouchableOpacity
    style={[styles.iconBtn, active && { backgroundColor: Colors.PRIMARY }]}
    onPress={onPress}
  >
    <Icon size={18} color={active ? Colors.WHITE : Colors.PRIMARY} />
  </TouchableOpacity>
);

export default IconButton;

const styles = StyleSheet.create({
  iconBtn: {
    marginLeft: moderateScale(8),
    backgroundColor: Colors.BORDER_GREY,
    padding: moderateScale(8),
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
