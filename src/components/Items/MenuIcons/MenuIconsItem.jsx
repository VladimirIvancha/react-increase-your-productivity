function MenuIconsItem({
  item,
})
{  
    return (
        <a href={item.ref} target="_blank" rel="noreferrer" id={item.id}>
            <div className={`menuIconsItem ${item.className}`}></div>
        </a>
    );
}

export default MenuIconsItem;