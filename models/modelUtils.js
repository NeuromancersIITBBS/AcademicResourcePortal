/* Model functions */

// 1. jsResourceByCode
// Function that would call the REST api and fetch the json object containing
// all the academic resources available in the specified course code.

var jsResourcesByCode = function(subjectCode){
    let branch = subjectCode.substring(0,2);
    let endpoint = `http://localhost:3000/studyResouces/branches/${branch}/subjects/${subjectCode}`;
    /*$.ajax({
        url: endpoint,
        type: 'GET',
        dataType: 'json',
        error: function(xhr){
          alert("Something went wrong, please try again.");
        },
        success: function(res) {
          console.log("Success!");
          let jsonData = res;
          let jsArray = JSON.parse(jsonData);
          return jsArray;
        }
  });*/
  let jsArray;
  if(branch==='CS'){
    if(subjectCode==='CS2L003'){
      jsArray=[
        {
          email_id: 'aaa999@iitbbs.ac.in',
          year: '2017',
          type: 'midsem',
          semester: 'autumn',
          subject_name: 'Data Structure',
          flags: '0',
          subject_code: 'CS2L003',
          resource_id: 'CS2L003010009'
        },
        {
          email_id: 'abc999@iitbbs.ac.in',
          year: '2017',
          type: 'midsem',
          semester: 'autumn',
          subject_name: 'Data Structure',
          flags: '1',
          subject_code: 'CS2L003',
          resource_id: 'CS2L003010008'
        },
        {
          email_id: 'aaa999@iitbbs.ac.in',
          year: '2018',
          type: 'endsem',
          semester: 'autumn',
          subject_name: 'Data Structure',
          flags: '2',
          subject_code: 'CS2L003',
          resource_id: 'CS2L003020007'
        },
        {
          email_id: 'abc999@iitbbs.ac.in',
          year: '2018',
          type: 'endsem',
          semester: 'autumn',
          subject_name: 'Data Structure',
          flags: '3',
          subject_code: 'CS2L003',
          resource_id: 'CS2L003020006'
        },
        {
          email_id: 'ade999@iitbbs.ac.in',
          year: '2017',
          type: 'tutorial',
          semester: 'autumn',
          subject_name: 'Data Structure',
          flags: '0',
          subject_code: 'CS2L003',
          resource_id: 'CS2L003030005'
        },
        {
          email_id: 'aef999@iitbbs.ac.in',
          year: '2018',
          type: 'tutorial',
          semester: 'autumn',
          subject_name: 'Data Structure',
          flags: '0',
          subject_code: 'CS2L003',
          resource_id: 'CS2L003030004'
        },
        {
          email_id: 'agh999@iitbbs.ac.in',
          year: '2019',
          type: 'tutorial',
          semester: 'autumn',
          subject_name: 'Data Structure',
          flags: '0',
          subject_code: 'CS2L003',
          resource_id: 'CS2L003030003'
        },
        {
          email_id: 'aij999@iitbbs.ac.in',
          year: '2017',
          type: 'quiz',
          semester: 'autumn',
          subject_name: 'Data Structure',
          flags: '0',
          subject_code: 'CS2L003',
          resource_id: 'CS2L003040002'
        },
        {
          email_id: 'ajk999@iitbbs.ac.in',
          year: '2017',
          type: 'other',
          semester: 'autumn',
          subject_name: 'Data Structure',
          flags: '0',
          subject_code: 'CS2L003',
          resource_id: 'CS2L003050001'
        },
        {
          email_id: 'aaa999@iitbbs.ac.in',
          year: '2017',
          type: 'midsem',
          semester: 'autumn',
          subject_name: 'Programming and Data Structure',
          flags: '0',
          subject_code: 'CS1L001',
          resource_id: 'CS1L001010901'
        },
        {
          email_id: 'abc999@iitbbs.ac.in',
          year: '2017',
          type: 'midsem',
          semester: 'spring',
          subject_name: 'Programming and Data Structure',
          flags: '1',
          subject_code: 'CS1L001',
          resource_id: 'CS1L001010801'
        },
        {
          email_id: 'aaa999@iitbbs.ac.in',
          year: '2018',
          type: 'endsem',
          semester: 'autumn',
          subject_name: 'Programming and Data Structure',
          flags: '2',
          subject_code: 'CS1L001',
          resource_id: 'CS1L001020701'
        },
        {
          email_id: 'abc999@iitbbs.ac.in',
          year: '2018',
          type: 'endsem',
          semester: 'spring',
          subject_name: 'Programming and Data Structure',
          flags: '3',
          subject_code: 'CS1L001',
          resource_id: 'CS1L001020601'
        },
        {
          email_id: 'ade999@iitbbs.ac.in',
          year: '2017',
          type: 'tutorial',
          semester: 'autumn',
          subject_name: 'Programming and Data Structure',
          flags: '0',
          subject_code: 'CS1L001',
          resource_id: 'CS1L001030501'
        },
        {
          email_id: 'aef999@iitbbs.ac.in',
          year: '2018',
          type: 'tutorial',
          semester: 'autumn',
          subject_name: 'Programming and Data Structure',
          flags: '0',
          subject_code: 'CS1L001',
          resource_id: 'CS1L001030401'
        },
        {
          email_id: 'agh999@iitbbs.ac.in',
          year: '2019',
          type: 'tutorial',
          semester: 'spring',
          subject_name: 'Programming and Data Structure',
          flags: '0',
          subject_code: 'CS1L001',
          resource_id: 'CS1L001030301'
        },
        {
          email_id: 'aij999@iitbbs.ac.in',
          year: '2017',
          type: 'quiz',
          semester: 'autumn',
          subject_name: 'Programming and Data Structure',
          flags: '0',
          subject_code: 'CS1L001',
          resource_id: 'CS1L001040201'
        },
        {
          email_id: 'ajk999@iitbbs.ac.in',
          year: '2017',
          type: 'other',
          semester: 'spring',
          subject_name: 'Programming and Data Structure',
          flags: '0',
          subject_code: 'CS1L001',
          resource_id: 'CS1L001050101'
        },
        {
          email_id: 'aaa999@iitbbs.ac.in',
          year: '2017',
          type: 'midsem',
          semester: 'autumn',
          subject_name: 'Discrete Structures',
          flags: '0',
          subject_code: 'CS2L001',
          resource_id: 'CS2L001010091'
        },
        {
          email_id: 'abc999@iitbbs.ac.in',
          year: '2017',
          type: 'midsem',
          semester: 'autumn',
          subject_name: 'Discrete Structures',
          flags: '1',
          subject_code: 'CS2L001',
          resource_id: 'CS2L001010081'
        },
        {
          email_id: 'aaa999@iitbbs.ac.in',
          year: '2018',
          type: 'endsem',
          semester: 'autumn',
          subject_name: 'Discrete Structures',
          flags: '2',
          subject_code: 'CS2L001',
          resource_id: 'CS2L001020071'
        },
        {
          email_id: 'abc999@iitbbs.ac.in',
          year: '2018',
          type: 'endsem',
          semester: 'autumn',
          subject_name: 'Discrete Structure',
          flags: '3',
          subject_code: 'CS2L001',
          resource_id: 'CS2L001020061'
        },
        {
          email_id: 'ade999@iitbbs.ac.in',
          year: '2017',
          type: 'tutorial',
          semester: 'autumn',
          subject_name: 'Discrete Structure',
          flags: '0',
          subject_code: 'CS2L001',
          resource_id: 'CS2L001030051'
        },
        {
          email_id: 'aef999@iitbbs.ac.in',
          year: '2018',
          type: 'tutorial',
          semester: 'autumn',
          subject_name: 'Discrete Structure',
          flags: '0',
          subject_code: 'CS2L001',
          resource_id: 'CS2L001030041'
        },
        {
          email_id: 'agh999@iitbbs.ac.in',
          year: '2019',
          type: 'tutorial',
          semester: 'autumn',
          subject_name: 'Discrete Structure',
          flags: '0',
          subject_code: 'CS2L001',
          resource_id: 'CS2L001030031'
        },
        {
          email_id: 'aij999@iitbbs.ac.in',
          year: '2017',
          type: 'quiz',
          semester: 'autumn',
          subject_name: 'Discrete Structure',
          flags: '0',
          subject_code: 'CS2L001',
          resource_id: 'CS2L001040021'
        },
        {
          email_id: 'ajk999@iitbbs.ac.in',
          year: '2017',
          type: 'other',
          semester: 'autumn',
          subject_name: 'Discrete Structure',
          flags: '0',
          subject_code: 'CS2L001',
          resource_id: 'CS2L001050011'
        }];
  }
  if(subjectCode==='CS2L001'){
    jsArray=[{
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subject_name: 'Discrete Structures',
    flags: '0',
    subject_code: 'CS2L001',
    resource_id: 'CS2L001010091'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subject_name: 'Discrete Structures',
    flags: '1',
    subject_code: 'CS2L001',
    resource_id: 'CS2L001010081'
  },
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subject_name: 'Discrete Structures',
    flags: '2',
    subject_code: 'CS2L001',
    resource_id: 'CS2L001020071'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subject_name: 'Discrete Structure',
    flags: '3',
    subject_code: 'CS2L001',
    resource_id: 'CS2L001020061'
  },
  {
    email_id: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Discrete Structure',
    flags: '0',
    subject_code: 'CS2L001',
    resource_id: 'CS2L001030051'
  },
  {
    email_id: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Discrete Structure',
    flags: '0',
    subject_code: 'CS2L001',
    resource_id: 'CS2L001030041'
  },
  {
    email_id: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Discrete Structure',
    flags: '0',
    subject_code: 'CS2L001',
    resource_id: 'CS2L001030031'
  },
  {
    email_id: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'autumn',
    subject_name: 'Discrete Structure',
    flags: '0',
    subject_code: 'CS2L001',
    resource_id: 'CS2L001040021'
  },
  {
    email_id: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'other',
    semester: 'autumn',
    subject_name: 'Discrete Structure',
    flags: '0',
    subject_code: 'CS2L001',
    resource_id: 'CS2L001050011'
  }];
  }
}
if(branch==='EE'){
  if(subjectCode==='EE2L001'){
    jsArray=[{
  email_id: 'aaa999@iitbbs.ac.in',
  year: '2017',
  type: 'midsem',
  semester: 'spring',
  subject_name: 'Network Theory',
  flags: '0',
  subject_code: 'EE2L001',
  resource_id: 'EE2L001019009'
},
{
  email_id: 'abc999@iitbbs.ac.in',
  year: '2017',
  type: 'midsem',
  semester: 'spring',
  subject_name: 'Network Theory',
  flags: '1',
  subject_code: 'EE2L001',
  resource_id: 'EE2L001018008'
},
{
  email_id: 'aaa999@iitbbs.ac.in',
  year: '2018',
  type: 'endsem',
  semester: 'spring',
  subject_name: 'Network Theory',
  flags: '2',
  subject_code: 'EE2L001',
  resource_id: 'EE2L001027007'
},
{
  email_id: 'abc999@iitbbs.ac.in',
  year: '2018',
  type: 'endsem',
  semester: 'spring',
  subject_name: 'Network Theory',
  flags: '3',
  subject_code: 'EE2L001',
  resource_id: 'EE2L001026006'
},
{
  email_id: 'ade999@iitbbs.ac.in',
  year: '2017',
  type: 'tutorial',
  semester: 'spring',
  subject_name: 'Network Theory',
  flags: '0',
  subject_code: 'EE2L001',
  resource_id: 'EE2L001035005'
},
{
  email_id: 'aef999@iitbbs.ac.in',
  year: '2018',
  type: 'tutorial',
  semester: 'spring',
  subject_name: 'Network Theory',
  flags: '1',
  subject_code: 'EE2L001',
  resource_id: 'EE2L001034004'
},
{
  email_id: 'agh999@iitbbs.ac.in',
  year: '2019',
  type: 'tutorial',
  semester: 'spring',
  subject_name: 'Network Theory',
  flags: '0',
  subject_code: 'EE2L001',
  resource_id: 'EE2L001033003'
},
{
  email_id: 'aij999@iitbbs.ac.in',
  year: '2017',
  type: 'quiz',
  semester: 'spring',
  subject_name: 'Network Theory',
  flags: '3',
  subject_code: 'EE2L001',
  resource_id: 'EE2L001042002'
},
{
  email_id: 'ajk999@iitbbs.ac.in',
  year: '2017',
  type: 'other',
  semester: 'spring',
  subject_name: 'Network Theory',
  flags: '2',
  subject_code: 'EE2L001',
  resource_id: 'EE2L001051001'
}];
  }
  if(subjectCode==='EE3L001'){
    jsArray=[{
  email_id: 'aaa999@iitbbs.ac.in',
  year: '2017',
  type: 'midsem',
  semester: 'autumn',
  subject_name: 'Electric Machines',
  flags: '0',
  subject_code: 'EE3L001',
  resource_id: 'EE3L001019109'
},
{
  email_id: 'abc999@iitbbs.ac.in',
  year: '2017',
  type: 'midsem',
  semester: 'autumn',
  subject_name: 'Electric Machines',
  flags: '1',
  subject_code: 'EE3L001',
  resource_id: 'EE3L001018208'
},
{
  email_id: 'aaa999@iitbbs.ac.in',
  year: '2018',
  type: 'endsem',
  semester: 'autumn',
  subject_name: 'Electric Machines',
  flags: '2',
  subject_code: 'EE3L001',
  resource_id: 'EE3L001027307'
},
{
  email_id: 'abc999@iitbbs.ac.in',
  year: '2018',
  type: 'endsem',
  semester: 'autumn',
  subject_name: 'Electric Machines',
  flags: '3',
  subject_code: 'EE3L001',
  resource_id: 'EE3L001026406'
},
{
  email_id: 'ade999@iitbbs.ac.in',
  year: '2017',
  type: 'tutorial',
  semester: 'autumn',
  subject_name: 'Electric Machines',
  flags: '0',
  subject_code: 'EE3L001',
  resource_id: 'EE3L001035505'
},
{
  email_id: 'aef999@iitbbs.ac.in',
  year: '2018',
  type: 'tutorial',
  semester: 'autumn',
  subject_name: 'Electric Machines',
  flags: '1',
  subject_code: 'EE3L001',
  resource_id: 'EE3L001034604'
},
{
  email_id: 'agh999@iitbbs.ac.in',
  year: '2019',
  type: 'tutorial',
  semester: 'autumn',
  subject_name: 'Electric Machines',
  flags: '0',
  subject_code: 'EE3L001',
  resource_id: 'EE3L001033703'
},
{
  email_id: 'aij999@iitbbs.ac.in',
  year: '2017',
  type: 'quiz',
  semester: 'autumn',
  subject_name: 'Electric Machines',
  flags: '3',
  subject_code: 'EE3L001',
  resource_id: 'EE3L001042802'
},
{
  email_id: 'ajk999@iitbbs.ac.in',
  year: '2017',
  type: 'other',
  semester: 'autumn',
  subject_name: 'Electric Machines',
  flags: '2',
  subject_code: 'EE3L001',
  resource_id: 'EE3L001051901'
}];
  }
  if(subjectCode==='EE3L003'){
    jsArray=[{
  email_id: 'aaa999@iitbbs.ac.in',
  year: '2017',
  type: 'midsem',
  semester: 'spring',
  subject_name: 'Control Systems',
  flags: '0',
  subject_code: 'EE3L003',
  resource_id: 'EE3L003019119'
},
{
  email_id: 'abc999@iitbbs.ac.in',
  year: '2017',
  type: 'midsem',
  semester: 'spring',
  subject_name: 'Control Systems',
  flags: '1',
  subject_code: 'EE3L003',
  resource_id: 'EE3L003018228'
},
{
  email_id: 'aaa999@iitbbs.ac.in',
  year: '2018',
  type: 'endsem',
  semester: 'spring',
  subject_name: 'Control Systems',
  flags: '2',
  subject_code: 'EE3L003',
  resource_id: 'EE3L003027337'
},
{
  email_id: 'abc999@iitbbs.ac.in',
  year: '2018',
  type: 'endsem',
  semester: 'spring',
  subject_name: 'Control Systems',
  flags: '3',
  subject_code: 'EE3L003',
  resource_id: 'EE3L003026446'
},
{
  email_id: 'ade999@iitbbs.ac.in',
  year: '2017',
  type: 'tutorial',
  semester: 'spring',
  subject_name: 'Control Systems',
  flags: '0',
  subject_code: 'EE3L003',
  resource_id: 'EE3L003035555'
},
{
  email_id: 'aef999@iitbbs.ac.in',
  year: '2018',
  type: 'tutorial',
  semester: 'spring',
  subject_name: 'Control Systems',
  flags: '1',
  subject_code: 'EE3L003',
  resource_id: 'EE3L003034664'
},
{
  email_id: 'agh999@iitbbs.ac.in',
  year: '2019',
  type: 'tutorial',
  semester: 'spring',
  subject_name: 'Control Systems',
  flags: '0',
  subject_code: 'EE3L003',
  resource_id: 'EE3L003033773'
},
{
  email_id: 'aij999@iitbbs.ac.in',
  year: '2017',
  type: 'quiz',
  semester: 'spring',
  subject_name: 'Control Systems',
  flags: '3',
  subject_code: 'EE3L003',
  resource_id: 'EE3L003042882'
},
{
  email_id: 'ajk999@iitbbs.ac.in',
  year: '2017',
  type: 'other',
  semester: 'spring',
  subject_name: 'Control Systems',
  flags: '2',
  subject_code: 'EE3L003',
  resource_id: 'EE3L003051991'
}];
  }
}
  if(branch==='ME'){
    if(subjectCode==='ME2L001'){
      jsArray=[{
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subject_name: 'Theory of Machines - 1',
    flags: '0',
    subject_code: 'ME2L001',
    resource_id: 'ME2L001010151'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subject_name: 'Theory of Machines - 1',
    flags: '1',
    subject_code: 'ME2L001',
    resource_id: 'ME2L001010152'
  },
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subject_name: 'Theory of Machines - 1',
    flags: '2',
    subject_code: 'ME2L001',
    resource_id: 'ME2L001020153'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subject_name: 'Theory of Machines - 1',
    flags: '3',
    subject_code: 'ME2L001',
    resource_id: 'ME2L001020154'
  },
  {
    email_id: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Theory of Machines - 1',
    flags: '0',
    subject_code: 'ME2L001',
    resource_id: 'ME2L001030155'
  },
  {
    email_id: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Theory of Machines - 1',
    flags: '1',
    subject_code: 'ME2L001',
    resource_id: 'ME2L001030156'
  },
  {
    email_id: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Theory of Machines - 1',
    flags: '0',
    subject_code: 'ME2L001',
    resource_id: 'ME2L001030157'
  },
  {
    email_id: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'autumn',
    subject_name: 'Theory of Machines - 1',
    flags: '3',
    subject_code: 'ME2L001',
    resource_id: 'ME2L001040158'
  },
  {
    email_id: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'other',
    semester: 'autumn',
    subject_name: 'Theory of Machines - 1',
    flags: '2',
    subject_code: 'ME2L001',
    resource_id: 'ME2L001050159'
  }];
    }
    if(subjectCode==='ME3L001'){
      jsArray=[{
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subject_name: 'Heat Transfer',
    flags: '0',
    subject_code: 'ME3L001',
    resource_id: 'ME3L001019109'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subject_name: 'Heat Transfer',
    flags: '1',
    subject_code: 'ME3L001',
    resource_id: 'ME3L001018108'
  },
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subject_name: 'Heat Transfer',
    flags: '2',
    subject_code: 'ME3L001',
    resource_id: 'ME3L001027107'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subject_name: 'Heat Transfer',
    flags: '3',
    subject_code: 'ME3L001',
    resource_id: 'ME3L001026106'
  },
  {
    email_id: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Heat Transfer',
    flags: '0',
    subject_code: 'ME3L001',
    resource_id: 'ME3L001035105'
  },
  {
    email_id: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Heat Transfer',
    flags: '1',
    subject_code: 'ME3L001',
    resource_id: 'ME3L001034104'
  },
  {
    email_id: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Heat Transfer',
    flags: '0',
    subject_code: 'ME3L001',
    resource_id: 'ME3L001033103'
  },
  {
    email_id: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'autumn',
    subject_name: 'Heat Transfer',
    flags: '3',
    subject_code: 'ME3L001',
    resource_id: 'ME3L001042102'
  },
  {
    email_id: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'other',
    semester: 'autumn',
    subject_name: 'Heat Transfer',
    flags: '2',
    subject_code: 'ME3L001',
    resource_id: 'ME3L001051101'
  }];
    }
    if(subjectCode==='ME3L005'){
      jsArray=[{
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'spring',
    subject_name: 'IC Engines',
    flags: '0',
    subject_code: 'ME3L005',
    resource_id: 'ME3L005019119'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'spring',
    subject_name: 'IC Engines',
    flags: '1',
    subject_code: 'ME3L005',
    resource_id: 'ME3L005018218'
  },
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'spring',
    subject_name: 'IC Engines',
    flags: '2',
    subject_code: 'ME3L005',
    resource_id: 'ME3L005027317'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'spring',
    subject_name: 'IC Engines',
    flags: '3',
    subject_code: 'ME3L005',
    resource_id: 'ME3L005026416'
  },
  {
    email_id: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'spring',
    subject_name: 'IC Engines',
    flags: '0',
    subject_code: 'ME3L005',
    resource_id: 'ME3L005035515'
  },
  {
    email_id: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'spring',
    subject_name: 'IC Engines',
    flags: '1',
    subject_code: 'ME3L005',
    resource_id: 'ME3L005034614'
  },
  {
    email_id: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'spring',
    subject_name: 'IC Engines',
    flags: '0',
    subject_code: 'ME3L005',
    resource_id: 'ME3L005033713'
  },
  {
    email_id: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'spring',
    subject_name: 'IC Engines',
    flags: '3',
    subject_code: 'ME3L005',
    resource_id: 'ME3L005042812'
  },
  {
    email_id: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'other',
    semester: 'spring',
    subject_name: 'IC Engines',
    flags: '2',
    subject_code: 'ME3L005',
    resource_id: 'ME3L005051911'
  }];
    }
  }
  return jsArray;
};


