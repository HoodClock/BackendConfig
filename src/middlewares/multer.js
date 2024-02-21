import multer from "multer";

// here cb is {callback}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

export const upload = multer({
    // we are using ES6 so no need to do this below
    // storage: storage
    storage // just call it like this 
})