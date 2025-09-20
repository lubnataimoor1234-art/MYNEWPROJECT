
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  trialBanner: {
    backgroundColor: '#9B30FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: 'center',
  },
  trialBannerText: {
    color: '#fff',
    fontSize: 14,
  },
  buyNowButton: {
    backgroundColor: '#000',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  buyNowText: {
    color: '#fff',
    fontSize: 13,
  },


  tabLabelStyle: {
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  tabIndicator: {
    backgroundColor: '#000',
    height: 2,
  },

  fullTabScreen: {
    flex: 1,
    backgroundColor: '#fff',
  },

  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },


  textSection: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  showingText: {
    fontSize: 14,
    color: '#555',
  },
  editText: {
    color: '#000',
    textDecorationLine: 'underline',
  },

  noTaskText: {
    fontSize: 16,
    marginBottom: 12,
    color: '#333',
    textAlign: 'center',
  },
  manageButton: {
    backgroundColor: '#000',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },
  addOrderText: {
    color: '#fff',
    fontSize: 16,
  },
  tabContent: {
    flex: 1,
    backgroundColor: '#fff',
    dropdownMenu: {
    position: 'absolute',
    right: 15,
    top: 50, 
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    zIndex: 1000,
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 16,
  },
  },
});






