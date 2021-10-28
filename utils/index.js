// TODO: (1) Custom date format (Thursday, Oct 28, 2021)
export const getDate = new Date().toLocaleDateString('en-MM', {
	timeZone: 'Asia/Rangoon',
	weekday: 'long',
	day: '2-digit',
	month: 'short',
	year: 'numeric',
})

// TODO: (2) Cleaning API object data
export const dummyData = {
	current_date: getDate,
	morning_set: '--',
	morning_val: '--',
	morning_result: '--',
	evening_set: '--',
	evening_val: '--',
	evening_result: '--',
	morning_modern: '--',
	morning_internet: '--',
	evening_modern: '--',
	evening_internet: '--',
}
