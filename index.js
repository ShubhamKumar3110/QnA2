// load list of questionSets
fetch("Set_Questions.json").then((data)=>{
    return data.json();
}).then((completedata)=>{
    let data1="";
    //running all elements through below code using map
    completedata.map((values)=>{
        //showing details of each question set
        data1+=`
        <article class="set">
            <a href=Questions.html?p=${values.title}></a>
            <button></button>
            <h3>${values.title}</h3>
            <p>${values.desc}</p>
            <h2>${values.questions}</h2>
            <h4>questions</h4>
        </article>`
    })
    //running the above lines as html in sets section
    document.getElementById("sets").innerHTML=data1;


}).catch((err)=>{
    console.log(err);
})

current = 0;
function changeTheme()
{
    current = (current + 1) % 10;
    let url = "";
    if(window.innerWidth <= 800)
    {
        url = "url(Background" + current + ".jpg)";
    } else
    {
        url = "url(Background_Landslide" + current + ".jpg)";
    }
    let currentt = current + 1;
    document.getElementById("theme").innerText = "Change ◈ Theme " + currentt;
    document.body.style.backgroundImage = url;
}
