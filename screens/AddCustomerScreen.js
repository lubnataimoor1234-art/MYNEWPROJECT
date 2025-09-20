


// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
// } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
// import DateTimePicker from "@react-native-community/datetimepicker";


// const AddCustomerScreen = ({ navigation }) => {
//   const [dob, setDob] = useState(null);
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const [gender, setGender] = useState(null);
//   const [findBy, setFindBy] = useState("");
//   const [showAddress, setShowAddress] = useState(false);
//   const [address, setAddress] = useState("");

//   const handleSave = () => {
//     alert("Customer Saved!");
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Icon name="arrow-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>New Customer</Text>
//         <View style={{ width: 24 }} />
//       </View>

//       <ScrollView contentContainerStyle={styles.form}>
//         <Text style={styles.sectionTitle}>Enter Details</Text>

//         {/* Name */}
//         <TextInput style={styles.input} placeholder="Enter Customer Name" />

//         {/* Contact */}
//         <TextInput
//           style={styles.input}
//           placeholder="Contact Number"
//           keyboardType="phone-pad"
//         />

//         {/* Email */}
//         <TextInput style={styles.input} placeholder="Email (Optional)" />

//         {/* DOB */}
//         <TouchableOpacity
//           style={styles.dateInput}
//           onPress={() => setShowDatePicker(true)}
//         >
//           <Text style={{ color: dob ? "#000" : "#888" }}>
//             {dob ? dob.toDateString() : "Date of Birth (Optional)"}
//           </Text>
//           <Icon name="calendar-outline" size={20} color="#555" />
//         </TouchableOpacity>

//         {showDatePicker && (
//           <DateTimePicker
//             value={dob || new Date()}
//             mode="date"
//             display="calendar"
//             onChange={(event, selectedDate) => {
//               setShowDatePicker(false);
//               if (selectedDate) setDob(selectedDate);
//             }}
//           />
//         )}

//         {/* Gender */}
//         <View style={styles.row}>
//           <Text style={styles.label}>Gender</Text>
//           <TouchableOpacity
//             style={styles.radioRow}
//             onPress={() => setGender("Male")}
//           >
//             <Icon
//               name={gender === "Male" ? "radio-button-on" : "radio-button-off"}
//               size={20}
//               color="#000"
//             />
//             <Text style={styles.radioLabel}>Male</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.radioRow}
//             onPress={() => setGender("Female")}
//           >
//             <Icon
//               name={
//                 gender === "Female" ? "radio-button-on" : "radio-button-off"
//               }
//               size={20}
//               color="#000"
//             />
//             <Text style={styles.radioLabel}>Female</Text>
//           </TouchableOpacity>
//         </View>

//         {/* How did customer find you */}
//         <TextInput
//           style={styles.input}
//           placeholder="How did the customer find you?"
//           value={findBy}
//           onChangeText={setFindBy}
//         />

//         {/* Address toggle */}
//         <TouchableOpacity
//           style={styles.row}
//           onPress={() => setShowAddress(!showAddress)}
//         >
//           <Icon
//             name={showAddress ? "radio-button-on" : "radio-button-off"}
//             size={20}
//             color="#000"
//           />
//           <Text style={styles.radioLabel}>Add Customer Address</Text>
//         </TouchableOpacity>

//         {showAddress && (
//           <TextInput
//             style={[styles.input, { height: 80 }]}
//             placeholder="Enter Address"
//             value={address}
//             onChangeText={setAddress}
//             multiline
//           />
//         )}

//         {/* Photos */}
//         <Text style={styles.sectionTitle}>Photos</Text>
//         <View style={styles.photoRow}>
//           <TouchableOpacity style={styles.photoBox}>
//             <Icon name="person-outline" size={50} color="#aaa" />
//             <Text>Face Image</Text>
//             <Icon
//               name="add-circle-outline"
//               size={20}
//               color="#000"
//               style={styles.plusIcon}
//             />
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.photoBox}>
//             <Icon name="body-outline" size={50} color="#aaa" />
//             <Text>Body Image</Text>
//             <Icon
//               name="add-circle-outline"
//               size={20}
//               color="#000"
//               style={styles.plusIcon}
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Save button */}
//         <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//           <Text style={styles.saveText}>Save & Continue</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// export default AddCustomerScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff" },
//   header: {
//     height: 60,
//     backgroundColor: "#000",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 15,
//   },
//   headerTitle: { color: "#fff", fontSize: 20, fontWeight: "500" },
//   form: { padding: 20 },
//   sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 10 },
//   input: {
//     borderBottomWidth: 1,
//     borderBottomColor: "#aaa",
//     marginBottom: 20,
//     paddingVertical: 6,
//   },
//   dateInput: {
//     borderBottomWidth: 1,
//     borderBottomColor: "#aaa",
//     marginBottom: 20,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 6,
//   },
//   row: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
//   label: { marginRight: 10, fontSize: 16 },
//   radioRow: { flexDirection: "row", alignItems: "center", marginRight: 20 },
//   radioLabel: { marginLeft: 6, fontSize: 16 },
//   photoRow: { flexDirection: "row", justifyContent: "space-between" },
//   photoBox: {
//     width: "48%",
//     height: 120,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 6,
//     justifyContent: "center",
//     alignItems: "center",
//     position: "relative",
//   },
//   plusIcon: { position: "absolute", top: 6, right: 6 },
//   saveButton: {
//     backgroundColor: "#000",
//     marginTop: 30,
//     paddingVertical: 14,
//     borderRadius: 30,
//     alignItems: "center",
//   },
//   saveText: { color: "#fff", fontSize: 16 },
// });

