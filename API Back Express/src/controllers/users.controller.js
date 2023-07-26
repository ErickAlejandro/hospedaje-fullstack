import { getConnection, queries } from "../database";

// GET Registers
export const getRegister = async (req, res) => {
  try {
    const poolMain = await getConnection();
    const result = await poolMain.request().query(queries.getRegisterAll);
    res.json(result.recordset);
    poolMain.close();
    return
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
    return
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
    return
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const handleRegister = async (req, res) => {
  if (req.method === 'POST') {
    // POST REGISTER FOR CLIENTS
    try {
      const poolTrans = await getConnection();

      const {
        FullName,
        DocumentIdentification,
        IdRoom,
        Entry, 
        Out
      } = req.body;

      const result = await poolTrans
        .request()
        .input("FullName", FullName)
        .input("DocumentIdentification", DocumentIdentification)
        .input("IdRoom", IdRoom)
        .input("Entry", Entry)
        .input("Out", Out)
        .query(queries.addNewRegister);

      // Envía una respuesta exitosa si la inserción fue exitosa
      res.status(201).json({ message: "Registro creado correctamente", data: result });
      poolTrans.close();
    } catch (error) {
      res.status(500).send(error.message);
    }
  } else if (req.method === 'PUT') {
    // PUT PARA ES ESTADO DE LAS ROOMS
    const { idState } = req.body;

    // Validating
    if (idState == null ) {
      return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }

    try {
      const pool = await getConnection();
      await pool
        .request()
        .input("idState", idState)
        .input("id", req.params.id)
        .query(queries.updateStatesRooms);
      res.json({ idState });
      pool.close();
    } catch (error) {
      res.status(500).send(error.message);
    }
  } else {
    res.status(405).send('Method Not Allowed'); // Método no permitido (por ejemplo, si no es POST o PUT)
  }
};


