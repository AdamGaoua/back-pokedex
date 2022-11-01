require('dotenv').config();
const { Sequelize } = require('sequelize');

if (process.env.HEROKU_BASE_URL){

    const db = new Sequelize(process.env.HEROKU_BASE_URL,{
        dialect:"postgres",
        dialectOptions: {
            ssl : {
                require:true,
                rejectUnauthorized:false
            }
        }

    } )
    db
    .authenticate()
    .then(()=>{
        console.log("connexion sequelize réussie :)")
    })
    .catch((error)=>{
        console.error(error)
    })
    
    module.exports = db;
} else {

    const sequelize = new Sequelize("pokedex", "postgres", "adam", {
        host: 'localhost',
        dialect: 'postgres',
        define: { timestamps: false }
    });
    sequelize
    .authenticate()
    .then(()=>{
        console.log("connexion sequelize réussie :)")
    .catch((error)=>{
        console.error(error)
    })
})
module.exports = sequelize;
}


