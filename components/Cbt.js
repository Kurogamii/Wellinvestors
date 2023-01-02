import React, { useState, useRef, useEffect } from "react";
import * as Progress from "react-native-progress";
import WebView from "react-native-webview";
import Header from "./Header";
import {
  ScrollView,
  Platform,
  Dimensions,
  View,
  RefreshControl,
  Text,
} from "react-native";

const Cbt = ({ refreshPage, navigation }) => {
  // Determine the current platform
  const isIos = Platform.OS === "ios";

  const [progress, setProgress] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [url, setUrl] = useState("https://www.schoolngr.com/classroom/cbt");
  const webViewRef = useRef(null);

  const reload = () => {
    webViewRef.current.reload();
  };

  const reVerse = () => {
    console.log("Going back");
    webViewRef.current.goBack();
  };
  const goforward = () => {
    webViewRef.current.goForward();
  };
  const reFresh = () => {
    setUrl("https://www.schoolngr.com/classroom/cbt");
    console.log(url);
  };

  const { height } = Dimensions.get("window");

  return isIos ? (
    <>
      <Header
        reload={reload}
        reFresh={reFresh}
        goforward={goforward}
        goBack={reVerse}
        navigation={navigation}
      />
      <ScrollView style={{ height: height }}>
        <Progress.Bar
          progress={progress}
          width={null}
          height={3}
          borderColor={"orange"}
          color={"orange"}
        />
        <View style={{ height: height }}>
          <WebView
            scrollEnabled
            ref={webViewRef}
            onLoadProgress={({ nativeEvent }) =>
              setProgress(nativeEvent.progress)
            }
            source={{ uri: url }}
            renderError={() => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  height: height,
                }}
              >
                <Text
                  style={{ color: "red", fontSize: 18, textAlign: "center" }}
                >
                  Unable to load Page, kindly check your internet Connection
                </Text>
              </View>
            )}
          />
        </View>
        <RefreshControl refreshing={isRefreshing} onRefresh={reload} />
      </ScrollView>
    </>
  ) : (
    <>
      <Header
        reload={reload}
        reFresh={reFresh}
        goforward={goforward}
        goBack={reVerse}
        navigation={navigation}
      />
      <View style={{ flex: 1 }}>
        <Progress.Bar
          progress={progress}
          width={null}
          height={3}
          borderColor={"orange"}
          color={"orange"}
        />

        <WebView
          ref={webViewRef}
          onLoadProgress={({ nativeEvent }) =>
            setProgress(nativeEvent.progress)
          }
          source={{ uri: url }}
          renderError={() => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: height,
              }}
            >
              <Text style={{ color: "red", fontSize: 18, textAlign: "center" }}>
                Unable to load Page, kindly check your internet Connection, then reload the page
              </Text>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default Cbt;
