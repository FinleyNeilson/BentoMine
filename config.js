// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Finley',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '-36.8485',
	defaultLongitude: '174.7633',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/0/#inbox',
		},
		{
			id: '2',
			name: 'Github',
			icon: 'git-graph',
			link: 'https://github.com/',
		},
		{
			id: '3',
			name: 'Pirate',
			icon: 'hat-glasses',
			link: 'https://1337x.to/home/',
		},
		{
			id: '4',
			name: 'Prosple',
			icon: 'rocket',
			link: 'https://nz.prosple.com/',
		},
		{
			id: '5',
			name: 'AlJazeera',
			icon: 'globe',
			link: 'https://www.aljazeera.com/',
		},
		{
			id: '6',
			name: 'Youtube',
			icon: 'play',
			link: 'https://www.youtube.com/',
		},
	],

	secondButtonsContainer: [],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'graduation-cap',
			id: '1',
			links: [
				{
					name: 'COMPSCI 734 WEB',
					link: 'https://canvas.auckland.ac.nz/courses/142356',
				},
				{
					name: 'COMPSCI 701: JAVA',
					link: 'https://canvas.auckland.ac.nz/courses/142202',
				},
				{
					name: 'COMPSCI 761: AI',
					link: 'https://canvas.auckland.ac.nz/courses/142730',
				},
				{
					name: 'Sandbox',
					link: 'http://localhost:5173/sandbox',
				},
			],
		},
		{
			icon: 'code',
			id: '2',
			links: [
				{
					name: 'Linkedin',
					link: 'https://www.linkedin.com/feed/',
				},
				{
					name: 'Monkeytype',
					link: 'https://monkeytype.com/',
				},
				{
					name: 'Goodreads',
					link: 'https://www.goodreads.com/',
				},
				{
					name: 'Letterboxd',
					link: 'https://letterboxd.com/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [],
};
