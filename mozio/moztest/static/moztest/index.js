
function save_provider() {

    let name = document.querySelector('#compose-name').value;
    let email = document.querySelector('#compose-email').value;
    let phone = document.querySelector('#compose-phone').value;
    let language = document.querySelector('#compose-language').value;
    let currency = document.querySelector('#compose-currency').value;

    //FETCHING 
    fetch('/providers', {
      method: 'POST',
      body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          language: language,
          currency: currency,     
      })
    })
      .then(response => response.json())
      .then(result => {
          // Print result
          console.log(result);
        });
  
}

function save_area() {
    
    let provider = document.querySelector('#compose-provider').value;
    let color = document.querySelector('#compose-color').value;
    let nameofarea = document.querySelector('#compose-nameofarea').value;
    let price = document.querySelector('#compose-price').value;
    let coords = document.querySelector('#compose-coords').value;

    //FETCHING 
    fetch('/areas', {
      method: 'POST',
      body: JSON.stringify({
          provider: provider,
          color: color,
          nameofarea: nameofarea,
          price: price,
          coords: coords,     
      })
    })
      .then(response => response.json())
      .then(result => {
          // Print result
          console.log(result);
        });
  
}

function edit_provider(id) {
  
  //selecting from and manipulating the DOM
  var editbutton = document.querySelector(`#editprovider${id}`);
  editbutton.style.display = "none";

  var name = document.querySelector(`#providername${id}`);
  name.style.display = "none";
  var email = document.querySelector(`#provideremail${id}`);
  email.style.display = "none";
  var phone = document.querySelector(`#providerphone${id}`);
  phone.style.display = "none";
  var language = document.querySelector(`#providerlanguage${id}`);
  language.style.display = "none";
  var currency = document.querySelector(`#providercurrency${id}`);
  currency.style.display = "none";
  
  //Creating input fields
  var nameedit = document.createElement("input");
  nameedit.setAttribute('type', 'text');
  nameedit.setAttribute('value', `${name.innerHTML}`);
  nameedit.setAttribute('id', 'newname');

  var emailedit = document.createElement("input");
  emailedit.setAttribute('type', 'text');
  emailedit.setAttribute('value', `${email.innerHTML}`);
  emailedit.setAttribute('id', 'newemail');

  var phoneedit = document.createElement("input");
  phoneedit.setAttribute('type', 'text');
  phoneedit.setAttribute('value', `${phone.innerHTML}`);
  phoneedit.setAttribute('id', 'newphone');

  var languageedit = document.createElement("input");
  languageedit.setAttribute('type', 'text');
  languageedit.setAttribute('value', `${language.innerHTML}`);
  languageedit.setAttribute('id', 'newlanguage');

  var currencyedit = document.createElement("input");
  currencyedit.setAttribute('type', 'text');
  currencyedit.setAttribute('value', `${currency.innerHTML}`);
  currencyedit.setAttribute('id', 'newcurrency');
 
 //Append new content
  var namecontainer = document.querySelector(`#namecontainer${id}`);
  namecontainer.appendChild(nameedit);
  var emailcontainer = document.querySelector(`#emailcontainer${id}`);
  emailcontainer.appendChild(emailedit);
  var phonecontainer = document.querySelector(`#phonecontainer${id}`);
  phonecontainer.appendChild(phoneedit);
  var languagecontainer = document.querySelector(`#languagecontainer${id}`);
  languagecontainer.appendChild(languageedit);
  var currencycontainer = document.querySelector(`#currencycontainer${id}`);
  currencycontainer.appendChild(currencyedit);

  var save = document.createElement("button");
  save.innerHTML = ("Save");
  var buttonscontainer = document.querySelector(`#buttonscontainer${id}`)
  buttonscontainer.appendChild(save);

  //FETCHING
  save.addEventListener('click', () => {
    fetch(`/providers/edit/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          name: nameedit.value,
          email: emailedit.value,
          phone: phoneedit.value,
          language: languageedit.value,
          currency: currencyedit.value,
        })
      });
      
      //displaying after saving

      nameedit.style.display = 'none';
      emailedit.style.display = 'none';
      phoneedit.style.display = 'none';
      languageedit.style.display = 'none';
      currencyedit.style.display = 'none';
      save.style.display = 'none';

      editbutton.style.display = "block";
      name.style.display = "block";
      email.style.display = "block";
      phone.style.display = "block";
      language.style.display = "block";
      currency.style.display = "block";

      document.querySelector(`#providername${id}`).innerHTML = nameedit.value;
      document.querySelector(`#provideremail${id}`).innerHTML = emailedit.value;
      document.querySelector(`#providerphone${id}`).innerHTML = phoneedit.value;
      document.querySelector(`#providerlanguage${id}`).innerHTML = languageedit.value;
      document.querySelector(`#providercurrency${id}`).innerHTML = currencyedit.value;

});


}



function edit_area(id) {
  

  //selecting from and manipulating the DOM

  var editbutton = document.querySelector(`#editarea${id}`);
  editbutton.style.display = "none";

  var prov = document.querySelector(`#areaprovider${id}`);
  prov.style.display = "none";
  var color = document.querySelector(`#areacolor${id}`);
  color.style.display = "none";
  var nameofarea = document.querySelector(`#areanameofarea${id}`);
  nameofarea.style.display = "none";
  var price = document.querySelector(`#areaprice${id}`);
  price.style.display = "none";
  var coords = document.querySelector(`#areacoords${id}`);
  coords.style.display = "none";
  
  //Creating input fields
  var provedit = document.createElement("input");
  provedit.setAttribute('type', 'text');
  provedit.setAttribute('value', `${prov.innerHTML}`);
  provedit.setAttribute('id', 'newprov');

  var coloredit = document.createElement("input");
  coloredit.setAttribute('type', 'text');
  coloredit.setAttribute('value', `${color.innerHTML}`);
  coloredit.setAttribute('id', 'newcolorl');

  var nameofareaedit = document.createElement("input");
  nameofareaedit.setAttribute('type', 'text');
  nameofareaedit.setAttribute('value', `${nameofarea.innerHTML}`);
  nameofareaedit.setAttribute('id', 'newnameofarea');

  var priceedit = document.createElement("input");
  priceedit.setAttribute('type', 'text');
  priceedit.setAttribute('value', `${price.innerHTML}`);
  priceedit.setAttribute('id', 'newprice');

  var coorsparse = `${coords.innerHTML}`;
  var newcoorsparse = coorsparse.replaceAll(`'`, `"`)
  
  var coordsedit = document.createElement("input");
  coordsedit.setAttribute('type', 'text');
  coordsedit.setAttribute('value', newcoorsparse);
  coordsedit.setAttribute('id', 'newcoords');
 
  //Append new content
  var provcontainer = document.querySelector(`#provcontainer${id}`);
  provcontainer.appendChild(provedit);
  var colorcontainer = document.querySelector(`#colorcontainer${id}`);
  colorcontainer.appendChild(coloredit);
  var pricecontainer = document.querySelector(`#pricecontainer${id}`);
  pricecontainer.appendChild(priceedit);
  var nameofareacontainer = document.querySelector(`#nameofareacontainer${id}`);
  nameofareacontainer.appendChild(nameofareaedit);
  var coordscontainer = document.querySelector(`#coordscontainer${id}`);
  coordscontainer.appendChild(coordsedit);

  var save = document.createElement("button");
  save.innerHTML = ("Save");
  var buttonscontainerar = document.querySelector(`#buttonscontainerar${id}`)
  buttonscontainerar.appendChild(save);

  //FETCHING
  save.addEventListener('click', () => {
    fetch(`/areas/edit/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          provider: provedit.value,
          color: coloredit.value,
          nameofarea: nameofareaedit.value,
          price: priceedit.value,
          coords: JSON.parse(coordsedit.value),
        })
      });
      
      //displaying after saving
      provedit.style.display = 'none';
      coloredit.style.display = 'none';
      nameofareaedit.style.display = 'none';
      priceedit.style.display = 'none';
      coordsedit.style.display = 'none';
      save.style.display = 'none';

      editbutton.style.display = "block";
      prov.style.display = "block";
      color.style.display = "block";
      nameofarea.style.display = "block";
      coords.style.display = "block";
      price.style.display = "block";

      document.querySelector(`#areaprovider${id}`).innerHTML = provedit.value;
      document.querySelector(`#areacolor${id}`).innerHTML = coloredit.value;
      document.querySelector(`#areanameofarea${id}`).innerHTML = nameofareaedit.value;
      document.querySelector(`#areaprice${id}`).innerHTML = priceedit.value;
      document.querySelector(`#areacoords${id}`).innerHTML = coordsedit.value;

});


}

function del_provider(id) {

  var singleprovider = document.querySelector(`#singleprovider${id}`);
  singleprovider.style.display = 'none';

  //FETCHING 
  fetch(`/delprov/${id}`, {
    method: 'DELETE'     
  })
    .then(response => response.json())
    .then(result => {
        // Print result
        console.log(result);

      });
    
}

function del_area(id) {

  var singlearea = document.querySelector(`#singlearea${id}`);
  singlearea.style.display = 'none';

  //FETCHING 
  fetch(`/delarea/${id}`, {
    method: 'DELETE'     
  })
    .then(response => response.json())
    .then(result => {
        // Print result
        console.log(result);

      });
    
}
