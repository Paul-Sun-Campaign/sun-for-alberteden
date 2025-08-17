import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Replace these with your actual Sanity project details
const projectId = 'your-project-id'; // Get this from your Sanity dashboard
const dataset = 'production'; // or 'development'
const apiVersion = '2024-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

// Helper function for generating image URLs
const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};

// Types for our campaign content
export interface CampaignHero {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  candidateImage: any;
  backgroundImage: any;
}

export interface Policy {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  order: number;
}

export interface AboutSection {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  candidateImage: any;
  communityImage: any;
}

export interface ContactInfo {
  _id: string;
  email: string;
  phone: string;
  address: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}

// Sanity queries
export const queries = {
  hero: `*[_type == "campaignHero"][0]`,
  policies: `*[_type == "policy"] | order(order asc)`,
  about: `*[_type == "aboutSection"][0]`,
  contact: `*[_type == "contactInfo"][0]`,
};