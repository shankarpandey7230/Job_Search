import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import {
  companyRegister,
  getCompany,
  getCompanyId,
  updateCompany,
} from '../controllers/company.controller.js';

const router = express.Router();

router.route('/register').post(isAuthenticated, companyRegister);
router.route('/getComp').get(isAuthenticated, getCompany);
router.route('/getComp/:id').get(isAuthenticated, getCompanyId);
router.route('/update/:id').put(isAuthenticated, updateCompany);

export default router;
