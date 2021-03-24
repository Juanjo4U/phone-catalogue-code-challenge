import DefaultItem from '../items/defaultItem';

export const ListGenerator = ({ elements = [], component: Item = DefaultItem, style = {} }) => {
    const length = elements.length;
    if (!length) return null;
    return (
        <div className='listContainer' style={style} >
            {elements.map((element, index) => <Item key={index} isLast={index === (length - 1)} {...element} />)}
        </div>
    )
}