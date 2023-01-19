import http from 'k6/http';
import {sleep, check } from 'k6';

import uuid from './libs/uuid.js'

export const options = {

    stages: [
        { duration: "2m", target: 100 }, // carga normal load
        { duration: "5m", target: 100 },
        { duration: "2m", target: 200 }, // normal load
        { duration: "5m", target: 200 },
        { duration: "2m", target: 300 }, // around the breaking point
        { duration: "5m", target: 300 },
        { duration: "2m", target: 400 }, // beyond the breaking point
        { duration: "5m", target: 400 },
        { duration: "10m", target: 0 }, // scale down. Recovery stage.
      ],
      
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

//console.log(res.body)

check(res, {
    'status shold be 201':  (r) => r.status === 201
})

sleep(1); 
}

//branch master