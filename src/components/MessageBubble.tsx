"use client";

import { ReleaseMessage } from "@/lib/supabase";
import { useEffect, useState } from "react";

const typeColors = {
  announce: "bg-gradient-to-br from-green-400 to-green-600 text-white",
  feature: "bg-white text-gray-800 border border-green-100",
  fix: "bg-white text-gray-800 border border-green-100",
  improvement: "bg-white text-gray-800 border border-green-100",
};

interface MessageBubbleProps {
  message: ReleaseMessage;
  index: number;
}

export default function MessageBubble({ message, index }: MessageBubbleProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), index * 80);
    return () => clearTimeout(timer);
  }, [index]);

  if (message.type === "announce") {
    return (
      <div className={`flex justify-end mb-3 transition-all duration-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <div className="max-w-[80%]">
          <div className={`rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm ${typeColors.announce}`}>
            <p className="font-semibold text-sm leading-snug">{message.text}</p>
            {message.detail && (
              <p className="text-xs mt-1.5 text-green-100 leading-relaxed">{message.detail}</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-end gap-2.5 mb-3 transition-all duration-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
      <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mb-1 bg-gradient-to-br from-green-400 to-green-600">
        <span className="text-white text-[9px] font-bold">BD</span>
      </div>

      <div className="max-w-[78%]">
        <div className={`rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm ${typeColors[message.type]}`}>
          <p className="font-semibold text-sm leading-snug">{message.text}</p>
          {message.detail && (
            <p className="text-xs mt-1.5 text-gray-500 leading-relaxed">{message.detail}</p>
          )}
        </div>
      </div>
    </div>
  );
}
