import React from "react";
import { FactContext } from "../FactContext";
import './css/nutrientBarComponentStyles.css';




function NutritionChards(props) {
  const {totalCarbs } = React.useContext(FactContext);
  // console.log(defaultListNutrient)
 
  return (
    <div>

            <h2> Total de hidratos de carbono</h2>
            <div>
                <h3>Carbohidratos</h3>
                <div className="conteinerNutrientBarP">
                  <span
                    className="nutrientBarP"
                    style={{
                      width: totalCarbs +"%"
                    }}
                  ></span>
                </div>
                <span>{props.totalCarbs}%</span>
            </div>
    </div>
  )
    
}

export {NutritionChards};