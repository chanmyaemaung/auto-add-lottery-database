const puppeteer = require('puppeteer')
// const cron = require('node-cron')
require('dotenv').config()

const baseUrl = process.env.BASE_URL

// * Start my script
async function start() {
	const browser = await puppeteer.launch()

	const page = await browser.newPage()

	await page.goto(baseUrl)

	// TODO: This is the best way that I found it on the Planet
	await Promise.all([page.click('#submitForm'), page.waitForNavigation()])

	await page.$eval('#submitForm', (el) => console.log(el.textContent))

	await browser.close()
}

// * Execute Function
// cron.schedule('0 21 * * 1-5', start)
start()
