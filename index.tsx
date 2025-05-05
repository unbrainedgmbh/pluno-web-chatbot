import { useEffect } from "react";

export type PlunoWebChatbotConfig = {
  isWidgetEnabled?: boolean;
  firstMessage?: string;
  widgetTitle?: string;
  disclaimer?: string;
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

type PlunoWebChatbotProps = {
  communityId?: string;
  config?: PlunoWebChatbotConfig;
};

export default function PlunoWebChatbot({
  communityId,
  config,
}: PlunoWebChatbotProps) {
  const configJson = JSON.stringify(config);

  useEffect(() => {
    if (communityId == null) {
      return;
    }

    const script = document.createElement("script");
    let baseUrl = config?.baseUrl || "https://app.pluno.ai/";
    if (!baseUrl.endsWith("/")) baseUrl += "/";
    script.src = baseUrl + "web-support/chat-widget.js";
    script.setAttribute("communityId", communityId);
    script.setAttribute("config", configJson);
    script.id = "pluno-chat-widget-script";
    script.async = true;
    document.body.appendChild(script);

    // Clean up function:
    return () => {
      document.body.removeChild(script);
    };
  }, [communityId, configJson]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}

export function plunoInvokeAppearClosed() {
  window.postMessage("pluno-invoke-appear-closed", "*");
}

export function plunoInvokeAppearOpened() {
  window.postMessage("pluno-invoke-appear-opened", "*");
}

export function plunoInvokeOpen() {
  window.postMessage("pluno-invoke-open", "*");
}

export function plunoInvokeClose() {
  window.postMessage("pluno-invoke-close", "*");
}

export function plunoInvokeDisappear() {
  window.postMessage("pluno-invoke-disappear", "*");
}

export function plunoInvokeAppearOpenedWithDisappearOnClose() {
  window.postMessage("pluno-invoke-appear-opened-with-disappear-on-close", "*");
}
