export async function Log(stack, level, pkg, message) {
    const logPayload = {
      stack,
      level,
      package: pkg,
      message
    };
  
    try {
      const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(logPayload)
      });
  
      if (!response.ok) {
        console.error("Logging failed:", response.statusText);
      }
    } catch (err) {
      console.error("Failed to send log:", err);
    }
  }
  