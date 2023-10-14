import { useEffect } from "react";

export type AwesomeWebChatbotConfig = {
  isWidgetEnabled?: boolean;
  firstMessage?: string;
  widgetTitle?: string;
  actions?: {
    contactSupport?: {
      title?: string;
      response?: string;
    };
    thanks?: {
      title?: string;
      response?: string;
    };
  };
  theme?: "light" | "dark";
  primaryColor?: string;
  widgetIconUrl?: string;
  assistantIconUrl?: string;
  widgetButtonPxSize?: number;
  openedChatbotHeight?: `${number}px` | string;
  openedChatbotWidth?: `${number}px` | string;
  positionRight?: `${number}px` | string;
  positionBottom?: `${number}px` | string;
  baseUrl?: string;
  hideOnLoad?: boolean;
};

type AwesomeWebChatbotProps = {
  communityId?: string;
  config?: AwesomeWebChatbotConfig;
};

export default function AwesomeWebChatbot({
  communityId,
  config,
}: AwesomeWebChatbotProps) {
  const configJson = JSON.stringify(config);

  useEffect(() => {
    if (communityId == null) {
      return;
    }

    const script = document.createElement("script");
    const baseUrl = config?.baseUrl || "https://awesomeqa.xyz/";
    script.src = baseUrl + "web-support/chat-widget.js";
    script.setAttribute("communityId", communityId);
    script.setAttribute("config", configJson);
    script.id = "awesomeqa-chat-widget-script";
    script.async = true;
    document.body.appendChild(script);

    // Clean up function:
    return () => {
      document.body.removeChild(script);
    };
  }, [communityId, configJson]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}

export function awesomeqaInvokeAppearClosed() {
  window.postMessage("awesomeqa-invoke-appear-closed", "*");
}

export function awesomeqaInvokeAppearOpened() {
  window.postMessage("awesomeqa-invoke-appear-opened", "*");
}

export function awesomeqaInvokeOpen() {
  window.postMessage("awesomeqa-invoke-open", "*");
}

export function awesomeqaInvokeClose() {
  window.postMessage("awesomeqa-invoke-close", "*");
}

export function awesomeqaInvokeDisappear() {
  window.postMessage("awesomeqa-invoke-disappear", "*");
}
