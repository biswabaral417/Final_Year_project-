import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello from user routes');
});

export default router;
