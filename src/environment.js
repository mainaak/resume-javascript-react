const prod = {
    BASE_URL: 'http://koalmine.com/'
}

const local = {
    BASE_URL: 'http://localhost:8081/'
}

const env = process.env.REACT_APP_ENV === 'prod' ? prod : local;

export {env};