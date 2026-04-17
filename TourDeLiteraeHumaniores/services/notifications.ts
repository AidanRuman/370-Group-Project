import * as Notifications from "expo-notifications";
import { Alert, Linking } from "react-native";
import { getTodaysAnniversaryEvents, HistoricalEvent } from "./database";

// Configure how notifications appear when the app is in the foreground
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export async function requestNotificationPermissions(): Promise<boolean> {
  const notificationStatus = await Notifications.requestPermissionsAsync();
  if (notificationStatus.status !== "granted") {
    Alert.alert("Notifications Permission Denied", "Please allow notifications", [
      { text: "Cancel", style: "cancel" },
      { text: "Open Settings", onPress: () => Linking.openSettings() },
    ]);
    return false;
  }

  return true;
}

function formatYear(year: number): string {
  return year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`;
}

/**
 * Checks the database for classical-period events whose anniversary falls on
 * today's month/day, then fires an immediate notification for each one found.
 * Call this once on app startup.
 */
export async function checkAndSendAnniversaryNotifications(): Promise<void> {
  const granted = await requestNotificationPermissions();
  if (!granted) {
    console.warn("Notification permissions not granted — skipping anniversary check.");
    return;
  }

  let events: HistoricalEvent[];
  try {
    events = await getTodaysAnniversaryEvents();
  } catch (e) {
    console.error("Failed to query anniversary events:", e);
    return;
  }

  for (const event of events) {
    const yearsAgo = new Date().getFullYear() - event.year;
    const yearLabel = formatYear(event.year);
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `\u{1F3DB}\uFE0F On This Day in History (${yearLabel})`,
        body: `${event.title} \u2014 ${event.description} (${yearsAgo.toLocaleString()} years ago today)`,
        data: { eventId: event.id, eventTitle: event.title },
      },
      trigger: null, // fire immediately when the app opens
    });
  }
}
