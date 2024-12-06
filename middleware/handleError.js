const handleError = (err, req, res, next) => {
    console.log("Gestisco i tuoi errori");
    res.status(500).json({
        error: true,
        message: " Errore interno del server. Credi nelle tue possibilità e sei già a metà strada"
    });
};

module.exports = handleError;