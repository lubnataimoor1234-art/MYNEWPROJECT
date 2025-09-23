


import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Phone, MessageSquare, Star, MapPin } from "lucide-react-native";
import Colors from "../utils/Colors.utils";
import { useTranslation } from "react-i18next";

interface MechanicCardProps {
  mechanic: any;
  onMessage?: () => void;
  onCall?: () => void;
  onAccept?: () => void;
}

const MechanicCard: React.FC<MechanicCardProps> = ({
  mechanic,
  onMessage,
  onCall,
  onAccept,
}) => {
  const { t } = useTranslation();

  return (
    <View style={styles.card}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.serviceText}>{t(`${mechanic.service}`)}</Text>
          <View style={styles.row}>
            <MapPin size={14} color={Colors.TEXT} />
            <Text style={styles.locationText}> {mechanic.location}</Text>
          </View>
          <View style={styles.row}>
            <Star size={14} color={Colors.PRIMARY} />
            <Text style={styles.ratingText}> {mechanic.rating} Rating</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.acceptBtn} onPress={onAccept}>
          <Text style={styles.acceptText}>{t("acceptBid")}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      {/* Bottom Row */}
      <View style={styles.bottomRow}>
        <View style={styles.mechanicInfo}>
          <Image source={{ uri: mechanic.image }} style={styles.avatar} />
          <View>
            <Text style={styles.mechanicName}>{mechanic.name}</Text>
            <Text
              style={[
                styles.status,
                { color: mechanic.online ? Colors.YELLOW : Colors.DARK_GRAY },
              ]}
            >
              {mechanic.online ? t("online") : t("offline")}
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.priceText}>${mechanic.price}</Text>
          <TouchableOpacity style={styles.iconBtn} onPress={onMessage}>
            <MessageSquare size={18} color={Colors.PRIMARY} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn} onPress={onCall}>
            <Phone size={18} color={Colors.PRIMARY} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MechanicCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.WHITE,
    borderRadius: moderateScale(14),
    padding: moderateScale(14),
    marginBottom: moderateScale(10),
    elevation: 3,
  },
  topRow: { flexDirection: "row", justifyContent: "space-between" },
  serviceText: { fontSize: moderateScale(14), fontWeight: "700", color: Colors.TEXT },
  row: { flexDirection: "row", alignItems: "center", marginTop: 2 },
  locationText: { fontSize: moderateScale(11), color: Colors.DARK_GRAY },
  ratingText: { fontSize: moderateScale(11), color: Colors.TEXT },
  acceptBtn: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(14),
    borderRadius: moderateScale(8),
  },
  acceptText: { color: Colors.WHITE, fontWeight: "600", fontSize: moderateScale(12) },
  divider: {
    height: 1,
    backgroundColor: Colors.BORDER_GREY,
    marginVertical: moderateScale(8),
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mechanicInfo: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 45, height: 45, borderRadius: 10, marginRight: 8 },
  mechanicName: { fontSize: 13, fontWeight: "600", color: Colors.TEXT },
  status: { fontSize: 11, fontWeight: "500", marginTop: 2 },
  priceText: { fontSize: 16, fontWeight: "700", color: Colors.TEXT, marginRight: 8 },
  iconBtn: {
    marginLeft: 8,
    backgroundColor: Colors.BORDER_GREY,
    padding: 8,
    borderRadius: 50,
  },
});

