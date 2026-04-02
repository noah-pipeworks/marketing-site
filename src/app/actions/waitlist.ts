"use server";

import { createServiceClient } from "@/lib/supabase/server";

type WaitlistResult =
  | { success: true; message: string }
  | { success: false; message: string };

export async function joinWaitlist(
  _prevState: WaitlistResult | null,
  formData: FormData
): Promise<WaitlistResult> {
  const email = formData.get("email");

  if (!email || typeof email !== "string") {
    return { success: false, message: "Please enter your email address." };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const supabase = createServiceClient();

  const { error } = await supabase.from("waitlist").insert({ email });

  if (error) {
    // Unique constraint violation = already signed up
    if (error.code === "23505") {
      return { success: true, message: "You're already on the list!" };
    }
    console.error("Waitlist insert error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }

  return { success: true, message: "You're on the list!" };
}
