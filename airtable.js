// Simple API that works on Pxxl
module.exports = (req, res) => {
    // Allow any website to call this
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Reply with success
    res.status(200).json({
        success: true,
        message: 'API is live! 🎉'
    });
};