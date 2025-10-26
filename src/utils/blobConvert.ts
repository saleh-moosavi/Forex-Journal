/**
 * Convert a Blob to a Base64 string (Data URL)
 */
export function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

/**
 * Convert a Base64 string (Data URL) back to a Blob
 */
export function base64ToBlob(base64: string): Blob {
  const [header, data] = base64.split(",");
  const mime = header.match(/:(.*?);/)?.[1] ?? "application/octet-stream";
  const binary = atob(data);
  const u8arr = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) u8arr[i] = binary.charCodeAt(i);
  return new Blob([u8arr], { type: mime });
}
