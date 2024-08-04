import { cn, extractUUIDFromString, getMonthName } from "@/lib/utils";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  message: { role: "assistant" | "user"; content: string; link?: string };
  createdAt?: Date;
};

const Bubble = ({ message, createdAt }: Props) => {
  const d = new Date();
  const image = extractUUIDFromString(message.content);

  return (
    <div
      className={cn(
        "flex gap-2 items-end",
        message.role == "assistant"
          ? "self-start"
          : "self-end flex flex-row-reverse"
      )}
    >
      {message.role == "assistant" ? (
        <Avatar className="w-5 h-5">
          <AvatarImage
            src="https://ucarecdn.com/270186b8-0714-452b-98bc-0903828f5281/imagesphotoaidcomcropped.jpeg"
            alt="@shadcn"
          />
          <AvatarFallback>Vengence</AvatarFallback>
        </Avatar>
      ) : (
        <Avatar className="w-5 h-5">
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
      )}

      <div
        className={cn(
          "flex flex-col min-w-[200px] max-w-[300px] p-4 rounded-t-md",
          message.role == "assistant"
            ? "bg-muted rounded-r-md"
            : "bg-grandis da rounded-l-md"
        )}
      >
        {createdAt ? (
          <div className="flex gap-2  text-xs text-gray-600">
            <p>
              {createdAt.getDate()} {getMonthName(createdAt.getMonth())}
            </p>
            <p>
              {createdAt.getHours()}:{createdAt.getMinutes()}
              {createdAt.getHours() > 12 ? "PM" : "AM"}
            </p>
          </div>
        ) : (
          <p className="text-xs">
            {`${d.getHours()}:${d.getMinutes()} ${
              d.getHours() > 12 ? "PM" : "AM"
            }`}
          </p>
        )}

        {image ? (
          <div className="relative aspect-square">
            <Image src={`https://ucarecdn.com/${image[0]}/`} fill alt="image" />
          </div>
        ) : (
          <p className="text-xs">
            {message.content.replace("(complete)", " ")}
            {message.link && (
              <Link
                className="underline font-bold pl-2"
                href={message.link}
                target="_blank"
              >
                Your Link
              </Link>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default Bubble;
