/**
 *
 * Entidade Car, tabela cars.
 * Define-se o tipo de dado pelo DataType.
 * Campo not null é setado através do atributo allowNull,
 * quando um campo pode ser nulo o atributo pode ser omitido.
 *
 */
module.exports = (sequelize, DataType) => {
    const Car = sequelize.define('cars', {
        brand: {
            type: DataType.STRING(20),
            allowNull: false
        },
        model: {
            type: DataType.STRING(30),
            allowNull: false
        },
        year: {
            type: DataType.INTEGER,
            allowNull: false
        }
    })

    return Car
}
