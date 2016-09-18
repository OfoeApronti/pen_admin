import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const clients = [
  {
    id: "gpha",
    name: "Ghana Ports",
    address: "Tema Harbor",
    email: "hr@gpha.com",
    phone: "0302-6377338",
    rm: "Kwaku Asima",
    initDate:"20-Sep-2007",
    fundType:"2nd Tier"
  },
  {
    id: "konka",
    name: "Konka Industries",
    address: "Accra North",
    email: "hr@konka.com",
    phone: "0302-6377338",
    rm: "Kwaku Asima",
    initDate:"20-Sep-2007",
    fundType:"3rd Tier"
  },
  {
    id: "mrei",
    name: "Modern Real Estate Inc",
    address: "Atebubu North",
    email: "hr@realEstate.com",
    phone: "0302-6377338",
    rm: "Kwaku Asima",
    initDate:"20-Sep-2007",
    fundType:"3rd Tier"
  },
  {
    id: "anokye",
    name: "Anokye Tonics",
    address: "Accra North",
    email: "hr@aherbs.com",
    phone: "0302-6377338",
    rm: "Kwaku Asima",
    initDate:"20-Sep-2007",
    fundType:"3rd Tier"
  },
  {
    id: "redred",
    name: "Redwood Furnitures",
    address: "Accra North",
    email: "hr@redred.com",
    phone: "0302-6377338",
    rm: "Kwaku Asima",
    initDate:"20-Sep-2007",
    fundType:"3rd Tier"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (client) => {
  return replaceAll(client.name, ' ', '-');
};

class ClientApi {
  static getAllClients() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], clients));
      }, delay);
    });
  }

  static saveClient(client) {
    console.log("inside saveClient api",client);
    client = Object.assign({}, client); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minclientTitleLength = 1;
        if (client.name.length < minclientTitleLength) {
          reject(`Title must be at least ${minclientTitleLength} characters.`);
        }

        /* if (client.id) {
          const existingclientIndex = clients.findIndex(a => a.id == client.id);
          console.log("existingclientIndex",existingclientIndex);
          clients.splice(existingclientIndex, 1, client);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new clients in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          client.id = generateId(client);
          clients.push(client);
          console.log("clients",clients);
        }
        */
        const existingclientIndex = clients.findIndex(a => a.id == client.id);
        console.log("existingclientIndex",existingclientIndex);
        if (existingclientIndex>=0){
           console.log("updating client");
          clients.splice(existingclientIndex, 1, client);
        } else {
          clients.push(client);
        }

        resolve(client);
      }, delay);
    });
  }

  static deleteClient(clientId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfclientToDelete = clients.findIndex(client => {
          client.clientId == clientId;
        });
        clients.splice(indexOfclientToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ClientApi;
