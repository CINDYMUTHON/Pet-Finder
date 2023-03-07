
let URL = ''
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    URL = "http://localhost:9292"
} else {
    // production code
    URL = "https://pets-ppdj.onrender.com"

}
console.log(URL)


export let API_URL = URL;
