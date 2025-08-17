# Sanity CMS Setup for Paul Sun Campaign Website

## 🚀 Quick Setup Guide

### 1. Create Sanity Project
1. Go to [sanity.io](https://sanity.io) and create a free account
2. Create a new project called "Paul Sun Campaign"
3. Choose "Clean project" template
4. Note your **Project ID** (you'll need this)

### 2. Update Configuration
1. Open `src/lib/sanity.ts`
2. Replace `'your-project-id'` with your actual Sanity Project ID
3. The dataset is already set to `'production'`

### 3. Set up Sanity Studio
1. In your Sanity project, go to the Studio
2. Add these schema files to your Sanity project:

**schemas/campaignHero.js** - Hero section content
**schemas/policy.js** - Individual policies 
**schemas/aboutSection.js** - About Paul content
**schemas/contactInfo.js** - Contact information

Copy the schema definitions from `src/lib/sanity-schemas.ts`

### 4. Add Initial Content

#### Campaign Hero
- **Title**: "Paul Sun"
- **Subtitle**: "Candidate for Albert Eden Pukutupapa Ward"
- **Description**: Your campaign message
- **Upload candidate photo**

#### Policies (Add 5 documents)
1. **End Wasteful Spending** (order: 1)
2. **Lower Rates** (order: 2) 
3. **Improve Traffic** (order: 3)
4. **Scrap Pointless Emissions Targets** (order: 4)
5. **Fix Chaotic Urban Development** (order: 5)

#### About Section
- Add Paul's background information
- Upload community photos

#### Contact Info
- Email, phone, address
- Social media links

### 5. How Paul Will Edit Content

Once set up, Paul can:
- **Edit text content** directly in Sanity Studio
- **Upload new photos** through the media library
- **Reorder policies** by changing the order number
- **Add/remove policies** as needed
- **Update contact information** instantly

### 6. Benefits for Paul

✅ **No technical knowledge required**
✅ **Visual content editor** 
✅ **Real-time website updates**
✅ **Image management made easy**
✅ **Content preview before publishing**
✅ **Mobile-friendly editing interface**

---

## 🔧 Technical Details

The website is set up with fallback content, so it works perfectly even before Sanity is connected. Once you provide the Project ID, all content will be dynamically loaded from Sanity.

**Features:**
- Automatic image optimization
- Content caching for fast loading
- Responsive image handling
- SEO-friendly content structure

---

## 📞 Need Help?

The current setup includes fallback content, so the website works immediately. When you're ready to connect Sanity, just update the Project ID in the configuration file.