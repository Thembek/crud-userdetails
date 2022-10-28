import User from '../model/User.js';
import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.post('/add', async (req, res) => {
    const user = req.body;
    const newUser = new User(user);
    try{
        await new User.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

router.get(':/id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    let user = req.body;
    const editUser = new User(user);
    try {
        await User.updateOne({ _id: req.params.id }, editUser);
        res.status(201).json(editUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try{
        await User.deleteOne({ _id: req.params.id });
        res.status(201).json("User deleted.");
    } catch(error){
        res.status(409).json({ message: error.message });
    }
});

export default router;