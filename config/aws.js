const fs = require('fs');
const fileType = require('file-type');
const multiparty = require('multiparty');
const AWS = require('aws-sdk');
const bluebird = require('bluebird');


AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

AWS.config.setPromisesDependency(bluebird);
const s3 = new AWS.S3();


const uploadFile = (buffer, name, type) => {
    const params = {
        ACL: 'public-read',
        Body: buffer,
        Bucket: process.env.AWS_BUCKET,
        ContentType: type.mime,
        Key: `${name}.${type.ext}`              /*maybe you will need to add some random string here*/
    };
    return s3.upload(params).promise();
};

const upload = (req, res) => {
    const form = new multiparty.Form();
    form.parse(req, async function (err, fields, files) {
        if (err) console.log(err);
        try {
            const path = files.file[0].path;
            const buffer = fs.readFileSync(path);
            const type = fileType(buffer);
            const timestamp = Date.now().toString();
            const fileName = `onepp/${timestamp}-lg`;
            const data = await uploadFile(buffer, fileName, type);
            const address = data.Location;
            res.json({
                file: address
            });
        } catch (err) {
            return res.status(400).send(err);
        }
    })
};

module.exports = {
    upload
}

