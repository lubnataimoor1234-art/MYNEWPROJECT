import React, {useState} from "react";
import {Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MainHeader from '../components/MainHeader';
const salesData = [
    
    {id: "s1", title: "Total Sales", amount: 0},
    {id: "s2", title: "Total Payments", amount: 0},
    {id: "s3", title: "Material Sales", amount: 0},
    {id: "s4", title: "Readymade Sales", amount: 0},
];

const ordersData = [
    {id: "o1", title: "Orders Received", amount: 0},
    {id: "o2", title: "Orders Delivered", amount: 0},
    {id: "o3", title: "Orders Past Due", amount: 0},
    {id: "o4", title: "Orders Upcoming", amount: 0},
];

const tabs = ["Daily", "Weekly", "Monthly"];

const dailySalesByType = {id: "d1", title: "Total Sales", amount: 0};

const ReportsScreen = () => {
    const [activeTab, setActiveTab] = useState("Daily");

    const renderCard = ({item}) => (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardAmount}>{item.amount}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
  <MainHeader
      title="Report"
    />
            <View style={styles.tabsContainer}>
                {tabs.map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        style={[styles.tab, activeTab === tab && styles.activeTab]}
                        onPress={() => setActiveTab(tab)}
                    >
                        <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.date}>Date : Sept 7, 2025 ✎</Text>
            <Text style={styles.sectionTitle}>{activeTab} Sales Report</Text>
            <FlatList
                data={salesData}
                renderItem={renderCard}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
            />
            <Text style={styles.sectionTitle}>{activeTab} Orders Report</Text>
            <FlatList
                data={ordersData}
                renderItem={renderCard}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
            />

            <View style={styles.dailyCard}>
                <Text style={styles.dailyCardTitle}>Daily Sales by Type</Text>
                <View style={styles.dailyCardBody}>
                    <Text>{`${dailySalesByType.title}: ${dailySalesByType.amount}`}</Text>
                </View>
            </View>
        </View>
    );
};

export default ReportsScreen;

const {width} = Dimensions.get("window");
const cardSize = width / 2 - 30;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F8F8F8",
         
    },
    tabsContainer: {
        width: 400,
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "#fff",
        overflow: "hidden",
        marginBottom: 16,
        marginTop: 10,
        alignSelf: "center"
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: "center",
    },
    activeTab: {
        backgroundColor: "#000",
    },
    tabText: {
        fontSize: 14,
        color: "#000",
        fontWeight: "500",
    },
    activeTabText: {
        color: "#fff",
        fontWeight: "600",
    },
    date: {
        fontSize: 14,
        color: "#444",
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginVertical: 10,
        color: "#333",
    },
    row: {
        justifyContent: "space-between",
        marginBottom: 12,
    },
    card: {
        backgroundColor: "#fff",
        width: cardSize,
        padding: 16,
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    cardTitle: {
        fontSize: 14,
        color: "#888",
        marginBottom: 6,
    },
    cardAmount: {
        fontSize: 18,
        fontWeight: "700",
        color: "#000",
    },
    dailyCard: {
        backgroundColor: "#d3d3d3",
        width: "100%",
        minHeight: 120,
        padding: 8,


        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4
    },
    dailyCardTitle: {
        color: "#a9a9a9",
        marginBottom: 4
    },
    dailyCardBody: {
        backgroundColor: "#fff",
        width: "100%",
        height: 100,
        padding: 8,
        alignItems: "center"
    },
});