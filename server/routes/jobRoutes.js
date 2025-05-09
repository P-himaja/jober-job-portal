import express, { Router } from 'express'
import { getJobById, getJobs } from '../controllers/jobController.js';

const router = new express.Router()

// Route to get all jobs 
router.get('/',getJobs)


// Route to get a single Job from ID 
router.get('/:id',getJobById)

export default router;


