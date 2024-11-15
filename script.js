<script>
document.getElementById('helpDeskForm').addEventListener('submit', function(e)) 
    e.preventDefault();
    
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    

     if ((name && email && phone && message): 
        
        alert('Thank you for contacting us. We will get back to you soon.');
         this.reset();
     else :
     alert('Please fill in all fields.');
    
 );
 </script>