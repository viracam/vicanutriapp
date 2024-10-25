import{ReactComponent as DeleteItemSvg} from './svg/DeleteItemSvg.svg';
import{ReactComponent as AddItemSvg} from './svg/AddItemSvg.svg';
import{ReactComponent as DeductItemSvg} from './svg/DeductItemSvg.svg';
import{ReactComponent as NutritionIconSvg} from './svg/NutritionSvg.svg';
import{ReactComponent as ProteinChardSVG} from './svg/ProteinChardSvg.svg';
import{ReactComponent as CarbChardSVG} from './svg/CarbChardSvg.svg';
import{ReactComponent as FatChardSVG} from './svg/FatChardSvg.svg';
const iconTypes ={
    "Delete": <DeleteItemSvg className='Icon-Svg'/>,
    "Add" : <AddItemSvg className='Icon-Svg'/>,
    "Deduct" : <DeductItemSvg className='Icon-Svg'/>,
    "Nutrition" : <NutritionIconSvg className='Icon-Svg'/>,
    "Protein" : <ProteinChardSVG className='Icon-Svg'/>,
    "Carb" : <CarbChardSVG className='Icon-Svg'/>,
    "Fat" : <FatChardSVG className='Icon-Svg'/>,

}
function ListIcon({type}){
    return(
        <span
         className={`Icon-${type}`}
        >
            {iconTypes[type]}
        </span>
        
    );
}
 export {ListIcon};