$(afterLoading);
function afterLoading() {
  // call controller to get all resources
   dataArr = getAllResources();
  // dummy data for testing
  // dataArr = [
  //  {
  //    emailId: "random1@gmail.com",
  //    type: "midsem",
  //    semester: "autumn",
  //    subjectName: "Data Structures",
  //    flags: 3,
  //    subjectCode: "CS2L002",
  //    resourceId: "CS2L002145"
  //  },
  //  {
  //    emailId: "random2@gmail.com",
  //    type: "endsem",
  //    semester: "autumn",
  //    subjectName: "Data Structures",
  //    flags: 2,
  //    subjectCode: "CS2L002",
  //    resourceId: "CS2L002105"
  //  },
  //  {
  //    emailId: "random3@gmail.com",
  //    type: "midsem",
  //    semester: "autumn",
  //    subjectName: "Data Structures",
  //    flags: 0,
  //    subjectCode: "CS2L002",
  //    resourceId: "CS2L002115"
  //  },
  //  {
  //    emailId: "random4@gmail.com",
  //    type: "midsem",
  //    semester: "autumn",
  //    subjectName: "Data Structures",
  //    flags: 5,
  //    subjectCode: "CS2L002",
  //    resourceId: "CS2L002123"
  // }
  // ];
var flagArr=[],unflagArr=[];
// loads different image acc to flag value
function countFlag(count) {
  if(count == 0) {
    return `<img src="./views/Images/flag.png" style='width:20px'>`;
  }else {
    return `<img src="./views/Images/unflag.png" style='width:20px'>`;
  }
}
// returns html string
// div contains emailId, resourceId and flags
// added buttons to view, delete and toggle flag value
function flagTemplate(dataArr) {
  return `
    <div class="all-files">
      <h4 class="file-name">
        <strong>Email Id</strong>: ${dataArr.emailId} <br>
        <strong>Resource Id</strong>: ${dataArr.resourceId} <br>
        <strong>Flag Count</strong>: ${dataArr.flags}
      </h4>
      <button type="button" class="btn btn-light" onclick=submit()><img src="./views/Images/view.png" style='width:20px'></button>
      <button type="button" class="btn btn-light" onclick=flagToggle("${dataArr.resourceId}")>
      ${countFlag(dataArr.flags)}
      </button>
      <button type="button" class="btn btn-light" onclick=deleteFile("${dataArr.resourceId}")><img src="./views/Images/delete.png" style='width:20px'></button>
    </div>
  `;
}
// takes data from json array and separates flagged and unflagged files
for(i=0;i<dataArr.length;i++) {
  if(dataArr[i].flags!=0) {
   flagArr.push(dataArr[i]);
}else {
   unflagArr.push(dataArr[i]);
}
}
// append return template string to html page
$("#flag").html( `
  ${flagArr.map(flagTemplate).join("")}
`)
$("#unflag").html( `
  ${unflagArr.map(flagTemplate).join("")}
`)

}
