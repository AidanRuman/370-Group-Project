import { useAuth } from "@/context/context";
import AuthProvider from "@/context/context";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { checkAndSendAnniversaryNotifications } from "@/services/notifications";

function RootLayoutNav() {
  const { isAuth } = useAuth();

  // Check for classical-period anniversary events every time the app starts
  useEffect(() => {
    checkAndSendAnniversaryNotifications().catch(console.error);
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={isAuth}>
      <Stack.Screen name="(tabs)" />
      </Stack.Protected>
      <Stack.Protected guard={!isAuth}>
        <Stack.Screen name="loginScreen" options={{ presentation: "modal" }} />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
