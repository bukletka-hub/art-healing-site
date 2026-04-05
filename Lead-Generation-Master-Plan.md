# Art Healing — Lead Generation Master Plan

**Owner:** Adam Zinkovskyy | **Domain:** art-healing.ca | **Updated:** April 5, 2026

---

## Current Status

**Live:** Website deployed at art-healing.ca with full SEO markup.
**Active:** GitHub repo for version control, deployment pipeline to Cloudflare.
**Pending:** Cloudflare API token for autonomous deploys, real images, email marketing setup.

---

## Phase 1: Website Foundation (Week 1-2) — IN PROGRESS

### 1.1 Autonomous Deployment Pipeline
- [x] GitHub repo connected (bukletka-hub/art-healing-site)
- [x] Site deployed to Cloudflare Pages
- [ ] **ACTION NEEDED:** Create Cloudflare API token for automated deploys
  - Go to: https://dash.cloudflare.com/profile/api-tokens
  - Use template "Edit Cloudflare Pages" or create custom with Pages:Edit permission
  - Provide token to Claude in next session

### 1.2 Site Improvements (Claude will handle)
- [ ] Add real images (Adam provides photos of workshops, art process, himself)
- [ ] Add favicon and touch icons
- [ ] Compress all images to WebP format
- [ ] Add Google Analytics or Cloudflare Web Analytics snippet
- [ ] Create individual service pages (workshops, 1-on-1, courses)
- [ ] Build blog template page
- [ ] Add booking widget (Cal.com or Calendly embed)

### 1.3 Google Search Console Setup
- [ ] Verify domain ownership in Google Search Console
- [ ] Submit sitemap.xml
- [ ] Request indexing of homepage
- [ ] Monitor crawl status

---

## Phase 2: Lead Capture System (Week 2-3)

### 2.1 Lead Magnet Creation
**Recommended first lead magnet:** "5 Art Healing Exercises You Can Do in 10 Minutes"
- A beautifully designed PDF (Claude will create)
- Simple exercises anyone can do at home with basic supplies
- Includes one video link to Adam's content
- CTA at the end: book a free discovery call

### 2.2 Email Marketing Setup
**Tool:** Kit (formerly ConvertKit) — free up to 10,000 subscribers, best for creators

Setup steps:
1. Create Kit account at kit.com
2. Create signup form for lead magnet
3. Build landing page (or embed form on art-healing.ca)
4. Create welcome email sequence (5 emails over 2 weeks):
   - Email 1 (immediate): Deliver lead magnet + warm welcome
   - Email 2 (day 2): Adam's story — why art healing matters
   - Email 3 (day 4): One free exercise with video link
   - Email 4 (day 7): Social proof — client transformation story
   - Email 5 (day 14): Invitation to book a free session or join workshop
5. Set up tags: "lead-magnet", "workshop-interest", "1on1-interest", "course-interest"

### 2.3 Website Integration
- [ ] Replace placeholder form with Kit signup form embed
- [ ] Add exit-intent popup with lead magnet offer
- [ ] Add lead magnet CTA to blog sidebar
- [ ] Create dedicated /free-guide landing page
- [ ] Set up thank-you page after signup

---

## Phase 3: Content & SEO Engine (Week 3-6)

### 3.1 Blog Content Calendar — First Month

| Week | Title | Target Keyword | Type |
|------|-------|---------------|------|
| 1 | What Is Art Healing and How Does It Work? | art healing | Pillar |
| 2 | 5 Simple Art Exercises for Stress Relief | art exercises stress relief | How-to |
| 3 | Art Healing vs. Art Therapy: What's the Difference? | art healing vs art therapy | Educational |
| 4 | Why Creative Expression Is the Self-Care You're Missing | creative expression self care | Opinion |

Claude will write these posts (SEO-optimized, 1000+ words each) and deploy them to the site.

### 3.2 SEO Implementation Checklist
For every page/post, Claude will ensure:
- Target keyword in H1, URL, meta description, first 100 words
- Alt text on all images
- Internal links to 2-3 other pages
- Schema markup (Article for blog posts, LocalBusiness for main pages)
- Page loads under 2 seconds
- Mobile-responsive layout

### 3.3 Technical SEO Tasks
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile (for local Calgary SEO)
- [ ] Add structured data for events/workshops
- [ ] Create XML sitemap that auto-updates with new blog posts
- [ ] Set up canonical URLs
- [ ] Implement breadcrumb navigation

---

