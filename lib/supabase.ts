import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function uploadImage(file: File, email: string, index: number) {
  try {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${index}.${fileExt}`;
    const filePath = `${email}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("ghiblify-uploads")
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    return { filePath };
  } catch (error: any) {
    console.error("Error uploading image:", error.message);
    throw error;
  }
}
