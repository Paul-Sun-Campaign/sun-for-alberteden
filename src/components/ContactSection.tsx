import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, Facebook, Users, Calendar } from 'lucide-react'
import { useContactInfo } from '@/hooks/useSanity'

const ContactSection = () => {
	const { data: contactData, isLoading } = useContactInfo()

	// Fallback data - this will be used if Sanity isn't connected yet
	const fallbackData = {
		email: 'paul@paulsunauckland.com',
		phone: '021 XXX XXXX',
		address: 'Albert Eden, Auckland',
		socialMedia: {
			facebook: '@PaulSunAlbertEden',
		},
	}

	const content = contactData || fallbackData

	return (
		<section className='py-20 bg-gradient-to-br from-campaign-light-blue to-white'>
			<div className='container mx-auto px-6'>
				<div className='text-center mb-16'>
					<Badge
						variant='secondary'
						className='mb-4 text-campaign-blue font-semibold px-4 py-2'>
						Get Involved
					</Badge>
					<h2 className='text-4xl lg:text-5xl font-bold text-campaign-navy mb-6'>
						Join Our Campaign
					</h2>
					<p className='text-xl text-campaign-gray max-w-3xl mx-auto leading-relaxed'>
						Together, we can bring practical solutions and fiscal responsibility
						to Albert Eden. Your voice matters in building a better community.
					</p>
				</div>

				<div className='grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
					{/* Contact Form */}
					<div className='lg:col-span-2'>
						<Card className='shadow-campaign border-0'>
							<CardHeader>
								<CardTitle className='text-2xl text-campaign-navy'>
									Send a Message
								</CardTitle>
								<p className='text-campaign-gray'>
									Have questions about my policies or want to share your
									concerns? I'd love to hear from you.
								</p>
							</CardHeader>
							<CardContent className='space-y-6'>
								<div className='grid sm:grid-cols-2 gap-4'>
									<div>
										<label className='block text-sm font-medium text-campaign-navy mb-2'>
											First Name *
										</label>
										<Input
											placeholder='Your first name'
											className='border-campaign-blue/30'
										/>
									</div>
									<div>
										<label className='block text-sm font-medium text-campaign-navy mb-2'>
											Last Name *
										</label>
										<Input
											placeholder='Your last name'
											className='border-campaign-blue/30'
										/>
									</div>
								</div>

								<div>
									<label className='block text-sm font-medium text-campaign-navy mb-2'>
										Email Address *
									</label>
									<Input
										type='email'
										placeholder='your.email@example.com'
										className='border-campaign-blue/30'
									/>
								</div>

								<div>
									<label className='block text-sm font-medium text-campaign-navy mb-2'>
										Phone Number
									</label>
									<Input
										type='tel'
										placeholder='Your phone number'
										className='border-campaign-blue/30'
									/>
								</div>

								<div>
									<label className='block text-sm font-medium text-campaign-navy mb-2'>
										Message *
									</label>
									<Textarea
										placeholder='Tell me about the issues that matter to you in Albert Eden...'
										className='min-h-32 border-campaign-blue/30'
									/>
								</div>

								<div className='flex items-center gap-3'>
									<input
										type='checkbox'
										id='subscribe'
										className='rounded border-campaign-blue'
									/>
									<label
										htmlFor='subscribe'
										className='text-sm text-campaign-gray'>
										Subscribe to campaign updates and community news
									</label>
								</div>

								<Button
									variant='campaign'
									size='lg'
									className='w-full sm:w-auto px-8'>
									Send Message
								</Button>
							</CardContent>
						</Card>
					</div>

					{/* Contact Info & Ways to Help */}
					<div className='space-y-6'>
						{/* Contact Details */}
						<Card className='shadow-md'>
							<CardHeader>
								<CardTitle className='text-xl text-campaign-navy'>
									Contact Details
								</CardTitle>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div className='flex items-center gap-3'>
									<Mail className='w-5 h-5 text-campaign-blue' />
									<div>
										<p className='font-medium text-campaign-navy'>Email</p>
										<p className='text-campaign-gray'>{content.email}</p>
									</div>
								</div>

								<div className='flex items-center gap-3'>
									<Phone className='w-5 h-5 text-campaign-blue' />
									<div>
										<p className='font-medium text-campaign-navy'>Phone</p>
										<p className='text-campaign-gray'>{content.phone}</p>
									</div>
								</div>

								<div className='flex items-center gap-3'>
									<MapPin className='w-5 h-5 text-campaign-blue' />
									<div>
										<p className='font-medium text-campaign-navy'>Area</p>
										<p className='text-campaign-gray'>{content.address}</p>
									</div>
								</div>

								{content.socialMedia?.facebook && (
									<div className='flex items-center gap-3'>
										<Facebook className='w-5 h-5 text-campaign-blue' />
										<div>
											<p className='font-medium text-campaign-navy'>Follow</p>
											<p className='text-campaign-gray'>
												{content.socialMedia.facebook}
											</p>
										</div>
									</div>
								)}
							</CardContent>
						</Card>

						{/* Ways to Help */}
						<Card className='shadow-md'>
							<CardHeader>
								<CardTitle className='text-xl text-campaign-navy'>
									Ways to Help
								</CardTitle>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div className='flex items-start gap-3'>
									<Users className='w-5 h-5 text-campaign-gold mt-1' />
									<div>
										<p className='font-medium text-campaign-navy'>Volunteer</p>
										<p className='text-sm text-campaign-gray'>
											Help with leaflet drops and community events
										</p>
									</div>
								</div>

								<div className='flex items-start gap-3'>
									<Calendar className='w-5 h-5 text-campaign-gold mt-1' />
									<div>
										<p className='font-medium text-campaign-navy'>
											Attend Events
										</p>
										<p className='text-sm text-campaign-gray'>
											Join community meetings and campaign events
										</p>
									</div>
								</div>

								<div className='flex items-start gap-3'>
									<Mail className='w-5 h-5 text-campaign-gold mt-1' />
									<div>
										<p className='font-medium text-campaign-navy'>
											Spread the Word
										</p>
										<p className='text-sm text-campaign-gray'>
											Share with friends and family on social media
										</p>
									</div>
								</div>

								<Button variant='campaign-outline' className='w-full mt-4'>
									Volunteer Today
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactSection
