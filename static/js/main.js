
    function loader(){
      document.querySelector('.loader-container').classList.add('fade-out');
    }
    function fadeOut(){
        setInterval(loader,3000);
    }
   window.onload = fadeOut;

    function clearField(fieldId) {
        document.getElementById(fieldId).value = '';
        if (fieldId==="secretKey"){
          var customAlert = document.getElementById('clearAlert1');
        }
        else if (fieldId==="promptTextArea" || fieldId==="inputcode"){
          var customAlert = document.getElementById('clearAlert2');
        }
        else{
          var customAlert = document.getElementById('clearAlert3');
        }
        var animatedGif = document.querySelector('.animated-gif');
  
        animatedGif.src = "/images/clear.gif"; 

        customAlert.style.display = 'block';
        setTimeout(function() {
          customAlert.style.display = 'none';
        }, 2000); 
        if(fieldId==="CodeArea")
        {
          document.getElementById("OutputArea").value = '';
        }
        document.getElementById(fieldId).value = '';// 3000 milliseconds = 3 seconds
      }
   
    function copyText(fieldId) {
      var copyText = document.getElementById(fieldId);
      copyText.select();
      copyText.setSelectionRange(0, 99999); 
      navigator.clipboard.writeText(copyText.value);
      if(fieldId==="promptTextArea" || fieldId=="inputcode"){
        var customAlert = document.getElementById('copyAlert1');
      }
      else{
        var customAlert = document.getElementById('copyAlert2');
      }
      var animatedGif = document.querySelector('.animated-gif');
    
      animatedGif.src = "../images/success.gif"; // Replace with your GIF URL
    
      customAlert.style.display = 'block';
      setTimeout(function() {
        customAlert.style.display = 'none';
      }, 2000); // 3000 milliseconds = 3 seconds
    }
    
  
        const body = document.querySelector('body');
        const btn = document.querySelector('.btn');
        const icon = document.querySelectorAll('.btn__icon');
      
        function store(value) {
          localStorage.setItem('dark-mode', value);
        }
      
        function load() {
          const darkmode = localStorage.getItem('dark-mode');
      
          if (!darkmode) {
            store(false);
            icon[0].classList.add('fa-sun'); // Default icon for light mode
          } else if (darkmode === 'true') {
            body.classList.add('dark-mode');
            icon.forEach(item => item.classList.add('fa-sun')); // Dark mode icon
          } else if (darkmode === 'false') {
            body.classList.remove('dark-mode');
            icon.forEach(item => item.classList.add('fa-moon')); // Light mode icon
          }
        }
      
        load();
      
        btn.addEventListener('click', () => {
          body.classList.toggle('dark-mode');
          icon.forEach(item => item.classList.add('animated'));
      
          store(body.classList.contains('dark-mode'));
      
          if (body.classList.contains('dark-mode')) {
            icon.forEach(item => {
              item.classList.remove('fa-moon'); // Remove light mode icon
              item.classList.add('fa-sun'); // Add dark mode icon
            });
          } else {
            icon.forEach(item => {
              item.classList.remove('fa-sun'); // Remove dark mode icon
              item.classList.add('fa-moon'); // Add light mode icon
            });
          }
          
          // Remove animation after a delay
          setTimeout(() => {
            icon.forEach(item => item.classList.remove('animated'));
          }, 500);
        });
      
    