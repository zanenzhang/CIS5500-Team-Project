import config from './config.json'

const getChannel = async (name) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/channel?name=${name}`, {
        method: 'GET',
    })
    return res.json()
}

export {
    getChannel
}