// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import COLORS from '../constants/colors';

// const MenuModal = () => {
//   return (
//     <View style={styles.modalContainer}>
//       <Text style={styles.title}>Menu</Text>

//       <TouchableOpacity style={styles.option}>
//         <Text style={styles.optionText}>My Rides</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.option}>
//         <Text style={styles.optionText}>Saved Addresses</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.option}>
//         <Text style={styles.optionText}>Help Center</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.option}>
//         <Text style={styles.optionText}>Settings</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.logoutButton}>
//         <Text style={styles.logoutText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default MenuModal;

// const styles = StyleSheet.create({
//   modalContainer: {
//     backgroundColor: COLORS.background,
//     padding: 20,
//     borderRadius: 12,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     color: COLORS.text,
//   },
//   option: {
//     paddingVertical: 12,
//     borderBottomColor: COLORS.border,
//     borderBottomWidth: 1,
//   },
//   optionText: {
//     fontSize: 16,
//     color: COLORS.text,
//   },
//   logoutButton: {
//     marginTop: 20,
//     paddingVertical: 12,
//     alignItems: 'center',
//     backgroundColor: '#eee',
//     borderRadius: 6,
//   },
//   logoutText: {
//     color: 'red',
//     fontWeight: 'bold',
//   },
// });

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../utils/Colors.utils';

const MenuModal = () => {
  return (
    <View style={styles.modalContainer}>
      <Text style={styles.title}>Menu</Text>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>My Rides</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Saved Addresses</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Help Center</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: Colors.BACKGROUND,
    padding: 20,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: Colors.TEXT,
  },
  option: {
    paddingVertical: 12,
    borderBottomColor: Colors.BORDER_GREY ?? '#ccc', // fallback if 'border' doesn't exist
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 16,
    color: Colors.TEXT,
  },
  logoutButton: {
    marginTop: 20,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: 6,
  },
  logoutText: {
    color: 'red',
    fontWeight: 'bold',
  },
});
