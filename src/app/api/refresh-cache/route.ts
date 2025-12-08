import { refreshPostsCache } from "@/lib/notion";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const result = await refreshPostsCache();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to refresh cache",
      },
      { status: 500 }
    );
  }
}