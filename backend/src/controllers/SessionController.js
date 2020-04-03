const connection = require('../database/connection');

module.exports = {

    async create(req, res) {
        const { id } = req.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {
            return res.status(400).json({ error: 'no ONG found with this ID' })
        }

        return res.json(ong);
    },


    async delete(req, res) {
        const { id } = req.params;
        const ong_id = req.headers.authorization;

        const incident = await connection('incidents').where('id', id).select('ong_id').first();

        if (incident.ong_id != ong_id) {
            return res.status(401).json({ error: 'Operation not permitted.' });
        }
        await connection('incidents').where('id', id).delete();
        return res.status(204).send();
    },


};