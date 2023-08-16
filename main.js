var tablink = document.getElementsByClassName("tab-link");
        var tabcontent = document.getElementsByClassName("tab-content");
        function opentab(tabname) {
            for (i of tablink) {
                i.classList.remove("active-link");
            }
            for (j of tabcontent) {
                j.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

        const scriptURL = 'https://script.google.com/macros/s/AKfycbz81aK0k8L0GfZ-VyKS1A53LKx4gzGxd0jOoWAqW3EG1R1ZsVoXLg9fyzphPE5VduWclA/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg=document.getElementById("msg")
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML="Message has been send succesfully"
                    setTimeout(function(){
                        msg.innerHTML=""
                    },1000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
        })