import { useState } from "react";

export function useTabs(defaultTab: string) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return {
    activeTab,
    setActiveTab,
  };
}
