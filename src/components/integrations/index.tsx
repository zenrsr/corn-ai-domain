"use client";
import React from "react";
import { Card, CardContent, CardDescription } from "../ui/card";
import Image from "next/image";
import { INTEGRATION_LIST_ITEMS } from "@/constants/integration";
import IntegrationTrigger from "./integration-trigger";
import { cn } from "@/lib/utils";

type Props = {
  connections: { [key: string]: boolean };
};

const IntegrationList = ({ connections }: Props) => {
  return (
    <div className="grid grid-cols-1 content-start lg:grid-cols-2 xl:grid-cols-3 gap-3 p-4">
      {INTEGRATION_LIST_ITEMS.map((item) => (
        <Card
          key={item.id}
          className={cn(
            "border-[1px] shadow-lg",
            item.name === "stripe" && " border-purple-700"
          )}
        >
          <CardContent className="flex flex-col p-5 gap-2">
            <div className="flex w-full justify-between items-start gap-x-20">
              <div className="">
                <div className="w-10 h-10 relative">
                  <Image
                    sizes="100vw"
                    src={`/images/stripe.png`}
                    alt="logo"
                    fill
                  />
                </div>
                <h2 className="font-bold capitalize">{item.name}</h2>
              </div>
              <IntegrationTrigger
                connections={connections}
                title={item.title}
                description={item.modalDescription}
                logo={item.logo}
                name={item.name}
              />
            </div>
            <CardDescription>{item.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default IntegrationList;
