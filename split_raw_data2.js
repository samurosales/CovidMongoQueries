'use strict'

const fs = require('fs')

let rawdataFile = fs.readFileSync('raw_data.json')
let rawData = JSON.parse(rawdataFile)

let structuredData = {
    countries: [],
    patients: [],
    cases: [],
    deaths: [],
    vaccines: [],
    tests: [],
    icu: [],
	data:[]
}



var patients = (list, id) => {

    let obj = {}

    if(list.hosp_patients) {
            obj.hosp_patients = list.hosp_patients
            // delete list.hosp_patients
        }
    if(list.hosp_patients_per_million) {
            obj.hosp_patients_per_million = list.hosp_patients_per_million
            // delete list.hosp_patients_per_million
        }
    if(list.weekly_hosp_admissions) {
            obj.weekly_hosp_admissions = list.weekly_hosp_admissions
            // delete list.weekly_hosp_admissions
        }
    if(list.weekly_hosp_admissions_per_million) {
            obj.weekly_hosp_admissions_per_million = list.weekly_hosp_admissions_per_million
            // delete list.weekly_hosp_admissions_per_million
        }

    if(Object.keys(obj).length == 0) return
    obj._id = id

    structuredData.patients.push(obj)
}



var tests = (list, id) => {

    if(structuredData.tests[id]) return
    let obj = {} 

    if(list.new_tests){
        obj.new_tests = list.new_tests
        // delete list.new_tests)
    }
    if(list.total_tests){
        obj.total_tests = list.total_tests
        // delete list.total_tests)
    }
    if(list.total_tests_per_thousand){
        obj.total_tests_per_thousand = list.total_tests_per_thousand
        // delete list.total_tests_per_thousand 
    }

    if(list.new_tests_per_thousand){
        obj.new_tests_per_thousand = list.new_tests_per_thousand
        // delete list.new_tests_per_thousand
    }
    if(list.tests_units){
        obj.tests_units = list.tests_units
        // delete list.tests_units
    }
    if(list.new_tests_per_thousand){
        obj.new_tests_per_thousand = list.new_tests_per_thousand
        // delete list.new_tests_per_thousand
    }
    if(list.new_tests_smoothed){
        obj.new_tests_smoothed = list.new_tests_smoothed
        // delete list.new_tests_smoothed
    }
    if(list.new_tests_smoothed_per_thousand){
        obj.new_tests_smoothed_per_thousand = list.new_tests_smoothed_per_thousand
        // delete list.new_tests_smoothed_per_thousand
    }
    if(list.positive_rate){
        obj.positive_rate = list.positive_rate
        // delete list.positive_rate
    }
    if(list.tests_per_case){
        obj.tests_per_case = list.tests_per_case
        // delete list.tests_per_case
    }

    if(Object.keys(obj).length == 0) return
    obj._id = id
    structuredData.tests.push(obj)
  
}

var cases = (list, id) => {

    let obj = {}

    if(list.total_cases){
        obj.total_cases = list.total_cases
        // delete list.total_cases
    }
    if(list.new_cases){
	    obj.new_cases = list.new_cases
	    // delete list.new_cases
    }
    if(list.new_cases_smoothed){
        obj.new_cases_smoothed = list.new_cases_smoothed
        // delete list.new_cases_smoothed
    }
    if(list.total_cases_per_million){
        obj.total_cases_per_million = list.total_cases_per_million
        // delete list.total_cases_per_million
    }
    if(list.new_cases_per_million){
        obj.new_cases_per_million = list.new_cases_per_million
        // delete list.new_cases_per_million
    }
    if(list.new_cases_smoothed_per_million){
        obj.new_cases_smoothed_per_million = list.new_cases_smoothed_per_million
        // delete list.new_cases_smoothed_per_million
    }
    if(list.reproduction_rate){
        obj.reproduction_rate = list.reproduction_rate
        // delete list.reproduction_rate
    }


    if(Object.keys(obj).length == 0) return
    obj._id = id

    structuredData.cases.push(obj)
  
}

var icu = (list, id) => {

    let obj = {}

    if(list.icu_patients){
        obj.icu_patients = list.icu_patients
        // delete list.icu_patients
    }
    if(list.icu_patients_per_million){
        obj.icu_patients_per_million = list.icu_patients_per_million
        // delete list.icu_patients_per_million
    }
    if(list.weekly_icu_admissions){
        obj.weekly_icu_admissions = list.weekly_icu_admissions
        // delete list.weekly_icu_admissions
    }
    if(list.weekly_icu_admissions_per_million){
        obj.weekly_icu_admissions_per_million = list.weekly_icu_admissions_per_million
        // delete list.weekly_icu_admissions_per_million
    }

    if(Object.keys(obj).length == 0) return
    obj._id = id
    structuredData.icu.push(obj)
  
}

