
                // event, context; con parametros que deben estar alli para que AWS los use en sus funciones.
const hello = async (event, context) => {
    const hour = new Date().getHours()
    const minute = new Date().getMinutes()
    const seconds = new Date().getSeconds()

    return {
        "statusCode": 200,
        "body": JSON.stringify({ 'message': `Hora: ${hour}:${minute}:${seconds} actual`})
    }
}

module.exports = {
    hello
}


// https://52l2il97p2.execute-api.us-east-1.amazonaws.com/dev/hello