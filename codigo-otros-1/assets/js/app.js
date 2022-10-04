const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.getElementsByClassName('name');
const $b = document.getElementsByClassName('blog');
const $l = document.getElementsByClassName('location');

async function displayUser(username) {
  n.textContent = 'cargando...';
  const data = fetch(`${usersEndpoint}/${username}`), {method :"GET"});
  await promesa.then((response)=> {
    response.json().then((data)=>{
      console.log(data);
      n.textContent = `${data.name}`;
      b.textContent = `${data.blog}`;
      l.textContent = `${data.location}`;
    
    }).catch((errorJson)=>{
      console.log('OH NO!');
      console.log(errorJson);
      n.textContent = `Algo salió mal: ${errorJson}`;
  });

  }).catch((err)=>{
    console.log('OH NO!');
    console.log(err);
    n.textContent = `Algo salió mal: ${err}`; 
});
}
window.addEventListener("load", function(e){
  displayUser('stolinski');
});

