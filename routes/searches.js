const express = require('express');

const router = express.Router();

const {
    getSearches,
    createSearch,
    updateSearch,
    getSearchesById,
    deleteSearch
} = require('../controller/searches')

const Search = require('../models/Search');

router.route('/')
    .get(getSearches)
    .post(createSearch)

router.route('/:id')
    .get(getSearchesById)
    .put(updateSearch)
    .delete(deleteSearch)

// const advancedResults = require('../middleware/advancedResults')


// router.route('/')
//     .get(advancedResults(Course,{
//         path: 'bootcamp',
//         select: 'name description'
//     }),
//     getCourses)
//     .post( createCourse)

// router.route('/:id')
//     .get(getCourseById)
//     .put(protect, authorize('publisher','admin'), updateCourse)
//     .delete(protect,authorize('publisher','admin'), deleteCourse)

module.exports = router;