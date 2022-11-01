require('dotenv').config();
const { Sequelize } = require('sequelize');


    const db = new Sequelize(process.env.HEROKU_BASE_URL, {
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


//     const sequelize = new Sequelize("pokedex", "postgres", "adam", {
//         host: 'localhost',
//         dialect: 'postgres',
//         define: { timestamps: false }
//     });
//     sequelize
//     .authenticate()
//     .then(()=>{
//         console.log("connexion sequelize réussie :)")
//     .catch((error)=>{
//         console.error(error)
//     })
// })
// module.exports = sequelize;
// }


