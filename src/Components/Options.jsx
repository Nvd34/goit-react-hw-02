export const Options = ({handlerBtn, totalFeedback}) => {
    return(
        <div onClick={handlerBtn}>
            <button name="good" type="button">Good</button>
            <button name="neutral" type="button">Neutral</button>
            <button name="bad" type="button">Bad</button>
            { totalFeedback>0 && <button name="reset" type="button">Reset</button>}
        </div>
    );
}