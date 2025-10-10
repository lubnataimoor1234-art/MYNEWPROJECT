import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
  Alert,
} from "react-native";
import { Phone, Mail, MessageSquare, HelpCircle, Send } from "lucide-react-native";
import Colors from "../../utils/colors.utils";
import matter from "../../utils/matter.utils";
import CustomHeader from "../../components/CustomHeader";

const HelpSupportScreen = () => {
  const handleCall = () => Linking.openURL("tel:+923001234567");
  const handleEmail = () => Linking.openURL("mailto:support@fixmyride.com");
  const handleWhatsApp = () =>
    Linking.openURL("https://wa.me/923001234567?text=Hi, I need help with FixMyRide!");

  const handleFeedback = () =>
    Alert.alert("Feedback", "Thanks for reaching out! We'll get back soon.");

  return (
    <View style={styles.container}>
      <CustomHeader title="Help & Support" showBack />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Contact Options */}
        <Text style={styles.sectionTitle}>Contact Us</Text>

        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.optionRow} onPress={handleCall}>
            <Phone size={20} color={Colors.PRIMARY} />
            <Text style={styles.optionText}>Call Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionRow} onPress={handleEmail}>
            <Mail size={20} color={Colors.PRIMARY} />
            <Text style={styles.optionText}>Email Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionRow} onPress={handleWhatsApp}>
            <MessageSquare size={20} color={Colors.PRIMARY} />
            <Text style={styles.optionText}>Chat on WhatsApp</Text>
          </TouchableOpacity>
        </View>

        {/* FAQ Section */}
        <Text style={styles.sectionTitle}>FAQs</Text>
        <View style={styles.faqCard}>
          <HelpCircle size={18} color={Colors.PRIMARY} />
          <View style={styles.faqTextContainer}>
            <Text style={styles.faqQuestion}>
              How can I cancel a mechanic request?
            </Text>
            <Text style={styles.faqAnswer}>
              You can cancel a booking from the "My Rides" screen before the
              mechanic accepts your offer.
            </Text>
          </View>
        </View>

        <View style={styles.faqCard}>
          <HelpCircle size={18} color={Colors.PRIMARY} />
          <View style={styles.faqTextContainer}>
            <Text style={styles.faqQuestion}>
              Can I change my offered budget?
            </Text>
            <Text style={styles.faqAnswer}>
              Yes, you can update your budget before confirmation under the ride
              details screen.
            </Text>
          </View>
        </View>
        {/* Feedback Button */}
        <TouchableOpacity style={styles.feedbackButton} onPress={handleFeedback}>
          <Send size={20} color={Colors.WHITE} />
          <Text style={styles.feedbackText}>Send Feedback</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default HelpSupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: matter.padding.screen,
  },
  sectionTitle: {
    fontSize: matter.fontSize.lg,
    fontWeight: "700",
    color: Colors.TEXT,
    marginTop: matter.spacing.l,
    marginBottom: matter.spacing.m,
  },
  cardContainer: {
    backgroundColor: Colors.WHITE,
    borderRadius: matter.radius.lg,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    padding: matter.spacing.m,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.DARK_GRAY,
  },
  optionText: {
    fontSize: matter.fontSize.md,
    color: Colors.TEXT,
    marginLeft: 10,
  },
  faqCard: {
    flexDirection: "row",
    backgroundColor: Colors.DARK_GRAY,
    borderRadius: matter.radius.md,
    padding: matter.spacing.m,
    marginBottom: matter.spacing.m,
    alignItems: "flex-start",
  },
  faqTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  faqQuestion: {
    fontWeight: "600",
    color: Colors.TEXT,
  },
  faqAnswer: {
    color: Colors.DARK_GRAY,
    marginTop: 4,
  },
  feedbackButton: {
    backgroundColor: Colors.PRIMARY,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: matter.radius.lg,
    paddingVertical: 12,
    marginTop: matter.spacing.xl,
    marginBottom: 40,
  },
  feedbackText: {
    color: Colors.WHITE,
    fontWeight: "600",
    marginLeft: 8,
  },
});
