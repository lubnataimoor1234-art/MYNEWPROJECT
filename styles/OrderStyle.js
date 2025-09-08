import { StyleSheet } from 'react-native';
import COLORS from '../constants/COLORS';
import SIZES from '../constants/SIZES';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  trialBanner: {
    backgroundColor: COLORS.purple,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  trialBannerText: {
    color: COLORS.white,
    fontWeight: '600',
  },
  buyNowButton: {
    backgroundColor: COLORS.black,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
  },
  buyNowText: {
    color: COLORS.white,
    fontWeight: '600',
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 14,
    color: COLORS.darkText,
  },
  tabLabelStyle: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.darkText,
  },
  tabIndicator: {
    backgroundColor: COLORS.black,
    height: 2,
  },
  textSection: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  showingText: {
    fontSize: SIZES.h4,
    color: COLORS.darkText,
  },
  editText: {
    color: COLORS.link,
    textDecorationLine: 'underline',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: SIZES.h4,
    marginBottom: 10,
    color: COLORS.darkText,
  },
  addOrderButton: {
    backgroundColor: COLORS.black,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  addOrderText: {
    color: COLORS.white,
    fontSize: SIZES.h4,
    fontWeight: '600',
  },
  headerIcon: {
    marginRight: 15,
  },
});
// styles/OrderStyle.js
// import { StyleSheet } from 'react-native';
// import COLORS from '../constants/COLORS';

// export default StyleSheet.create({
//   container: { flex: 1, backgroundColor: COLORS.white },

//   // Header button
//   headerIcon: { marginRight: 15 },

//   // Banner at top
//   trialBanner: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: COLORS.purple,
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     alignItems: 'center',
//   },
//   trialBannerText: {
//     color: COLORS.white,
//     fontSize: 13,
//   },
//   buyNowButton: {
//     backgroundColor: COLORS.black,
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 4,
//   },
//   buyNowText: {
//     color: COLORS.white,
//     fontSize: 13,
//     fontWeight: '600',
//   },

//   // Tab labels and indicator
//   tabBarStyle: {
//     backgroundColor: COLORS.white,
//     borderBottomWidth: 1,
//     borderColor: COLORS.lightGray,
//     elevation: 0,
//     shadowOpacity: 0,
//   },
//   tabLabelStyle: {
//     fontSize: 15,
//     fontWeight: '500',
//     textTransform: 'none',
//     marginHorizontal: 12,
//   },
//   tabIndicator: {
//     backgroundColor: COLORS.black,
//     height: 2,
//   },

//   // Section under tabs
//   textSection: {
//     paddingHorizontal: 16,
//     marginTop: 10,
//   },
//   showingText: {
//     fontSize: SIZES.h4,
//     color: COLORS.darkText,
//   },
//   editText: {
//     color: COLORS.link,
//     textDecorationLine: 'underline',
//   },
//   orderInfoBox: {
//     borderBottomWidth: 1,
//     borderColor: COLORS.lightGray,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//   },
//   orderInfo: {
//     fontSize: 14,
//     color: COLORS.gray,
//   },
//   editText: {
//     color: COLORS.black,
//     textDecorationLine: 'underline',
//     fontWeight: '500',
//   },

//   // Empty state content
//   centerContent: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   welcomeText: {
//     fontSize: 16,
//     color: COLORS.gray,
//     marginBottom: 20,
//   },
//   addOrderButton: {
//     backgroundColor: COLORS.black,
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 30,
//   },
//   addOrderText: {
//     color: COLORS.white,
//     fontSize: 16,
//   },

//   // Tab screen placeholder
//   tabContent: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   tabLabel: {
//     fontSize: 16,
//     color: COLORS.gray,
//   },
// });
