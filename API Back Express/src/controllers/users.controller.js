import { getConnection, queries } from "../database";

// GET Registers
export const getRegister = async (req, res) => {
  try {
    const poolMain = await getConnection();
    const result = await poolMain.request().query(queries.getRegisterAll);
    res.json(result.recordset);
    poolMain.close();
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
// GET ROOMS
export const getRooms = async (req, res) => {
  try {
    const poolMain = await getConnection();
    const result = await poolMain.request().query(queries.getRoomsAll);
    res.json(result.recordset);
    poolMain.close();
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// GET STATES
export const getStates = async (req, res) => {
  try {
    const poolMain = await getConnection();
    const result = await poolMain.request().query(queries.getStatesAll);
    res.json(result.recordset);
    poolMain.close();
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
