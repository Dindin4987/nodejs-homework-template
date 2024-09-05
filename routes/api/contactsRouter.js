import express from 'express';

const router = express.Router()

// http://localhost:3000/api/contacts/
router.get('/', async (req, res, next) => {
  try {
    res.json({ message: 'template message' })
  } catch (error) {
    next(error);
  }
  
})

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

export { router };
