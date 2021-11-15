import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Api } from "renative";
import {
  YoutubeLogo,
  TVLogo,
  NetflixLogo,
  HotStar,
  AmazonPrime,
} from "../images/index";

export default class ActionButton extends React.Component {
  state = {
    netflixButton: false,
    youtubeButton: false,
    androidTVButton: false,
    hotstarButton: false,
    amazonButton: false,
  };
  render() {
    const {
      netflixButton,
      youtubeButton,
      androidTVButton,
      hotstarButton,
      amazonButton,
    } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            onFocus={() => this.setState({ netflixButton: true })}
            onBlur={() => this.setState({ netflixButton: false })}
            style={[
              styles.button,
              { borderColor: netflixButton ? "#C13CE2" : "#fff" },
              {
                transform: netflixButton
                  ? [{ scaleX: 1.2, scaleY: 1.2 }]
                  : null,
              },
            ]}
            activeOpacity={0.9}
          >
            <Image style={styles.logo} source={NetflixLogo} />
          </TouchableOpacity>

          <TouchableOpacity
            onFocus={() => this.setState({ youtubeButton: true })}
            onBlur={() => this.setState({ youtubeButton: false })}
            style={[
              styles.button,
              { borderColor: youtubeButton ? "#C13CE2" : "#fff" },
              {
                transform: youtubeButton
                  ? [{ scaleX: 1.2, scaleY: 1.2 }]
                  : null,
              },
            ]}
            activeOpacity={0.9}
          >
            <Image style={styles.Youtubelogo} source={YoutubeLogo} />
          </TouchableOpacity>

          <TouchableOpacity
          onFocus={() => this.setState({ androidTVButton: true })}
          onBlur={() => this.setState({ androidTVButton: false })}
            style={[
              styles.button,
              { borderColor: androidTVButton ? "#C13CE2" : "#fff" },
              {
                transform: androidTVButton
                  ? [{ scaleX: 1.2, scaleY: 1.2 }]
                  : null,
              },
            ]}
            activeOpacity={0.9}
          >
            <Image style={styles.logo} source={TVLogo} />
          </TouchableOpacity>

          <TouchableOpacity
          onFocus={() => this.setState({ hotstarButton: true })}
          onBlur={() => this.setState({ hotstarButton: false })}
            style={[
              styles.button,
              { borderColor: hotstarButton ? "#C13CE2" : "#fff" },
              {
                transform: hotstarButton
                  ? [{ scaleX: 1.2, scaleY: 1.2 }]
                  : null,
              },
            ]}
            activeOpacity={0.9}
          >
            <Image style={styles.HotstarLogo} source={HotStar} />
          </TouchableOpacity>

          <TouchableOpacity
          onFocus={() => this.setState({ amazonButton: true })}
          onBlur={() => this.setState({ amazonButton: false })}
            style={[
              styles.button,
              { borderColor: amazonButton ? "#C13CE2" : "#fff" },
              {
                transform: amazonButton
                  ? [{ scaleX: 1.2, scaleY: 1.2 }]
                  : null,
              },
            ]}
            activeOpacity={0.9}
          >
            <Image style={styles.Amazonlogo} source={AmazonPrime} />
          </TouchableOpacity>
        </View>
        <Text style={styles.txt}>Select anyone and press Ok button</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#000",
  },
  ButtonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#fff",
    width: 160,
    height: 60,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
  },
  txt: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20,
  },
  logo: {
    width: 160,
    height: 60,
  },
  Youtubelogo: {
    width: 140,
    height: 40,
  },
  HotstarLogo: {
    width: 150,
    height: 50,
  },
  Amazonlogo: {
    width: 150,
    height: 50,
  },
});
