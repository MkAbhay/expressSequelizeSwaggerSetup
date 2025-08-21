const { candidates } = require("../models");

const get = async (req, res) => {
    try {
        const candidatesList = await candidates.findAll();
        res.status(200).json({ status: true, message: 'Candidates details', code: 200, data: candidatesList });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message, code: 500, data: null });
    }
};

module.exports = {
    get
};