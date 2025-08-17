import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
	DollarSign,
	TrendingDown,
	Car,
	Leaf,
	Building2,
	Users,
	Target,
	Shield,
} from 'lucide-react'
import { usePolicies } from '@/hooks/useSanity'

// Icon mapping for dynamic icon selection
const iconMap = {
	DollarSign,
	TrendingDown,
	Car,
	Leaf,
	Building2,
	Users,
	Target,
	Shield,
}

const fallbackPolicies = [
	{
		_id: '1',
		icon: 'DollarSign',
		title: 'End Wasteful Spending',
		subtitle: 'Respect Every Ratepayer Dollar',
		description:
			'Eliminate vanity projects, challenge bloated budgets, and require cost-benefit analysis before spending public money.',
		color: 'from-red-500 to-red-600',
		order: 1,
	},
	{
		_id: '2',
		icon: 'TrendingDown',
		title: 'Lower Rates',
		subtitle: 'Focus on Core Services, Cut the Bureaucracy',
		description:
			'Stop the rate hikes. Using AI to lift productivity. Deliver better services with smarter spending and tighter budgets.',
		color: 'from-green-500 to-green-600',
		order: 2,
	},
	{
		_id: '3',
		icon: 'Car',
		title: 'Improve Traffic',
		subtitle: 'Prioritise Infrastructure Over Ideology',
		description:
			'End excessive traffic-calming and AT\'s unrealistic "Vision Zero" policy. Focus on maintenance, safety, and traffic flow.',
		color: 'from-blue-500 to-blue-600',
		order: 3,
	},
	{
		_id: '4',
		icon: 'Leaf',
		title: 'Scrap Pointless Emissions Targets',
		subtitle: 'Focus on Climate Adaptation',
		description:
			'Ditch costly ideology-driven targets. Invest instead in stormwater management, slip prevention, planned relocation and environment protection.',
		color: 'from-emerald-500 to-emerald-600',
		order: 4,
	},
	{
		_id: '5',
		icon: 'Building2',
		title: 'Fix Chaotic Urban Development',
		subtitle: 'Support Controlled Intensification',
		description:
			'Protect the character of suburbs and encourage intensification around transport hubs. Promote quality design and living standards.',
		color: 'from-purple-500 to-purple-600',
		order: 5,
	},
]

const PolicySection = () => {
	const { data: sanityPolicies, isLoading } = usePolicies()
	console.log('🚀 ~ PolicySection ~ sanityPolicies:', sanityPolicies)

	// Use Sanity data if available, otherwise use fallback
	const policies =
		sanityPolicies && sanityPolicies.length > 0
			? sanityPolicies
			: fallbackPolicies
	return (
		<section className='py-20 bg-gradient-to-b from-white to-campaign-light-blue'>
			<div className='container mx-auto px-6'>
				<div className='text-center mb-16'>
					<Badge
						variant='secondary'
						className='mb-4 text-campaign-blue font-semibold px-4 py-2'>
						Policy Platform
					</Badge>
					<h2 className='text-4xl lg:text-5xl font-bold text-campaign-navy mb-6'>
						Five Key Priorities for Albert Eden
					</h2>
					<p className='text-xl text-campaign-gray max-w-3xl mx-auto leading-relaxed'>
						Practical, proven solutions that put ratepayers first and deliver
						real results for our community.
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
					{policies.map((policy, index) => {
						const IconComponent =
							iconMap[policy.icon as keyof typeof iconMap] || DollarSign
						return (
							<Card
								key={policy._id}
								className={`group hover:shadow-campaign transition-all duration-300 border-0 shadow-lg ${
									index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
								}`}>
								<CardHeader className='pb-4'>
									<div className='flex items-center gap-3 mb-3'>
										<div
											className={`p-3 rounded-lg bg-gradient-to-r ${policy.color} shadow-md`}>
											<IconComponent className='w-6 h-6 text-white' />
										</div>
										<Badge
											variant='outline'
											className='text-campaign-blue border-campaign-blue'>
											{policy.order || index + 1}
										</Badge>
									</div>
									<CardTitle className='text-xl font-bold text-campaign-navy leading-tight'>
										{policy.title}
									</CardTitle>
									<p className='text-campaign-blue font-semibold text-sm'>
										{policy.subtitle}
									</p>
								</CardHeader>
								<CardContent>
									<p className='text-campaign-gray leading-relaxed'>
										{policy.description}
									</p>
								</CardContent>
							</Card>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default PolicySection
