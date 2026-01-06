# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into your VladBi Next.js 15.5.7 website. The integration includes:

- **Client-side initialization** via `instrumentation-client.ts` (recommended for Next.js 15.3+)
- **Reverse proxy configuration** through Next.js rewrites to improve tracking reliability
- **Environment variables** for secure API key storage
- **12 custom events** tracking key user interactions across the conversion funnel
- **Error tracking** enabled via `capture_exceptions: true`

## Events Implemented

| Event Name | Description | File Path |
|------------|-------------|-----------|
| `quiz_page_viewed` | User viewed the product quiz page - top of conversion funnel | `src/components/elements/QuizIframeCard.tsx` |
| `hero_cta_clicked` | User clicked the 'Get Started' button in the hero section | `src/components/sections/Hero.tsx` |
| `quiz_cta_clicked` | User clicked 'Take the quiz' button in the GetStarted timeline section | `src/components/sections/GetStarted.tsx` |
| `navbar_quiz_clicked` | User clicked 'Your Product Quiz' button in the navbar - high intent conversion action | `src/components/layout/Navbar.tsx` |
| `cta_button_clicked` | User clicked a call-to-action button to view services or other pages | `src/components/sections/CallToAction.tsx` |
| `service_card_clicked` | User clicked on a service card (SaaS Products or AI Automation) | `src/components/elements/AutomationPreviewCard.tsx` |
| `product_card_clicked` | User clicked on a product/case study card | `src/components/elements/SaasPreviewCard.tsx` |
| `blog_card_clicked` | User clicked on a blog post card | `src/components/elements/BlogCard.tsx` |
| `work_showcase_clicked` | User clicked on work showcase item in the carousel | `src/components/sections/WorkShowcase.tsx` |
| `footer_link_clicked` | User clicked on a footer navigation link | `src/components/layout/Footer.tsx` |
| `youtube_link_clicked` | User clicked on YouTube link in footer | `src/components/layout/Footer.tsx` |
| `theme_toggled` | User toggled between light and dark theme | `src/components/elements/ThemeToggle.tsx` |

## Configuration Files Created/Modified

| File | Description |
|------|-------------|
| `instrumentation-client.ts` | PostHog client-side initialization with error tracking and debug mode |
| `next.config.ts` | Added reverse proxy rewrites for PostHog API requests |
| `.env.local` | Added `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` variables |
| `src/lib/notion-types.ts` | Created to separate types from server-only code for client components |

## Next steps

Visit your PostHog dashboard to see incoming events and create insights:

1. **PostHog Dashboard**: https://eu.i.posthog.com/project (log in with your PostHog account)

### Suggested Insights to Create

Create these insights in your PostHog dashboard for business-critical analytics:

1. **Quiz Conversion Funnel**
   - Track: `$pageview` (homepage) -> `quiz_cta_clicked` OR `navbar_quiz_clicked` -> `quiz_page_viewed`
   - Purpose: Measure how many visitors convert to quiz takers

2. **CTA Click Analysis**
   - Track: `hero_cta_clicked`, `cta_button_clicked`, `quiz_cta_clicked`
   - Purpose: Identify which CTAs drive the most engagement

3. **Content Engagement**
   - Track: `blog_card_clicked`, `product_card_clicked`, `service_card_clicked`
   - Purpose: Understand which content types attract the most interest

4. **Navigation Patterns**
   - Track: `footer_link_clicked` with breakdown by `destination`
   - Purpose: Discover how users navigate through the site

5. **User Preferences**
   - Track: `theme_toggled` with breakdown by `to_theme`
   - Purpose: Understand user preference for light vs dark mode

## Automatic Tracking

PostHog also automatically captures:
- `$pageview` events on every page navigation
- `$pageleave` events with scroll depth and time on page
- `$autocapture` events for clicks and form interactions
- `$exception` events for client-side errors (via `capture_exceptions: true`)

## Testing Your Integration

1. Run your development server: `bun run dev`
2. Open the app in your browser
3. Check PostHog's Live Events view to see events streaming in
4. In development mode, PostHog debug mode is enabled for easier troubleshooting
