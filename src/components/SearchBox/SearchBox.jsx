import { useId } from "react"
import css from "../SearchBox/SearchBox.module.css"
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";

export default function SearchBox() {

const filterValue = useSelector(selectFilters)
const dispatch = useDispatch()
const filterId = useId();

    return(
        <div className={css.inputDiv}>
            <label htmlFor={filterId}>Find contacts by name</label>
            <input
             type="text"
             onChange={(e) => {dispatch(changeFilter(e.target.value))}}
             value={filterValue}
             id={filterId}>
              </input>
        </div>
    )
}