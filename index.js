const container=document.querySelector('.container');
const seats=document.querySelectorAll('.row .seat:not(.occupied)');
const total=document.getElementById('total');
const count=document.getElementById('count');
const movieSelect=document.getElementById('movie');
let ticketPrice=+movieSelect.value;

function populateUI(){
    const selectedSeats=JSON.parse(localStorage.getItem('selectedSeats'));
    console.log(selectedSeats);
}
function setmovie(movieIndex,price)
{
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice',price);
}

function updateSelectedCount(){
    const selectedSeats=document.querySelectorAll('.row .seat.selected');
    
    const seatsIndex=[...selectedSeats].map(function(seat){
        return[...seats].indexOf(seat);
    });

    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));

    const selectedSeatsCount=selectedSeats.length;
    count.innerText=selectedSeatsCount;
    total.innerText=selectedSeatsCount * ticketPrice;
}

movieSelect.addEventListener('change',e=>{
    ticketPrice= +e.target.value;
    setmovie(e.target.selectedIndex,e.target.value);
    updateSelectedCount();
})


container.addEventListener('click',e=>{
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) 
    {
        e.target.classList.toggle("selected")
    }
    updateSelectedCount();
})

