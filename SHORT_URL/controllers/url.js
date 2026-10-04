
const { nanoid } = require("nanoid");
const URL = require("../models/url");

// Generate a new short URL
async function handleGenerateNewShortURL(req, res) {
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({
            error: "url is required",
        });
    }

    const shortID = nanoid(8);

    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });

    return res.json({
        id: shortID,
    });
}

// Redirect to original URL and record visit history
async function handleGetShortURL(req, res) {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        },
        { new: true }
    );

    if (!entry) {
        return res.status(404).send("Short URL not found");
    }

    return res.redirect(entry.redirectURL);
}


async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;

    const result = await URL.findOne({ shortId });

    if (!result) {
        return res.status(404).json({
            error: "Short URL not found",
        });
    }

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}


module.exports = {
    handleGenerateNewShortURL,
    handleGetShortURL,
    handleGetAnalytics,
};
