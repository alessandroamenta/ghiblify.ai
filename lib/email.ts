export async function sendUploadNotification(
  customerEmail: string,
  uploadedFiles: string[]
) {
  try {
    const response = await fetch("/api/notify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerEmail,
        uploadedFiles,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Failed to send notification");
    }

    return data;
  } catch (error) {
    console.error("Error sending email notification:", error);
    throw error;
  }
}
