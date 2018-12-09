exports.ok = (res, data) => {
    res.json({ status: true, data: data });
}

exports.apierror = (res, error) => {
    console.trace(error);
    res.status(500)
        .json({
            status: false,
            error: 'Internal server Error'
        })
}

exports.notok = (res, message, data) => {
    res.status(400)
        .json({
            status: false,
            message: message,
            data: data
        })
};