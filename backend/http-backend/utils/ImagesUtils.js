
import { v4 as uuidv4 } from "uuid";




function extractFilePathAndNameFromUrl(fileUrl) {
  try {
    const url = new URL(fileUrl);
    const pathParts = url.pathname.split("/"); // ['', 'storage', 'v1', 'object', 'public', 'images', ...filePathParts]
    const filePath = pathParts.slice(6).join("/"); // 'images/...'
    if (!filePath) throw new Error("Invalid file URL");
    const fileName = filePath.split("/").pop() || "";
    return { filePath, fileName };
  } catch(error) {

    throw error;
  }
}

export async function uploadImage(
  supabase,
  file,
  folder,
  fileUrl,
) {
  try {
    const mime = file.mimetype;
  if (!mime) throw new Error("File type is missing", 400);
 
  const ext = mime.split("/")[1];

  let filename;
  if (fileUrl) {
    const { fileName } = extractFilePathAndNameFromUrl(fileUrl);
    filename = fileName;
  } else {
    filename = `${uuidv4()}.${ext}`;
  }

  const filePath = `${folder}/${filename}`;

  const { error: uploadError } = await supabase.storage
    .from("Images")
    .upload(filePath, file.buffer, {
      contentType: file.mimetype,
      upsert: true,
    });

  if (uploadError) {
    throw (`Image upload failed: ${uploadError.message}`, 500);
  }

  const { data: urlData } = supabase.storage
    .from("Images")
    .getPublicUrl(filePath);

  if (!urlData?.publicUrl) {
    throw new Error("Failed to get public URL", 500);
  }

  return urlData.publicUrl;
  } catch (error) {
    return error;
  }
}

export async function deleteImage(
  supabase,
  fileUrl,
){
  try {
    const { filePath } = extractFilePathAndNameFromUrl(fileUrl);

  const { error: deleteError } = await supabase.storage
    .from("Images")
    .remove([filePath]);

  if (deleteError) {
    throw new ApiError(`Image deletion failed: ${deleteError.message}`, 500);
  }
  } catch (error) {
    throw error
  }
}
