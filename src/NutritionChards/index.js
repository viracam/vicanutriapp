import React from "react";
// import { FactContext } from "../FactContext";
import './css/nutrientBarComponentStyles.css';




function NutritionChards({
  itemnutrientname,
          grams,
          totalcarbs,
          fiber,
          starch, 
          totalsugar,
            fructose,
            galactose,
            glucose,
            lactose,
            sucrose,
            addedSugar,
}) {
  // const {totalCarbs } = React.useContext(FactContext);
  // console.log(defaultListNutrient)
 
  return (
    <div className="macroFactContainer">

            <h2> Total de hidratos de carbono</h2>
            <p>{itemnutrientname}</p>
            <p>{grams} <b>gramos</b></p>
            {/*-------- fact divider----- */}
            <div className="singleFactContainer">
                <h3>Carbohidratos</h3>
                <div className="conteinerNutrientBarP">
                  <span
                    className="nutrientBarP"
                    style={{
                      width: totalcarbs +"%"
                    }}
                  ></span>
                </div>
                <span>{totalcarbs}%</span>
            </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                <h3>Fibra</h3>
                <div className="conteinerNutrientBarP">
                  <span
                    className="nutrientBarP"
                    style={{
                      width: fiber +"%"
                    }}
                  ></span>
                </div>
                <span>{fiber}%</span>
            </div>
            {/*-------- fact divider----- */}
            <div className="singleFactContainer">
                <h3>Almidon</h3>
                <div className="conteinerNutrientBarP">
                  <span
                    className="nutrientBarP"
                    style={{
                      width: starch +"%"
                    }}
                  ></span>
                </div>
                <span>{starch}%</span>
            </div>
            {/*-------- fact divider----- */}
            <div className="singleFactContainer">
                <h3>Azúcares</h3>
                <div className="conteinerNutrientBarP">
                  <span
                    className="nutrientBarP"
                    style={{
                      width: totalsugar +"%"
                    }}
                  ></span>
                </div>
                <span>{totalsugar}%</span>
             </div>
            {/*-------- fact divider----- */}
            <div className="singleFactContainer">
                <h3>Fructosa</h3>
                <div className="conteinerNutrientBarP">
                  <span
                    className="nutrientBarP"
                    style={{
                      width: fructose +"%"
                    }}
                  ></span>
                </div>
                <span>{fructose}%</span>
            </div>
            {/*-------- fact divider----- */}
            <div className="singleFactContainer">
                <h3>Galactosa</h3>
                <div className="conteinerNutrientBarP">
                  <span
                    className="nutrientBarP"
                    style={{
                      width: galactose +"%"
                    }}
                  ></span>
                </div>
                <span>{galactose}%</span>
            </div>
            {/*-------- fact divider----- */}
            <div className="singleFactContainer">
                <h3>Glucosa</h3>
                <div className="conteinerNutrientBarP">
                  <span
                    className="nutrientBarP"
                    style={{
                      width: glucose +"%"
                    }}
                  ></span>
                </div>
                <span>{glucose}%</span>
            </div>
            {/*-------- fact divider----- */}
            <div className="singleFactContainer">
                <h3>Lactose</h3>
                <div className="conteinerNutrientBarP">
                  <span
                    className="nutrientBarP"
                    style={{
                      width: lactose +"%"
                    }}
                  ></span>
                </div>
                <span>{lactose}%</span>
            </div>
            {/*-------- fact divider----- */}
            <div className="singleFactContainer">
                <h3>Sacarosa</h3>
                <div className="conteinerNutrientBarP">
                  <span
                    className="nutrientBarP"
                    style={{
                      width: sucrose +"%"
                    }}
                  ></span>
                </div>
                <span>{sucrose}%</span>
            </div>
            {/*-------- fact divider----- */}
            <div className="singleFactContainer">
                <h3>Azúcares Añadidos</h3>
                <div className="conteinerNutrientBarP">
                  <span
                    className="nutrientBarP"
                    style={{
                      width: addedSugar +"%"
                    }}
                  ></span>
                </div>
                <span>{addedSugar}%</span>
            </div>
            
    </div>
  )
    
}

export {NutritionChards};