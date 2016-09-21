import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const fundEvents = [
{rowid:'1',id:'gpha1',employer:'gpha',event:'contribution',period:'Jan-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'2',id:'gpha1',employer:'gpha',event:'contribution',period:'Feb-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'3',id:'gpha1',employer:'gpha',event:'contribution',period:'Mar-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'4',id:'gpha1',employer:'gpha',event:'interest',period:'Mar-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'5',id:'gpha1',employer:'gpha',event:'contribution',period:'Apr-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'6',id:'gpha1',employer:'gpha',event:'contribution',period:'May-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'7',id:'gpha1',employer:'gpha',event:'contribution',period:'Jun-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'8',id:'gpha1',employer:'gpha',event:'interest',period:'Jun-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'9',id:'gpha1',employer:'gpha',event:'contribution',period:'Jul-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'10',id:'gpha1',employer:'gpha',event:'contribution',period:'Aug-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'11',id:'gpha1',employer:'gpha',event:'contribution',period:'Sep-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'12',id:'gpha1',employer:'gpha',event:'interest',period:'Sep-2014',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'13',id:'gpha1',employer:'gpha',event:'contribution',period:'Oct-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'14',id:'gpha1',employer:'gpha',event:'contribution',period:'Nov-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'15',id:'gpha1',employer:'gpha',event:'contribution',period:'Dec-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'16',id:'gpha1',employer:'gpha',event:'interest',period:'Dec-2014',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'17',id:'gpha2',employer:'gpha',event:'contribution',period:'Jan-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'18',id:'gpha2',employer:'gpha',event:'contribution',period:'Feb-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'19',id:'gpha2',employer:'gpha',event:'contribution',period:'Mar-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'20',id:'gpha2',employer:'gpha',event:'interest',period:'Mar-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'21',id:'gpha2',employer:'gpha',event:'contribution',period:'Apr-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'22',id:'gpha2',employer:'gpha',event:'contribution',period:'May-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'23',id:'gpha2',employer:'gpha',event:'contribution',period:'Jun-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'24',id:'gpha2',employer:'gpha',event:'interest',period:'Jun-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'25',id:'gpha2',employer:'gpha',event:'contribution',period:'Jul-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'26',id:'gpha2',employer:'gpha',event:'contribution',period:'Aug-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'27',id:'gpha2',employer:'gpha',event:'contribution',period:'Sep-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'28',id:'gpha2',employer:'gpha',event:'interest',period:'Sep-2014',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'29',id:'gpha2',employer:'gpha',event:'contribution',period:'Oct-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'30',id:'gpha2',employer:'gpha',event:'contribution',period:'Nov-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'31',id:'gpha2',employer:'gpha',event:'contribution',period:'Dec-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'32',id:'gpha2',employer:'gpha',event:'interest',period:'Dec-2014',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'33',id:'gpha3',employer:'gpha',event:'contribution',period:'Jan-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'34',id:'gpha3',employer:'gpha',event:'contribution',period:'Feb-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'35',id:'gpha3',employer:'gpha',event:'contribution',period:'Mar-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'36',id:'gpha3',employer:'gpha',event:'interest',period:'Mar-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'37',id:'gpha3',employer:'gpha',event:'contribution',period:'Apr-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'38',id:'gpha3',employer:'gpha',event:'contribution',period:'May-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'39',id:'gpha3',employer:'gpha',event:'contribution',period:'Jun-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'40',id:'gpha3',employer:'gpha',event:'interest',period:'Jun-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'41',id:'gpha3',employer:'gpha',event:'contribution',period:'Jul-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'42',id:'gpha3',employer:'gpha',event:'contribution',period:'Aug-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'43',id:'gpha3',employer:'gpha',event:'contribution',period:'Sep-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'44',id:'gpha3',employer:'gpha',event:'interest',period:'Sep-2014',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'45',id:'gpha3',employer:'gpha',event:'contribution',period:'Oct-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'46',id:'gpha3',employer:'gpha',event:'contribution',period:'Nov-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'47',id:'gpha3',employer:'gpha',event:'contribution',period:'Dec-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'48',id:'gpha3',employer:'gpha',event:'interest',period:'Dec-2014',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'49',id:'gpha4',employer:'gpha',event:'contribution',period:'Jan-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'50',id:'gpha4',employer:'gpha',event:'contribution',period:'Feb-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'51',id:'gpha4',employer:'gpha',event:'contribution',period:'Mar-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'52',id:'gpha4',employer:'gpha',event:'interest',period:'Mar-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'53',id:'gpha4',employer:'gpha',event:'contribution',period:'Apr-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'54',id:'gpha4',employer:'gpha',event:'contribution',period:'May-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'55',id:'gpha4',employer:'gpha',event:'contribution',period:'Jun-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'56',id:'gpha4',employer:'gpha',event:'interest',period:'Jun-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'57',id:'gpha4',employer:'gpha',event:'contribution',period:'Jul-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'58',id:'gpha4',employer:'gpha',event:'contribution',period:'Aug-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'59',id:'gpha4',employer:'gpha',event:'contribution',period:'Sep-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'60',id:'gpha4',employer:'gpha',event:'interest',period:'Sep-2014',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'61',id:'gpha4',employer:'gpha',event:'contribution',period:'Oct-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'62',id:'gpha4',employer:'gpha',event:'contribution',period:'Nov-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'63',id:'gpha4',employer:'gpha',event:'contribution',period:'Dec-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'64',id:'gpha4',employer:'gpha',event:'interest',period:'Dec-2014',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'65',id:'gpha5',employer:'gpha',event:'contribution',period:'Jan-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'66',id:'gpha5',employer:'gpha',event:'contribution',period:'Feb-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'67',id:'gpha5',employer:'gpha',event:'contribution',period:'Mar-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'68',id:'gpha5',employer:'gpha',event:'interest',period:'Mar-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'69',id:'gpha5',employer:'gpha',event:'contribution',period:'Apr-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'70',id:'gpha5',employer:'gpha',event:'contribution',period:'May-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'71',id:'gpha5',employer:'gpha',event:'contribution',period:'Jun-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'72',id:'gpha5',employer:'gpha',event:'interest',period:'Jun-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'73',id:'gpha5',employer:'gpha',event:'contribution',period:'Jul-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'74',id:'gpha5',employer:'gpha',event:'contribution',period:'Aug-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'75',id:'gpha5',employer:'gpha',event:'contribution',period:'Sep-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'76',id:'gpha5',employer:'gpha',event:'interest',period:'Sep-2014',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'77',id:'gpha5',employer:'gpha',event:'contribution',period:'Oct-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'78',id:'gpha5',employer:'gpha',event:'contribution',period:'Nov-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'79',id:'gpha5',employer:'gpha',event:'contribution',period:'Dec-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'80',id:'gpha5',employer:'gpha',event:'interest',period:'Dec-2014',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'81',id:'konka1',employer:'konka',event:'contribution',period:'Jan-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'82',id:'konka1',employer:'konka',event:'contribution',period:'Feb-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'83',id:'konka1',employer:'konka',event:'contribution',period:'Mar-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'84',id:'konka1',employer:'konka',event:'interest',period:'Mar-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'85',id:'konka1',employer:'konka',event:'contribution',period:'Apr-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'86',id:'konka1',employer:'konka',event:'contribution',period:'May-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'87',id:'konka1',employer:'konka',event:'contribution',period:'Jun-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'88',id:'konka1',employer:'konka',event:'interest',period:'Jun-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'89',id:'konka1',employer:'konka',event:'contribution',period:'Jul-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'90',id:'konka1',employer:'konka',event:'contribution',period:'Aug-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'91',id:'konka1',employer:'konka',event:'contribution',period:'Sep-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'92',id:'konka1',employer:'konka',event:'interest',period:'Sep-2014',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'93',id:'konka1',employer:'konka',event:'contribution',period:'Oct-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'94',id:'konka1',employer:'konka',event:'contribution',period:'Nov-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'95',id:'konka1',employer:'konka',event:'contribution',period:'Dec-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'96',id:'konka1',employer:'konka',event:'interest',period:'Dec-2014',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'97',id:'konka2',employer:'konka',event:'contribution',period:'Jan-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'98',id:'konka2',employer:'konka',event:'contribution',period:'Feb-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'99',id:'konka2',employer:'konka',event:'contribution',period:'Mar-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'100',id:'konka2',employer:'konka',event:'interest',period:'Mar-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'101',id:'konka2',employer:'konka',event:'contribution',period:'Apr-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'102',id:'konka2',employer:'konka',event:'contribution',period:'May-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'103',id:'konka2',employer:'konka',event:'contribution',period:'Jun-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'104',id:'konka2',employer:'konka',event:'interest',period:'Jun-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'105',id:'konka2',employer:'konka',event:'contribution',period:'Jul-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'106',id:'konka2',employer:'konka',event:'contribution',period:'Aug-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'107',id:'konka2',employer:'konka',event:'contribution',period:'Sep-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'108',id:'konka2',employer:'konka',event:'interest',period:'Sep-2014',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'109',id:'konka2',employer:'konka',event:'contribution',period:'Oct-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'110',id:'konka2',employer:'konka',event:'contribution',period:'Nov-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'111',id:'konka2',employer:'konka',event:'contribution',period:'Dec-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'112',id:'konka2',employer:'konka',event:'interest',period:'Dec-2014',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'113',id:'konka3',employer:'konka',event:'contribution',period:'Jan-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'114',id:'konka3',employer:'konka',event:'contribution',period:'Feb-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'115',id:'konka3',employer:'konka',event:'contribution',period:'Mar-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'116',id:'konka3',employer:'konka',event:'interest',period:'Mar-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'117',id:'konka3',employer:'konka',event:'contribution',period:'Apr-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'118',id:'konka3',employer:'konka',event:'contribution',period:'May-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'119',id:'konka3',employer:'konka',event:'contribution',period:'Jun-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'120',id:'konka3',employer:'konka',event:'interest',period:'Jun-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'121',id:'konka3',employer:'konka',event:'contribution',period:'Jul-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'122',id:'konka3',employer:'konka',event:'contribution',period:'Aug-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'123',id:'konka3',employer:'konka',event:'contribution',period:'Sep-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'124',id:'konka3',employer:'konka',event:'interest',period:'Sep-2014',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'125',id:'konka3',employer:'konka',event:'contribution',period:'Oct-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'126',id:'konka3',employer:'konka',event:'contribution',period:'Nov-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'127',id:'konka3',employer:'konka',event:'contribution',period:'Dec-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'128',id:'konka3',employer:'konka',event:'interest',period:'Dec-2014',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'129',id:'konka4',employer:'konka',event:'contribution',period:'Jan-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'130',id:'konka4',employer:'konka',event:'contribution',period:'Feb-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'131',id:'konka4',employer:'konka',event:'contribution',period:'Mar-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'132',id:'konka4',employer:'konka',event:'interest',period:'Mar-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'133',id:'konka4',employer:'konka',event:'contribution',period:'Apr-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'134',id:'konka4',employer:'konka',event:'contribution',period:'May-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'135',id:'konka4',employer:'konka',event:'contribution',period:'Jun-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'136',id:'konka4',employer:'konka',event:'interest',period:'Jun-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'137',id:'konka4',employer:'konka',event:'contribution',period:'Jul-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'138',id:'konka4',employer:'konka',event:'contribution',period:'Aug-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'139',id:'konka4',employer:'konka',event:'contribution',period:'Sep-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'140',id:'konka4',employer:'konka',event:'interest',period:'Sep-2014',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'141',id:'konka4',employer:'konka',event:'contribution',period:'Oct-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'142',id:'konka4',employer:'konka',event:'contribution',period:'Nov-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'143',id:'konka4',employer:'konka',event:'contribution',period:'Dec-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'144',id:'konka4',employer:'konka',event:'interest',period:'Dec-2014',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'145',id:'konka5',employer:'konka',event:'contribution',period:'Jan-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'146',id:'konka5',employer:'konka',event:'contribution',period:'Feb-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'147',id:'konka5',employer:'konka',event:'contribution',period:'Mar-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'148',id:'konka5',employer:'konka',event:'interest',period:'Mar-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'149',id:'konka5',employer:'konka',event:'contribution',period:'Apr-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'150',id:'konka5',employer:'konka',event:'contribution',period:'May-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'151',id:'konka5',employer:'konka',event:'contribution',period:'Jun-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'152',id:'konka5',employer:'konka',event:'interest',period:'Jun-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'153',id:'konka5',employer:'konka',event:'contribution',period:'Jul-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'154',id:'konka5',employer:'konka',event:'contribution',period:'Aug-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'155',id:'konka5',employer:'konka',event:'contribution',period:'Sep-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'156',id:'konka5',employer:'konka',event:'interest',period:'Sep-2014',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'157',id:'konka5',employer:'konka',event:'contribution',period:'Oct-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'158',id:'konka5',employer:'konka',event:'contribution',period:'Nov-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'159',id:'konka5',employer:'konka',event:'contribution',period:'Dec-2013',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'},
{rowid:'160',id:'konka5',employer:'konka',event:'interest',period:'Dec-2014',employer_amt:'150',employee_amt:'100',avc:'10',total:'260'}];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (employee) => {
  return replaceAll(employee.name, ' ', '-');
};

class FundEventApi {
  static getAllFundEvents(id,employer) {
    return new Promise((resolve, reject) => {
      console.log("getAllFundEvents",id,employer);
      setTimeout(() => {
        const client_fundEvents=fundEvents.filter(fundEvent=>fundEvent.id==id && 
        fundEvent.employer==employer);
        console.log("client_fundEvents",client_fundEvents);
        resolve(Object.assign([], client_fundEvents));
      }, delay);
    });
  }

  static saveFundEvent(fundEvent) {
    fundEvent = Object.assign({}, fundEvent); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
     
        const existingclientIndex = fundEvents.findIndex(a => a.id == fundEvent.id && a.employer==fundEvent.employer 
        && a.period==fundEvent.period && a.event==fundEvent.event);
        if (existingclientIndex>=0){
          fundEvents.splice(existingclientIndex, 1, fundEvent);
        } else {
          fundEvents.push(fundEvent);
        }

        resolve(fundEvent);
      }, delay);
    });
  }

  static deleteClient(employer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfclientToDelete = fundEvents.findIndex(employee => {
          employee.employer == employer;
        });
        fundEvents.splice(indexOfclientToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default FundEventApi;
