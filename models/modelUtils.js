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
          emailId: 'aaa999@iitbbs.ac.in',
          year: '2017',
          type: 'midsem',
          semester: 'autumn',
          subjectName: 'Data Structure',
          flags: '0',
          subjectCode: 'CS2L003',
          resourceId: 'CS2L003010009'
        },
        {
          emailId: 'abc999@iitbbs.ac.in',
          year: '2017',
          type: 'midsem',
          semester: 'autumn',
          subjectName: 'Data Structure',
          flags: '1',
          subjectCode: 'CS2L003',
          resourceId: 'CS2L003010008'
        },
        {
          emailId: 'aaa999@iitbbs.ac.in',
          year: '2018',
          type: 'endsem',
          semester: 'autumn',
          subjectName: 'Data Structure',
          flags: '2',
          subjectCode: 'CS2L003',
          resourceId: 'CS2L003020007'
        },
        {
          emailId: 'abc999@iitbbs.ac.in',
          year: '2018',
          type: 'endsem',
          semester: 'autumn',
          subjectName: 'Data Structure',
          flags: '3',
          subjectCode: 'CS2L003',
          resourceId: 'CS2L003020006'
        },
        {
          emailId: 'ade999@iitbbs.ac.in',
          year: '2017',
          type: 'tutorial',
          semester: 'autumn',
          subjectName: 'Data Structure',
          flags: '0',
          subjectCode: 'CS2L003',
          resourceId: 'CS2L003030005'
        },
        {
          emailId: 'aef999@iitbbs.ac.in',
          year: '2018',
          type: 'tutorial',
          semester: 'autumn',
          subjectName: 'Data Structure',
          flags: '0',
          subjectCode: 'CS2L003',
          resourceId: 'CS2L003030004'
        },
        {
          emailId: 'agh999@iitbbs.ac.in',
          year: '2019',
          type: 'tutorial',
          semester: 'autumn',
          subjectName: 'Data Structure',
          flags: '0',
          subjectCode: 'CS2L003',
          resourceId: 'CS2L003030003'
        },
        {
          emailId: 'aij999@iitbbs.ac.in',
          year: '2017',
          type: 'quiz',
          semester: 'autumn',
          subjectName: 'Data Structure',
          flags: '0',
          subjectCode: 'CS2L003',
          resourceId: 'CS2L003040002'
        },
        {
          emailId: 'ajk999@iitbbs.ac.in',
          year: '2017',
          type: 'others',
          semester: 'autumn',
          subjectName: 'Data Structure',
          flags: '0',
          subjectCode: 'CS2L003',
          resourceId: 'CS2L003050001'
        }];
      }
      if(subjectCode==='CS1L001'){
        jsArray=[
        {
          emailId: 'aaa999@iitbbs.ac.in',
          year: '2017',
          type: 'midsem',
          semester: 'autumn',
          subjectName: 'Programming and Data Structure',
          flags: '0',
          subjectCode: 'CS1L001',
          resourceId: 'CS1L001010901'
        },
        {
          emailId: 'abc999@iitbbs.ac.in',
          year: '2017',
          type: 'midsem',
          semester: 'spring',
          subjectName: 'Programming and Data Structure',
          flags: '1',
          subjectCode: 'CS1L001',
          resourceId: 'CS1L001010801'
        },
        {
          emailId: 'aaa999@iitbbs.ac.in',
          year: '2018',
          type: 'endsem',
          semester: 'autumn',
          subjectName: 'Programming and Data Structure',
          flags: '2',
          subjectCode: 'CS1L001',
          resourceId: 'CS1L001020701'
        },
        {
          emailId: 'abc999@iitbbs.ac.in',
          year: '2018',
          type: 'endsem',
          semester: 'spring',
          subjectName: 'Programming and Data Structure',
          flags: '3',
          subjectCode: 'CS1L001',
          resourceId: 'CS1L001020601'
        },
        {
          emailId: 'ade999@iitbbs.ac.in',
          year: '2017',
          type: 'tutorial',
          semester: 'autumn',
          subjectName: 'Programming and Data Structure',
          flags: '0',
          subjectCode: 'CS1L001',
          resourceId: 'CS1L001030501'
        },
        {
          emailId: 'aef999@iitbbs.ac.in',
          year: '2018',
          type: 'tutorial',
          semester: 'autumn',
          subjectName: 'Programming and Data Structure',
          flags: '0',
          subjectCode: 'CS1L001',
          resourceId: 'CS1L001030401'
        },
        {
          emailId: 'agh999@iitbbs.ac.in',
          year: '2019',
          type: 'tutorial',
          semester: 'spring',
          subjectName: 'Programming and Data Structure',
          flags: '0',
          subjectCode: 'CS1L001',
          resourceId: 'CS1L001030301'
        },
        {
          emailId: 'aij999@iitbbs.ac.in',
          year: '2017',
          type: 'quiz',
          semester: 'autumn',
          subjectName: 'Programming and Data Structure',
          flags: '0',
          subjectCode: 'CS1L001',
          resourceId: 'CS1L001040201'
        },
        {
          emailId: 'ajk999@iitbbs.ac.in',
          year: '2017',
          type: 'others',
          semester: 'spring',
          subjectName: 'Programming and Data Structure',
          flags: '0',
          subjectCode: 'CS1L001',
          resourceId: 'CS1L001050101'
        },
        {
          emailId: 'aaa999@iitbbs.ac.in',
          year: '2017',
          type: 'midsem',
          semester: 'autumn',
          subjectName: 'Discrete Structures',
          flags: '0',
          subjectCode: 'CS2L001',
          resourceId: 'CS2L001010091'
        },
        {
          emailId: 'abc999@iitbbs.ac.in',
          year: '2017',
          type: 'midsem',
          semester: 'autumn',
          subjectName: 'Discrete Structures',
          flags: '1',
          subjectCode: 'CS2L001',
          resourceId: 'CS2L001010081'
        },
        {
          emailId: 'aaa999@iitbbs.ac.in',
          year: '2018',
          type: 'endsem',
          semester: 'autumn',
          subjectName: 'Discrete Structures',
          flags: '2',
          subjectCode: 'CS2L001',
          resourceId: 'CS2L001020071'
        },
        {
          emailId: 'abc999@iitbbs.ac.in',
          year: '2018',
          type: 'endsem',
          semester: 'autumn',
          subjectName: 'Discrete Structure',
          flags: '3',
          subjectCode: 'CS2L001',
          resourceId: 'CS2L001020061'
        },
        {
          emailId: 'ade999@iitbbs.ac.in',
          year: '2017',
          type: 'tutorial',
          semester: 'autumn',
          subjectName: 'Discrete Structure',
          flags: '0',
          subjectCode: 'CS2L001',
          resourceId: 'CS2L001030051'
        },
        {
          emailId: 'aef999@iitbbs.ac.in',
          year: '2018',
          type: 'tutorial',
          semester: 'autumn',
          subjectName: 'Discrete Structure',
          flags: '0',
          subjectCode: 'CS2L001',
          resourceId: 'CS2L001030041'
        },
        {
          emailId: 'agh999@iitbbs.ac.in',
          year: '2019',
          type: 'tutorial',
          semester: 'autumn',
          subjectName: 'Discrete Structure',
          flags: '0',
          subjectCode: 'CS2L001',
          resourceId: 'CS2L001030031'
        },
        {
          emailId: 'aij999@iitbbs.ac.in',
          year: '2017',
          type: 'quiz',
          semester: 'autumn',
          subjectName: 'Discrete Structure',
          flags: '0',
          subjectCode: 'CS2L001',
          resourceId: 'CS2L001040021'
        },
        {
          emailId: 'ajk999@iitbbs.ac.in',
          year: '2017',
          type: 'others',
          semester: 'autumn',
          subjectName: 'Discrete Structure',
          flags: '0',
          subjectCode: 'CS2L001',
          resourceId: 'CS2L001050011'
        }];
  }
  if(subjectCode==='CS2L001'){
    jsArray=[{
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subjectName: 'Discrete Structures',
    flags: '0',
    subjectCode: 'CS2L001',
    resourceId: 'CS2L001010091'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subjectName: 'Discrete Structures',
    flags: '1',
    subjectCode: 'CS2L001',
    resourceId: 'CS2L001010081'
  },
  {
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subjectName: 'Discrete Structures',
    flags: '2',
    subjectCode: 'CS2L001',
    resourceId: 'CS2L001020071'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subjectName: 'Discrete Structure',
    flags: '3',
    subjectCode: 'CS2L001',
    resourceId: 'CS2L001020061'
  },
  {
    emailId: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Discrete Structure',
    flags: '0',
    subjectCode: 'CS2L001',
    resourceId: 'CS2L001030051'
  },
  {
    emailId: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Discrete Structure',
    flags: '0',
    subjectCode: 'CS2L001',
    resourceId: 'CS2L001030041'
  },
  {
    emailId: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Discrete Structure',
    flags: '0',
    subjectCode: 'CS2L001',
    resourceId: 'CS2L001030031'
  },
  {
    emailId: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'autumn',
    subjectName: 'Discrete Structure',
    flags: '0',
    subjectCode: 'CS2L001',
    resourceId: 'CS2L001040021'
  },
  {
    emailId: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'others',
    semester: 'autumn',
    subjectName: 'Discrete Structure',
    flags: '0',
    subjectCode: 'CS2L001',
    resourceId: 'CS2L001050011'
  }];
  }
}
if(branch==='EE'){
  if(subjectCode==='EE2L001'){
    jsArray=[{
  emailId: 'aaa999@iitbbs.ac.in',
  year: '2017',
  type: 'midsem',
  semester: 'spring',
  subjectName: 'Network Theory',
  flags: '0',
  subjectCode: 'EE2L001',
  resourceId: 'EE2L001019009'
},
{
  emailId: 'abc999@iitbbs.ac.in',
  year: '2017',
  type: 'midsem',
  semester: 'spring',
  subjectName: 'Network Theory',
  flags: '1',
  subjectCode: 'EE2L001',
  resourceId: 'EE2L001018008'
},
{
  emailId: 'aaa999@iitbbs.ac.in',
  year: '2018',
  type: 'endsem',
  semester: 'spring',
  subjectName: 'Network Theory',
  flags: '2',
  subjectCode: 'EE2L001',
  resourceId: 'EE2L001027007'
},
{
  emailId: 'abc999@iitbbs.ac.in',
  year: '2018',
  type: 'endsem',
  semester: 'spring',
  subjectName: 'Network Theory',
  flags: '3',
  subjectCode: 'EE2L001',
  resourceId: 'EE2L001026006'
},
{
  emailId: 'ade999@iitbbs.ac.in',
  year: '2017',
  type: 'tutorial',
  semester: 'spring',
  subjectName: 'Network Theory',
  flags: '0',
  subjectCode: 'EE2L001',
  resourceId: 'EE2L001035005'
},
{
  emailId: 'aef999@iitbbs.ac.in',
  year: '2018',
  type: 'tutorial',
  semester: 'spring',
  subjectName: 'Network Theory',
  flags: '1',
  subjectCode: 'EE2L001',
  resourceId: 'EE2L001034004'
},
{
  emailId: 'agh999@iitbbs.ac.in',
  year: '2019',
  type: 'tutorial',
  semester: 'spring',
  subjectName: 'Network Theory',
  flags: '0',
  subjectCode: 'EE2L001',
  resourceId: 'EE2L001033003'
},
{
  emailId: 'aij999@iitbbs.ac.in',
  year: '2017',
  type: 'quiz',
  semester: 'spring',
  subjectName: 'Network Theory',
  flags: '3',
  subjectCode: 'EE2L001',
  resourceId: 'EE2L001042002'
},
{
  emailId: 'ajk999@iitbbs.ac.in',
  year: '2017',
  type: 'others',
  semester: 'spring',
  subjectName: 'Network Theory',
  flags: '2',
  subjectCode: 'EE2L001',
  resourceId: 'EE2L001051001'
}];
  }
  if(subjectCode==='EE3L001'){
    jsArray=[{
  emailId: 'aaa999@iitbbs.ac.in',
  year: '2017',
  type: 'midsem',
  semester: 'autumn',
  subjectName: 'Electric Machines',
  flags: '0',
  subjectCode: 'EE3L001',
  resourceId: 'EE3L001019109'
},
{
  emailId: 'abc999@iitbbs.ac.in',
  year: '2017',
  type: 'midsem',
  semester: 'autumn',
  subjectName: 'Electric Machines',
  flags: '1',
  subjectCode: 'EE3L001',
  resourceId: 'EE3L001018208'
},
{
  emailId: 'aaa999@iitbbs.ac.in',
  year: '2018',
  type: 'endsem',
  semester: 'autumn',
  subjectName: 'Electric Machines',
  flags: '2',
  subjectCode: 'EE3L001',
  resourceId: 'EE3L001027307'
},
{
  emailId: 'abc999@iitbbs.ac.in',
  year: '2018',
  type: 'endsem',
  semester: 'autumn',
  subjectName: 'Electric Machines',
  flags: '3',
  subjectCode: 'EE3L001',
  resourceId: 'EE3L001026406'
},
{
  emailId: 'ade999@iitbbs.ac.in',
  year: '2017',
  type: 'tutorial',
  semester: 'autumn',
  subjectName: 'Electric Machines',
  flags: '0',
  subjectCode: 'EE3L001',
  resourceId: 'EE3L001035505'
},
{
  emailId: 'aef999@iitbbs.ac.in',
  year: '2018',
  type: 'tutorial',
  semester: 'autumn',
  subjectName: 'Electric Machines',
  flags: '1',
  subjectCode: 'EE3L001',
  resourceId: 'EE3L001034604'
},
{
  emailId: 'agh999@iitbbs.ac.in',
  year: '2019',
  type: 'tutorial',
  semester: 'autumn',
  subjectName: 'Electric Machines',
  flags: '0',
  subjectCode: 'EE3L001',
  resourceId: 'EE3L001033703'
},
{
  emailId: 'aij999@iitbbs.ac.in',
  year: '2017',
  type: 'quiz',
  semester: 'autumn',
  subjectName: 'Electric Machines',
  flags: '3',
  subjectCode: 'EE3L001',
  resourceId: 'EE3L001042802'
},
{
  emailId: 'ajk999@iitbbs.ac.in',
  year: '2017',
  type: 'others',
  semester: 'autumn',
  subjectName: 'Electric Machines',
  flags: '2',
  subjectCode: 'EE3L001',
  resourceId: 'EE3L001051901'
}];
  }
  if(subjectCode==='EE3L003'){
    jsArray=[{
  emailId: 'aaa999@iitbbs.ac.in',
  year: '2017',
  type: 'midsem',
  semester: 'spring',
  subjectName: 'Control Systems',
  flags: '0',
  subjectCode: 'EE3L003',
  resourceId: 'EE3L003019119'
},
{
  emailId: 'abc999@iitbbs.ac.in',
  year: '2017',
  type: 'midsem',
  semester: 'spring',
  subjectName: 'Control Systems',
  flags: '1',
  subjectCode: 'EE3L003',
  resourceId: 'EE3L003018228'
},
{
  emailId: 'aaa999@iitbbs.ac.in',
  year: '2018',
  type: 'endsem',
  semester: 'spring',
  subjectName: 'Control Systems',
  flags: '2',
  subjectCode: 'EE3L003',
  resourceId: 'EE3L003027337'
},
{
  emailId: 'abc999@iitbbs.ac.in',
  year: '2018',
  type: 'endsem',
  semester: 'spring',
  subjectName: 'Control Systems',
  flags: '3',
  subjectCode: 'EE3L003',
  resourceId: 'EE3L003026446'
},
{
  emailId: 'ade999@iitbbs.ac.in',
  year: '2017',
  type: 'tutorial',
  semester: 'spring',
  subjectName: 'Control Systems',
  flags: '0',
  subjectCode: 'EE3L003',
  resourceId: 'EE3L003035555'
},
{
  emailId: 'aef999@iitbbs.ac.in',
  year: '2018',
  type: 'tutorial',
  semester: 'spring',
  subjectName: 'Control Systems',
  flags: '1',
  subjectCode: 'EE3L003',
  resourceId: 'EE3L003034664'
},
{
  emailId: 'agh999@iitbbs.ac.in',
  year: '2019',
  type: 'tutorial',
  semester: 'spring',
  subjectName: 'Control Systems',
  flags: '0',
  subjectCode: 'EE3L003',
  resourceId: 'EE3L003033773'
},
{
  emailId: 'aij999@iitbbs.ac.in',
  year: '2017',
  type: 'quiz',
  semester: 'spring',
  subjectName: 'Control Systems',
  flags: '3',
  subjectCode: 'EE3L003',
  resourceId: 'EE3L003042882'
},
{
  emailId: 'ajk999@iitbbs.ac.in',
  year: '2017',
  type: 'others',
  semester: 'spring',
  subjectName: 'Control Systems',
  flags: '2',
  subjectCode: 'EE3L003',
  resourceId: 'EE3L003051991'
}];
  }
}
  if(branch==='ME'){
    if(subjectCode==='ME2L001'){
      jsArray=[{
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subjectName: 'Theory of Machines - 1',
    flags: '0',
    subjectCode: 'ME2L001',
    resourceId: 'ME2L001010151'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subjectName: 'Theory of Machines - 1',
    flags: '1',
    subjectCode: 'ME2L001',
    resourceId: 'ME2L001010152'
  },
  {
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subjectName: 'Theory of Machines - 1',
    flags: '2',
    subjectCode: 'ME2L001',
    resourceId: 'ME2L001020153'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subjectName: 'Theory of Machines - 1',
    flags: '3',
    subjectCode: 'ME2L001',
    resourceId: 'ME2L001020154'
  },
  {
    emailId: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Theory of Machines - 1',
    flags: '0',
    subjectCode: 'ME2L001',
    resourceId: 'ME2L001030155'
  },
  {
    emailId: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Theory of Machines - 1',
    flags: '1',
    subjectCode: 'ME2L001',
    resourceId: 'ME2L001030156'
  },
  {
    emailId: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Theory of Machines - 1',
    flags: '0',
    subjectCode: 'ME2L001',
    resourceId: 'ME2L001030157'
  },
  {
    emailId: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'autumn',
    subjectName: 'Theory of Machines - 1',
    flags: '3',
    subjectCode: 'ME2L001',
    resourceId: 'ME2L001040158'
  },
  {
    emailId: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'others',
    semester: 'autumn',
    subjectName: 'Theory of Machines - 1',
    flags: '2',
    subjectCode: 'ME2L001',
    resourceId: 'ME2L001050159'
  }];
    }
    if(subjectCode==='ME3L001'){
      jsArray=[{
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subjectName: 'Heat Transfer',
    flags: '0',
    subjectCode: 'ME3L001',
    resourceId: 'ME3L001019109'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subjectName: 'Heat Transfer',
    flags: '1',
    subjectCode: 'ME3L001',
    resourceId: 'ME3L001018108'
  },
  {
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subjectName: 'Heat Transfer',
    flags: '2',
    subjectCode: 'ME3L001',
    resourceId: 'ME3L001027107'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subjectName: 'Heat Transfer',
    flags: '3',
    subjectCode: 'ME3L001',
    resourceId: 'ME3L001026106'
  },
  {
    emailId: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Heat Transfer',
    flags: '0',
    subjectCode: 'ME3L001',
    resourceId: 'ME3L001035105'
  },
  {
    emailId: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Heat Transfer',
    flags: '1',
    subjectCode: 'ME3L001',
    resourceId: 'ME3L001034104'
  },
  {
    emailId: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Heat Transfer',
    flags: '0',
    subjectCode: 'ME3L001',
    resourceId: 'ME3L001033103'
  },
  {
    emailId: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'autumn',
    subjectName: 'Heat Transfer',
    flags: '3',
    subjectCode: 'ME3L001',
    resourceId: 'ME3L001042102'
  },
  {
    emailId: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'others',
    semester: 'autumn',
    subjectName: 'Heat Transfer',
    flags: '2',
    subjectCode: 'ME3L001',
    resourceId: 'ME3L001051101'
  }];
    }
    if(subjectCode==='ME3L005'){
      jsArray=[{
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'spring',
    subjectName: 'IC Engines',
    flags: '0',
    subjectCode: 'ME3L005',
    resourceId: 'ME3L005019119'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'spring',
    subjectName: 'IC Engines',
    flags: '1',
    subjectCode: 'ME3L005',
    resourceId: 'ME3L005018218'
  },
  {
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'spring',
    subjectName: 'IC Engines',
    flags: '2',
    subjectCode: 'ME3L005',
    resourceId: 'ME3L005027317'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'spring',
    subjectName: 'IC Engines',
    flags: '3',
    subjectCode: 'ME3L005',
    resourceId: 'ME3L005026416'
  },
  {
    emailId: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'spring',
    subjectName: 'IC Engines',
    flags: '0',
    subjectCode: 'ME3L005',
    resourceId: 'ME3L005035515'
  },
  {
    emailId: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'spring',
    subjectName: 'IC Engines',
    flags: '1',
    subjectCode: 'ME3L005',
    resourceId: 'ME3L005034614'
  },
  {
    emailId: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'spring',
    subjectName: 'IC Engines',
    flags: '0',
    subjectCode: 'ME3L005',
    resourceId: 'ME3L005033713'
  },
  {
    emailId: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'spring',
    subjectName: 'IC Engines',
    flags: '3',
    subjectCode: 'ME3L005',
    resourceId: 'ME3L005042812'
  },
  {
    emailId: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'others',
    semester: 'spring',
    subjectName: 'IC Engines',
    flags: '2',
    subjectCode: 'ME3L005',
    resourceId: 'ME3L005051911'
  }];
    }
  }
  return jsArray;
};


