import { useAuth } from "@/context/context";
import AuthProvider from "@/context/context";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

function RootLayoutNav() {
  const { isAuth } = useAuth();

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
