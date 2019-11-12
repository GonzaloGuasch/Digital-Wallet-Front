import axios from 'axios';

const server = 'http://localhost:7000';

const request = (type, path, body) => axios
    .request({ url: `${server}${path}`, method: type, data: body })
    .then(req => req.data);


export const movimientosDeCVU = body => request('get', '/transactions/' + body.cvu);
export const crearTransferencia = body => request('post', '/transfer', body);
export const saldoDe = body => request('get', '/account/'+ body.cvu);
