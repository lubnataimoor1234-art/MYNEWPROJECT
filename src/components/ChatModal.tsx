import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import Colors from "../utils/Colors.utils";
import matter from "../utils/matter.utils";

interface ChatMessage {
  id: string;
  sender: "user" | "mechanic";
  text: string;
}

interface Mechanic {
  mechanic?: string;
  service?: string;
  [key: string]: any;
}

interface ChatModalProps {
  visible: boolean;
  onClose: () => void;
  mechanic?: Mechanic;
}

const ChatModal: React.FC<ChatModalProps> = ({ visible, onClose, mechanic }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "1", sender: "mechanic", text: "Hi! How can I help you?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: input,
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>
              Chat with {mechanic?.mechanic || "Mechanic"}
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.messageBubble,
                  item.sender === "user"
                    ? styles.userBubble
                    : styles.mechanicBubble,
                ]}
              >
                <Text
                  style={[
                    styles.messageText,
                    item.sender === "user"
                      ? styles.userText
                      : styles.mechanicText,
                  ]}
                >
                  {item.text}
                </Text>
              </View>
            )}
            contentContainerStyle={styles.chatArea}
          />

          <View style={styles.inputRow}>
            <TextInput
              value={input}
              onChangeText={setInput}
              placeholder="Type your message..."
              style={styles.input}
              placeholderTextColor={Colors.DARK_GRAY}
            />
            <TouchableOpacity
              onPress={handleSend}
              style={styles.sendButton}
              activeOpacity={0.7}
            >
              <Text style={styles.sendText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ChatModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: Colors.WHITE,
    borderRadius: matter.radius.lg,
    padding: matter.spacing.m,
    elevation: 5,
    maxHeight: "80%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: matter.spacing.s,
  },
  title: {
    fontSize: matter.fontSize.md,
    fontWeight: "700",
    color: Colors.TEXT,
  },
  closeText: {
    fontSize: 20,
    color: Colors.PRIMARY,
  },
  chatArea: {
    flexGrow: 1,
    paddingVertical: matter.spacing.s,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 12,
    marginVertical: 4,
    maxWidth: "80%",
  },
  userBubble: {
    backgroundColor: Colors.PRIMARY,
    alignSelf: "flex-end",
  },
  mechanicBubble: {
    backgroundColor: Colors.BACKGROUND,
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: matter.fontSize.s,
  },
  userText: {
    color: Colors.WHITE,
  },
  mechanicText: {
    color: Colors.TEXT,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: matter.spacing.s,
    borderTopWidth: 1,
    borderColor: Colors.BORDER_GREY,
    paddingTop: matter.spacing.s,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: matter.fontSize.s,
    color: Colors.TEXT,
  },
  sendButton: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginLeft: 8,
  },
  sendText: {
    color: Colors.WHITE,
    fontWeight: "600",
  },
});
