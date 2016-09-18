import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const employees = [
  {
    id: "gpha1",
    name: "Adu Bonsu",
    employer: "gpha",
    nok: "Ama Nketia",
    dob: "Kwaku Asima",
    ssnit: "90402719303",
    email: "hr@gpha.com",
    phone: "0302-6377338",    
    initDate:"20-Sep-2007"
    
  },
  {
    id: "gpha2",
    name: "Krachi Kusi",
    employer: "gpha",
    nok: "Olu Yankee",
    dob: "15-Jan-1967",
    ssnit: "91400399303",
    email: "hr@gpha.com",
    phone: "0302-6377338",    
    initDate:"20-Sep-2007"
  },
  {
    id: "gpha3",
    name: "Kwaku Ghansa",
    employer: "gpha",
    nok: "Helen Anafoa",
    dob: "15-Jan-1967",
    ssnit: "90401399303",
    email: "hr@gpha.com",
    phone: "0302-6377338",    
    initDate:"20-Sep-2007"
  },
  {
    id: "gpha4",
    name: "Mensah Brown",
    employer: "gpha",
    nok: "Efia Kakraba",
    dob: "15-Jan-1967",
    ssnit: "90400239303",
    email: "hr@gpha.com",
    phone: "0302-6377338",    
    initDate:"20-Sep-2007"
  },
  {
    id: "gpha5",
    name: "Kwame Boadu",
    employer: "gpha",
    nok: "Arhin Ntsiful",
    dob: "15-Jan-1967",
    ssnit: "90400399309",
    email: "hr@gpha.com",
    phone: "0302-6377338",    
    initDate:"20-Sep-2007"
  },
    {
    id: "konka1",
    name: "Konadu Apreku",
    employer: "konka",
    nok: "Ama Nketia",
    dob: "20-Aug-1966",
    ssnit: "90402719303",
    email: "hr@gpha.com",
    phone: "0302-6377338",    
    initDate:"20-Sep-2007"
    
  },
  {
    id: "konka2",
    name: "Appiah Kiti",
    employer: "konka",
    nok: "Olu Yankee",
    dob: "15-Jan-1967",
    ssnit: "91400399303",
    email: "hr@gpha.com",
    phone: "0302-6377338",    
    initDate:"20-Sep-2007"
  },
  {
    id: "konka3",
    name: "Evelyn Sarfo",
    employer: "konka",
    nok: "Kojo Pina",
    dob: "15-Jan-1967",
    ssnit: "90401399303",
    email: "hr@gpha.com",
    phone: "0302-6377338",    
    initDate:"20-Sep-2007"
  },
  {
    id: "konka4",
    name: "Mensah Brown",
    employer: "konka",
    nok: "Efia Kakraba",
    dob: "15-Jan-1967",
    ssnit: "90400239303",
    email: "hr@gpha.com",
    phone: "0302-6377338",    
    initDate:"20-Sep-2007"
  },
  {
    id: "konka5",
    name: "Kwame Boadu",
    employer: "konka",
    nok: "Arhin Ntsiful",
    dob: "15-Jan-1967",
    ssnit: "90400399309",
    email: "hr@gpha.com",
    phone: "0302-6377338",    
    initDate:"20-Sep-2007"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (employee) => {
  return replaceAll(employee.name, ' ', '-');
};

class EmployeeApi {
  static getAllEmployees() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], employees));
      }, delay);
    });
  }

  static saveEmployee(employee) {
    employee = Object.assign({}, employee); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minclientTitleLength = 1;
        if (employee.name.length < minclientTitleLength) {
          reject(`Title must be at least ${minclientTitleLength} characters.`);
        }
        const existingclientIndex = employees.findIndex(a => a.id == employee.id && a.employer==employee.employer);
        if (existingclientIndex>=0){
          employees.splice(existingclientIndex, 1, employee);
        } else {
          employees.push(employee);
        }

        resolve(employee);
      }, delay);
    });
  }

  static deleteClient(employer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfclientToDelete = employees.findIndex(employee => {
          employee.employer == employer;
        });
        employees.splice(indexOfclientToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default EmployeeApi;
