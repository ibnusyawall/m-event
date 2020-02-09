'use strict'

const Event = use('App/Models/Event')

class EventController {
	async index({ request, response }) {
		const data_ = await Event.all()
		return response.json({ data_ })
	}
	async create({ request, response }) {
		const {
			title,
			start_date,
			end_date,
			location,
			price
		} = request.all()
		const event = await Event.create({
			title,
			start_date,
			end_date,
			location,
			price
		})
		return response.status(200).json({ event })
	}
	async delete({ request, response, params }) {
		const event = await Event.find(params.id)
		await event.delete()
		return response.status(200).json({
			message: 'Event was deleted!'
		})
	}
}

module.exports = EventController
