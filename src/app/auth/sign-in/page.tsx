import SignInFormProvider from "@/components/forms/sign-in/form-provider";
import LoginForm from "@/components/forms/sign-in/login-form";
import Buttonhandler from "@/components/forms/sign-up/Buttonhandler";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

const SignInPage = (props: Props) => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignInFormProvider>
          <div className="flex flex-col gap-3">
            <LoginForm />
            <div className="w-full flex flex-col gap-3 items-center">
              <Button type="submit" className="w-full">
                Submit
              </Button>
              <p>
                Don&apos;t have an acccount?{" "}
                <Link href={"/auth/sign-up"} className="font-bold">
                  Create One
                </Link>
              </p>
            </div>
          </div>
        </SignInFormProvider>
      </div>
    </div>
  );
};

export default SignInPage;
