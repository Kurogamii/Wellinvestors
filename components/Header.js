import * as React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Foundation, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import SmallMenuModal from "./BlackMenu";
export default function Header({
  navigation,
  reload,
  goBack,
  goforward,
  reFresh,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    if (modalVisible) {
      setModalVisible(false);
    } else {
      setModalVisible(true);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <View style={styles.button}>
            <FontAwesome name="bars" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>SCHOOLNGR</Text>
        <TouchableOpacity onPress={reload}>
          <View style={styles.iconContainer}>
            <Foundation name="refresh" size={30} color="#fff" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="more-vert" size={30} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      {modalVisible ? (
        <View style={styles.outta}>
          <TouchableOpacity style={styles.bg} onPress={toggleModal}></TouchableOpacity>
          <View
            style={{
              zIndex: 10,
              padding: 10,
              marginRight: 10,
              backgroundColor: "black",
              position: "absolute",
              marginTop: 56,
              width: 170,
              top: 0,
              right: 0,
            }}
          >
            <SmallMenuModal
              action={goBack}
              icon={
                <MaterialIcons name={"arrow-back"} size={24} color="white" />
              }
              label={"Go Back"}
            />
            <SmallMenuModal
              action={goforward}
              icon={
                <MaterialIcons name={"arrow-forward"} size={24} color="white" />
              }
              label={"Go Forward"}
            />
            <SmallMenuModal
              action={reFresh}
              icon={<FontAwesome name={"refresh"} size={24} color="white" />}
              label={"Refresh"}
            />
          </View>
        </View>
      ) : null}
    </>
  );
}

const styles = {
  container: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
  },
  button: {
    padding: 15,
    paddingRight: 50,
  },
  buttonText: {
    color: "#fff",
  },
  title: {
    flex: 3, // set the proportion of the title element to 3
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  iconContainer: {
    padding: 10,
    paddingRight: 15,
  },
  outta: {
    position: "absolute",
    backgroundColor: "transparent",
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
  bg: {
    zIndex: 9,
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
};
