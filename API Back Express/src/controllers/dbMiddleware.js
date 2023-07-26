// dbMiddleware.js

import { getConnection } from "../database"; 

export const withDBConnection = async (req, res, next) => {
  try {
    req.pool = await getConnection();
    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const releaseDBConnection = (req, res, next) => {
  if (req.pool) {
    req.pool.close();
  }
  next();
};
