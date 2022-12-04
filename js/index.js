const carObject = {
      vechile: 'car',
      imageUrl: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      farePerKilo: 3,
      capacity: 4,
      discription: 'This is a wider card with supporting card with supporting tex'

};

const BikeObject = {
      vechile: 'Bike',
      imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
      farePerKilo: 2,
      capacity: 14,
      discription: 'This is a wider card with supporting card with supporting tex'

};
const BusObject = {
      vechile: 'Bus',
      imageUrl: "https://plus.unsplash.com/premium_photo-1661916408325-5280388bf1e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      farePerKilo: 4,
      capacity: 2,
      discription: 'This is a wider card with supporting card with supporting tex'

};
const serviceArray = [BikeObject, BusObject, carObject];
function displayService(service) {
      const stringified = JSON.stringify(service)
      const mainSection = document.getElementById('main-section');
      const div = document.createElement('div');
      div.innerHTML = `
         <div class="card mb-3 mx-auto" style="max-width: 900px;">
                        <div class="row g-0">
                              <div class="col-md-4">
                                    <img src="${service.imageUrl}"
                                          class="img-fluid rounded-start" alt="...">
                              </div>
                              <div class="col-md-8">
                                    <div class="card-body">
                                          <h5 class="card-title">Transport Mood : ${service.vechile}</h5>
                                          <p class="card-text">${service.discription}</p>
                                          <p class="card-text"><small class="text-muted">Fare per kilo : ${service.farePerKilo}</small> <small>capacity : ${service.capacity}</small>
                                         </p>
                                    <button onclick='handelBooking(${stringified})' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
                                    </div>
                              </div>
                        </div>
                  </div>
      `;
      mainSection.appendChild(div)
}

function displayAllArticle(arry) {
      for (let i = 0; i < arry.length; i++) {
            const element = arry[i];
            displayService(element)
      }
}
document.getElementById("search-btn").addEventListener("click", function () {
      const inputValue = document.getElementById('search-value').value;
      for (let i = 0; i < serviceArray; i++) {
            const element = serviceArray[i];
            if (inputValue == element.vechile) {
                  console.log(element)
            }
      }
})
displayAllArticle(serviceArray);
function handelBooking(service) {
      const stringified = JSON.stringify(service)
      const modalBody = document.getElementById('modal-body');
      modalBody.innerHTML = `
         <div class="card mx-auto" style="width: 400px;">
  <img src="${service.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">vechile mood : ${service.vechile}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> <p class="card-text"><small class="text-muted">Fare per kilo : ${service.farePerKilo}</small> <small>capacity : ${service.capacity}</small> </p>

     <p >Fare : <small id="fare">0</small> </p>
     <p >Tax : <small id="tax">0</small> </p>
     <p >Total Cost : <small id="total-cost">0</small> </p>
  </div>
  <div class="d-flex flex-column">
      <input class="form-control mt-2 me-2" id="distance-input" type="number" placeholder="how many    kilometer?" aria-label="Search">
      <input class="form-control mt-2 me-2" id="quntity-input" type="number" placeholder="how many people" aria-label="Search">
      <button onclick='calculateCost(${stringified})' class="btn btn-outline-success mt-2" type="submit">Submit</button>
</div>
</div>
      `;
}

function calculateCost(service) {
      const quntityInput = document.getElementById('quntity-input').value;
      const distanceInput = document.getElementById('distance-input').value;

      const fareDiv = document.getElementById('fare');
      const totalFareCost = quntityInput * distanceInput * service.farePerKilo;


      fareDiv.innerHTML = totalFareCost;
      console.log(fareDiv)

}