var vaccines = (list, id) => {

    let obj = {}

    if(list.total_vaccinations){
        obj.total_vaccinations = list.total_vaccinations
        // delete list.total_vaccinations
    }
    if(list.people_vaccinated){
        obj.people_vaccinated = list.people_vaccinated
        // delete list.people_vaccinated
    }
    if(list.total_vaccinations_per_hundred){
        obj.total_vaccinations_per_hundred = list.total_vaccinations_per_hundred
        // delete list.total_vaccinations_per_hundred
    }
    if(list.people_vaccinated_per_hundred){
        obj.people_vaccinated_per_hundred = list.people_vaccinated_per_hundred
        // delete list.people_vaccinated_per_hundred
    }
    if(list.new_vaccinations_smoothed){
        obj.new_vaccinations_smoothed = list.new_vaccinations_smoothed
        // delete list.new_vaccinations_smoothed
    }
    if(list.new_vaccinations_smoothed_per_million){
        obj.new_vaccinations_smoothed_per_million = list.new_vaccinations_smoothed_per_million
        // delete list.new_vaccinations_smoothed_per_million
    }
    if(list.new_vaccinations){
        obj.new_vaccinations = list.new_vaccinations
        // delete list.new_vaccinations
    }
    if(list.people_fully_vaccinated){
        obj.people_fully_vaccinated = list.people_fully_vaccinated
        // delete list.people_fully_vaccinated
    }
    if(list.people_fully_vaccinated_per_hundred){
        obj.people_fully_vaccinated_per_hundred = list.people_fully_vaccinated_per_hundred
        // delete list.people_fully_vaccinated_per_hundred
    }
    if(list.stringency_index){
        obj.stringency_index = list.stringency_index
        // delete list.stringency_index
    }



    if(Object.keys(obj).length == 0) return
    obj._id = id
    structuredData.vaccines.push(obj)
  

}


var deaths = (list, id) => {

    let obj = {}

    if(list.total_deaths){
        obj.total_deaths = list.total_deaths
        // delete list.total_deaths
    }
    if(list.new_deaths){
        obj.new_deaths = list.new_deaths
        // delete list.new_deaths
    }
    if(list.new_deaths_smoothed){
        obj.new_deaths_smoothed = list.new_deaths_smoothed
        // delete list.new_deaths_smoothed
    }
    if(list.total_deaths_per_million){
        obj.total_deaths_per_million = list.total_deaths_per_million
        // delete list.total_deaths_per_million
    }
    if(list.new_deaths_per_million){
        obj.new_deaths_per_million = list.new_deaths_per_million
        // delete list.new_deaths_per_million
    }
    if(list.new_deaths_smoothed_per_million){
        obj.new_deaths_smoothed_per_million = list.new_deaths_smoothed_per_million
        // delete list.new_deaths_smoothed_per_million
    }

    if(Object.keys(obj).length == 0) return
    obj._id = id
    structuredData.deaths.push(obj)
  
}



var cases = async(list, id) => {

    let obj = {}

    if(list.total_cases){
        obj.total_cases = list.total_cases
        // delete list.total_cases
    }
    if(list.new_cases){
        obj.new_cases = list.new_cases
        // delete list.new_cases
    }
    if(list.new_cases_smoothed){
        obj.new_cases_smoothed = list.new_cases_smoothed
        // delete list.new_cases_smoothed
    }
    if(list.total_cases_per_million){
        obj.total_cases_per_million = list.total_cases_per_million
        // delete list.total_cases_per_million
    }
    if(list.new_cases_per_million){
        obj.new_cases_per_million = list.new_cases_per_million
        // delete list.new_cases_per_million
    }
    if(list.new_cases_smoothed_per_million){
        obj.new_cases_smoothed_per_million = list.new_cases_smoothed_per_million
        // delete list.new_cases_smoothed_per_million
    }
    if(list.reproduction_rate){
        obj.reproduction_rate = list.reproduction_rate
        // delete list.reproduction_rate
    }



    if(Object.keys(obj).length == 0) return
    obj._id = id
    structuredData.cases.push(obj)
  
}


// let attributes ={ 
    
