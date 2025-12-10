document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const carInput = document.getElementById('car-input');
    const carDetailsDiv = document.getElementById('car-details');

    searchButton.addEventListener('click', () => {
        const carName = carInput.value.trim().toLowerCase();
        if (carName) {
            fetchCarDetails(carName);
        } else {
            alert('Please enter a car name.');
        }
    });

    /**
     * Placeholder function to simulate fetching data from an external API.
     * In a real application, this would be an AJAX call (e.g., using fetch()).
     * @param {string} name - The car name to search for.
     */
    function fetchCarDetails(name) {
        // SIMULATED DATA - Replace this with an actual API call in production
        const carData = {
            "toyota supra": {
                name: "Toyota GR Supra",
                price_lkr: "Rs. 25,000,000",
                price_usd: "$75,000",
                attractive_info: "A legend reborn! The GR Supra is a perfect blend of BMW engineering and Toyota's racing heritage, designed for pure driving pleasure.",
                history: "The Supra lineage began in 1978, but the iconic A80 generation of the 90s made it a global tuner superstar. After a 17-year hiatus, the fifth-generation (A90) was launched in 2019, co-developed with BMW, bringing back the celebrated nameplate with modern power and precision. It remains a symbol of Japanese sports car excellence.",
                photos: [
                    'https://via.placeholder.com/280x200?text=Supra+Front+View',
                    'https://via.placeholder.com/280x200?text=Supra+Side+Profile',
                    'https://via.placeholder.com/280x200?text=Supra+Interior',
                    'https://via.placeholder.com/280x200?text=Supra+Driving+Shot',
                ],
                structure_photos: [
                    'https://via.placeholder.com/350x250?text=Supra+B58+Engine',
                    'https://via.placeholder.com/350x250?text=Supra+Chassis+Diagram',
                ],
                video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0' // Placeholder video - Replace with a real car video
            },
            "bmw m3": {
                name: "BMW M3 Competition",
                price_lkr: "Rs. 40,000,000",
                price_usd: "$120,000",
                attractive_info: "The ultimate sports sedan. Combining track-ready performance with daily usability, the M3 sets the benchmark for its class.",
                history: "The M3 was born in 1986 as a homologation special for touring car racing. The E30 M3 is a motoring icon. Each generation (E36, E46, E92, F80, G80) has consistently raised the bar, maintaining its reputation as a high-performance legend. The G80 model introduced the iconic large kidney grille and optional xDrive.",
                photos: [
                    'https://via.placeholder.com/280x200?text=M3+Front+View',
                    'https://via.placeholder.com/280x200?text=M3+Rear+View',
                    'https://via.placeholder.com/280x200?text=M3+Badge',
                    'https://via.placeholder.com/280x200?text=M3+Wheel',
                ],
                structure_photos: [
                    'https://via.placeholder.com/350x250?text=M3+S58+Engine',
                    'https://via.placeholder.com/350x250?text=M3+Carbon+Fiber+Roof',
                ],
                video_url: 'https://www.youtube.com/embed/Y0r1G4bWv4E?controls=0'
            },
        };
        // END OF SIMULATED DATA

        const details = carData[name];

        if (details) {
            displayCarDetails(details);
        } else {
            carDetailsDiv.style.display = 'block';
            carDetailsDiv.innerHTML = `
                <div class="details-header">
                    <h2>Sorry! Car Not Found</h2>
                    <p>We couldn't find details for "${carInput.value}". Please try another popular model (e.g., Toyota Supra or BMW M3).</p>
                </div>
            `;
        }
    }

    /**
     * Renders the dynamic content into the HTML structure.
     * @param {Object} details - The car data object.
     */
    function displayCarDetails(details) {
        const photosHTML = details.photos.map(url => `
            <div class="gallery-item"><img src="${url}" alt="${details.name} photo"></div>
        `).join('');

        const structureHTML = details.structure_photos.map(url => `
            <div class="gallery-item"><img src="${url}" alt="${details.name} structure photo"></div>
        `).join('');

        const detailsHTML = `
            <div class="details-header">
                <h2>${details.name}</h2>
            </div>

            <div class="attractive-info">
                <h3>The DriveHub Attraction</h3>
                <p>"${details.attractive_info}"</p>
            </div>

            <div class="key-info">
                <div class="price-box">
                    <p>Price in Sri Lankan Rupees (Est.)</p>
                    <div class="amount">${details.price_lkr}</div>
                </div>
                <div class="price-box">
                    <p>Price in US Dollars (Est.)</p>
                    <div class="amount">${details.price_usd}</div>
                </div>
            </div>

            <div class="content-section">
                <h3>Visual Gallery & Videos</h3>
                <div class="gallery">
                    ${photosHTML}
                    <div class="gallery-item">
                        <iframe width="100%" height="200" src="${details.video_url}" frameborder="0" allowfullscreen style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);"></iframe>
                    </div>
                </div>
            </div>

            <div class="content-section">
                <h3>Car Structure Details (Engine/Chassis)</h3>
                <div class="structure-gallery gallery">
                    ${structureHTML}
                </div>
            </div>

            <div class="content-section">
                <h3>Full History of the ${details.name}</h3>
                <div class="history-text">
                    <p>${details.history}</p>
                </div>
            </div>

        `;

        carDetailsDiv.innerHTML = detailsHTML;
        carDetailsDiv.style.display = 'block';
    }
});