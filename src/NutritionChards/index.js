import React from "react";
// import { FactContext } from "../FactContext";
import '../App/Appvariables.css';
import './css/nutrientBarComponentStyles.css';



function NutritionChards({
  itemnutrientname,
          grams,
          //---carbs
          totalcarbs,
          fiber,
          starch, 
          totalsugar,
            fructose,
            galactose,
            glucose,
            lactose,
            sucrose,
          addedsugar,
          netcarbs,
          //---lipids
          fat,
            monounsaturated,
            polyunsaturated,
              omega3,
              omega6,
            saturated,
          //---proteins
          protein,
            cystine,
            histidine,
            isoleucine,
            leucine,
            lysine,
            methionine,
            phenylalanine,
            threonine,
            tryptophan,
            tyrosine,
            valine,
          //---vitamins
          b1thiamine,
          b2riboflavin,
          b3niacin,
          b5pantothenicacid,
          b6pyridoxine,
          b12cobalamin,
          folate,
          vitamina,
          vitaminc,
          vitamine,
          vitamink,
          //------minerals
          calcium,
          copper,
          iron,
          magnesium,
          manganese,
          phosphorus,
          potassium,
          selenium,
          sodium,
          zinc

}) {
  // const {totalCarbs } = React.useContext(FactContext);
  // console.log(defaultListNutrient)
 
  return (
    <div className="macroFactContainer">
            <div
              className="Fact-Item-identifier-container Sub-container-Macro"
            >
              
              
              <p>{itemnutrientname}</p>
              <p>{grams} <b>gramos</b></p>
              <div
                className="Item-Graph-Nutrition-kilo-Calories"
              >
                <p>aqui van los porcentjas
                </p>
                <svg
                  className="Graph-Circle"
                  
                >
                  <circle
                    r= "60"
                    cx= "50%"
                    cy= "50%"
                    pathLength={377}

                  ></circle>
                  <circle
                    style={{
                      strokeDasharray: 50 + " 377"
                    }}
                    r= "60"
                    cx= "50%"
                    cy= "50%"
                    pathLength={377}

                  ></circle>
                  <circle 
                    style={{
                      strokeDasharray: 30 + " 377"
                    }}
                    r= "60"
                    cx= "50%"
                    cy= "50%"
                    pathLength={377}

                  ></circle>
                  <circle
                    style={{
                      strokeDasharray: 70 + " 377"
                    }}
                    r= "60"
                    cx= "50%"
                    cy= "50%"
                    pathLength={377}

                  ></circle>
                  
                  
                </svg>
              </div>
              <h2> Total de Kilo Calorias</h2>
            </div>
            {/*-------- fact carbs chard----- */}
            <div
             className="Carb-Fact-Container-Viewer Sub-container-Macro"
            >

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
                  <span>{totalcarbs}gm</span>
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
                  <span>{fiber}gm</span>
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
                  <span>{starch}gm</span>
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
                        width: addedsugar +"%"
                      }}
                    ></span>
                  </div>
                  <span>{addedsugar}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Carbohidratos Netos</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: netcarbs +"%"
                      }}
                    ></span>
                  </div>
                  <span>{netcarbs}gm</span>
              </div>
            </div>
            {/*-------- fact Fact chard----- */}
            <div
             className="Fat-Fact-Container-Viewer Sub-container-Macro"
            >

              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Grasas</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: fat +"%"
                      }}
                    ></span>
                  </div>
                  <span>{fat}%</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                <h3>Monosaturada</h3>
                <div className="conteinerNutrientBarP">
                  <span
                    className="nutrientBarP"
                    style={{
                      width: monounsaturated +"%"
                    }}
                  ></span>
                </div>
                <span>{monounsaturated}%</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Polinsaturada</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: polyunsaturated +"%"
                      }}
                    ></span>
                  </div>
                  <span>{polyunsaturated}%</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Omega 3</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: omega3 +"%"
                      }}
                    ></span>
                  </div>
                  <span>{omega3}%</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Omega 6</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: omega6 +"%"
                      }}
                    ></span>
                  </div>
                  <span>{omega6}%</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Saturada</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: saturated +"%"
                      }}
                    ></span>
                  </div>
                  <span>{saturated}gm</span>
              </div>
            </div>
            {/*-------- protein Fact chard----- */}
            <div
             className="Protein-Fact-Container-Viewer Sub-container-Macro"
            >

              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Proteinas</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: protein +"%"
                      }}
                    ></span>
                  </div>
                  <span>{protein}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                <h3>Cistina</h3>
                <div className="conteinerNutrientBarP">
                  <span
                    className="nutrientBarP"
                    style={{
                      width: cystine +"%"
                    }}
                  ></span>
                </div>
                <span>{cystine}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Histidina</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: histidine +"%"
                      }}
                    ></span>
                  </div>
                  <span>{histidine}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Isoleucina</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: isoleucine +"%"
                      }}
                    ></span>
                  </div>
                  <span>{isoleucine}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Leucina</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: leucine +"%"
                      }}
                    ></span>
                  </div>
                  <span>{leucine}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Lisina</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: lysine +"%"
                      }}
                    ></span>
                  </div>
                  <span>{lysine}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Metionina</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: methionine +"%"
                      }}
                    ></span>
                  </div>
                  <span>{methionine}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Fenilalanina</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: phenylalanine +"%"
                      }}
                    ></span>
                  </div>
                  <span>{phenylalanine}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Treonina</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: threonine +"%"
                      }}
                    ></span>
                  </div>
                  <span>{threonine}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Triptófano</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: tryptophan +"%"
                      }}
                    ></span>
                  </div>
                  <span>{tryptophan}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Tirosina</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: tyrosine +"%"
                      }}
                    ></span>
                  </div>
                  <span>{tyrosine}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Valine</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: valine +"%"
                      }}
                    ></span>
                  </div>
                  <span>{valine}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Valine</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: valine +"%"
                      }}
                    ></span>
                  </div>
                  <span>{valine}gm</span>
              </div>
            </div>
            {/*-------- Vitamins Fact chard----- */}
            <div
             className="Vitamins-Fact-Container-Viewer Sub-container-Macro"
            >

              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>B1 Tiamina</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: b1thiamine +"%"
                      }}
                    ></span>
                  </div>
                  <span>{b1thiamine}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                <h3>B2 Riboflavina</h3>
                <div className="conteinerNutrientBarP">
                  <span
                    className="nutrientBarP"
                    style={{
                      width: b2riboflavin +"%"
                    }}
                  ></span>
                </div>
                <span>{b2riboflavin}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>B3 Niacina</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: b3niacin +"%"
                      }}
                    ></span>
                  </div>
                  <span>{b3niacin}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>B5 Ácido Pantoténico</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: b5pantothenicacid +"%"
                      }}
                    ></span>
                  </div>
                  <span>{b5pantothenicacid}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>B6 Piridoxina</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: b6pyridoxine +"%"
                      }}
                    ></span>
                  </div>
                  <span>{b6pyridoxine}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>B12 Cobalamina</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: b12cobalamin +"%"
                      }}
                    ></span>
                  </div>
                  <span>{b12cobalamin}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Folate</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: folate +"%"
                      }}
                    ></span>
                  </div>
                  <span>{folate}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Vitamina A</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: vitamina +"%"
                      }}
                    ></span>
                  </div>
                  <span>{vitamina}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Vitamin C</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: vitaminc +"%"
                      }}
                    ></span>
                  </div>
                  <span>{vitaminc}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Vitamin E</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: vitamine +"%"
                      }}
                    ></span>
                  </div>
                  <span>{vitamine}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Vitamin K</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: vitamink +"%"
                      }}
                    ></span>
                  </div>
                  <span>{vitamink}gm</span>
              </div>
            </div>
            {/*-------- Minerales Fact chard----- */}
            <div
             className="Minerales-Fact-Container-Viewer Sub-container-Macro"
            >

              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Calcio</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: calcium +"%"
                      }}
                    ></span>
                  </div>
                  <span>{b1thiamine}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                <h3>Cobre</h3>
                <div className="conteinerNutrientBarP">
                  <span
                    className="nutrientBarP"
                    style={{
                      width: copper +"%"
                    }}
                  ></span>
                </div>
                <span>{copper}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Hierro</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: iron +"%"
                      }}
                    ></span>
                  </div>
                  <span>{iron}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Magnecio</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: magnesium +"%"
                      }}
                    ></span>
                  </div>
                  <span>{magnesium}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Manganeso</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: manganese +"%"
                      }}
                    ></span>
                  </div>
                  <span>{manganese}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Fósforo</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: phosphorus +"%"
                      }}
                    ></span>
                  </div>
                  <span>{phosphorus}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Potacio</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: potassium +"%"
                      }}
                    ></span>
                  </div>
                  <span>{potassium}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Selenio</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: selenium +"%"
                      }}
                    ></span>
                  </div>
                  <span>{vitamina}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Sodio</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: sodium +"%"
                      }}
                    ></span>
                  </div>
                  <span>{sodium}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Zinc</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: zinc +"%"
                      }}
                    ></span>
                  </div>
                  <span>{zinc}gm</span>
              </div>
              {/*-------- fact divider----- */}
              <div className="singleFactContainer">
                  <h3>Vitamin K</h3>
                  <div className="conteinerNutrientBarP">
                    <span
                      className="nutrientBarP"
                      style={{
                        width: vitamink +"%"
                      }}
                    ></span>
                  </div>
                  <span>{vitamink}gm</span>
              </div>
            </div>

            
    </div>
  )
    
}

export {NutritionChards};