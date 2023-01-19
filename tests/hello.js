import http from 'k6/http';
import {slleep, check } from 'k6';

export default function (){
    const res = 
    http.get ('http://localhost:3000/bandas');

    check(res, {
        'status should be 200': (r) => r.status === 200        
    })
}