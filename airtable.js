// Simple API that works on Vercel
module.exports = (req, res) => {
    // Allow any website to call this API
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Reply with success
    res.status(200).json({
        success: true,
        message: 'API is live!'
    });
};