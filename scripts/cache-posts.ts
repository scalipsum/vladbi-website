import { refreshPostsCache } from '../src/lib/notion';

async function cachePosts() {
  const result = await refreshPostsCache();
  
  if (!result.success) {
    console.error('Error caching posts:', result.message);
    process.exit(1);
  }
}

cachePosts();
