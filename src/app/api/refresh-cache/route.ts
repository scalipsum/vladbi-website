import { refreshCacheData } from "@/lib/notion";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Always refresh both blog posts and products
    const [blogResult, productsResult] = await Promise.all([
      refreshCacheData('blog-posts'),
      refreshCacheData('products')
    ]);

    if (blogResult.success && productsResult.success) {
      return NextResponse.json({
        success: true,
        message: `Successfully refreshed cache with ${(blogResult.count || 0) + (productsResult.count || 0)} items`,
        count: (blogResult.count || 0) + (productsResult.count || 0),
        details: {
          blogPosts: blogResult.count || 0,
          products: productsResult.count || 0
        }
      });
    } else {
      const failedTypes = [];
      if (!blogResult.success) failedTypes.push('blog posts');
      if (!productsResult.success) failedTypes.push('products');

      return NextResponse.json({
        success: false,
        message: `Failed to refresh cache for: ${failedTypes.join(', ')}`,
        details: {
          blogPosts: blogResult.success ? blogResult.count : blogResult.message,
          products: productsResult.success ? productsResult.count : productsResult.message
        }
      }, { status: 500 });
    }
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