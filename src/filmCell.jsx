import './filmCell.css';

function FilmCell(props){
    return(
        <div className='filmCell'>
            <div className='filmCellImg'>
                <img src={props.filmInfo.img} />
            </div>
            <div className='filmCellInfo'>
                <h2>{props.filmInfo.title}</h2>
                <p>{props.filmInfo.genre} | {props.filmInfo.length}</p>
                <h3>{props.filmInfo.d}</h3>
                <div className='filmCellTimes'>
                    {props.filmInfo.times.map((t) => {
                        return(
                            <div className='filmCTimeCell'>
                                {t}
                            </div>
                        );
                    })}
                </div>
                <p className='pLang'>{props.filmInfo.lang}</p>
            </div>
        </div>
    );
}

export default FilmCell;