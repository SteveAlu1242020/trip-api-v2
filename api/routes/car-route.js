const router = require('express').Router();

const Auckland = require('../model/cars/auckland');
const Bangkok = require('../model/cars/bangkok');
const LasVegas = require('../model/cars/las-vegas');
const London = require('../model/cars/london');
const LosAngeles = require('../model/cars/los-angeles');
const Miami = require('../model/cars/miami');
const Orlando = require('../model/cars/orlando');
const SanFrancisco = require('../model/cars/san-francisco');



router.post('/auckland', async (req, res) => {
    const newData = new Auckland(req.body);
    try {
        const api = await newData.save()
        if (!api) throw Error('Oops!! something went wrong.')
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.get('/auckland', async (req, res) => {
    try {
        const api = await Auckland.find();
        if (!api) throw Error('No Data');
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.post('/bangkok', async (req, res) => {
    const newData = new Bangkok(req.body);
    try {
        const api = await newData.save()
        if (!api) throw Error('Oops!! something went wrong.')
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.get('/bangkok', async (req, res) => {
    try {
        const api = await Bangkok.find();
        if (!api) throw Error('No Data');
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.post('/las-vegas', async (req, res) => {
    const newData = new LasVegas(req.body);
    try {
        const api = await newData.save()
        if (!api) throw Error('Oops!! something went wrong.')
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.get('/las-vegas', async (req, res) => {
    try {
        const api = await LasVegas.find();
        if (!api) throw Error('No Data');
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.post('/london', async (req, res) => {
    const newData = new London(req.body);
    try {
        const api = await newData.save()
        if (!api) throw Error('Oops!! something went wrong.')
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.get('/london', async (req, res) => {
    try {
        const api = await London.find();
        if (!api) throw Error('No Data');
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.post('/los-angeles', async (req, res) => {
    const newData = new LosAngeles(req.body);
    try {
        const api = await newData.save()
        if (!api) throw Error('Oops!! something went wrong.')
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.get('/los-angeles', async (req, res) => {
    try {
        const api = await LosAngeles.find();
        if (!api) throw Error('No Data');
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.post('/miami', async (req, res) => {
    const newData = new Miami(req.body);
    try {
        const api = await newData.save()
        if (!api) throw Error('Oops!! something went wrong.')
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.get('/miami', async (req, res) => {
    try {
        const api = await Miami.find();
        if (!api) throw Error('No Data');
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.post('/orlando', async (req, res) => {
    const newData = new Orlando(req.body);
    try {
        const api = await newData.save()
        if (!api) throw Error('Oops!! something went wrong.')
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.get('/orlando', async (req, res) => {
    try {
        const api = await Orlando.find();
        if (!api) throw Error('No Data');
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.post('/san-francisco', async (req, res) => {
    const newData = new SanFrancisco(req.body);
    try {
        const api = await newData.save()
        if (!api) throw Error('Oops!! something went wrong.')
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.get('/san-francisco', async (req, res) => {
    try {
        const api = await SanFrancisco.find();
        if (!api) throw Error('No Data');
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

module.exports = router;