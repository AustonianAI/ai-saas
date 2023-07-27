"use client";

import { useEffect } from "react";

import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("78ffa1fd-212a-4f12-95ae-962e8a31bc15");
  }, []);

  return null;
};
