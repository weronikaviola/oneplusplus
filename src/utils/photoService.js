const submitFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    let address = await fetch('/file-upload', {
        method: 'POST',
        body: formData,
        headers: {
            // 'Content-Type': 'multipart/form-data'
        }
    }).then(res => res.json())
        .catch(err => console.log(err));
    return address;
}

export default {
    submitFile,
}