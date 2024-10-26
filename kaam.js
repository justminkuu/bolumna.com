// Preview Profile Picture
function previewProfilePic(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const preview = document.getElementById('profilePicPreview');
        preview.src = reader.result; 
        localStorage.setItem('profilePic', reader.result); 
    };
    reader.readAsDataURL(event.target.files[0]);
}


function saveProfile() {
    const name = document.getElementById("name").value;
    const bio = document.getElementById("bio").value;
    const terms = document.getElementById("terms").checked;
    
    if (!terms) {
        alert("Please agree to the terms and conditions.");
        return;
    }
    
    
    localStorage.setItem("username", name);
    localStorage.setItem("bio", bio);
    
    
    const profilePic = document.getElementById("profilePicPreview").src;
    localStorage.setItem("profilePic", profilePic);
    

    window.location.href = "feed.html"; 
}


