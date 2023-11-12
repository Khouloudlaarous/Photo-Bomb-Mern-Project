const mongoose = require('mongoose');

const Images = new mongoose.Schema({
    fileNameOriginal : {
        type : String,
        required: [true, 'File name']
    },
    filePath: {
        type: String,
        required: [true, 'File path']
    },
    fileType : {
        type: String,
        required: [true, 'File type']
    },
    fileSize : {
        type : Number,
        required: [true, 'File size']
    },
}, {
    timestamps: {
        createdAt: 'created_at', // Use `created_at` to store the created date
        updatedAt: 'updated_at' // and `updated_at` to store the last updated date
    }
});

module.exports.ImagesSchema = mongoose.model("ImagesSchema", Images);

