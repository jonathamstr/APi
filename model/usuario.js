let sequelize = require('../config.js');
let Sequelize = require('sequelize');

var Usuario = sequelize.define('usuario', {
    ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre: {
        type: Sequelize.STRING,
        set: function(Nombre) {
            this.setDataValue('Nombre', Nombre);
        }
    },
    Tipo: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        set: function(Tipo) {
            if (Tipo == 1 || Tipo == 0) {
                this.setDataValue('Tipo', Tipo);
            }
        }
    },
    Correo: {
        type: Sequelize.STRING,
        unique: true
    },
    Password: {
        type: Sequelize.STRING
    }
}, {
    classMethods: {
        crear: function (NombreP, CorreoP, PasswordP) {
           return Usuario.findOrCreate({
                where: {
                    Correo: CorreoP
                },
                defaults:{
                    Nombre: NombreP,
                    Correo: CorreoP,
                    Password: PasswordP
                }
            });
        }
    }
});

Usuario.sync({}).then(() => {
    
});



/*Usuario.prototype.crear = function(Nombre,Correo,Password,Callback){
    User.fin
}
*/

module.exports = Usuario;