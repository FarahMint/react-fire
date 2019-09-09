import React from 'react';
import { withRouter } from "react-router";
 /**ICON */
 import { FaPlus} from "react-icons/fa";
 

const FilterProject=( {value, handleChange, history})=>  (
    <div className="filter-projects">
        <form >
            <label>
                <select
                className="select-project"
                value={value}
                onChange={handleChange}>
                    <option value="all projects">all projects</option>
                    <option value="your projects">your personal projects</option>
                </select>
            </label>  
        </form>

        <span className="cta-btn">
            <FaPlus 
            onClick={()=>history.push("/create")}
            aria-label="create project"/>
        </span>

    </div>    
    );

export default withRouter(FilterProject);