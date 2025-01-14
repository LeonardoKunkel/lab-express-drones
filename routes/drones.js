const express = require('express');
const router = express.Router();

const droneCtrl = require('../controllers/drone.controller')

router.get('/', droneCtrl.getDrones);

router.get('/create', droneCtrl.createDrones);

router.post('/create', droneCtrl.createDronesForm);

router.get('/:droneID/update-form', droneCtrl.editDrone);

router.post('/:droneID/update-form', droneCtrl.editDroneForm);

router.post('/:droneID/delete', droneCtrl.deleteDrone);

module.exports = router;
