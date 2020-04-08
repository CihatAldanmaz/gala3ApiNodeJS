const resHelper = (res,data) => {
    res.status(200)
    .json({
        success:true,
        data:data
    })
}

module.exports = {
    resHelper
}