import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import PusherClient from "pusher-js";
import PusherServer from "pusher";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractUUIDFromString = (url: string) => {
  return url.match(
    /^[0-9a-f]{8}-?[0-9a-f]{4}-?[1-5][0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$/i
  );
};

export const pusherServer = new PusherServer({
  appId: process.env.NEXT_PUBLIC_PUSHER_APP_ID as string,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY as string,
  secret: process.env.NEXT_PUBLIC_PUSHER_APP_SECRET as string,
  cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTOR as string,
  useTLS: true
});

export const pusherClient = new PusherClient(
  process.env.NEXT_PUBLIC_PUSHER_APP_KEY as string,
  {
    cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTOR as string
  }
);

export const postToParent = (message: string) => {
  window.parent.postMessage(message, "*");
};

export const extractURLfromString = (url: string) => {
  return url.match(/https?:\/\/[^\s"<>]+/);
};

export const extractEmailsFromString = (text: string) => {
  return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
};

export const getMonthName = (month: number) => {
  return month == 0
    ? "Jan"
    : month == 1
    ? "Feb"
    : month == 2
    ? "Mar"
    : month == 3
    ? "Apr"
    : month == 4
    ? "May"
    : month == 5
    ? "Jun"
    : month == 6
    ? "Jul"
    : month == 7
    ? "Aug"
    : month == 8
    ? "Sep"
    : month == 9
    ? "Oct"
    : month == 10
    ? "Nov"
    : month == 11 && "Dec";
};

export const formatHours = (hours: number) => {
  hours = hours % 12 || 12;
  return hours;
};

export const formatMinutes = (minutes: number) => {
  return minutes < 10 ? `0${minutes}` : minutes; // Add leading zero for single digit minutes
};

export const isValidUUID = (uuid: string) => {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};
