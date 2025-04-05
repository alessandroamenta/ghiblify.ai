"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Check, AlertCircle, X } from "lucide-react";
import { uploadImage } from "@/lib/supabase";
import { sendUploadNotification } from "@/lib/email";

interface UploadState {
  file: File | null;
  uploading: boolean;
  completed: boolean;
  error: string | null;
  filePath?: string;
}

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [uploads, setUploads] = useState<UploadState[]>([]);
  const [allUploadsComplete, setAllUploadsComplete] = useState(false);
  const [notificationSent, setNotificationSent] = useState(false);
  const [notificationError, setNotificationError] = useState<string | null>(
    null
  );
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const verifySession = async () => {
      try {
        const response = await fetch(
          `/api/verify-session?session_id=${sessionId}`
        );
        const data = await response.json();

        if (data.error) {
          setError(data.error);
          return;
        }

        setSession(data.session);
        // Initialize upload slots based on the package purchased
        const imageCount = parseInt(data.session.metadata.imageCount);
        setUploads(
          Array(imageCount).fill({
            file: null,
            uploading: false,
            completed: false,
            error: null,
          })
        );
      } catch (err) {
        setError("Failed to verify payment session");
      } finally {
        setLoading(false);
      }
    };

    if (sessionId) {
      verifySession();
    }
  }, [sessionId]);

  // Check if all uploads are complete and send notification
  useEffect(() => {
    if (uploads.length > 0) {
      const complete = uploads.every((upload) => upload.completed);
      setAllUploadsComplete(complete);

      if (complete && !notificationSent && session?.metadata?.customerEmail) {
        const uploadedFiles = uploads
          .filter((upload) => upload.filePath)
          .map((upload) => upload.filePath!);

        (async () => {
          try {
            await sendUploadNotification(
              session.metadata.customerEmail,
              uploadedFiles
            );
            setNotificationSent(true);
            setNotificationError(null);
          } catch (error) {
            console.error("Failed to send notification:", error);
            setNotificationError(
              "Failed to notify admin. Don't worry, we'll still process your images."
            );
          }
        })();
      }
    }
  }, [uploads, session, notificationSent]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    if (imageFiles.length > uploads.length) {
      alert(
        `You can only upload up to ${uploads.length} images with your current package.`
      );
      return;
    }

    if (imageFiles.length < files.length) {
      alert("Some files were skipped because they weren't images.");
    }

    setSelectedFiles(imageFiles);
  };

  const removeFile = (index: number) => {
    setSelectedFiles((current) => current.filter((_, i) => i !== index));
  };

  const handleUploadAll = async () => {
    if (!session?.metadata?.customerEmail || selectedFiles.length === 0) return;
    setIsUploading(true);

    try {
      const newUploads = [...uploads];

      for (let i = 0; i < selectedFiles.length; i++) {
        try {
          const { filePath } = await uploadImage(
            selectedFiles[i],
            session.metadata.customerEmail,
            i
          );

          newUploads[i] = {
            file: selectedFiles[i],
            uploading: false,
            completed: true,
            error: null,
            filePath,
          };
        } catch (err: any) {
          newUploads[i] = {
            file: selectedFiles[i],
            uploading: false,
            completed: false,
            error: err.message || "Upload failed",
          };
        }
        setUploads([...newUploads]);
      }
    } finally {
      setIsUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="container max-w-4xl px-4 py-12">
        <Card className="p-8">
          <div className="text-center">Loading...</div>
        </Card>
      </div>
    );
  }

  if (error || !session) {
    return (
      <div className="container max-w-4xl px-4 py-12">
        <Card className="p-8">
          <div className="text-center text-red-500">
            <AlertCircle className="mx-auto h-12 w-12 mb-4" />
            <h1 className="text-2xl font-bold mb-2">
              Payment Verification Failed
            </h1>
            <p>{error || "Invalid session"}</p>
          </div>
        </Card>
      </div>
    );
  }

  const remainingSlots =
    uploads.length - uploads.filter((u) => u.completed).length;

  return (
    <div className="container max-w-4xl px-4 py-12">
      <Card className="p-8">
        <div className="text-center mb-8">
          <Check className="mx-auto h-12 w-12 text-green-500 mb-4" />
          <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
          <p className="text-muted-foreground">
            You can now upload your {uploads.length}{" "}
            {uploads.length === 1 ? "image" : "images"}
          </p>
        </div>

        {!allUploadsComplete && (
          <div className="space-y-6">
            <div
              className="border-2 border-dashed rounded-lg p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer"
              onClick={() => document.getElementById("file-input")?.click()}
            >
              <input
                type="file"
                id="file-input"
                className="hidden"
                accept="image/*"
                multiple
                onChange={handleFileSelect}
                disabled={allUploadsComplete}
              />
              <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
              <p className="text-sm mb-1">
                Click to select {remainingSlots}{" "}
                {remainingSlots === 1 ? "image" : "images"}
              </p>
              <p className="text-xs text-muted-foreground">
                Supported formats: PNG, JPG, JPEG
              </p>
            </div>

            {selectedFiles.length > 0 && (
              <div className="space-y-4">
                <div className="grid gap-4">
                  {selectedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted rounded-lg"
                    >
                      <span className="text-sm truncate flex-1">
                        {file.name}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full"
                  onClick={handleUploadAll}
                  disabled={isUploading || selectedFiles.length === 0}
                >
                  {isUploading
                    ? "Uploading..."
                    : `Upload ${selectedFiles.length} ${
                        selectedFiles.length === 1 ? "Image" : "Images"
                      }`}
                </Button>
              </div>
            )}
          </div>
        )}

        <div className="grid gap-4 mt-6">
          {uploads.map((upload, index) => (
            <div key={index} className="p-4 border rounded-lg">
              {upload.completed ? (
                <div className="flex items-center text-green-500">
                  <Check className="h-5 w-5 mr-2" />
                  <p className="text-sm">
                    Image {index + 1} uploaded successfully
                  </p>
                </div>
              ) : upload.error ? (
                <div className="flex items-center text-red-500">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  <p className="text-sm">{upload.error}</p>
                </div>
              ) : (
                <div className="flex items-center text-muted-foreground">
                  <Upload className="h-5 w-5 mr-2" />
                  <p className="text-sm">Slot {index + 1} ready for upload</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {allUploadsComplete && (
          <div className="mt-8 text-center">
            <h2 className="text-xl font-semibold mb-2">
              All uploads complete!
            </h2>
            <p className="text-muted-foreground">
              We'll process your images and send them to your email (
              {session.metadata.customerEmail}) once they're ready.
            </p>
            {notificationError && (
              <p className="text-amber-500 mt-2 text-sm">{notificationError}</p>
            )}
          </div>
        )}
      </Card>
    </div>
  );
}
