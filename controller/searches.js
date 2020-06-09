const Search = require('../models/Search');



// @desc    Get all search history
// @route   GET /api/v1/searches
// @access  Public
exports.getSearches = async (req, res, next) => {
    try {
        const searches = await Search.find()
        res.status(200).json({ success: true, data: searches })
    } catch (err) {
        return res.status(400).json({ success: false })
    }

}

// @desc    Get single search
// @route   GET /api/v1/searches/:id
// @access  Public
exports.getSearchesById = async (req, res, next) => {
    try {
        const search = await Search.findById(req.params.id)
        if (!search) {
            return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: search })
    } catch (err) {
        res.status(400).json({ success: false });
    }


}

// @desc    Create single search
// @route   POST /api/v1/searches/
// @access  Private
exports.createSearch = async (req, res, next) => {
    try {
        const search = await Search.create(req.body)
        res.status(200).json(search);
    } catch (err) {
        res.status(400).json({ success: false, error: err.message })
    }
}

// @desc    Update single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Private
exports.updateSearch = async (req, res, next) => {
    try {
        const id = req.params.id
        const search = await Search.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })
        if(!search){
            return  res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data:  search });
    } catch (err) {
        res.status(400).json({ success: false })
    }
}

// @desc    Delete single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Private
exports.deleteSearch = async (req, res, next) => {
    try {
        const id = req.params.id
        const search = await Search.findByIdAndDelete(id)
        if(!bootcamp){
            return  res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data:  {} });
    } catch (err) {
        res.status(400).json({ success: false })
    }
}


