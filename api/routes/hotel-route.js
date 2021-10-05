const router = require('express').Router();

const Shanghai = require('../model/shanghai');
const Sanya = require('../model/sanya');
const Beijing = require('../model/beijing');
const Macau = require('../model/macau');
const Shenzhen = require('../model/shenzhen');
const Dubai = require('../model/dubai');
const HongKong = require('../model/hong-kong');
const Yangshuo = require('../model/yangshuo');



router.post('/shanghai', async (req, res) => {
    const newData = new Shanghai(req.body);
    try {
        const api = await newData.save()
        if (!api) throw Error('Oops!! something went wrong.')
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.get('/shanghai', async (req, res) => {
    try {
        const api = await Shanghai.find();
        if (!api) throw Error('No Data');
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.post('/sanya', async (req, res) => {
    const newData = new Sanya(req.body);
    try {
        const api = await newData.save()
        if (!api) throw Error('Oops!! something went wrong.')
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.get('/sanya', async (req, res) => {
    try {
        const api = await Sanya.find();
        if (!api) throw Error('No Data');
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.post('/beijing', async (req, res) => {
    const newData = new Beijing(req.body);
    try {
        const api = await newData.save()
        if (!api) throw Error('Oops!! something went wrong.')
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.get('/beijing', async (req, res) => {
    try {
        const api = await Beijing.find();
        if (!api) throw Error('No Data');
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.post('/macau', async (req, res) => {
    const newData = new Macau(req.body);
    try {
        const api = await newData.save()
        if (!api) throw Error('Oops!! something went wrong.')
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.get('/macau', async (req, res) => {
    try {
        const api = await Macau.find();
        if (!api) throw Error('No Data');
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.post('/shenzhen', async (req, res) => {
    const newData = new Shenzhen(req.body);
    try {
        const api = await newData.save()
        if (!api) throw Error('Oops!! something went wrong.')
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.get('/shenzhen', async (req, res) => {
    try {
        const api = await Shenzhen.find();
        if (!api) throw Error('No Data');
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.post('/dubai', async (req, res) => {
    const newData = new Dubai(req.body);
    try {
        const api = await newData.save()
        if (!api) throw Error('Oops!! something went wrong.')
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.get('/dubai', async (req, res) => {
    try {
        const api = await Dubai.find();
        if (!api) throw Error('No Data');
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.post('/hong-kong', async (req, res) => {
    const newData = new HongKong(req.body);
    try {
        const api = await newData.save()
        if (!api) throw Error('Oops!! something went wrong.')
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.get('/hong-kong', async (req, res) => {
    try {
        const api = await HongKong.find();
        if (!api) throw Error('No Data');
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.post('/yangshuo', async (req, res) => {
    const newData = new Yangshuo(req.body);
    try {
        const api = await newData.save()
        if (!api) throw Error('Oops!! something went wrong.')
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.get('/yangshuo', async (req, res) => {
    try {
        const api = await Yangshuo.find();
        if (!api) throw Error('No Data');
        res.status(200).json(api)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

module.exports = router;