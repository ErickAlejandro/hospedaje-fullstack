export const queries = {
    getRegisterAll : `SELECT * FROM Register`,
    getRoomsAll: `select r.*, st.NameState from Rooms r
    left join States st on st.id = r.idState`,
    getStatesAll: `SELECT * FROM States`
}
