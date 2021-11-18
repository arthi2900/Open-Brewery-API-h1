
async function getAllData(){
    try{
        var data=await fetch('https://api.openbrewerydb.org/breweries')
        var obj=await data.json()
        console.log(obj)
        obj.forEach(element =>{
         
            var nameb=document.createElement("div");
                        var type=document.createElement("div");
            var add1=document.createElement("div");
            var add2=document.createElement("div");
            var add3=document.createElement("div");
            var add4=document.createElement("div");
            var add5=document.createElement("div");
            var add6=document.createElement("div");
            var add7=document.createElement("div");
            var web=document.createElement("div");
            var no=document.createElement("div");
            //breweries name,type,brewery’s address,website url,phone no
            nameb.innerText ="Name : " + element.name
                    document.body.appendChild(nameb)
                    type.innerText ="Type : " + element.brewery_type
                    document.body.appendChild(type)
                    add1.innerText ="Street : " + element.street
                    document.body.appendChild(add1)
                    add2.innerText ="Address line1 : " + element.address_2
                    document.body.appendChild(add2)       
                    add3.innerText ="Address line2 : " + element.address_3
                    document.body.appendChild(add3)
                    add4.innerText ="City : " + element.city
                    document.body.appendChild(add4)
                    add5.innerText ="State : " + element.state
                    document.body.appendChild(add5)
                    add6.innerText ="Country  : " + element.country
                    document.body.appendChild(add6)
                    add7.innerText ="Postal Code  : " + element.postal_code
                    document.body.appendChild(add7)
                    web.innerText ="Website url  : " + element.website_url
                    document.body.appendChild(web)
                    no.innerText ="Phone No  : " +element.phone
                    document.body.appendChild(no)
        });
    }
    catch (error){
        console.log(error)
    }
}

getAllData()
