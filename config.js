require('dotenv').config()

module.exports = {
	dev: {
		url: process.env.DATABASE_URL
	}
}
