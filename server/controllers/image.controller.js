const { ImagesSchema } = require('../models/uploadSchema');

//READ ALL 

const getAllImages = (req,res) => {
    ImagesSchema.find()
    .then((allImages) => {
        res.json(allImages);
    })
    .catch(err => { res.status(400).json(err) })
};

const createNewImages = (req,res) => {
    ImagesSchema.create(req.body)
    .then(CreateImage => {
        console.log(CreateImage)
        res.status(200).json({CreateImage})
    })
    .catch(err => { res.status(400).json(err) })
};


const getOneImage = (req, res) => {
    ImagesSchema.findOne({ "_id": req.params.id })
        .then(queriedImage => {
            if (!queriedImage) {
                return res.status(404).json({ message: 'Image not found' });
            }
            res.json(queriedImage);
        })
        .catch(err => { res.status(400).json(err) })
};

const updatedImage = (req, res) => {
    console.log('Request Body:', req.body);
    ImagesSchema.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
    })
    .then(updateImage => {
        console.log('Updated Image:', updateImage); // Log the updated image
        res.json(updateImage);
    })
    .catch(err => { res.status(400).json(err) })
};

const deleteImage = (req,res) => {
    ImagesSchema.deleteOne({_id: req.params.id})
    .then(deleteImage =>{
        res.json (deleteImage);
    })
    .catch(err => { res.status(400).json(err) })
};


module.exports = {
    createNewImages,
    getAllImages,
    getOneImage,
    updatedImage,
    deleteImage
};
