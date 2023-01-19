import http from 'k6/http';
import {sleep, check } from 'k6';

import uuid from './libs/uuid.js'

export const options = {

    vus: 10,
    duration: '30s',
    thresholds: {
        http_req_duration: ['p(95)<2000'],
        http_req_failed: ['rate<0.01']
    }

}

export default function (){ 
    
    const url = 'http://localhost:3000/bandas'

    const payload = JSON.stringify({titulo:`${uuid.v4().substring(28)}testeqa`})

    const headers = { 
        'headers': {
            'Content-Type':'application/json'
        }
    }

const res = http.post(url, payload, headers);

console.log(res.body)

check(res, {
    'status shold be 201':  (r) => r.status === 201
})

sleep(1); 
}