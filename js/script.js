document.getElementById("msg").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the input values
    var nama = document.getElementById("input-nama").value;
    var tanggalLahir = document.getElementById("input-ttl").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var message = document.getElementById("input-msg").value;
    
    // Perform validation
    var isValid = true;
    var validationMessage = "";

    if (nama.trim() === "") {
        isValid = false;
        validationMessage += "Nama : Nama harus diisi.<br>";
    }

    if (tanggalLahir.trim() === "") {
        isValid = false;
        validationMessage += "TTL : Tanggal lahir harus diisi.<br>";
    }

    if (!gender) {
        isValid = false;
        validationMessage += "Jenis Kelamin : Jenis kelamin harus dipilih.<br>";
    }

    if (message.trim() === "") {
        isValid = false;
        validationMessage += "Pesan : Pesan harus diisi.<br>";
    }

    var result = document.getElementById("result");
    if (isValid) {
        result.innerHTML = `
            <p align="left">Nama: ${nama}<br>
            TTL: ${tanggalLahir}<br>
            Jenis Kelamin: ${gender}<br>
            Pesan: ${message}</p>
        `;
    } else {
        result.innerHTML = `<p align="left" style="color: red;">${validationMessage}</p>`;
    }
});

var slideDuration = 5000; 
var slideInterval;

function startSlideAnimation() {
    var slides = document.getElementsByClassName("hero-slide");
    var totalSlides = slides.length;
    var currentSlideIndex = 0;

    function showNextSlide() {
        slides[currentSlideIndex].classList.remove("active");

        currentSlideIndex = (currentSlideIndex + 1) % totalSlides;

        slides[currentSlideIndex].classList.add("active");
    }

    slides[currentSlideIndex].classList.add("active");

    slideInterval = setInterval(showNextSlide, slideDuration);
}

// Call the function to start the slide animation
startSlideAnimation();
