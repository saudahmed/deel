import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.deel.challenge",
  appName: "deel-challenge",
  webDir: "build",
  server: {
    androidScheme: "https",
  },
};

export default config;
