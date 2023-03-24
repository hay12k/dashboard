const body = document.querySelector("body")
      // sidebar = body.querySelector(".sidebar"),
      // toggle = body.querySelector(".toggle"),
      // searchBtn = body.querySelector(".search-box"),
      // modeSwitch = body.querySelector(".toggle-switch"),
      // modeText = body.querySelector(".mode-text");
      
      // modeSwitch.addEventListener("click", () =>{
      //   body.classList.toggle("dark");
      //   if(body.classList.contains("dark")){
      //     modeText.innerText = "Light Mode"
      //   }else{
      //     modeText.innerText = "Dark Mode"
      //   }
      // });
      const themeToggler = document.querySelector(".theme-Toggler");
      themeToggler.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
        themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
      })

      function toggleMenu(){
        let toggle = body.querySelector(".toggle");
        sidebar = body.querySelector(".sidebar");
        main = body.querySelector(".main"),
        toggle.classList.toggle("active");
        sidebar.classList.toggle("active");
        main.classList.toggle("active");
      }