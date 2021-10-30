const express = require('express')
const puppeteer = require('puppeteer')
const cron = require('node-cron')
require('dotenv').config()

const baseUrl = process.env.BASE_URL

const app = express()

app.get('/', (req, res) => {
	res.status(200).json({
		message: 'Ok',
	})
})

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

// * Start Execute
const startJob = cron.schedule('32-37 16 * * 1-5', start, {
	scheduled: true,
	timezone: 'Asia/Rangoon',
})

const stopJob = cron.schedule('35 16 * * 1-5', start, {
	scheduled: true,
	timezone: 'Asia/Rangoon',
})

startJob.start()
stopJob.stop()

const PORT = 5000
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
