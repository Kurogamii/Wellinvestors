import React, { useState, useRef } from "react";
import * as Progress from "react-native-progress";
import WebView from "react-native-webview";
import Header from "./Header";
import {
  ScrollView,
  Platform,
  Dimensions,
  View,
  RefreshControl,
} from "react-native";

const Tools = ({navigation }) => {
  // Determine the current platform
  const isIos = Platform.OS === "ios";

  const [progress, setProgress] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const webViewRef = useRef(null);

  const reload = () => {
    webViewRef.current.reload();
  };
  const { height } = Dimensions.get("window");

  return (
    // Use the ternary operator to choose which component to render
    isIos ? (
      <>
        <Header reload={reload} navigation={navigation}/>
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
              source={{ uri: "https://schoolngr.com/classroom/tools" }}
            />
          </View>
          <RefreshControl refreshing={isRefreshing} onRefresh={reload} />
        </ScrollView>
      </>
    ) : (
      <>
        <Header reload={reload} navigation={navigation}/>
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
            source={{ uri: "https://schoolngr.com/classroom/tools" }}
            renderError={(error) => (
              <View style={{ flex: 1, height: "100%" }}>
                <Text>{error}</Text>
              </View>
            )}
          />
        </View>
      </>
    )
  );
};

export default Tools;
