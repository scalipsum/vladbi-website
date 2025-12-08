import { refreshPostsCache } from '@/lib/notion';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const result = await refreshPostsCache();
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: result.message,
        count: result.count
      });
    } else {
      return NextResponse.json({
        success: false,
        message: result.message
      }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to refresh cache'
    }, { status: 500 });
  }
}