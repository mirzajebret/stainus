"use server";

export async function submitRegistration(formData: FormData) {
  // Extract form fields
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const program = formData.get("program") as string;
  const previousSchool = formData.get("previousSchool") as string;

  // Basic validation
  if (!name || !email || !phone || !program || !previousSchool) {
    return { success: false, message: "Semua kolom wajib diisi." };
  }

  if (!email.includes("@")) {
    return { success: false, message: "Format email tidak valid." };
  }

  // Simulate network request / database insertion
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // In a real application, you would save this data to a database
  // e.g., await db.registration.create({ data: { name, email, phone, program, previousSchool } })

  console.log("New PMB Registration:", { name, email, phone, program, previousSchool });

  return { 
    success: true, 
    message: "Pendaftaran berhasil dikirim! Tim PMB STAINUS Garut akan segera menghubungi Anda melalui Email/WhatsApp yang didaftarkan." 
  };
}
