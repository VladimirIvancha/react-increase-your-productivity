import HpTextArea from "../../TextAreas/H-p/HpTextArea";

function MenuFeatureItem({
    item,
})
{  
    return (
        <li className={item.mainClassName} id={item.id}>
            <div className={item.figureClassName}></div>
            <HpTextArea
                data={item}
            />
        </li>
    );
}
  
export default MenuFeatureItem;