//   total_cases: cases,
//   new_cases: cases,
//   new_cases_smoothed: cases,
//   total_cases_per_million: cases,
//   new_cases_per_million: cases,
//   new_cases_smoothed_per_million: cases,
//   reproduction_rate: cases,


//   total_deaths: deaths,
//   new_deaths: deaths,
//   new_deaths_smoothed: deaths,
//   total_deaths_per_million: deaths,
//   new_deaths_per_million: deaths,
//   new_deaths_smoothed_per_million: deaths,


//   total_vaccinations: vaccines,
//   people_vaccinated: vaccines,
//   total_vaccinations_per_hundred: vaccines,
//   people_vaccinated_per_hundred: vaccines,
//   new_vaccinations_smoothed: vaccines,
//   new_vaccinations_smoothed_per_million: vaccines,
//   new_vaccinations: vaccines,
//   people_fully_vaccinated: vaccines,
//   people_fully_vaccinated_per_hundred: vaccines,
//   stringency_index: vaccines,

  
//   new_tests: tests,
//   total_tests: tests,
//   total_tests_per_thousand: tests,
//   new_tests_per_thousand: tests,
//   tests_units: tests,
//   new_tests_smoothed: tests,
//   new_tests_smoothed_per_thousand: tests,
//   positive_rate: tests,
//   tests_per_case: tests,
  
//   icu_patients: icu,
//   icu_patients_per_million: icu,
//   weekly_icu_admissions: icu,
//   weekly_icu_admissions_per_million: icu,
  
  
//   hosp_patients: patients,
//   hosp_patients_per_million: patients,
//   weekly_hosp_admissions: patients,
//   weekly_hosp_admissions_per_millionn: patients

// }

structuredData.countries = Object.keys(rawData)
    .map(function(key) {

//         for (let dateObj of rawData[key].data){
// 
//             
// 
//             let _id = { country: key, date: dateObj.date }            
//             delete dateObj.date
// 
//             cases(dateObj, _id)
//             deaths(dateObj, _id)
//             vaccines(dateObj, _id)
//             icu(dateObj, _id)
//             tests(dateObj, _id)
//             patients(dateObj, _id)
// 
//                 
//         }
// 
        // console.log(rawData[key].data)
        structuredData.data.push(... rawData[key].data)

        // delete rawData[key].data

        rawData[key].country = key
        return rawData[key]
    })


let countriesData = JSON.stringify(structuredData.countries)
fs.writeFile('collections/countries.json', countriesData, function(err, result) {
    if (err) console.log('error', err);
});

let Data = JSON.stringify(structuredData.data)
fs.writeFile('collections/data.json', countriesData, function(err, result) {
    if (err) console.log('error', err);
});

// let casesData = JSON.stringify(structuredData.cases)
// fs.writeFile('collections/cases.json', casesData, function(err, result) {
//     if (err) console.log('error', err);
// });
// 
// let patientsData = JSON.stringify(structuredData.patients)
// fs.writeFile('collections/patients.json', patientsData, function(err, result) {
//     if (err) console.log('error', err);
// });
// 
// let deathsData = JSON.stringify(structuredData.deaths)
// fs.writeFile('collections/deaths.json', deathsData, function(err, result) {
//     if (err) console.log('error', err);
// });
// 
// let testsData = JSON.stringify(structuredData.tests)
// fs.writeFile('collections/tests.json', testsData, function(err, result) {
//     if (err) console.log('error', err);
// });
// 
// let icuData = JSON.stringify(structuredData.icu)
// fs.writeFile('collections/icu.json', icuData, function(err, result) {
//     if (err) console.log('error', err);
// });
// 
// let vaccinesData = JSON.stringify(structuredData.vaccines)
// fs.writeFile('collections/vaccines.json', vaccinesData, function(err, result) {
//     if (err) console.log('error', err);
// });
// 
// fs.writeFile("countries.json", JSON.stringify(structuredData.countries));
// fs.writeFile("cases.json", JSON.stringify(structuredData.cases));
// fs.writeFile("patients.json", JSON.stringify(structuredData.patients));
// fs.writeFile("deaths.json", JSON.stringify(structuredData.deaths));
// fs.writeFile("icu.json", JSON.stringify(structuredData.icu));
// fs.writeFile("tests.json", JSON.stringify(structuredData.tests));
// fs.writeFile("vaccines.json", JSON.stringify(structuredData.vaccines));
console.log('7 archivos creados')
console.log(structuredData)
