export const queries = {
    getRegisterAll : `SELECT * FROM Register;`,
    getRoomsAll: `select r.*, st.NameState from Rooms r
    left join States st on st.id = r.idState;`,
    getStatesAll: `SELECT * FROM States;`,
    addNewRegister: `INSERT INTO Register (FullName, DocumentIdentification, IdRoom, Entry, Out)
        VALUES (@FullName, @DocumentIdentification, @IdRoom, @Entry, @Out);`,

    updateStatesRooms: `UPDATE Rooms SET idState = @idState where id= @id;`
}
