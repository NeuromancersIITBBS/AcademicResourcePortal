window.onload = function() {
  //dataArr = getAllResources();  call controller to get all resources
  //dummy data for testing
  dataArr = [
   {
     email_id: "random1@gmail.com",
     type: "midsem",
     semester: "autumn",
     subject_name: "Data Structures",
     flags: 3,
     subject_code: "CS2L002",
     resource_id: "CS2L002145"
   },
   {
     email_id: "random2@gmail.com",
     type: "endsem",
     semester: "autumn",
     subject_name: "Data Structures",
     flags: 2,
     subject_code: "CS2L002",
     resource_id: "CS2L002105"
   },
   {
     email_id: "random3@gmail.com",
     type: "midsem",
     semester: "autumn",
     subject_name: "Data Structures",
     flags: 0,
     subject_code: "CS2L002",
     resource_id: "CS2L002115"
   },
   {
     email_id: "random4@gmail.com",
     type: "midsem",
     semester: "autumn",
     subject_name: "Data Structures",
     flags: 5,
     subject_code: "CS2L002",
     resource_id: "CS2L002123"
  }
  ];
var flagArr=[],unflagArr=[];
function countFlag(count) {
  if(count == 0) {
    return `<img src="./views/images/flag.png" style='width:20px'>`;
  }else {
    return `<img src="./views/images/unflag.png" style='width:20px'>`;
  }
}
function flagTemplate(dataArr) {
  return `
    <div class="all-files">
      <h4 class="file-name">
        <strong>Email Id</strong>: ${dataArr.email_id} <br>
        <strong>Resource Id</strong>: ${dataArr.resource_id} <br>
        <strong>Flag Count</strong>: ${dataArr.flags}
      </h4>
      <button type="button" class="btn btn-primary" onclick=submit()><img src="views/images/view.png" style='width:20px'></button>
      <button type="button" class="btn btn-primary" onclick=flagToggle("${dataArr.resource_id}")>
      ${countFlag(dataArr.flags)}
      </button>
      <button type="button" class="btn btn-primary" onclick=deleteFile("${dataArr.resource_id}")><img src="views/images/delete.png" style='width:20px'></button>
    </div>
  `;
}
for(i=0;i<dataArr.length;i++) {
  if(dataArr[i].flags!=0) {
   flagArr.push(dataArr[i]);
}else {
   unflagArr.push(dataArr[i]);
}
}
document.getElementById("flag").innerHTML = `
  ${flagArr.map(flagTemplate).join("")}
`;
document.getElementById("unflag").innerHTML = `
  ${unflagArr.map(flagTemplate).join("")}
`;

}
