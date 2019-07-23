import React, {   useState } from 'react';
import PropTypes from 'prop-types';


const Tabs =(props) =>{
  
 const labelTab =  props.children.map(child => {
     const  {label } = child.props;
     return label;
    });

 
  const [activeTab , setActiveTab]= useState(labelTab[0]);
  let className;

 

    return (
      <>
      <section className="tabs">
        <div className="container">
          
            {props.children.map((child) => {
              const { label } = child.props;
             (activeTab === label)?
              (className = 'tab-item-active') 
              :
              (className = 'tab-item') 

              return (
                  <div
                  className={className}
                  key={label}
                  label={label}
                  onClick={()=> setActiveTab(label)}
                >
                  {label}
                </div>

              );
            })}
        
        </div>
        </section>

        <main className="featured__projects-center">
          {props.children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </main>
        </>
    );
  }
 
  Tabs.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

export default Tabs;