const router = require('express').Router();

const appStore = require('../model/ratings/app-store');
const playStore = require('../model/ratings/play-store');

router.post('/app-store', async (req, res) => {
    const newData = new appStore(req.body);
    try {
        const api = await newData.save()
        if (!api) throw Error('Oops!! something went wrong.')
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.get('/app-store', async (req, res) => {
    try {
        const api = await appStore.find()
        if (!api) throw Error('No Data')
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.post('/play-store', async (req, res) => {
    const newData = new playStore(req.body);
    try {
        const api = await newData.save()
        if (!api) throw Error('Oops!! something went wrong.')
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.get('/play-store', async (req, res) => {
    try {
        const api = await playStore.find()
        if (!api) throw Error('No Data')
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

module.exports = router;