// 2. jsSubjectsByBranch
// Function that would call the REST api and fetch the json object containing
// all the subjects of the specified branch

  var jsSubjectsByBranch = function(branch){         // branch = branch code eg. CS, EE, PH
  let endpoint=`http://localhost:3000/studyResouces/branches/${branch}/subject;
  /*$.ajax({
      url: endpoint,
      type: 'GET',
      dataType: 'json',
      error: function(xhr){
        alert("Something went wrong, please try again.");
      },
      success: function(res) {
        alert("Success!");
        let jsonData = res;
        let jsArray = JSON.parse(jsonData);
        return jsArray;
      }
  });*/
  let jsArray;
  if(branch === 'CS'){
     array = [{    subject_name: 'Data Structure',  subject_code: 'CS2L003'
   },{    subject_name: 'Programming and Data Structure',  subject_code: 'CS1L001'},
   {    subject_name: 'Discrete Structure',  subject_code: 'CS2L001'}];
      return jsArray;
  }
  if(branch === 'EE'){
     array = [{    subject_name: 'Network Theory',  subject_code: 'EE2L001'
   },{    subject_name: 'Electric Machines',  subject_code: 'EE3L001'},
   {    subject_name: 'Control Systems',  subject_code: 'EE3L003'}];
      return jsArray;
  }
  if(branch === 'ME'){
     array = [{    subject_name: 'Theory of Machines - 1',  subject_code: 'ME2L001'
   },{    subject_name: 'Heat Transfer',  subject_code: 'ME3L001'},
   {    subject_name: 'IC Engines',  subject_code: 'ME3L005'}];
      return jsArray;
  }
  else {
    return;
  }

};


// 3. jsAllResources
// Function that would call the REST api and fetch the json containing
// all the information about all the resources.

  var jsAllResources = function(){
  let endpoint="http://server/studyResouces"; //endpoint may be changed based on api
  /*$.ajax({
      url: endpoint,
      type: 'GET',
      dataType: 'json',
      error: function(xhr){
        alert("Something went wrong, please try again.");
      },
      success: function(res) {
        alert("Success!");
        let jsonData = res;
        let jsArray = JSON.parse(jsonData);
        return jsArray;
      }*/
  let jsArray;
  jsArray=[
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subject_name: 'Data Structure',
    flags: '0',
    subject_code: 'CS2L003',
    resource_id: 'CS2L003010009'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subject_name: 'Data Structure',
    flags: '1',
    subject_code: 'CS2L003',
    resource_id: 'CS2L003010008'
  },
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subject_name: 'Data Structure',
    flags: '2',
    subject_code: 'CS2L003',
    resource_id: 'CS2L003020007'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subject_name: 'Data Structure',
    flags: '3',
    subject_code: 'CS2L003',
    resource_id: 'CS2L003020006'
  },
  {
    email_id: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Data Structure',
    flags: '0',
    subject_code: 'CS2L003',
    resource_id: 'CS2L003030005'
  },
  {
    email_id: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Data Structure',
    flags: '0',
    subject_code: 'CS2L003',
    resource_id: 'CS2L003030004'
  },
  {
    email_id: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Data Structure',
    flags: '0',
    subject_code: 'CS2L003',
    resource_id: 'CS2L003030003'
  },
  {
    email_id: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'autumn',
    subject_name: 'Data Structure',
    flags: '0',
    subject_code: 'CS2L003',
    resource_id: 'CS2L003040002'
  },
  {
    email_id: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'other',
    semester: 'autumn',
    subject_name: 'Data Structure',
    flags: '0',
    subject_code: 'CS2L003',
    resource_id: 'CS2L003050001'
  },
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subject_name: 'Programming and Data Structure',
    flags: '0',
    subject_code: 'CS1L001',
    resource_id: 'CS1L001010901'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'spring',
    subject_name: 'Programming and Data Structure',
    flags: '1',
    subject_code: 'CS1L001',
    resource_id: 'CS1L001010801'
  },
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subject_name: 'Programming and Data Structure',
    flags: '2',
    subject_code: 'CS1L001',
    resource_id: 'CS1L001020701'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'spring',
    subject_name: 'Programming and Data Structure',
    flags: '3',
    subject_code: 'CS1L001',
    resource_id: 'CS1L001020601'
  },
  {
    email_id: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Programming and Data Structure',
    flags: '0',
    subject_code: 'CS1L001',
    resource_id: 'CS1L001030501'
  },
  {
    email_id: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Programming and Data Structure',
    flags: '0',
    subject_code: 'CS1L001',
    resource_id: 'CS1L001030401'
  },
  {
    email_id: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'spring',
    subject_name: 'Programming and Data Structure',
    flags: '0',
    subject_code: 'CS1L001',
    resource_id: 'CS1L001030301'
  },
  {
    email_id: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'autumn',
    subject_name: 'Programming and Data Structure',
    flags: '0',
    subject_code: 'CS1L001',
    resource_id: 'CS1L001040201'
  },
  {
    email_id: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'other',
    semester: 'spring',
    subject_name: 'Programming and Data Structure',
    flags: '0',
    subject_code: 'CS1L001',
    resource_id: 'CS1L001050101'
  },
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subject_name: 'Discrete Structures',
    flags: '0',
    subject_code: 'CS2L001',
    resource_id: 'CS2L001010091'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subject_name: 'Discrete Structures',
    flags: '1',
    subject_code: 'CS2L001',
    resource_id: 'CS2L001010081'
  },
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subject_name: 'Discrete Structures',
    flags: '2',
    subject_code: 'CS2L001',
    resource_id: 'CS2L001020071'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subject_name: 'Discrete Structure',
    flags: '3',
    subject_code: 'CS2L001',
    resource_id: 'CS2L001020061'
  },
  {
    email_id: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Discrete Structure',
    flags: '0',
    subject_code: 'CS2L001',
    resource_id: 'CS2L001030051'
  },
  {
    email_id: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Discrete Structure',
    flags: '0',
    subject_code: 'CS2L001',
    resource_id: 'CS2L001030041'
  },
  {
    email_id: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Discrete Structure',
    flags: '0',
    subject_code: 'CS2L001',
    resource_id: 'CS2L001030031'
  },
  {
    email_id: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'autumn',
    subject_name: 'Discrete Structure',
    flags: '0',
    subject_code: 'CS2L001',
    resource_id: 'CS2L001040021'
  },
  {
    email_id: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'other',
    semester: 'autumn',
    subject_name: 'Discrete Structure',
    flags: '0',
    subject_code: 'CS2L001',
    resource_id: 'CS2L001050011'
  },
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'spring',
    subject_name: 'Network Theory',
    flags: '0',
    subject_code: 'EE2L001',
    resource_id: 'EE2L001019009'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'spring',
    subject_name: 'Network Theory',
    flags: '1',
    subject_code: 'EE2L001',
    resource_id: 'EE2L001018008'
  },
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'spring',
    subject_name: 'Network Theory',
    flags: '2',
    subject_code: 'EE2L001',
    resource_id: 'EE2L001027007'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'spring',
    subject_name: 'Network Theory',
    flags: '3',
    subject_code: 'EE2L001',
    resource_id: 'EE2L001026006'
  },
  {
    email_id: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'spring',
    subject_name: 'Network Theory',
    flags: '0',
    subject_code: 'EE2L001',
    resource_id: 'EE2L001035005'
  },
  {
    email_id: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'spring',
    subject_name: 'Network Theory',
    flags: '1',
    subject_code: 'EE2L001',
    resource_id: 'EE2L001034004'
  },
  {
    email_id: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'spring',
    subject_name: 'Network Theory',
    flags: '0',
    subject_code: 'EE2L001',
    resource_id: 'EE2L001033003'
  },
  {
    email_id: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'spring',
    subject_name: 'Network Theory',
    flags: '3',
    subject_code: 'EE2L001',
    resource_id: 'EE2L001042002'
  },
  {
    email_id: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'other',
    semester: 'spring',
    subject_name: 'Network Theory',
    flags: '2',
    subject_code: 'EE2L001',
    resource_id: 'EE2L001051001'
  },
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subject_name: 'Electric Machines',
    flags: '0',
    subject_code: 'EE3L001',
    resource_id: 'EE3L001019109'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subject_name: 'Electric Machines',
    flags: '1',
    subject_code: 'EE3L001',
    resource_id: 'EE3L001018208'
  },
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subject_name: 'Electric Machines',
    flags: '2',
    subject_code: 'EE3L001',
    resource_id: 'EE3L001027307'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subject_name: 'Electric Machines',
    flags: '3',
    subject_code: 'EE3L001',
    resource_id: 'EE3L001026406'
  },
  {
    email_id: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Electric Machines',
    flags: '0',
    subject_code: 'EE3L001',
    resource_id: 'EE3L001035505'
  },
  {
    email_id: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Electric Machines',
    flags: '1',
    subject_code: 'EE3L001',
    resource_id: 'EE3L001034604'
  },
  {
    email_id: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Electric Machines',
    flags: '0',
    subject_code: 'EE3L001',
    resource_id: 'EE3L001033703'
  },
  {
    email_id: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'autumn',
    subject_name: 'Electric Machines',
    flags: '3',
    subject_code: 'EE3L001',
    resource_id: 'EE3L001042802'
  },
  {
    email_id: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'other',
    semester: 'autumn',
    subject_name: 'Electric Machines',
    flags: '2',
    subject_code: 'EE3L001',
    resource_id: 'EE3L001051901'
  },
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'spring',
    subject_name: 'Control Systems',
    flags: '0',
    subject_code: 'EE3L003',
    resource_id: 'EE3L003019119'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'spring',
    subject_name: 'Control Systems',
    flags: '1',
    subject_code: 'EE3L003',
    resource_id: 'EE3L003018228'
  },
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'spring',
    subject_name: 'Control Systems',
    flags: '2',
    subject_code: 'EE3L003',
    resource_id: 'EE3L003027337'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'spring',
    subject_name: 'Control Systems',
    flags: '3',
    subject_code: 'EE3L003',
    resource_id: 'EE3L003026446'
  },
  {
    email_id: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'spring',
    subject_name: 'Control Systems',
    flags: '0',
    subject_code: 'EE3L003',
    resource_id: 'EE3L003035555'
  },
  {
    email_id: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'spring',
    subject_name: 'Control Systems',
    flags: '1',
    subject_code: 'EE3L003',
    resource_id: 'EE3L003034664'
  },
  {
    email_id: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'spring',
    subject_name: 'Control Systems',
    flags: '0',
    subject_code: 'EE3L003',
    resource_id: 'EE3L003033773'
  },
  {
    email_id: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'spring',
    subject_name: 'Control Systems',
    flags: '3',
    subject_code: 'EE3L003',
    resource_id: 'EE3L003042882'
  },
  {
    email_id: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'other',
    semester: 'spring',
    subject_name: 'Control Systems',
    flags: '2',
    subject_code: 'EE3L003',
    resource_id: 'EE3L003051991'
  },
  [
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subject_name: 'Theory of Machines - 1',
    flags: '0',
    subject_code: 'ME2L001',
    resource_id: 'ME2L001010151'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subject_name: 'Theory of Machines - 1',
    flags: '1',
    subject_code: 'ME2L001',
    resource_id: 'ME2L001010152'
  },
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subject_name: 'Theory of Machines - 1',
    flags: '2',
    subject_code: 'ME2L001',
    resource_id: 'ME2L001020153'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subject_name: 'Theory of Machines - 1',
    flags: '3',
    subject_code: 'ME2L001',
    resource_id: 'ME2L001020154'
  },
  {
    email_id: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Theory of Machines - 1',
    flags: '0',
    subject_code: 'ME2L001',
    resource_id: 'ME2L001030155'
  },
  {
    email_id: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Theory of Machines - 1',
    flags: '1',
    subject_code: 'ME2L001',
    resource_id: 'ME2L001030156'
  },
  {
    email_id: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Theory of Machines - 1',
    flags: '0',
    subject_code: 'ME2L001',
    resource_id: 'ME2L001030157'
  },
  {
    email_id: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'autumn',
    subject_name: 'Theory of Machines - 1',
    flags: '3',
    subject_code: 'ME2L001',
    resource_id: 'ME2L001040158'
  },
  {
    email_id: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'other',
    semester: 'autumn',
    subject_name: 'Theory of Machines - 1',
    flags: '2',
    subject_code: 'ME2L001',
    resource_id: 'ME2L001050159'
  },
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subject_name: 'Heat Transfer',
    flags: '0',
    subject_code: 'ME3L001',
    resource_id: 'ME3L001019109'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subject_name: 'Heat Transfer',
    flags: '1',
    subject_code: 'ME3L001',
    resource_id: 'ME3L001018108'
  },
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subject_name: 'Heat Transfer',
    flags: '2',
    subject_code: 'ME3L001',
    resource_id: 'ME3L001027107'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subject_name: 'Heat Transfer',
    flags: '3',
    subject_code: 'ME3L001',
    resource_id: 'ME3L001026106'
  },
  {
    email_id: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Heat Transfer',
    flags: '0',
    subject_code: 'ME3L001',
    resource_id: 'ME3L001035105'
  },
  {
    email_id: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Heat Transfer',
    flags: '1',
    subject_code: 'ME3L001',
    resource_id: 'ME3L001034104'
  },
  {
    email_id: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'autumn',
    subject_name: 'Heat Transfer',
    flags: '0',
    subject_code: 'ME3L001',
    resource_id: 'ME3L001033103'
  },
  {
    email_id: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'autumn',
    subject_name: 'Heat Transfer',
    flags: '3',
    subject_code: 'ME3L001',
    resource_id: 'ME3L001042102'
  },
  {
    email_id: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'other',
    semester: 'autumn',
    subject_name: 'Heat Transfer',
    flags: '2',
    subject_code: 'ME3L001',
    resource_id: 'ME3L001051101'
  },
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'spring',
    subject_name: 'IC Engines',
    flags: '0',
    subject_code: 'ME3L005',
    resource_id: 'ME3L005019119'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'spring',
    subject_name: 'IC Engines',
    flags: '1',
    subject_code: 'ME3L005',
    resource_id: 'ME3L005018218'
  },
  {
    email_id: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'spring',
    subject_name: 'IC Engines',
    flags: '2',
    subject_code: 'ME3L005',
    resource_id: 'ME3L005027317'
  },
  {
    email_id: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'spring',
    subject_name: 'IC Engines',
    flags: '3',
    subject_code: 'ME3L005',
    resource_id: 'ME3L005026416'
  },
  {
    email_id: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'spring',
    subject_name: 'IC Engines',
    flags: '0',
    subject_code: 'ME3L005',
    resource_id: 'ME3L005035515'
  },
  {
    email_id: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'spring',
    subject_name: 'IC Engines',
    flags: '1',
    subject_code: 'ME3L005',
    resource_id: 'ME3L005034614'
  },
  {
    email_id: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'spring',
    subject_name: 'IC Engines',
    flags: '0',
    subject_code: 'ME3L005',
    resource_id: 'ME3L005033713'
  },
  {
    email_id: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'spring',
    subject_name: 'IC Engines',
    flags: '3',
    subject_code: 'ME3L005',
    resource_id: 'ME3L005042812'
  },
  {
    email_id: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'other',
    semester: 'spring',
    subject_name: 'IC Engines',
    flags: '2',
    subject_code: 'ME3L005',
    resource_id: 'ME3L005051911'
  }
];
return jsArray;
};