// 2. jsSubjectsByBranch
// Function that would call the REST api and fetch the json object containing
// all the subjects of the specified branch

  var jsSubjectsByBranch = function(branch){         // branch = branch code eg. CS, EE, PH
  //let endpoint=`http://localhost:3000/studyResouces/branches/${branch}/subject;
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
     jsArray = [{    subjectName: 'Data Structure',  subjectCode: 'CS2L003'
   },{    subjectName: 'Programming and Data Structure',  subjectCode: 'CS1L001'},
   {    subjectName: 'Discrete Structure',  subjectCode: 'CS2L001'}];
      return jsArray;
  }
  if(branch === 'EE'){
     jsArray = [{    subjectName: 'Network Theory',  subjectCode: 'EE2L001'
   },{    subjectName: 'Electric Machines',  subjectCode: 'EE3L001'},
   {    subjectName: 'Control Systems',  subjectCode: 'EE3L003'}];
      return jsArray;
  }
  if(branch === 'ME'){
     jsArray = [{    subjectName: 'Theory of Machines - 1',  subjectCode: 'ME2L001'
   },{    subjectName: 'Heat Transfer',  subjectCode: 'ME3L001'},
   {    subjectName: 'IC Engines',  subjectCode: 'ME3L005'}];
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
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subjectName: 'Data Structure',
    flags: '0',
    subjectCode: 'CS2L003',
    resourceId: 'CS2L003010009'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subjectName: 'Data Structure',
    flags: '1',
    subjectCode: 'CS2L003',
    resourceId: 'CS2L003010008'
  },
  {
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subjectName: 'Data Structure',
    flags: '2',
    subjectCode: 'CS2L003',
    resourceId: 'CS2L003020007'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subjectName: 'Data Structure',
    flags: '3',
    subjectCode: 'CS2L003',
    resourceId: 'CS2L003020006'
  },
  {
    emailId: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Data Structure',
    flags: '0',
    subjectCode: 'CS2L003',
    resourceId: 'CS2L003030005'
  },
  {
    emailId: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Data Structure',
    flags: '0',
    subjectCode: 'CS2L003',
    resourceId: 'CS2L003030004'
  },
  {
    emailId: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Data Structure',
    flags: '0',
    subjectCode: 'CS2L003',
    resourceId: 'CS2L003030003'
  },
  {
    emailId: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'autumn',
    subjectName: 'Data Structure',
    flags: '0',
    subjectCode: 'CS2L003',
    resourceId: 'CS2L003040002'
  },
  {
    emailId: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'others',
    semester: 'autumn',
    subjectName: 'Data Structure',
    flags: '0',
    subjectCode: 'CS2L003',
    resourceId: 'CS2L003050001'
  },
  {
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subjectName: 'Programming and Data Structure',
    flags: '0',
    subjectCode: 'CS1L001',
    resourceId: 'CS1L001010901'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'spring',
    subjectName: 'Programming and Data Structure',
    flags: '1',
    subjectCode: 'CS1L001',
    resourceId: 'CS1L001010801'
  },
  {
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subjectName: 'Programming and Data Structure',
    flags: '2',
    subjectCode: 'CS1L001',
    resourceId: 'CS1L001020701'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'spring',
    subjectName: 'Programming and Data Structure',
    flags: '3',
    subjectCode: 'CS1L001',
    resourceId: 'CS1L001020601'
  },
  {
    emailId: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Programming and Data Structure',
    flags: '0',
    subjectCode: 'CS1L001',
    resourceId: 'CS1L001030501'
  },
  {
    emailId: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Programming and Data Structure',
    flags: '0',
    subjectCode: 'CS1L001',
    resourceId: 'CS1L001030401'
  },
  {
    emailId: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'spring',
    subjectName: 'Programming and Data Structure',
    flags: '0',
    subjectCode: 'CS1L001',
    resourceId: 'CS1L001030301'
  },
  {
    emailId: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'autumn',
    subjectName: 'Programming and Data Structure',
    flags: '0',
    subjectCode: 'CS1L001',
    resourceId: 'CS1L001040201'
  },
  {
    emailId: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'others',
    semester: 'spring',
    subjectName: 'Programming and Data Structure',
    flags: '0',
    subjectCode: 'CS1L001',
    resourceId: 'CS1L001050101'
  },
  {
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subjectName: 'Discrete Structures',
    flags: '0',
    subjectCode: 'CS2L001',
    resourceId: 'CS2L001010091'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subjectName: 'Discrete Structures',
    flags: '1',
    subjectCode: 'CS2L001',
    resourceId: 'CS2L001010081'
  },
  {
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subjectName: 'Discrete Structures',
    flags: '2',
    subjectCode: 'CS2L001',
    resourceId: 'CS2L001020071'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subjectName: 'Discrete Structure',
    flags: '3',
    subjectCode: 'CS2L001',
    resourceId: 'CS2L001020061'
  },
  {
    emailId: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Discrete Structure',
    flags: '0',
    subjectCode: 'CS2L001',
    resourceId: 'CS2L001030051'
  },
  {
    emailId: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Discrete Structure',
    flags: '0',
    subjectCode: 'CS2L001',
    resourceId: 'CS2L001030041'
  },
  {
    emailId: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Discrete Structure',
    flags: '0',
    subjectCode: 'CS2L001',
    resourceId: 'CS2L001030031'
  },
  {
    emailId: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'autumn',
    subjectName: 'Discrete Structure',
    flags: '0',
    subjectCode: 'CS2L001',
    resourceId: 'CS2L001040021'
  },
  {
    emailId: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'others',
    semester: 'autumn',
    subjectName: 'Discrete Structure',
    flags: '0',
    subjectCode: 'CS2L001',
    resourceId: 'CS2L001050011'
  },
  {
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'spring',
    subjectName: 'Network Theory',
    flags: '0',
    subjectCode: 'EE2L001',
    resourceId: 'EE2L001019009'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'spring',
    subjectName: 'Network Theory',
    flags: '1',
    subjectCode: 'EE2L001',
    resourceId: 'EE2L001018008'
  },
  {
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'spring',
    subjectName: 'Network Theory',
    flags: '2',
    subjectCode: 'EE2L001',
    resourceId: 'EE2L001027007'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'spring',
    subjectName: 'Network Theory',
    flags: '3',
    subjectCode: 'EE2L001',
    resourceId: 'EE2L001026006'
  },
  {
    emailId: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'spring',
    subjectName: 'Network Theory',
    flags: '0',
    subjectCode: 'EE2L001',
    resourceId: 'EE2L001035005'
  },
  {
    emailId: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'spring',
    subjectName: 'Network Theory',
    flags: '1',
    subjectCode: 'EE2L001',
    resourceId: 'EE2L001034004'
  },
  {
    emailId: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'spring',
    subjectName: 'Network Theory',
    flags: '0',
    subjectCode: 'EE2L001',
    resourceId: 'EE2L001033003'
  },
  {
    emailId: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'spring',
    subjectName: 'Network Theory',
    flags: '3',
    subjectCode: 'EE2L001',
    resourceId: 'EE2L001042002'
  },
  {
    emailId: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'others',
    semester: 'spring',
    subjectName: 'Network Theory',
    flags: '2',
    subjectCode: 'EE2L001',
    resourceId: 'EE2L001051001'
  },
  {
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subjectName: 'Electric Machines',
    flags: '0',
    subjectCode: 'EE3L001',
    resourceId: 'EE3L001019109'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subjectName: 'Electric Machines',
    flags: '1',
    subjectCode: 'EE3L001',
    resourceId: 'EE3L001018208'
  },
  {
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subjectName: 'Electric Machines',
    flags: '2',
    subjectCode: 'EE3L001',
    resourceId: 'EE3L001027307'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subjectName: 'Electric Machines',
    flags: '3',
    subjectCode: 'EE3L001',
    resourceId: 'EE3L001026406'
  },
  {
    emailId: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Electric Machines',
    flags: '0',
    subjectCode: 'EE3L001',
    resourceId: 'EE3L001035505'
  },
  {
    emailId: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Electric Machines',
    flags: '1',
    subjectCode: 'EE3L001',
    resourceId: 'EE3L001034604'
  },
  {
    emailId: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Electric Machines',
    flags: '0',
    subjectCode: 'EE3L001',
    resourceId: 'EE3L001033703'
  },
  {
    emailId: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'autumn',
    subjectName: 'Electric Machines',
    flags: '3',
    subjectCode: 'EE3L001',
    resourceId: 'EE3L001042802'
  },
  {
    emailId: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'others',
    semester: 'autumn',
    subjectName: 'Electric Machines',
    flags: '2',
    subjectCode: 'EE3L001',
    resourceId: 'EE3L001051901'
  },
  {
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'spring',
    subjectName: 'Control Systems',
    flags: '0',
    subjectCode: 'EE3L003',
    resourceId: 'EE3L003019119'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'spring',
    subjectName: 'Control Systems',
    flags: '1',
    subjectCode: 'EE3L003',
    resourceId: 'EE3L003018228'
  },
  {
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'spring',
    subjectName: 'Control Systems',
    flags: '2',
    subjectCode: 'EE3L003',
    resourceId: 'EE3L003027337'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'spring',
    subjectName: 'Control Systems',
    flags: '3',
    subjectCode: 'EE3L003',
    resourceId: 'EE3L003026446'
  },
  {
    emailId: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'spring',
    subjectName: 'Control Systems',
    flags: '0',
    subjectCode: 'EE3L003',
    resourceId: 'EE3L003035555'
  },
  {
    emailId: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'spring',
    subjectName: 'Control Systems',
    flags: '1',
    subjectCode: 'EE3L003',
    resourceId: 'EE3L003034664'
  },
  {
    emailId: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'spring',
    subjectName: 'Control Systems',
    flags: '0',
    subjectCode: 'EE3L003',
    resourceId: 'EE3L003033773'
  },
  {
    emailId: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'spring',
    subjectName: 'Control Systems',
    flags: '3',
    subjectCode: 'EE3L003',
    resourceId: 'EE3L003042882'
  },
  {
    emailId: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'others',
    semester: 'spring',
    subjectName: 'Control Systems',
    flags: '2',
    subjectCode: 'EE3L003',
    resourceId: 'EE3L003051991'
  },
  {
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subjectName: 'Theory of Machines - 1',
    flags: '0',
    subjectCode: 'ME2L001',
    resourceId: 'ME2L001010151'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subjectName: 'Theory of Machines - 1',
    flags: '1',
    subjectCode: 'ME2L001',
    resourceId: 'ME2L001010152'
  },
  {
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subjectName: 'Theory of Machines - 1',
    flags: '2',
    subjectCode: 'ME2L001',
    resourceId: 'ME2L001020153'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subjectName: 'Theory of Machines - 1',
    flags: '3',
    subjectCode: 'ME2L001',
    resourceId: 'ME2L001020154'
  },
  {
    emailId: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Theory of Machines - 1',
    flags: '0',
    subjectCode: 'ME2L001',
    resourceId: 'ME2L001030155'
  },
  {
    emailId: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Theory of Machines - 1',
    flags: '1',
    subjectCode: 'ME2L001',
    resourceId: 'ME2L001030156'
  },
  {
    emailId: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Theory of Machines - 1',
    flags: '0',
    subjectCode: 'ME2L001',
    resourceId: 'ME2L001030157'
  },
  {
    emailId: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'autumn',
    subjectName: 'Theory of Machines - 1',
    flags: '3',
    subjectCode: 'ME2L001',
    resourceId: 'ME2L001040158'
  },
  {
    emailId: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'others',
    semester: 'autumn',
    subjectName: 'Theory of Machines - 1',
    flags: '2',
    subjectCode: 'ME2L001',
    resourceId: 'ME2L001050159'
  },
  {
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subjectName: 'Heat Transfer',
    flags: '0',
    subjectCode: 'ME3L001',
    resourceId: 'ME3L001019109'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'autumn',
    subjectName: 'Heat Transfer',
    flags: '1',
    subjectCode: 'ME3L001',
    resourceId: 'ME3L001018108'
  },
  {
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subjectName: 'Heat Transfer',
    flags: '2',
    subjectCode: 'ME3L001',
    resourceId: 'ME3L001027107'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'autumn',
    subjectName: 'Heat Transfer',
    flags: '3',
    subjectCode: 'ME3L001',
    resourceId: 'ME3L001026106'
  },
  {
    emailId: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Heat Transfer',
    flags: '0',
    subjectCode: 'ME3L001',
    resourceId: 'ME3L001035105'
  },
  {
    emailId: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Heat Transfer',
    flags: '1',
    subjectCode: 'ME3L001',
    resourceId: 'ME3L001034104'
  },
  {
    emailId: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'autumn',
    subjectName: 'Heat Transfer',
    flags: '0',
    subjectCode: 'ME3L001',
    resourceId: 'ME3L001033103'
  },
  {
    emailId: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'autumn',
    subjectName: 'Heat Transfer',
    flags: '3',
    subjectCode: 'ME3L001',
    resourceId: 'ME3L001042102'
  },
  {
    emailId: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'others',
    semester: 'autumn',
    subjectName: 'Heat Transfer',
    flags: '2',
    subjectCode: 'ME3L001',
    resourceId: 'ME3L001051101'
  },
  {
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'spring',
    subjectName: 'IC Engines',
    flags: '0',
    subjectCode: 'ME3L005',
    resourceId: 'ME3L005019119'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2017',
    type: 'midsem',
    semester: 'spring',
    subjectName: 'IC Engines',
    flags: '1',
    subjectCode: 'ME3L005',
    resourceId: 'ME3L005018218'
  },
  {
    emailId: 'aaa999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'spring',
    subjectName: 'IC Engines',
    flags: '2',
    subjectCode: 'ME3L005',
    resourceId: 'ME3L005027317'
  },
  {
    emailId: 'abc999@iitbbs.ac.in',
    year: '2018',
    type: 'endsem',
    semester: 'spring',
    subjectName: 'IC Engines',
    flags: '3',
    subjectCode: 'ME3L005',
    resourceId: 'ME3L005026416'
  },
  {
    emailId: 'ade999@iitbbs.ac.in',
    year: '2017',
    type: 'tutorial',
    semester: 'spring',
    subjectName: 'IC Engines',
    flags: '0',
    subjectCode: 'ME3L005',
    resourceId: 'ME3L005035515'
  },
  {
    emailId: 'aef999@iitbbs.ac.in',
    year: '2018',
    type: 'tutorial',
    semester: 'spring',
    subjectName: 'IC Engines',
    flags: '1',
    subjectCode: 'ME3L005',
    resourceId: 'ME3L005034614'
  },
  {
    emailId: 'agh999@iitbbs.ac.in',
    year: '2019',
    type: 'tutorial',
    semester: 'spring',
    subjectName: 'IC Engines',
    flags: '0',
    subjectCode: 'ME3L005',
    resourceId: 'ME3L005033713'
  },
  {
    emailId: 'aij999@iitbbs.ac.in',
    year: '2017',
    type: 'quiz',
    semester: 'spring',
    subjectName: 'IC Engines',
    flags: '3',
    subjectCode: 'ME3L005',
    resourceId: 'ME3L005042812'
  },
  {
    emailId: 'ajk999@iitbbs.ac.in',
    year: '2017',
    type: 'others',
    semester: 'spring',
    subjectName: 'IC Engines',
    flags: '2',
    subjectCode: 'ME3L005',
    resourceId: 'ME3L005051911'
  }
];
return jsArray;
};
