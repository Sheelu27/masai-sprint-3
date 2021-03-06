window.addEventListener("load", function(){

    var check = document.getElementById("check")

    check.addEventListener("click", function(){

        var language = document.getElementById("language").value
        var location = document.getElementById("location").value

        var xhr = new XMLHttpRequest()
        var url = "https://jobs.github.com/positions.json?description="
        xhr.open("GET", "https://jobs.github.com/positions.json?description="+language+"&location="+ location)
        xhr.send()
        xhr.onload = function(){
            var data = JSON.parse(this.response)
            display_result(data)
        } 
    })
    function display_result(data){
        var result = document.getElementById('res')
        
        
            for (var i = 0;i<data.length;i++){
                
                
                var div = document.createElement('div')
                var div1 = document.createElement('div')
                var div2 = document.createElement('div')
                var img = document.createElement('img')
                img.setAttribute("src",data[i].company_logo) 
                
                var name = document.createElement('p')
                name.innerHTML = "Company :"+" "+  data[i].company+"<hr>"

                var title = document.createElement('p')
                title.innerHTML= "Title :"+" "+data[i].title+"<hr>"
                title.style.color ="Green"
                title.style.fontSize ="27px"


                var type = document.createElement('p')
                type.innerHTML= "Type :"+" "+data[i].type+"<hr>"

                var description =document.createElement('div')
                description.style.fontFamily ="Times New Roman"
                description.innerHTML = "<p>Description:</p>"+"\n"+data[i].description+"<hr>"

                var Location = document.createElement('p')
                
                Location.innerHTML= "Location :"+" "+data[i].location+"<hr>"
                var how_to_apply = document.createElement('p')
                how_to_apply.style.color = "green"
                how_to_apply.innerHTML= "Wondering, How to Apply?? <u>Click the link below </u>"+"<hr>"+data[i].how_to_apply+"<hr>"

                
                div1.append(img)
                div2.append(title,name,type,description,Location,how_to_apply)
                div.append(div1,div2)
                result.append(div)
            }
                
        
    }
               
        
})


//company: "Kasisto"
//company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBblNFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8401c5084da6bb1a0cacdd3ef319e6f919fcc738/Kasisto_Logo_c90x90.png"
//company_url: "http://www.kasisto.coom"
//created_at: "Wed Jun 03 19:36:58 UTC 2020"
//description: "<p>Humanizing Digital Experiences®</p>↵<p>Kasisto’s Digital Experience Platform, KAI, is designed for financial institutions to deliver the industry’s most amazing Conversational AI powered intelligent virtual assistants to their customers. KAI is open and extensible, and also fluent in the language of banking and finance. From simple retail transactions to the complex demands of corporate banks and wealth management, financial institutions can deliver meaningful digital interactions with KAI that help build their digital brand.</p>↵<p>Financial institutions around the world use KAI, including DBS Bank, J.P. Morgan, Mastercard, Standard Chartered, TD Bank, and Manulife Bank among others. They chose KAI for its proven track record to drive business results while improving customer experiences. The platform is used by millions of consumers around the world, all the time, across multiple channels, in different languages, and is optimized for performance, scalability, security, and compliance.</p>↵<p>This position</p>↵<p>We are looking for a Full-Stack, client side software engineer to help build and integrate responsive chat interfaces, analytics dashboards and reporting tools.</p>↵<p>What you’ll be doing</p>↵<p>Working closely with clients and internal engineering, product and design teams to gather requirements↵Building and integrating front-end applications with CSS, HTML, Javascript, jQuery, Vue.js, Webpack, Handlebars.js, LESS, Backbone, Python, Django and Java↵Working to improve user experience and functionality for tools↵Writing testable code utilizing common front-end unit and BDD testing frameworks↵What you need for this position</p>↵<p>3+ years in client-side web development with CSS, HTML, Javascript and jQuery↵Proven, full-stack front-end experience using Python and Django↵Other Modern Web Framework(s) experience is a plus (React, Vue, Angular, Ember)↵Experience working collaboratively to build scalable, modular, production software in an Agile environment↵Experience using RESTful json services↵Node.js and API development familiarity is plus↵D3.js is a plus</p>↵<p>What we offer:</p>↵<p>Competitive compensation package↵Ground floor opportunity within rapidly growing tech startup↵Great collaborative team environment↵Full Benefits↵Fun perks</p>↵<p>Location - NYC, Flatiron District</p>↵<p>We welcome your cover letter with a description of your previous complete experience and your resume.  Applicants must be authorized to work in the US as we are unable to sponsor.  Kasisto is an equal opportunity employer.</p>↵"

//how_to_apply: "<p>Please email a copy of your resume and online portfolio to <a href="mailto:wes@kasisto.com">wes@kasisto.com</a> &amp; CC <a href="mailto:eric@kasisto.com">eric@kasisto.com</a></p>↵"
//id: "90b7a228-a21f-44a1-9c44-d113e06cef9d"
//location: "New York"
//title: "Front-End Software Engineer"
//type: "Full Time"
//url: "https://jobs.github.com/positions/90b7a228-a21f-44a1-9c44-d113e06cef9d"
//