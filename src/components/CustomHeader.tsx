import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ArrowLeft, MapPin, User } from "lucide-react-native";

import Colors from "./../utils/colors.utils";
interface Props {
  title: string;
  subtitle?: string;
  location?: string;
  onBack?: () => void;
  onProfile?: () => void;
}

const CustomGreenHeader: React.FC<Props> = ({
  title,
  subtitle,
  location,
  onBack,
  onProfile,
}) => {
  return (
    <View style={styles.container}>
      {/* Top Row: Back + Location + Profile */}
      <View style={styles.topRow}>
        {onBack && (
          <TouchableOpacity onPress={onBack} style={styles.iconBtn}>
            <ArrowLeft size={24} color={Colors.WHITE} />
          </TouchableOpacity>
        )}

        {location && (
          <View style={styles.locationContainer}>
            <MapPin size={18} color={Colors.WHITE} />
            <Text style={styles.locationText}>{location}</Text>
          </View>
        )}

        {onProfile && (
          <TouchableOpacity onPress={onProfile} style={styles.iconBtn}>
            <User size={24} color={Colors.WHITE} />
          </TouchableOpacity>
        )}
      </View>

      {/* Title + Subtitle */}
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

export default CustomGreenHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: 16,
    paddingTop: 45, // space for status bar
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  iconBtn: {
    padding: 6,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 12,
  },
  locationText: {
    color: Colors.WHITE,
    marginLeft: 6,
    fontSize: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.WHITE,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.BACKGROUND,
    marginTop: 4,
  },
});
