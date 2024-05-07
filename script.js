// grid size text input
const grid_size_input = document.getElementById("grid-size-input");

const container = document.getElementById("container");

const color_picker = document.getElementById("color-picker");

// party mode toggle
const party_mode = document.getElementById("toggle-party-mode");

// button to set grid
const btn_set_grid = document.getElementById("btn-set-grid");

// button to clear grid
const btn_clear_grid = document.getElementById("btn-clear-grid");

// function sketch_button()
isMouseDown = false;
document.addEventListener("mousedown", () => {
    isMouseDown = true;
});
document.addEventListener("mouseup", () => {
    isMouseDown = false;
});

function color_decider(){
    console.log(party_mode.checked === true)
    if (party_mode.checked == true){
        // return random color
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
    return color_picker.value
}

function create_row(grid_size,row_num){
    let new_row = document.createElement("div");
    new_row.className = "grid-row";
    for (let i=0; i<grid_size; i++){
        // create new button with style
        let new_button = document.createElement("button");
        new_button.className = "cell"
        new_button.id = `${row_num}-${i}`; // row-col id
        new_button.style.height = Math.floor(window.innerHeight/grid_size*1.5);
        new_button.style.width = Math.floor(window.innerHeight/grid_size/2);
        new_button.addEventListener("mouseover", function(e){
            if (isMouseDown)
                e.target.style.background = color_decider();
        })
        new_row.appendChild(new_button)
    }
    return new_row;
}

// function , takes number input, creates grid
function create_grid(grid_size){
    // clear the grid
    container.innerHTML = "";
    for (let i=0; i<grid_size; i++){
        let new_row = create_row(grid_size,i);
        container.appendChild(new_row)
    }
    return;   
}

btn_set_grid.addEventListener("click",()=>{
    let size_input = grid_size_input.value;
    let result = parseInt(size_input);
    console.log(result);
    if (!isNaN(result)){
        // set the grid
        if (result < 10 || result > 70){
            alert("Please enter a value between 10 and 70");
            return;
        }
        // alert(result + " has been set");
        create_grid(result);
        return;
    } 
    alert("Invalid input");
    return;
})

btn_clear_grid.addEventListener("click", ()=>{
    const cells = document.querySelectorAll(".cell",);
    // console.log(cells)
    // console.log(cells.length)
    cells.forEach(cell => {
        cell.style.background = '';
    });
})



create_grid(30);

// console.log(color_picker.value);