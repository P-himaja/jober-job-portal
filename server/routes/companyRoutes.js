import express from 'express'
import { getCompanyData, getCompanyJobApplicants, loginCompany, registerCompany ,postJob, getCompanyPostedJobs, changeVisibility, changeJobApplicationStatus} from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middleware/authMiddleware.js'
const router = express.Router()

//Register a company 
router.post('/register',upload.single('image'),registerCompany)

//Company login 
router.post('/login', loginCompany)

// Get Company Data 
router.get('/company', protectCompany,getCompanyData)

// Post a job 
router.post('/post-job', protectCompany,postJob)

// Get Applicant Data of Company 
router.get('/applicants',protectCompany, getCompanyJobApplicants)

// Get Company Job List 
router.get('/list-jobs',protectCompany,getCompanyPostedJobs)

//Change Application Status
router.post('/change-status',protectCompany, changeJobApplicationStatus)

// Change Applications Visibility 
router.post('/change-visibility',protectCompany,changeVisibility)

export default router;