## Phase 4: Social Media Lead Funnel (Week 4-8)

### 4.1 Instagram Setup & Optimization
**Profile optimization:**
- Switch to Business/Creator account (if not already)
- Bio: "Art Healing | Creative Wellness in Calgary" + what you offer + CTA
- Link in bio → custom links page on art-healing.ca/links
- Highlights: About, Workshops, Exercises, Testimonials

**Content strategy (4-5 posts/week):**
- Monday: Educational carousel (art wellness tip)
- Wednesday: Reel (art process video — repurpose existing content)
- Thursday: Client story / testimonial
- Saturday: Behind-the-scenes or personal story
- Stories daily: polls, Q&A, daily creative prompts

**Growth tactics:**
- Use 15-20 targeted hashtags per post
- Engage with 10 accounts daily in #creativewellness #arttherapy community
- Collaborate with local Calgary wellness accounts
- Host weekly Instagram Live mini-sessions

### 4.2 Facebook Setup & Optimization
**Page setup:**
- Create Business Page "Art Healing by Adam" (or keep existing)
- Fill out all business info (hours, location, services, contact)
- Set CTA button to "Sign Up" → link to lead magnet page
- Link Instagram for cross-posting

**Facebook Group:**
- Create "Art Healing Community" group
- Post 3x/week: exercises, prompts, discussion questions
- This becomes a nurture channel for leads

**Content approach:**
- Cross-post Instagram content via Meta Business Suite
- Share blog posts as link posts
- Create Facebook Events for workshops
- Go Live weekly (simulcast from Instagram)

### 4.3 Social → Website Pipeline

```
Instagram/Facebook Post
    ↓ "Link in bio" / "Comment GUIDE for free download"
Landing Page (art-healing.ca/free-guide)
    ↓ Email signup form
Kit Email Sequence (5 emails)
    ↓ Nurture + value delivery
Booking Page (art-healing.ca → Cal.com)
    ↓ Free discovery call
Paid Client (workshop, 1-on-1, course)
```

---

## Phase 5: Optimization & Scale (Month 2-3+)

### 5.1 Track & Measure

| Metric | Tool | Month 1 Goal | Month 3 Goal |
|--------|------|-------------|-------------|
| Website visitors | Cloudflare Analytics | 200 | 1,000 |
| Email subscribers | Kit | 30 | 200 |
| Instagram followers | Instagram Insights | 500 | 1,500 |
| Blog posts live | Site | 4 | 12 |
| Leads/month | Kit | 15 | 75 |
| Discovery calls booked | Cal.com | 5 | 15 |
| Paid clients | Manual | 2 | 8 |

### 5.2 Content Doubling Strategy
Once we identify which blog posts get the most organic traffic:
- Create related posts to build topic clusters
- Turn top posts into Instagram carousels and Reels
- Repurpose into email newsletters
- Create lead magnets specific to high-traffic topics

### 5.3 Optional Paid Amplification ($5-10/day)
Only after organic baseline is established (month 2+):
- Boost top-performing Instagram Reels
- Run Facebook lead form ads for lead magnet
- Retarget website visitors with workshop promos

---

## Claude's Autonomous Actions

In each session, Claude will:
1. **Read** CLAUDE.md and memory files to understand current state
2. **Execute** Adam's request (site changes, content creation, deployment)
3. **Deploy** through GitHub → Cloudflare pipeline
4. **Update** memory files with progress
5. **Report** what was done and what's next

Claude can autonomously:
- Edit and deploy site code
- Write blog posts and deploy them
- Create lead magnets (PDFs, landing pages)
- Write email sequences
- Create social media content/captions
- Optimize SEO (meta tags, schema, sitemap)
- Push code to GitHub

Claude will ask Adam for:
- Images and photos
- Credentials/tokens (Cloudflare API, email marketing)
- Business decisions (pricing, scheduling, service details)
- Approval on major design changes
- Content review before publishing

---

## Immediate Next Actions

1. **Adam:** Create Cloudflare API token and provide it in next session
2. **Adam:** Gather 5-10 photos (workshop scenes, art process, headshot)
3. **Claude:** Write first blog post once blog template is built
4. **Claude:** Create lead magnet PDF
5. **Adam:** Set up Kit (ConvertKit) account at kit.com
6. **Adam:** Set up Google Search Console and verify domain
7. **Claude:** Build blog page template and individual blog post pages
8. **Claude:** Create Instagram/Facebook content calendar for first 2 weeks
