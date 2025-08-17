import { useQuery } from '@tanstack/react-query';
import { client, queries } from '@/lib/sanity';

// Custom hooks for fetching Sanity data
export const useCampaignHero = () => {
  return useQuery({
    queryKey: ['campaignHero'],
    queryFn: () => client.fetch(queries.hero),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const usePolicies = () => {
  return useQuery({
    queryKey: ['policies'],
    queryFn: () => client.fetch(queries.policies),
    staleTime: 5 * 60 * 1000,
  });
};

export const useAboutSection = () => {
  return useQuery({
    queryKey: ['aboutSection'],
    queryFn: () => client.fetch(queries.about),
    staleTime: 5 * 60 * 1000,
  });
};

export const useContactInfo = () => {
  return useQuery({
    queryKey: ['contactInfo'],
    queryFn: () => client.fetch(queries.contact),
    staleTime: 5 * 60 * 1000,
  });
};