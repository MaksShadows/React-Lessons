import React, { useState, useEffect } from "react";

export default function ConnectionStatus() {
  const [status, setStatus] = useState(true);

  function updateOnlineStatus(e) {
    setStatus(e.target.navigator.onLine)
  }

  useEffect(() => {
    window.addEventListener('online', updateOnlineStatus);
    return () => {
      window.removeEventListener('online', updateOnlineStatus);
    }
  })

  useEffect(() => {
    window.addEventListener('offline', updateOnlineStatus);
    return () => {
      window.removeEventListener('offline', updateOnlineStatus);
    }
  })

  return (
    <div className={status ? "status" : "status status_offline"}>{status ? "online" : "offline"}</div>
  );
}
