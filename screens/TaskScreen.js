import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import MainHeader from '../components/MainHeader';

export default function TaskListScreen() {
  const [activeTab, setActiveTab] = useState('Active');

  return (
    <SafeAreaView style={styles.container}>
        <MainHeader title ="Tasks"  />
       <View style={styles.tabContainer}>
         {['Active', 'Delayed', 'Todays', 'Completed'].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={styles.tab}>
             <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
               {tab}
            </Text>
           {activeTab === tab && <View style={styles.underline} />}
         </TouchableOpacity>
       ))}
      </View>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          placeholder="Search Dress Items"
          style={styles.searchInput}
        />
      </View>
      <View style={styles.emptyContainer}>
        <Text style={styles.noTaskText}>No Tasks Found</Text>
        <TouchableOpacity style={styles.manageButton}>
          <Text style={styles.manageButtonText}>Manage Tasks</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <TouchableOpacity style={styles.navItem}>
      <MaterialIcons
        name={icon}
        size={24}
        color={active ? '#000' : '#888'}
      />
      <Text style={[styles.navText, active && { color: '#000' }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  headerTitle: {
    color: '#fff',
    fontSize: 50,
    fontWeight: '500',
    
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  tab: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    color: '#888',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#000',
  },
  underline: {
    marginTop: 4,
    height: 2,
    width: 30,
    backgroundColor: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    height: 40,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noTaskText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  manageButton: {
    backgroundColor: '#000',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 25,
  },
  manageButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});