import sql from 'mssql'
import config   from '../config'

const bdSettings = {
    user : config.USER,
    password : config.PASSWORD,
    server : config.SERVER,
    database : config.DATABASE,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
      },
};


export async function getConnection(){
    try {
        const poolMain= await sql.connect(bdSettings);
        console.log('Conexion a Ondatel2022 Exitosa!')
        return poolMain
    } catch (error){
        console.error(error)
    }
}

export {sql};
