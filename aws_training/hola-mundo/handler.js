
const hello = async (event, context) => {
    return {
        "statusCode": 200,
        "body": JSON.stringify({ 'message': 'Actualizando mi primer aplicacion serverless'})
    }
}

module.exports = {
    hello
}


// https://52l2il97p2.execute-api.us-east-1.amazonaws.com/dev/hello