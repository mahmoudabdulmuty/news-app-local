const defaultArticles = [
	{
		source: {
			id: 'the-washington-post',
			name: 'The Washington Post'
		},
		author: 'Timothy Bella, Kelsey Ables',
		title:
			'Jean-Luc Brunel, Epstein associate accused of supplying girls to financier, is found hanged in prison - The Washington Post',
		description:
			'The Epstein associate was found dead in his cell at around 1 a.m. Saturday during an overnight check by guards at La Santé prison in Paris, the French Penitentiary Administration told The Washington Post.',
		url: 'https://www.washingtonpost.com/nation/2022/02/19/jean-luc-brunel-hanged-epstein/',
		urlToImage:
			'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MH64RFEROMI6ZDO5KIJWTCGSMM.jpg&w=1440',
		publishedAt: '2022-02-19T20:14:30Z',
		content:
			'The 75-year-old was found dead in his cell at around 1 a.m. Saturday during an overnight check by guards at the Paris prison, prosecutors told Le Monde. Brunel was being held as part of an ongoing in… [+5561 chars]'
	},
	{
		source: {
			id: null,
			name: 'New York Times'
		},
		author: 'Natalie Kitroeff, Sarah Maslin Nir',
		title:
			'Police in Ottawa Rout Truckers With a Show of Force - The New York Times',
		description:
			'A central area of the protest that roiled Canada’s capital for three weeks  was cleared of demonstrators.',
		url: 'https://www.nytimes.com/2022/02/19/world/canada/canada-truckers-arrested.html',
		urlToImage:
			'https://static01.nyt.com/images/2022/02/19/us/19CANADA-NEWTOP1/19CANADA-NEWTOP1-facebookJumbo.jpg',
		publishedAt: '2022-02-19T20:12:01Z',
		content:
			'Throughout the course of the protest, public opinion has shown that pandemic fatigue is high here, in a country that has frequently rolled out stringent coronavirus restrictions. In opinion polls, so… [+1790 chars]'
	},
	{
		source: {
			id: null,
			name: 'CBS Sports'
		},
		author: '',
		title:
			'Steelers hire former Dolphins HC Brian Flores as senior defensive assistant/linebackers coach - CBS Sports',
		description: 'Flores has resurfaced in Pittsburgh',
		url: 'https://www.cbssports.com/nfl/news/steelers-hire-former-dolphins-hc-brian-flores-as-senior-defensive-assistantlinebackers-coach/',
		urlToImage:
			'https://sportshub.cbsistatic.com/i/r/2022/01/11/f2851c57-2c17-4008-99b8-bf5e8b56e3f6/thumbnail/1200x675/46369943b8c7632d76de64b7f32daf59/brian-flores.jpg',
		publishedAt: '2022-02-19T20:03:00Z',
		content:
			'The Pittsburgh Steelers found a supremely qualified individual to fill their previously vacant roles at senior defensive assistant and linebacker coach. Brian Flores, who recently concluded a three-y… [+4600 chars]'
	},
	{
		source: {
			id: 'cnn',
			name: 'CNN'
		},
		author: 'Kate Sullivan, Allie Malloy and Jasmine Wright, CNN',
		title:
			"Harris says US 'stands with Ukraine' while warning Russia of 'swift, severe and united' consequences - CNN",
		description:
			'Vice President Kamala Harris on Saturday vowed there would be a "swift, severe and united" response if Russia invades Ukraine and assured Ukrainian President Volodymyr Zelensky the US "stands with Ukraine."',
		url: 'https://www.cnn.com/2022/02/19/politics/harris-munich-speech/index.html',
		urlToImage:
			'https://cdn.cnn.com/cnnnext/dam/assets/220219055826-germany-vice-president-kamala-harris-munich-security-conference-super-tease.jpg',
		publishedAt: '2022-02-19T19:59:00Z',
		content:
			'(CNN)Vice President Kamala Harris on Saturday vowed there would be a "swift, severe and united" response if Russia invades Ukraine and assured Ukrainian President Volodymyr Zelensky the US "stands wi… [+8565 chars]'
	},
	{
		source: {
			id: null,
			name: 'nj.com'
		},
		author: 'Brent Johnson | NJ Advance Media for NJ.com',
		title:
			'N.J. weather: Multiple snow squall warnings issued as fierce storms rip across state. Whiteout conditions pos - NJ.com',
		description:
			'The snow squall warnings extend to 2:30 p.m. for five counties in northwestern New Jersey and 2:45 p.m. in Bergen and Passaic counties. Whiteout conditions are possible.',
		url: 'https://www.nj.com/weather/2022/02/nj-weather-snow-squall-warnings-issued-for-5-counties-fierce-blast-of-wind-snow-to-make-driving-treacherous.html',
		urlToImage:
			'https://www.nj.com/resizer/GkTEkNHNhoUOm40-DMJVY6SV1Vs=/1280x0/filters:focal(1037x809:1047x799)/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/YW3EJI2WAND3HF4D4FNU4PZOTY.jpeg',
		publishedAt: '2022-02-19T18:42:00Z',
		content:
			'Snow squall warnings were issued for several New Jersey counties Saturday afternoon as an intense band of snow showers that produced some whiteout conditions ripped across the state.\r\nThe National We… [+1953 chars]'
	},
	{
		source: {
			id: 'abc-news',
			name: 'ABC News'
		},
		author: 'The Associated Press',
		title:
			'Actor Lindsey Pearlman found dead after going missing in LA - ABC News',
		description: '',
		url: 'https://abcnews.go.com/Entertainment/wireStory/actor-lindsey-pearlman-found-dead-missing-la-83003095',
		urlToImage:
			'https://s.abcnews.com/images/Entertainment/WireAP_50ebec72651c4ff998b10ef38ca397e4_16x9_992.jpg',
		publishedAt: '2022-02-19T18:36:03Z',
		content:
			'LOS ANGELES -- Actor Lindsey Erin Pearlman, who had roles in General Hospital, American Housewife and other shows, was found dead days after she was reported missing in Los Angeles, authorities said.… [+704 chars]'
	},
	{
		source: {
			id: null,
			name: 'ESPN'
		},
		author: 'Jeff Borzello',
		title:
			"Gonzaga tabbed as NCAA men's basketball selection committee's top overall seed; Auburn, Arizona, Kansas right behind - ESPN",
		description:
			"Gonzaga was the NCAA tournament men's basketball selection committee's No. 1 overall seed for the second straight season when the bracket preview was revealed Saturday afternoon.",
		url: 'https://www.espn.com/mens-college-basketball/story/_/id/33328322/gonzaga-tabbed-ncaa-men-basketball-selection-committee-top-overall-seed-auburn-arizona-kansas-right-behind',
		urlToImage:
			'https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0211%2Fr972847_1296x729_16%2D9.jpg',
		publishedAt: '2022-02-19T18:31:27Z',
		content:
			"Gonzaga is the overall 1-seed in the NCAA tournament men's basketball selection committee's bracket preview, revealed early Saturday afternoon, for the second straight season.\r\nThe committee announce… [+1832 chars]"
	},
	{
		source: {
			id: 'abc-news',
			name: 'ABC News'
		},
		author: 'Ivan Pereira, Sasha Pezenik',
		title:
			'FDA issues warning after Family Dollar distribution center found infested with rodents - ABC News',
		description: '',
		url: 'https://abcnews.go.com/US/fda-issues-warning-family-dollar-distribution-center-found/story?id=83002589',
		urlToImage:
			'https://s.abcnews.com/images/US/family-dollar-gty-er-220219_1645290550040_hpMain_16x9_992.jpg',
		publishedAt: '2022-02-19T18:29:00Z',
		content:
			'The U.S. Food and Drug Administration is warning consumers about potentially contaminated food, lipstick and other products from Family Dollar stores in six southern states following a major rodent i… [+2201 chars]'
	},
	{
		source: {
			id: 'politico',
			name: 'Politico'
		},
		author: null,
		title:
			'Larry Ellison pumps $15M into super PAC aligned with Tim Scott - POLITICO',
		description:
			"The donation brings the Oracle chair's giving to the group, Opportunity Matters Fund, to $25 million.",
		url: 'https://www.politico.com/news/2022/02/19/larry-ellison-pumps-15m-into-super-pac-aligned-with-tim-scott-00010377',
		urlToImage:
			'https://static.politico.com/4c/22/858992c84e7aa5b21c694f5443be/https-delivery.gettyimages.com/downloads/1332610869',
		publishedAt: '2022-02-19T18:17:55Z',
		content:
			'Sen. Tim Scott questions witnesses during a Senate Homeland Security and Governmental Affairs Committee confirmation hearing on Capitol Hill on Aug. 5. | Chip Somodevilla/Getty Images\r\nTech billionai… [+1230 chars]'
	},
	{
		source: {
			id: 'the-verge',
			name: 'The Verge'
		},
		author: 'Emma Roth',
		title:
			'Epic Games is making hundreds of temp testers into full employees with benefits - The Verge',
		description:
			'Epic Games is offering its contingent workers full-time employment. This offer applies to both QA testers as well as other “eligible” US-based contractors.',
		url: 'https://www.theverge.com/2022/2/19/22942053/epic-games-full-time-employment-contingent-workers',
		urlToImage:
			'https://cdn.vox-cdn.com/thumbor/qvX4e62Xwf4KSZ_X0gr2qmZa2GA=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21768196/acastro_20200818_1777_epicApple_0002.0.jpg',
		publishedAt: '2022-02-19T18:11:47Z',
		content:
			'The Fortnite developer is offering a few hundred of its contract-based workers full-time employment\r\nIllustration by Alex Castro / The Verge\r\nEpic Games is hiring its US-based contingent workers full… [+2570 chars]'
	},
	{
		source: {
			id: 'cnn',
			name: 'CNN'
		},
		author: 'Brenda Goodman',
		title:
			'As BA.2 subvariant of Omicron rises, lab studies point to signs of severity - CNN',
		description:
			"The BA.2 virus -- a subvariant of the Omicron coronavirus variant -- isn't just spreading faster than its distant cousin, it may also cause more severe disease and appears capable of thwarting some of the key weapons we have against Covid-19, new research sug…",
		url: 'https://www.cnn.com/2022/02/17/health/ba-2-covid-severity/index.html',
		urlToImage:
			'https://media.cnn.com/api/v1/images/stellar/prod/220217135829-covid-testing-denmark-file.jpg?c=16x9&q=w_800,c_fill',
		publishedAt: '2022-02-19T18:06:00Z',
		content:
			'The BA.2 virus a subvariant of the Omicron coronavirus variant isnt just spreading faster than its distant cousin, it may also cause more severe disease and appears capable of thwarting some of the k… [+6015 chars]'
	},
	{
		source: {
			id: 'reuters',
			name: 'Reuters'
		},
		author: null,
		title:
			"'We saw death in front of us': Passengers recount Greece-Italy ferry fire ordeal - Reuters",
		description:
			'Shocked and sleep-deprived, passengers rescued from a Greece-Italy ferry that caught fire off the island of Corfu said on Saturday they felt relieved to be alive, though some feared for their livelihoods after losing trucks and cargos.',
		url: 'https://www.reuters.com/world/europe/we-saw-death-front-us-passengers-recount-greece-italy-ferry-fire-ordeal-2022-02-19/',
		urlToImage:
			'https://www.reuters.com/resizer/8e2mUmpQZwj36dJp3YR4X-4ao90=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/E5L7OB2A4JCKZOKVRVUKQNZA7I.JPG',
		publishedAt: '2022-02-19T17:55:00Z',
		content:
			'CORFU, Greece, Feb 19 (Reuters) - Shocked and sleep-deprived, passengers rescued from a Greece-Italy ferry that caught fire off the island of Corfu said on Saturday they felt relieved to be alive, th… [+2106 chars]'
	},
	{
		source: {
			id: 'cnn',
			name: 'CNN'
		},
		author:
			'By <a href="/profiles/lauren-moorhouse">Lauren Said-Moorhouse</a>, Jeevan Ravindran, Sana Noor Haq, <a href="/profiles/peter-wilkinson">Peter Wilkinson</a>, <a href="/profiles/adrienne-vogt">Adrienne Vogt</a> and <a href="/profiles/fernando-alfonso-iii">Fernando Alfonso III</a>, CNN',
		title: 'The latest on the Ukraine-Russia border crisis: Live updates - CNN',
		description:
			'Tensions between Moscow and Kyiv are at their highest in years, with a large Russian troop buildup near the shared borders of the two former Soviet republics. Follow here for the latest news updates.',
		url: 'https://www.cnn.com/europe/live-news/ukraine-russia-news-02-19-22-intl/index.html',
		urlToImage:
			'https://dynaimage.cdn.cnn.com/cnn/digital-images/org/2d61258e-f670-49c7-bb3a-d0b8551c7a75.jpg',
		publishedAt: '2022-02-19T17:36:00Z',
		content:
			'Ursula von der Leyen, President of the European Commission, said the world is watching in disbelief in the wake of the largest buildup of troops in Europe since the darkest days of the Cold War.\r\nThe… [+2051 chars]'
	},
	{
		source: {
			id: null,
			name: 'TMZ'
		},
		author: 'TMZ Staff',
		title:
			"Kanye West Loves Kris Jenner, But Attacks Corey Gamble as 'Godless' - TMZ",
		description:
			"Kanye West has set his sights on a new target ... Kris Jenner's BF, and he's gone in hard.",
		url: 'https://www.tmz.com/2022/02/19/kanye-west-attacks-corey-gamble-godless-kris-jenner-kim/',
		urlToImage:
			'https://imagez.tmz.com/image/40/16by9/2022/02/19/401f79598aa945daa3b90a29c3899a99_xl.jpg',
		publishedAt: '2022-02-19T17:30:00Z',
		content:
			'10:35 AM PT -- A source close to the two of them tells TMZ ... "They\'re still very much together, and for Kanye to call Corey godless is unfair as he\'s very much, and always has been, a man of God."\r… [+1399 chars]'
	},
	{
		source: {
			id: null,
			name: 'CBS Sports'
		},
		author: '',
		title:
			'2022 NBA All-Star predictions: Expert picks for Rising Stars, Skills Challenge, 3-Point and Slam Dunk Contests - CBS Sports',
		description:
			'Our team of NBA experts give their picks for all events during All-Star Weekend',
		url: 'https://www.cbssports.com/nba/news/2022-nba-all-star-predictions-expert-picks-for-rising-stars-skills-challenge-3-point-and-slam-dunk-contests/',
		urlToImage:
			'https://sportshub.cbsistatic.com/i/r/2022/02/18/c1b434cc-4ba1-40a7-b0b3-b3e269de8574/thumbnail/1200x675/a6f502113ed6e6496182b7003ee8751c/nba-all-star-2022.jpg',
		publishedAt: '2022-02-19T17:06:00Z',
		content:
			"After a closed-door NBA All-Star Weekend last season in Atlanta, the league's star-studded, three-day event will mark the return of fans back to the arena as it takes over the city of Cleveland. The … [+2688 chars]"
	},
	{
		source: {
			id: null,
			name: 'Push Square'
		},
		author: 'Stephen Tailby',
		title:
			'Horizon Forbidden West Guide: Walkthrough, Tips, and Tricks - Push Square',
		description: 'Your ultimate Horizon Forbidden West resource',
		url: 'https://www.pushsquare.com/guides/horizon-forbidden-west-guide-walkthrough-tips-and-tricks',
		urlToImage: 'https://images.pushsquare.com/690a1bad07145/1280x720.jpg',
		publishedAt: '2022-02-19T16:22:00Z',
		content:
			"Horizon Forbidden West is the sequel to Guerrilla Games' smash hit sci-fi action RPG, Horizon Zero Dawn. We think it's a stunning sequel, awarding it a big fat 9/10 in our Horizon Forbidden West PS5 … [+12741 chars]"
	},
	{
		source: {
			id: null,
			name: 'Hollywood Reporter'
		},
		author: 'Pamela McClintock',
		title:
			'Box Office: Tom Holland’s ‘Uncharted’ Heads for Big $45M-$50M Opening - Hollywood Reporter',
		description:
			'Sony’s Uncharted is racking up big points in its box office debut, earning an estimated $15.4 million on Friday for a projected domestic opening of $45 million to $50 million over the long Presidents Day weekend. The movie stars Tom Holland — who is still in …',
		url: 'https://www.hollywoodreporter.com/movies/movie-news/uncharted-box-office-tom-holland-opening-1235096694/',
		urlToImage:
			'https://www.hollywoodreporter.com/wp-content/uploads/2022/02/Mark-Wahlberg-and-Tom-Holland-in-UNCHARTED-Everett-H-2022-3.jpg?w=1024',
		publishedAt: '2022-02-19T16:07:18Z',
		content:
			'Sony’s Uncharted is racking up big points in its box office debut, earning an estimated $15.4 million on Friday for a projected domestic opening of $45 million to $50 million over the long Presidents… [+2440 chars]'
	},
	{
		source: {
			id: null,
			name: 'New York Times'
		},
		author: 'Jonathan Abrams, Andrew Das',
		title:
			'Olympics Live: Medal Count, Pairs Skating and Bobsled Results - The New York Times',
		description:
			'Elana Meyers Taylor of the United States is taking home her fifth career Olympic medal in bobsled. China wins gold in pairs figure skating, and Sweden’s men finally capture a curling gold.',
		url: 'https://www.nytimes.com/live/2022/02/18/sports/olympics-medals-winter',
		urlToImage:
			'https://static01.nyt.com/images/2022/02/19/multimedia/19olympics-briefing-header-08/19olympics-briefing-header-08-facebookJumbo.jpg',
		publishedAt: '2022-02-19T15:36:47Z',
		content:
			'Elana Meyers Taylor of the United States became the most decorated Black athlete in Winter Olympics history on Saturday by winning the bronze medal in the two-woman bobsled event at the Beijing Games… [+4500 chars]'
	},
	{
		source: {
			id: null,
			name: 'WTOP'
		},
		author: 'Greg Redfern',
		title:
			'WTOP Space Reporter: Another rocket launch and other sky sights on Saturday - WTOP',
		description:
			'NASA Wallops Flight Facility is scheduled to launch the 17th Northrop Grumman resupply mission to the International Space Station, which will be visible in the D.C. area.',
		url: 'http://wtop.com/the-space-place/2022/02/wtop-space-reporter-another-rocket-launch-and-other-sky-sights-on-saturday/',
		urlToImage:
			'https://wtop.com/wp-content/uploads/2022/02/nasacygnus-e1645280374653.jpg',
		publishedAt: '2022-02-19T14:43:46Z',
		content:
			'NASA Wallops Flight Facility is scheduled to launch a rocket on Saturday that will be visible to the DMV as it climbs into the sky.\r\nThe Facility hopes to launch the 17th Northrop Grumman resupply mi… [+1292 chars]'
	},
	{
		source: {
			id: 'the-hill',
			name: 'The Hill'
		},
		author: 'Sarakshi Rai',
		title:
			"Mother of Daunte Wright: 'White woman tears trump justice' | TheHill - The Hill",
		description:
			'Katie Wright, the mother of 20-year-old Daunte Wright, slammed the sentencing of former Minnesota...',
		url: 'https://thehill.com/homenews/state-watch/595031-family-of-daunte-wright-white-woman-tears-trump-justice',
		urlToImage:
			'https://thehill.com/sites/default/files/article_images/wrightkatie_ap02192022.jpg',
		publishedAt: '2022-02-19T14:09:49Z',
		content:
			'Katie Wright, the mother of 20-year-old Daunte Wright, slammed the sentencing of former Minnesota police officer Kim Potter, arguing that the judge was swayed by "white woman tears." \r\nPotter was sen… [+2072 chars]'
	}
];

export default defaultArticles