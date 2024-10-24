import "./filmHeader.css";
import calIcon from "./img/calender.png";


function FilmListHeader(){
    function onDayClicked(d){
        /*document.getElementById(d).className = "selected";*/
    }
    var today = new Date();
    var dayOfWeek;
    var daysOfTheWeek = ["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"];
    for(var i = 0; i < today.getDay()-1;i++){
        daysOfTheWeek.push(daysOfTheWeek.shift());
    }

    switch(today.getDay()){
        case 1:
            dayOfWeek = "PONIEDZIAŁEK";
            break;
        case 2:
            dayOfWeek = "WTOREK";
            break;
        case 3:
            dayOfWeek = "ŚRODA";
            break;
        case 4:
            dayOfWeek = "CZWARTEK";
            break;
        case 5:
            dayOfWeek = "PIĄTEK";
            break;
        case 6:
            dayOfWeek = "SOBOTA";
            break;
        case 7:
            dayOfWeek = "NIEDZIELA";
            break;
        default:
            dayOfWeek = "Undefined";
            
    }
    return(
        <div className="filmHeader">
            <div id="filmHeaderInside">
                <h1>REPERTUAR CINEMA CITY LUBLIN - PLAZA</h1>
                <div className="filmHeaderMenu">
                    {daysOfTheWeek.map((d) => {return(
                        <button className={d===daysOfTheWeek[0]?"dayButton selected firstInLine":"dayButton"} onClick={onDayClicked(d)} id={d}>{ d===daysOfTheWeek[0] ? "Dziś" : d }</button>
                    );})}
                    <button className="calenderBtn"><img src={calIcon} alt="Calender Icon"/></button>
                    <select>
                        <option>Wszystkie Kina</option>
                        <hr />
                        <option>Horror</option>
                        <option>Dramat</option>
                    </select>
                    <select>
                        <option>Wszystkie Filmy</option>
                        <hr />
                        <option>Uśmiechnij Się 2</option>
                        <option>Wybraniec</option>
                        <option>Kulej. Dwie Strony Metalu</option>
                        <option>Wrooklyn ZOO</option>
                    </select>
                </div>
                <p>{dayOfWeek} {today.getDate()}/{today.getMonth()+1}/{today.getFullYear()}</p>
            </div>
            <hr />
        </div>
    );
}

export default FilmListHeader;