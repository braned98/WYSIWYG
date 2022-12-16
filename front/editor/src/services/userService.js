import axios from 'axios';

export const logout = () => {
    localStorage.clear();
}

export const login = async (userData) => {

    const headers = {
        "Content-type": "application/json",
        "Accept": "application/json",
    }

    axios.post("https://localhost:7127/login", JSON.stringify(userData), {headers})
    .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', res.data.user);
        localStorage.setItem('userId', res.data.userId);
    }
    ).catch((err) => {
        console.log(err);
    })


};


export const register = (userData) => {

    const headers = { 
        "Content-type": "application/json",
        "Accept": "application/json",
    };
    axios.post('https://localhost:7127/register', userData, { headers })
    .then(response => console.log(response))
    .then(data => console.log(data));

};