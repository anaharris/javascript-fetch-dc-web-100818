const token = 'dedb8608f692454f3e0d22d579479cb7347c2a80'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));


fetch('https://api.github.com/user/repos').
  then(res => res.json()).
  then(json => console.log(json))
