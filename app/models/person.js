/**
 *
 * Entidade Person, tabela persons.
 * Define-se o tipo de dado pelo DataType.
 * Campo not null é setado através do atributo allowNull,
 * quando um campo pode ser nulo o atributo pode ser omitido.
 *
 */
module.exports = (sequelize, DataType) => {
    const Person = sequelize.define('persons', {
        firstname: {
            type: DataType.STRING(20),
            allowNull: false
        },
        lastname: {
            type: DataType.STRING(20),
            allowNull: false
        },
        age: {
            type: DataType.INTEGER,
            allowNull: false
        },
        nickname: DataType.STRING(10)
    })

    return Person
}
