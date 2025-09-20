// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const AddOrderOption = () => {
//   const navigation = useNavigation();

//   const handleSelect = (type) => {
//     navigation.navigate('CustomerScreen', { type }); 
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.box}
//         onPress={() => handleSelect('stitching')}
//       >
//         <Text style={styles.boxText}>➕ New Stitching</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.box}
//         onPress={() => handleSelect('material')}
//       >
//         <Text style={styles.boxText}>➕ New Material Sale</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.box}
//         onPress={() => handleSelect('readymade')}
//       >
//         <Text style={styles.boxText}>➕ New Readymade Sale</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//   },
//   box: {
//     backgroundColor: '#f2f2f2',
//     padding: 20,
//     borderRadius: 10,
//     marginVertical: 10,
//   },
//   boxText: {
//     fontSize: 18,
//     fontWeight: '500',
//   },
// });

// export default AddOrderOption;


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddOrderOption = ({ onClose }) => {
  const navigation = useNavigation();

  const handlePress = (type) => {
    onClose(); 
    navigation.navigate('CustomerScreen', { type }); 
  };

  return (
    <View style={styles.menuBox}>
      <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('stitching')}>
        <Text style={styles.menuText}>➕ New Stitching</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('material')}>
        <Text style={styles.menuText}>➕ New Material Sale</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('readymade')}>
        <Text style={styles.menuText}>➕ New Readymade Sale</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddOrderOption;

const styles = StyleSheet.create({
  menuBox: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    zIndex: 1000,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    fontSize: 16,
    color: '#000',
  },
});
