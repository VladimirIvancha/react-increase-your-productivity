function MenuLogoItem({
    item,
})
{  
    return (
        <a href={item.ref} target="_blank" rel="noreferrer" id={item.id}>
          <div className={`menuLogoItem ${item.className}`}></div>
        </a>
    );
}
  
export default MenuLogoItem;