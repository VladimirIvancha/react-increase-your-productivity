import HpTextArea from "../../TextAreas/H-p/HpTextArea";

function MenuStatsItem({ 
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

export default MenuStatsItem;