import React, { useState, useEffect } from "react"; 
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddCustomerScreen = ({ navigation, route }) => {
  const [dob, setDob] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [gender, setGender] = useState(null);
  const [findBy, setFindBy] = useState("");
  const [showAddress, setShowAddress] = useState(false);
  const [address, setAddress] = useState("");

  // ⬅️ new states for prefilled fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // ⬅️ pick data passed from CustomerScreen
  useEffect(() => {
    if (route.params?.name) setName(route.params.name);
    if (route.params?.phone) setPhone(route.params.phone);
  }, [route.params]);

  const handleSave = () => {
    alert(`Customer Saved!\n${name} - ${phone}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Customer</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.form}>
        <Text style={styles.sectionTitle}>Enter Details</Text>

        
        <TextInput
          style={styles.input}
          placeholder="Enter Customer Name"
          value={name} 
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          keyboardType="phone-pad"
          value={phone} 
          onChangeText={setPhone}
        />
        <TextInput style={styles.input} placeholder="Email (Optional)" />

        <TouchableOpacity
          style={styles.dateInput}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={{ color: dob ? "#000" : "#888" }}>
            {dob ? dob.toDateString() : "Date of Birth (Optional)"}
          </Text>
          <Icon name="calendar-outline" size={20} color="#555" />
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={dob || new Date()}
            mode="date"
            display="calendar"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) setDob(selectedDate);
            }}
          />
        )}

      
        <View style={styles.row}>
          <Text style={styles.label}>Gender</Text>
          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setGender("Male")}
          >
            <Icon
              name={gender === "Male" ? "radio-button-on" : "radio-button-off"}
              size={20}
              color="#000"
            />
            <Text style={styles.radioLabel}>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setGender("Female")}
          >
            <Icon
              name={
                gender === "Female" ? "radio-button-on" : "radio-button-off"
              }
              size={20}
              color="#000"
            />
            <Text style={styles.radioLabel}>Female</Text>
          </TouchableOpacity>
        </View>

        
        <TextInput
          style={styles.input}
          placeholder="How did the customer find you?"
          value={findBy}
          onChangeText={setFindBy}
        />

       
        <TouchableOpacity
          style={styles.row}
          onPress={() => setShowAddress(!showAddress)}
        >
          <Icon
            name={showAddress ? "radio-button-on" : "radio-button-off"}
            size={20}
            color="#000"
          />
          <Text style={styles.radioLabel}>Add Customer Address</Text>
        </TouchableOpacity>

        {showAddress && (
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Enter Address"
            value={address}
            onChangeText={setAddress}
            multiline
          />
        )}

        <Text style={styles.sectionTitle}>Photos</Text>
        <View style={styles.photoRow}>
          <TouchableOpacity style={styles.photoBox}>
            <Icon name="person-outline" size={50} color="#aaa" />
            <Text>Face Image</Text>
            <Icon
              name="add-circle-outline"
              size={20}
              color="#000"
              style={styles.plusIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.photoBox}>
            <Icon name="body-outline" size={50} color="#aaa" />
            <Text>Body Image</Text>
            <Icon
              name="add-circle-outline"
              size={20}
              color="#000"
              style={styles.plusIcon}
            />
          </TouchableOpacity>
        </View>

       
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>Save & Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AddCustomerScreen;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    height: 60,
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  headerTitle: { color: "#fff", fontSize: 20, fontWeight: "500" },

  form: { padding: 20 },

  sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 10 },

  // ⬅️ Input fields (Name, Phone, Email, Find By, Address)
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    fontSize: 16,
    color: "#000",
    backgroundColor: "#f9f9f9",
  },

  dateInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },

  row: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  label: { marginRight: 10, fontSize: 16 },

  radioRow: { flexDirection: "row", alignItems: "center", marginRight: 20 },
  radioLabel: { marginLeft: 6, fontSize: 16 },

  photoRow: { flexDirection: "row", justifyContent: "space-between" },
  photoBox: {
    width: "48%",
    height: 120,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#fafafa",
  },
  plusIcon: { position: "absolute", top: 6, right: 6 },

  saveButton: {
    backgroundColor: "#000",
    marginTop: 30,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  saveText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});




// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
// } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import * as Contacts from "expo-contacts";

// const AddCustomerScreen = ({ navigation, route }) => {
//   const [dob, setDob] = useState(null);
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [gender, setGender] = useState(null);
//   const [findBy, setFindBy] = useState("");
//   const [showAddress, setShowAddress] = useState(false);
//   const [address, setAddress] = useState("");
//   const [contactNumber, setContactNumber] = useState("");

//   useEffect(() => {
//     if (route.params?.fromContact) {
//       pickContact();
//     }
//   }, [route.params]);

//   const pickContact = async () => {
//     const { status } = await Contacts.requestPermissionsAsync();
//     if (status === "granted") {
//       const { data } = await Contacts.getContactsAsync({
//         fields: [Contacts.Fields.PhoneNumbers],
//       });

//       if (data.length > 0) {
//         // Just pick the first contact for now
//         const contact = data[0];
//         if (contact.phoneNumbers && contact.phoneNumbers.length > 0) {
//           setContactNumber(contact.phoneNumbers[0].number);
//         }
//       }
//     }
//   };

//   const handleSave = () => {
//     alert("Customer Saved!");
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Icon name="arrow-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>New Customer</Text>
//         <View style={{ width: 24 }} />
//       </View>

//       <ScrollView contentContainerStyle={styles.form}>
//         <Text style={styles.sectionTitle}>Enter Details</Text>

//         {/* Name */}
//         <TextInput style={styles.input} placeholder="Enter Customer Name" />

//         {/* Contact */}
//         <TextInput
//           style={styles.input}
//           placeholder="Contact Number"
//           keyboardType="phone-pad"
//           value={contactNumber}
//           onChangeText={setContactNumber}
//         />

//         {/* Email */}
//         <TextInput style={styles.input} placeholder="Email (Optional)" />

//         {/* DOB */}
//         <TouchableOpacity
//           style={styles.dateInput}
//           onPress={() => setShowDatePicker(true)}
//         >
//           <Text style={{ color: dob ? "#000" : "#888" }}>
//             {dob ? dob.toDateString() : "Date of Birth (Optional)"}
//           </Text>
//           <Icon name="calendar-outline" size={20} color="#555" />
//         </TouchableOpacity>

//         {showDatePicker && (
//           <DateTimePicker
//             value={dob || new Date()}
//             mode="date"
//             display="calendar"
//             onChange={(event, selectedDate) => {
//               setShowDatePicker(false);
//               if (selectedDate) setDob(selectedDate);
//             }}
//           />
//         )}

//         {/* Gender */}
//         <View style={styles.row}>
//           <Text style={styles.label}>Gender</Text>
//           <TouchableOpacity
//             style={styles.radioRow}
//             onPress={() => setGender("Male")}
//           >
//             <Icon
//               name={gender === "Male" ? "radio-button-on" : "radio-button-off"}
//               size={20}
//               color="#000"
//             />
//             <Text style={styles.radioLabel}>Male</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.radioRow}
//             onPress={() => setGender("Female")}
//           >
//             <Icon
//               name={
//                 gender === "Female" ? "radio-button-on" : "radio-button-off"
//               }
//               size={20}
//               color="#000"
//             />
//             <Text style={styles.radioLabel}>Female</Text>
//           </TouchableOpacity>
//         </View>

//         {/* How did customer find you */}
//         <TextInput
//           style={styles.input}
//           placeholder="How did the customer find you?"
//           value={findBy}
//           onChangeText={setFindBy}
//         />

//         {/* Address toggle */}
//         <TouchableOpacity
//           style={styles.row}
//           onPress={() => setShowAddress(!showAddress)}
//         >
//           <Icon
//             name={showAddress ? "radio-button-on" : "radio-button-off"}
//             size={20}
//             color="#000"
//           />
//           <Text style={styles.radioLabel}>Add Customer Address</Text>
//         </TouchableOpacity>

//         {showAddress && (
//           <TextInput
//             style={[styles.input, { height: 80 }]}
//             placeholder="Enter Address"
//             value={address}
//             onChangeText={setAddress}
//             multiline
//           />
//         )}

//         {/* Save button */}
//         <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//           <Text style={styles.saveText}>Save & Continue</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// export default AddCustomerScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff" },
//   header: {
//     height: 60,
//     backgroundColor: "#000",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 15,
//   },
//   headerTitle: { color: "#fff", fontSize: 20, fontWeight: "500" },
//   form: { padding: 20 },
//   sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 10 },
//   input: {
//     borderBottomWidth: 1,
//     borderBottomColor: "#aaa",
//     marginBottom: 20,
//     paddingVertical: 6,
//   },
//   dateInput: {
//     borderBottomWidth: 1,
//     borderBottomColor: "#aaa",
//     marginBottom: 20,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 6,
//   },
//   row: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
//   label: { marginRight: 10, fontSize: 16 },
//   radioRow: { flexDirection: "row", alignItems: "center", marginRight: 20 },
//   radioLabel: { marginLeft: 6, fontSize: 16 },
//   saveButton: {
//     backgroundColor: "#000",
//     marginTop: 30,
//     paddingVertical: 14,
//     borderRadius: 30,
//     alignItems: "center",
//   },
//   saveText: { color: "#fff", fontSize: 16 },
// });
