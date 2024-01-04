import React from 'react';
import Image from 'next/image';
import elogo from '/public/Logoblue.png';
import Link from 'next/link';

const Details = () => {
	return (
		<section className='max-sm:bg-fit w-full bg-[url("https://free4kwallpapers.com/uploads/originals/2021/03/01/saturn-planet-illustration-wallpaper.jpg")] bg-auto px-10 pb-16 pt-5 leading-8 max-sm:px-5 max-sm:py-5'>
			<nav className='flex w-full items-center justify-between '>
				<Image
					src={elogo}
					alt='club-logo'
					height={100}
					width={100}
					className='m-5'
				/>
				<Link href='/details/registration'>
					<button
						className='my-auto w-fit rounded-full bg-cyan-500 px-5 py-2 delay-200 duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500 hover:transition '
						type='submit'
					>
						<div className='text-xl font-bold text-white max-sm:text-sm'>
							Register Now
						</div>
					</button>
				</Link>
			</nav>

			<div className='mx-auto flex h-full w-full max-w-4xl rounded-2xl border-2 border-white bg-[#0A0233] opacity-80 shadow-2xl'>
				<div className='flex flex-col gap-5 px-16 max-sm:px-5'>
					<div className='my-8 text-center text-4xl font-bold text-white underline max-sm:text-xl'>
						Template for Case study competition InsightX
					</div>
					<span className='mb-2 text-4xl font-bold text-white max-sm:text-xl'>
						ERP
					</span>
					<span className='text-4xl font-bold text-white max-sm:text-xl'>
						What is ERP?
					</span>
					<p className='mb-5 text-xl font-bold text-white max-sm:text-sm'>
						ERP(Enterprise Resource Planning) systems are the
						backbone of many modern businesses, bringing together
						various departments and functions under one roof. They
						provide a centralized hub for data, allowing for better
						collaboration, efficiency, and decision-making.
						<br />
						Moreover, these systems offer scalability, allowing
						businesses to adapt and grow without significant
						disruptions. They often come with analytics
						capabilities, enabling companies to derive insights from
						their data, identify trends, and make informed strategic
						decisions. <br />
						By standardizing processes and workflows, ERP software
						minimizes errors and redundancy, enhancing overall
						productivity and ensuring compliance with regulations.
						Additionally, cloud-based ERP solutions have gained
						popularity for their flexibility, accessibility, and
						lower infrastructure costs.
					</p>
					<span className='text-4xl font-bold text-white max-sm:text-xl'>
						HISTORY OF ERP
					</span>
					<p className='mb-5 text-xl font-bold text-white max-sm:text-sm'>
						<ul className='list-disc text-white'>
							<li>
								A Timeline of ERP: Transforming Business
								Operations ERP has revolutionized modern
								businesses, but its roots lie in a quest for
								efficiency. Let's explore its journey.
							</li>
							<li>
								MRP(Material Requirements Planning): The Seed is
								Sown (1960s-1970s) Large manufacturing giants
								like Boeing grappled with managing materials,
								production, and inventory. Enter MRP, the first
								step towards integrated planning. It optimized
								material usage, minimizing waste and production
								bottlenecks.
							</li>
							<li>
								ERP Emerges: Unifying the Orchestra
								(1980s-1990s) MRP evolved into Enterprise
								Resource Planning (ERP), expanding its scope
								beyond materials. Finance, HR, sales, and more
								joined the symphony, sharing data and processes
								through a single, unified system. Early vendors
								like SAP and Oracle established themselves as
								pioneers.
							</li>
							<li>
								Tiered Evolution: Solutions for Every Tune
								(2000s-present) ERP diversified to cater to
								diverse needs. Tier 1 players like Microsoft and
								Oracle still cater to multinational giants,
								while Tier 2 solutions focus on specific
								industries like manufacturing or finance.
								Smaller, simpler Tier 3 options emerged for
								smaller businesses.
							</li>
							<li>
								Best of Breed or Single Harmony? The debate
								rages between a single, integrated ERP system
								and "best of breed" solutions - choosing
								individual software for each segment. Both have
								their pros and cons, with the optimal choice
								depending on specific needs and resources.
							</li>
							<li>
								The Future Beckons: AI, ML, and Beyond AI,
								machine learning, and the Internet of Things
								(IoT) are poised to reshape ERP. Imagine:
								Self-adjusting production schedules based on
								real-time demand forecasts. Blockchain-powered
								supply chains ensure transparency and security.
								AI-driven insights from vast data sets, guiding
								strategic decisions.
							</li>
						</ul>
					</p>
					<span className='text-4xl font-bold text-white max-sm:text-xl'>
						Why ERP?
					</span>
					<p className='mb-5 text-xl font-bold text-white max-sm:text-sm'>
						ERP emerged as a vital necessity for several reasons:
						Overcoming information silos: Fragmented data across
						departments created chaos. ERP, a unified platform,
						fostered transparency and collaboration, breaking down
						these silos. Combatting inefficiency: Manual processes
						were slow and error-prone. ERP automated tasks,
						streamlined workflows, and boosted productivity.
						Data-driven insights: Scattered data obscured the bigger
						picture. ERP provided a single source of truth, enabling
						informed decision-making and strategic planning.
						Adapting to growth: Traditional systems couldn't scale
						with expanding businesses. ERP's modularity and
						adaptability allowed businesses to grow without
						cumbersome complexities. Global competition: To compete
						effectively, businesses need agility and responsiveness.
						ERP improved communication and collaboration across
						geographies, enhancing agility. Ultimately, ERP wasn't
						just a fancy software, it was a transformation catalyst.
						It transformed businesses from disconnected islands into
						efficient, data-driven, and responsive organisms, ready
						to thrive in the modern marketplace.
					</p>
					<span className='text-4xl font-bold text-white max-sm:text-xl'>
						Advantages of ERP:
					</span>
					<p className='mb-5 text-xl font-bold text-white max-sm:text-sm'>
						<ul className='mb-4 list-disc text-white'>
							<span className='text-2xl font-bold text-white max-sm:text-xl'>
								1] Efficiency and Productivity:
							</span>
							<li>
								Streamlined processes: Eliminates redundant
								tasks and data silos, optimizing workflows and
								increasing employee productivity.
							</li>
							<li>
								Improved data visibility: Real-time access to
								centralized data enhances decision-making across
								departments.
							</li>
							<li>
								Reduced errors: Automation and standardized
								processes minimize data entry errors and
								inconsistencies.
							</li>
							<li>
								Resource optimization: Efficient allocation of
								resources through better planning and tracking.
							</li>
						</ul>
						<ul className='mb-4 list-disc text-white'>
							<span className='text-2xl font-bold text-white max-sm:text-xl'>
								2]Cost Reduction and Profitability:
							</span>
							<li>
								Reduced inventory costs: Optimized inventory
								management leads to lower carrying costs and
								improved cash flow.
							</li>
							<li>
								Procurement savings: Centralized purchasing
								power and automated processes facilitate better
								negotiation and reduced supplier costs.
							</li>
							<li>
								Reduced operational costs: Increased efficiency
								and automation streamline operations, leading to
								cost savings in various areas.
							</li>
							<li>
								Improved profitability: Increased efficiency,
								cost reduction, and better decision-making all
								contribute to higher profitability.
							</li>
						</ul>
						<ul className='mb-4 list-disc text-white'>
							<span className='text-2xl font-bold text-white max-sm:text-xl'>
								3]Customer Service and Relationships:
							</span>
							<li>
								Faster response times: Integrated CRM
								functionality allows for quicker responses to
								customer inquiries and issues.
							</li>
							<li>
								Personalized customer experience: Better
								customer data management enables personalized
								interactions and targeted marketing campaigns.
							</li>
							<li>
								Increased customer satisfaction: Improved
								service and engagement lead to stronger customer
								relationships and loyalty.
							</li>
							<li>
								Enhanced brand reputation: Positive customer
								experiences contribute to a better brand image
								and increased word-of-mouth marketing.
							</li>
						</ul>
						<ul className='mb-4 list-disc text-white'>
							<span className='text-2xl font-bold text-white max-sm:text-xl'>
								4]Competitive Advantage and Scalability:
							</span>
							<li>
								Improved agility: Faster and more informed
								decision-making allows for quick adaptation to
								market changes and new opportunities.
							</li>
							<li>
								Enhanced data-driven insights: Advanced
								analytics capabilities provide valuable insights
								for competitive analysis and strategy
								development.
							</li>
							<li>
								Scalability and flexibility: ERP supports growth
								and expansion by accommodating growing data
								volumes and new business needs.
							</li>
							<li>
								Standardization and compliance: Streamlined
								processes and centralized data facilitate easier
								compliance with regulations and industry
								standards.
							</li>
						</ul>
					</p>{' '}
					<span className='text-4xl font-bold text-white max-sm:text-xl'>
						Disadvantages of ERP:
					</span>
					<p className='mb-5 text-xl font-bold text-white max-sm:text-sm'>
						<ul className='mb-4 list-disc text-white'>
							<span className='text-2xl font-bold text-white max-sm:text-xl'>
								1] High Implementation Costs:
							</span>
							<li>
								Initial investment: ERP software licenses,
								hardware upgrades, and implementation services
								can be expensive.
							</li>
							<li>
								Ongoing maintenance fees: Continuous software
								updates and technical support add to the ongoing
								cost.
							</li>
							<li>
								Hidden costs: Additional customization,
								integration, and data migration costs may arise
								during implementation.
							</li>
						</ul>
						<ul className='mb-4 list-disc text-white'>
							<span className='text-2xl font-bold text-white max-sm:text-xl'>
								2]Change Management and User Adoption:
							</span>
							<li>
								Resistance to change: Employees may be reluctant
								to adopt new processes and technology, requiring
								comprehensive training and support.
							</li>
							<li>
								Training costs: Effective user training programs
								can be time-consuming and expensive.
							</li>
							<li>
								Loss of productivity during implementation:
								Transition to a new system can lead to temporary
								disruptions in workflow and productivity.
							</li>
						</ul>
						<ul className='mb-4 list-disc text-white'>
							<span className='text-2xl font-bold text-white max-sm:text-xl'>
								3]System Customization and Integration:
							</span>
							<li>
								Complexity of customization: Extensive
								customization can be resource-intensive,
								time-consuming, and require specialized
								expertise.
							</li>
							<li>
								Integration challenges: Integrating ERP with
								existing legacy systems can be complex and
								technically challenging.
							</li>
							<li>
								Maintenance of customizations: Keeping
								customized functionalities updated and
								compatible with software upgrades can be
								demanding.
							</li>
						</ul>
						<ul className='mb-4 list-disc text-white'>
							<span className='text-2xl font-bold text-white max-sm:text-xl'>
								4]Data Quality and Migration:
							</span>
							<li>
								Data cleansing and migration costs: Cleaning and
								migrating large volumes of historical data can
								be costly and time-consuming.
							</li>
							<li>
								Data cleansing and migration costs: Cleaning and
								migrating large volumes of historical data can
								be costly and time-consuming.
							</li>
							<li>
								Ongoing data maintenance: Ensuring data quality
								and consistency throughout the system requires
								ongoing effort and vigilance.
							</li>
						</ul>
						<ul className='mb-4 list-disc text-white'>
							<span className='text-2xl font-bold text-white max-sm:text-xl'>
								5]Vendor Selection and Partnership:
							</span>
							<li>
								Choosing the right vendor: Selecting the wrong
								vendor can lead to compatibility issues, poor
								implementation, and unsatisfactory results.
							</li>
							<li>
								Vendor lock-in: Dependence on a specific vendor
								can make switching to another system in the
								future difficult and expensive.
							</li>
							<li>
								Maintaining a productive partnership: Effective
								communication and collaboration with the vendor
								are crucial for ongoing support and system
								optimization.
							</li>
						</ul>
					</p>
					<span className='text-4xl font-bold  text-white max-sm:text-xl'>
						💡Topics we anticipate your research to cover:
					</span>
					<p className='mb-5 text-xl font-bold text-white max-sm:text-sm'>
						<ul className='list-disc text-white'>
							<li>
								What are the benefits that they see from using
								it?{' '}
							</li>
							<li>
								With the ERP software they currently use, what
								all tasks are they able to accomplish?
							</li>
							<li>
								What issues do they have with the ERP software
								they are currently using?
							</li>
							<li>
								Which features, if present, would have been
								preferable?
							</li>
							<li>
								For what particular purposes in their system, do
								they use their current ERP?
							</li>
							<li>
								Any rivals for them in the ERP software market?{' '}
							</li>
							<li>
								Are they happy with the ERP they are now using?
								How long have they been using this?
							</li>
						</ul>
					</p>
					<span className='text-4xl font-bold  text-white max-sm:text-xl'>
						💭Suggestions:
					</span>
					<p className='mb-5 text-xl font-bold text-white max-sm:text-sm'>
						<ul className='list-disc text-white'>
							<li>
								Engage all stakeholders like owners, managers
								and employees and also with all kinds of
								businesses to capture diverse perspectives and
								needs.{' '}
							</li>
							<li>Develop structured Questionnaires</li>
							<li>Ensure a broad outreach.</li>
							<li>
								To obtain comprehensive data, use multiple
								channels, including phone calls, online surveys,
								and in-person visits.
							</li>
						</ul>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Details;
