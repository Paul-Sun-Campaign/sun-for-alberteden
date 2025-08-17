// Sanity Schema Definitions
// Copy these into your Sanity Studio schema files

// schemas/campaignHero.js
export const campaignHero = {
  name: 'campaignHero',
  title: 'Campaign Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Main Title',
      type: 'string',
      description: 'Main hero title (e.g., "Paul Sun")',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Position subtitle (e.g., "Candidate for Albert Eden Pukutupapa Ward")',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief campaign description',
      validation: Rule => Rule.required()
    },
    {
      name: 'primaryButtonText',
      title: 'Primary Button Text',
      type: 'string',
      initialValue: 'View My Policies'
    },
    {
      name: 'secondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string',
      initialValue: 'Get Involved'
    },
    {
      name: 'candidateImage',
      title: 'Candidate Photo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
};

// schemas/policy.js
export const policy = {
  name: 'policy',
  title: 'Policy',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Policy Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide React icon name (e.g., "DollarSign", "Car", "Building2")',
      options: {
        list: [
          {title: 'Dollar Sign', value: 'DollarSign'},
          {title: 'Trending Down', value: 'TrendingDown'},
          {title: 'Car', value: 'Car'},
          {title: 'Leaf', value: 'Leaf'},
          {title: 'Building 2', value: 'Building2'},
          {title: 'Users', value: 'Users'},
          {title: 'Target', value: 'Target'},
          {title: 'Shield', value: 'Shield'}
        ]
      }
    },
    {
      name: 'color',
      title: 'Color Gradient',
      type: 'string',
      options: {
        list: [
          {title: 'Red', value: 'from-red-500 to-red-600'},
          {title: 'Green', value: 'from-green-500 to-green-600'},
          {title: 'Blue', value: 'from-blue-500 to-blue-600'},
          {title: 'Emerald', value: 'from-emerald-500 to-emerald-600'},
          {title: 'Purple', value: 'from-purple-500 to-purple-600'},
          {title: 'Orange', value: 'from-orange-500 to-orange-600'}
        ]
      }
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required().min(1)
    }
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    }
  ]
};

// schemas/aboutSection.js
export const aboutSection = {
  name: 'aboutSection',
  title: 'About Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'highlights',
      title: 'Key Highlights',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Highlight Title',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text'
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  {title: 'Map Pin', value: 'MapPin'},
                  {title: 'Users', value: 'Users'},
                  {title: 'Award', value: 'Award'},
                  {title: 'Target', value: 'Target'},
                  {title: 'Briefcase', value: 'Briefcase'},
                  {title: 'Heart', value: 'Heart'}
                ]
              }
            }
          ]
        }
      ]
    },
    {
      name: 'candidateImage',
      title: 'Candidate Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'communityImage',
      title: 'Community Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
};

// schemas/contactInfo.js
export const contactInfo = {
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'address',
      title: 'Address/Area',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url'
        },
        {
          name: 'twitter',
          title: 'Twitter URL',
          type: 'url'
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url'
        }
      ]
    }
  ]
};

// schemas/index.js
export const schemaTypes = [
  campaignHero,
  policy,
  aboutSection,
  contactInfo
];