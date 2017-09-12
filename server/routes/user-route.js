import { Router } from 'express'
const router = Router()

router.get('/user/search', (req, res) => {
  res.send('users search')
})

export default router