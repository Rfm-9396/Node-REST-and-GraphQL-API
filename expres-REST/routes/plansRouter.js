const express = require('express')
const router = express.Router()
const plansController = require('../controllers/plansController')

router.get('/', plansController.getPlans)
router.get('/:id', plansController.getPlanById)
router.post('/', plansController.createPlan)
router.delete('/:id', plansController.deletePlan)
router.patch('/:id', plansController.updatePlan)

module.exports = router