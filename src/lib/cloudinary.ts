export async function uploadMedia(
  file: File, 
  cloudName: string, 
  uploadPreset: string, 
  onProgress?: (progress: number) => void
): Promise<string> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    // Some presets block auto for PDFs, so if it's a PDF, we might want to force 'image'.
    // But 'auto' is generally best if the preset allows raw. 
    // Wait, let's use 'auto' and let Cloudinary figure it out.
    const isPdf = file.name.toLowerCase().endsWith('.pdf') || file.type === 'application/pdf';
    const resourceType = isPdf ? 'image' : 'auto'; 
    // Note: I changed back to 'image' for PDF because Cloudinary 'unsigned' presets 
    // almost ALWAYS reject 'raw' files, which 'auto' defaults to for PDFs. 
    // 'image' endpoint accepts PDFs and processes them correctly!

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

    xhr.open('POST', url, true);

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable && onProgress) {
        const percentComplete = Math.round((e.loaded / e.total) * 100);
        onProgress(percentComplete);
      }
    };

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const data = JSON.parse(xhr.responseText);
          let secureUrl = data.secure_url;
          if (secureUrl && secureUrl.includes('/upload/') && !secureUrl.endsWith('.pdf')) {
            secureUrl = secureUrl.replace('/upload/', '/upload/f_auto,q_auto/');
          }
          resolve(secureUrl);
        } catch (err) {
          reject(new Error('Failed to parse Cloudinary response'));
        }
      } else {
        let errorMsg = 'Upload failed';
        try {
          const error = JSON.parse(xhr.responseText);
          errorMsg = error.error?.message || errorMsg;
        } catch (e) {
          errorMsg = `Upload failed with status: ${xhr.status}`;
        }
        reject(new Error(errorMsg));
      }
    };

    xhr.onerror = () => {
      reject(new Error('Network error during upload'));
    };

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    xhr.send(formData);
  });
}
