const bcrypt = require('bcrypt')
const { Router } = require('express')
const { toJWT } = require('../auth/jwt')
const authMiddleware = require('../auth/middleware')
const User = require('../models/').user
const Summary = require('../models').summary
const UserTopics = require('../models').userTopic
const { SALT_ROUNDS } = require('../config/constants')

const router = new Router()

router.post('/login', async (req, res, next) => {
	try {
		const { email, password } = req.body

		if (!email || !password) {
			return res
				.status(400)
				.send({ message: 'Please provide both email and password' })
		}

		const user = await User.findOne({
			where: { email },
			include: { model: Summary },
		})

		if (!user || !bcrypt.compareSync(password, user.password)) {
			return res.status(400).send({
				message: 'User with that email not found or password incorrect',
			})
		}

		delete user.dataValues['password'] // don't send back the password hash
		const token = toJWT({ userId: user.id })
		return res.status(200).send({ token, ...user.dataValues })
	} catch (error) {
		console.log(error)
		return res.status(400).send({ message: 'Something went wrong, sorry' })
	}
})

router.post('/signup', async (req, res) => {
	const { name, surname, classNumber, email, password, image } = req.body
	console.log('THIS IS REQ.BODY: ', req.body)
	if (!name || !surname || !classNumber || !email || !password) {
		return res.status(400).send('Please make sure to enter all the details')
	}

	try {
		const newUser = await User.create({
			name,
			surname,
			classNumber,
			email,
			password: bcrypt.hashSync(password, SALT_ROUNDS),
			image,
		})

		delete newUser.dataValues['password'] // don't send back the password hash

		const token = toJWT({ userId: newUser.id })

		res.status(201).json({ token, ...newUser.dataValues })
	} catch (error) {
		if (error.name === 'SequelizeUniqueConstraintError') {
			return res
				.status(400)
				.send({ message: 'There is an existing account with this email' })
		}

		return res.status(400).send({ message: 'Something went wrong, sorry' })
	}
})

router.get('/mytopics', authMiddleware, async (req, res) => {
	const myTopics = await UserTopics.findAll({
		where: { userId: req.user.id },
	})
	// don't send back the password hash
	delete req.user.dataValues['password']
	res.status(200).send({ ...req.user.dataValues, myTopics })
})

router.patch('/mytopics/:id', async (req, res) => {
	const userTopic = await UserTopics.findByPk(req.params.id)

	const { userId, topicId, isDone } = req.body

	await userTopic.update({ userId, topicId, isDone })

	return res.status(200).send({ userTopic })
})

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get('/me', authMiddleware, async (req, res) => {
	// don't send back the password hash
	delete req.user.dataValues['password']
	res.status(200).send({ ...req.user.dataValues })
})

router.post('/addusertopic', authMiddleware, async (req, res) => {
	try {
		const user = req.user

		if (user === null) {
			return res.status(404).send({ message: 'Does not exist' })
		}

		if (!user.userId === req.user.id) {
			return res.status(403).send({ message: 'Unauthorised Request' })
		}

		const { userId, topicId, isDone } = req.body

		const topic = await UserTopics.findOne({
			where: { userId: req.user.id, topicId: topicId },
		})

		if (!topic) {
			const addUserTopic = await UserTopics.create({
				userId,
				topicId,
				isDone: false,
			})
			const token = toJWT({ userId: user.id })
			delete req.user.dataValues['password']
			res.status(200).send({ token, ...req.user.dataValues, addUserTopic })
		} else {
			return null
		}
	} catch (error) {
		console.log(error)
		return res.status(400).send({ message: 'Something went wrong, sorry' })
	}
})

module.exports = router
