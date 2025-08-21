module.exports = (sequelize, Datatypes) => {
    const candidates = sequelize.define('candidates', {
        name: {
            type: Datatypes.STRING,
            allowNull: true
        },
        email: {
            type: Datatypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'candidates',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        underscored: true
    });

    return candidates;
}