// BANNER
 const slider = document.querySelector('.banner-slider');
        const track = document.querySelector('.banner-track');
        const slides = document.querySelectorAll('.banner-track img');
        const prev = document.querySelector('.banner-btn.prev');
        const next = document.querySelector('.banner-btn.next');

        let index = 0;
        let slideWidth = slider.clientWidth;

        function updateSlide() {
            track.style.transform = `translateX(-${index * slideWidth}px)`;
        }

        next.addEventListener('click', () => {
            index++;
            if (index >= slides.length) index = 0;
            updateSlide();
        });

        prev.addEventListener('click', () => {
            index--;
            if (index < 0) index = slides.length - 1;
            updateSlide();
        });

        window.addEventListener('resize', () => {
            slideWidth = slider.clientWidth;
            updateSlide();
        });

// SEARCH 

// form input 

    const swapBtn = document.getElementById('swapBtn');
    const fromInput = document.getElementById('from');
    const toInput = document.getElementById('to');

    swapBtn.addEventListener('click', () => {
        const temp = fromInput.value;
        fromInput.value = toInput.value;
        toInput.value = temp;
    });

// đổi sang tab
const tabs = document.querySelectorAll('.search-tabs .tab');

const flightForm = document.querySelector('.flight-form');
const hotelForm  = document.querySelector('.hotel-form');
const golfForm   = document.querySelector('.golf-form');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
    
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        flightForm.style.display = 'none';
        hotelForm.style.display  = 'none';
        golfForm.style.display   = 'none';
        // tab tương ứng
        if (tab.classList.contains('flight')) {
            flightForm.style.display = 'block';
        }
        if (tab.classList.contains('hotel')) {
            hotelForm.style.display = 'block';
        }
        if (tab.classList.contains('golf')) {
            golfForm.style.display = 'block';
        }
    });
});

// chọn sao 

document.querySelectorAll('.star-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active');
        } else {
            document.querySelectorAll('.star-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }
    });
});

// khứ hồi bật tắt ngày về
const roundTrip = document.getElementById("roundTrip");
const returnDate = document.querySelector(".return-date");

roundTrip.addEventListener("change", () => {
    if (roundTrip.checked) {
        returnDate.classList.remove("hidden");
    } else {
        returnDate.classList.add("hidden");
    }
});

//xem đã tích chưa
if (!roundTripCheckbox.checked) {
    returnDate.style.display = 'none';
}

roundTripCheckbox.addEventListener('change', () => {
    if (roundTripCheckbox.checked) {
        returnDate.style.display = 'flex';
    } else {
        returnDate.style.display = 'none';
    }
});
